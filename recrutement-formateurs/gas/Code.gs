/**
 * Réception des candidatures — Formateurs vacataires en développement.
 *
 * Pour chaque candidature reçue depuis index.html :
 *  1. le CV est enregistré dans un dossier Google Drive ;
 *  2. une ligne est ajoutée dans une Google Sheet ;
 *  3. un email de notification est envoyé à NOTIFY_EMAIL.
 *
 * Voir README.md pour la procédure de déploiement.
 */

const NOTIFY_EMAIL = 'aelbiad@gmail.com';
const SHEET_NAME = 'Candidatures';
const DRIVE_FOLDER_NAME = 'CV - Formateurs vacataires';
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 Mo

const HEADERS = [
  'Date', 'Nom', 'Prénom', 'Téléphone', 'Email', 'Modules',
  'Expérience formation', 'Statut', 'Expérience technique',
  'Expérience pédagogique', 'Disponibilités', 'Lieu', 'Message', 'CV'
];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const required = ['nom', 'prenom', 'telephone', 'email', 'modules',
      'experienceFormation', 'statut', 'experienceTechnique',
      'experiencePedagogique', 'disponibilites', 'cvBase64', 'cvFileName'];
    for (const key of required) {
      if (!data[key]) return json_({ ok: false, error: 'Champ manquant : ' + key });
    }

    const bytes = Utilities.base64Decode(data.cvBase64);
    if (bytes.length > MAX_FILE_SIZE) {
      return json_({ ok: false, error: 'CV trop volumineux' });
    }

    const safeName = (data.nom + '_' + data.prenom + '_' + data.cvFileName)
      .replace(/[^\w.\- ]+/g, '_');
    const blob = Utilities.newBlob(bytes, data.cvMimeType || 'application/octet-stream', safeName);
    const file = getFolder_().createFile(blob);

    getSheet_().appendRow([
      new Date(), data.nom, data.prenom, data.telephone, data.email, data.modules,
      data.experienceFormation, data.statut, data.experienceTechnique,
      data.experiencePedagogique, data.disponibilites, data.lieu || '',
      data.message || '', file.getUrl()
    ]);

    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      replyTo: data.email,
      subject: 'Candidature formateur vacataire — ' + data.prenom + ' ' + data.nom,
      body: [
        'Nouvelle candidature formateur vacataire',
        '',
        'Nom : ' + data.prenom + ' ' + data.nom,
        'Téléphone : ' + data.telephone,
        'Email : ' + data.email,
        'Modules : ' + data.modules,
        'Expérience formation : ' + data.experienceFormation,
        'Statut : ' + data.statut,
        'Disponibilités : ' + data.disponibilites,
        'Lieu : ' + (data.lieu || '-'),
        '',
        'Expérience technique :',
        data.experienceTechnique,
        '',
        'Expérience pédagogique :',
        data.experiencePedagogique,
        '',
        'Message :',
        data.message || '-',
        '',
        'CV : ' + file.getUrl()
      ].join('\n'),
      attachments: [blob]
    });

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json_({ ok: true, service: 'candidatures-formateurs' });
}

function getSheet_() {
  const props = PropertiesService.getScriptProperties();
  let id = props.getProperty('SHEET_ID');
  let ss;
  if (id) {
    ss = SpreadsheetApp.openById(id);
  } else {
    ss = SpreadsheetApp.create('Candidatures - Formateurs vacataires');
    props.setProperty('SHEET_ID', ss.getId());
  }
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.getSheets()[0];
    sheet.setName(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function getFolder_() {
  const props = PropertiesService.getScriptProperties();
  const id = props.getProperty('FOLDER_ID');
  if (id) return DriveApp.getFolderById(id);
  const folder = DriveApp.createFolder(DRIVE_FOLDER_NAME);
  props.setProperty('FOLDER_ID', folder.getId());
  return folder;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/** À lancer une fois depuis l'éditeur pour autoriser Drive, Sheets et Gmail. */
function setup() {
  getSheet_();
  getFolder_();
  Logger.log('Sheet : ' + SpreadsheetApp.openById(
    PropertiesService.getScriptProperties().getProperty('SHEET_ID')).getUrl());
}
