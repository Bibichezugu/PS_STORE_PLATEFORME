# PS STORE

Application e-commerce gaming PS STORE.

## Stack de départ

- Next.js 15 + React 19 + TypeScript
- CSS responsive personnalisé
- Cible backend : API Next.js + PostgreSQL
- Cible exploitation : Docker Compose, Cloud principal et serveur physique secondaire (à valider et déployer séparément)

## Démarrage local

Prérequis : Node.js 20 ou supérieur.

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000.

## État actuel

La branche `feature/ps-store-mvp` contient le premier socle de vitrine : page d'accueil responsive, filtres de catégories, recherche locale et panier de démonstration en mémoire.

**Limites connues :** les articles sont des exemples de catégories, pas le catalogue réel. Les prix, stocks, images, comptes, API, base PostgreSQL, commandes, paiement, espace administrateur et déploiement ne sont pas encore implémentés. Aucun serveur ni abonnement n'est réputé acheté ou configuré.

## Documentation projet

- [Backlog Scrum](docs/BACKLOG-SCRUM.md)
- [Design UI/UX](docs/DESIGN-PS-STORE.md)
- [Administration système hybride](docs/ADMIN-SYSTEME-PS-STORE.md)
