# Ragnarok Zero: Global — Prelander (CPD, Win Only)

Prelander mobile-first, thème Ragnarok (nordique/fantasy), mécanique "coffre = récompense garantie" pour flow CPD Win Only. Worker Cloudflare autonome (aucune dépendance externe, aucune police ni image chargée depuis un CDN).

## Aperçu

Aperçu visuel (Artifact) : https://claude.ai/artifact/F66nZc24J2QPqWz7k3GhhE

## Fichiers

- `worker.js` — le Worker Cloudflare (module ES). Sert la page HTML sur `/` et `/index.html`, 404 ailleurs.
- `wrangler.toml` — config de déploiement (nom du script : `ragnarok-zero-prelander`).

## Lien CTA

Le lien de l'offre est en dur en haut de `worker.js` :

```js
const OFFER_URL = "https://go.gogameai.com/5B8F/2J2I9/";
```

Tous les paramètres de query string présents sur l'URL de la prelander (clickid, sub1, gaid, etc.) sont automatiquement transférés vers ce lien côté client (voir `buildOfferUrl()` dans le `<script>` embarqué). Donc un lien de prelander du type :

```
https://ragnarok-zero-prelander.<ton-sous-domaine>.workers.dev/?clickid={click_id}&sub1={sub1}
```

redirigera le clic vers :

```
https://go.gogameai.com/5B8F/2J2I9/?clickid=xxx&sub1=yyy
```

## Déploiement

Prérequis : Node.js + un compte Cloudflare avec accès au projet (le même compte que `ragnarok-prelander.aelbiad.workers.dev`).

```bash
cd livrables/ragnarok-zero-prelander
npx wrangler login          # une seule fois, ouvre le navigateur pour l'auth Cloudflare
npx wrangler deploy
```

Ceci publie le Worker sous le nom `ragnarok-zero-prelander`, accessible à une URL du type :

```
https://ragnarok-zero-prelander.<ton-sous-domaine-workers>.workers.dev/
```

(le sous-domaine `workers.dev` est celui déjà utilisé par `ragnarok-prelander`, donc l'URL finale suivra le même format que la page de référence).

### Renommer le script (optionnel)

Pour un autre nom de script (ex. coller exactement au nom de campagne), modifie `name` dans `wrangler.toml` avant `wrangler deploy`.

### Domaine personnalisé (optionnel)

Si tu veux un domaine/sous-domaine perso plutôt que `*.workers.dev`, ajoute une route dans `wrangler.toml` :

```toml
routes = [
  { pattern = "ragnarok-zero.tondomaine.com/*", custom_domain = true }
]
```

## Notes

- `noindex, nofollow` est appliqué (meta + header `X-Robots-Tag`) pour éviter l'indexation de la prelander.
- Le compte à rebours, l'ouverture du coffre et les particules sont gérés en pur CSS/JS, sans librairie externe (chargement rapide, pas de dépendance à un CDN qui pourrait être bloqué sur certains réseaux).
- Aucun faux avis/témoignage utilisateur nominatif n'a été ajouté (uniquement des indicateurs génériques : note, nombre de joueurs) pour rester sur une preuve sociale non trompeuse.
