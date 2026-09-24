# Déploiement — Recrutement formateurs vacataires

Même montage que l'annonce « Administrateur Réseaux Systèmes » :
GitHub Pages (pages) + Google Apps Script (réception) + tinyurl (liens courts).

## 1. Google Apps Script (réception des candidatures)

1. Aller sur https://script.google.com → **Nouveau projet**, le nommer
   « Candidatures formateurs ».
2. Coller le contenu de `Code.gs` à la place du code par défaut, enregistrer.
3. Choisir la fonction `setup` → **Exécuter** → accepter les autorisations
   (Drive, Sheets, Gmail). Cela crée la Google Sheet « Candidatures -
   Formateurs vacataires » et le dossier Drive « CV - Formateurs vacataires ».
4. **Déployer → Nouveau déploiement** → type **Application Web** :
   - Exécuter en tant que : **Moi**
   - Qui a accès : **Tout le monde**
5. Copier l'URL qui se termine par `/exec`.
6. Dans `index.html`, remplacer `REMPLACER_PAR_URL_EXEC` par cette URL.

> Si tu modifies `Code.gs` plus tard : **Déployer → Gérer les déploiements →
> Modifier → Nouvelle version**, pour garder la même URL `/exec`.

## 2. GitHub Pages (hébergement)

1. Créer un dépôt public `aelbiad-collab/recrutement-formateurs`.
2. Y mettre à la racine : `landing.html`, `index.html`, `og-image.jpg`
   (le dossier `gas/` est optionnel).
3. **Settings → Pages** → Source : *Deploy from a branch* → `main` / `(root)`.
4. Pages disponibles après une ou deux minutes :
   - Accroche : `https://aelbiad-collab.github.io/recrutement-formateurs/landing.html`
   - Formulaire : `https://aelbiad-collab.github.io/recrutement-formateurs/`

Si le dépôt porte un autre nom, mettre à jour les URL `og:image` / `og:url`
dans `landing.html` et `index.html`.

## 3. Liens courts (tinyurl)

- `tinyurl.com/offre-formateur-dev` → page d'accroche (`landing.html`)
- `tinyurl.com/poste-formateur-dev` → formulaire (`/`)

## 4. Test

Envoyer une candidature test avec un petit PDF, puis vérifier :
ligne dans la Sheet, CV dans le dossier Drive, email reçu.
Pour vérifier l'aperçu LinkedIn : https://www.linkedin.com/post-inspector/
