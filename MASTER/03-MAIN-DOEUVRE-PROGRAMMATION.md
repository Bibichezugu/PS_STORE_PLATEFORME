# PS STORE — Organisation de l'équipe et programmation

**Version :** 1.0 — 5 novembre 2026  
**Périmètre :** rôles humains, responsabilités, méthode de développement et livrables.

## 1. Objectif

Organiser les personnes qui conçoivent, développent, testent, sécurisent et exploitent la plateforme PS STORE. Chaque fonction possède un périmètre et des livrables identifiables. Une personne peut cumuler plusieurs fonctions au démarrage, mais les validations sensibles doivent rester séparées autant que possible.

## 2. Rôles et responsabilités

| Fonction | Responsabilités principales | Livrables / preuves attendues |
|---|---|---|
| Direction / Sponsor | Budget, objectifs, arbitrages majeurs, validation des achats et du lancement | Décisions écrites, budget approuvé, Go/No-Go |
| Product Owner (PO) | Vision produit, besoins magasin/clients, priorisation du backlog, validation métier | Product backlog, critères d'acceptation, validation des stories |
| Chef de projet | Planning, coordination, dépendances, suivi des délais, communication | Planning, compte-rendu, registre risques/décisions |
| Scrum Master | Facilitation Scrum, daily, planning, review, rétro, levée des obstacles | Cérémonies tenues, obstacles suivis, améliorations d'équipe |
| UI/UX Designer | Parcours utilisateurs, maquettes desktop/mobile, design system, accessibilité | Maquettes, prototype, composants et exports |
| Développeur Frontend | Pages Next.js/React, responsive, recherche, catalogue, panier, formulaires et accessibilité | Code frontend, tests composants, captures de validation |
| Développeur Backend | API, authentification, catalogue, stock, commandes, permissions, intégrations | API documentée, logique métier, tests unitaires/intégration |
| DBA / Référent données | Modèle relationnel, migrations, index, intégrité, performance, stratégie DB backup/restore | Schéma, migrations, dictionnaire de données, tests restauration |
| Administrateur système / DevOps | Cloud, serveur physique, Linux, réseau/VPN, CI/CD, supervision, sauvegardes et incidents | Infrastructure documentée, pipeline, dashboards, runbooks |
| QA / Testeur | Plans de tests, scénarios, tests fonctionnels, régression, tests multi-écrans | Cahiers de tests, anomalies, PV de recette |
| Référent sécurité | Revue des accès, menaces, secrets, dépendances, audit et incidents | Checklist sécurité, rapports, recommandations et corrections |
| Responsable catalogue / Magasin | Références, photos, descriptions, prix, quantités, disponibilité et règles commerciales | Fichier catalogue validé, inventaire et règles métier |
| Responsable commandes / Service client | Préparation, retrait/livraison, communication client et retours | Procédures de traitement et suivi des commandes |

## 3. Organisation minimale recommandée

Pour un MVP, viser 6 à 8 personnes si le budget le permet :

1. PO / référent métier.
2. Chef de projet pouvant aussi être Scrum Master.
3. UI/UX Designer.
4. Développeur frontend.
5. Développeur backend.
6. DBA / référent données (peut être partagé avec backend au début).
7. QA (peut intervenir à temps partiel).
8. Administrateur système/DevOps (peut intervenir à temps partiel).

La direction, le responsable catalogue, le magasin et la sécurité fournissent des validations régulières. Si l'équipe est plus petite, nommer explicitement les personnes qui cumulent les fonctions et éviter qu'une même personne approuve seule ses propres changements de production.

## 4. Parcours de programmation

### Phase 0 — Cadrage
- Confirmer le périmètre MVP et les objectifs.
- Recueillir les règles de paiement, livraison/retrait, retours, garantie et réservation de stock.
- Inventorier les produits et les données disponibles.
- Nommer les responsables et valider les critères d'acceptation.

**Sortie :** backlog priorisé et décisions métier consignées.

### Phase 1 — Conception UX/UI et architecture
- Designer : parcours, maquettes et prototype mobile/desktop.
- Frontend/backend : choix des contrats API et structure applicative.
- DBA : modèle de données initial.
- DevOps/sécurité : environnements, accès, secrets et pipeline cible.

**Sortie :** maquettes validées, architecture et schéma initial approuvés.

### Phase 2 — Fondations techniques
- Initialiser l'application et les conventions de code.
- Préparer les environnements de développement et de test.
- Configurer lint, tests, revues de code et intégration continue.
- Créer les premières migrations de base de données.

**Sortie :** application exécutable en local et environnement de test contrôlé.

### Phase 3 — Catalogue et recherche
- API et interface de catégories, produits, filtres et recherche.
- Import du catalogue vérifié.
- Gestion des images, prix et disponibilités.

**Sortie :** parcours catalogue démontrable avec données approuvées.

### Phase 4 — Panier et commandes
- Gestion des quantités et contrôle du stock côté serveur.
- Coordonnées client et choix retrait/livraison.
- Création de commande, numéro et statuts.
- Paiement en ligne seulement après choix et validation du prestataire.

**Sortie :** commande testable de bout en bout sans double vente de stock.

### Phase 5 — Back-office
- Authentification du personnel.
- Rôles et permissions appliqués côté serveur.
- Gestion des produits, stocks, commandes et historique des opérations.

**Sortie :** équipe magasin capable d'exécuter les opérations autorisées.

### Phase 6 — QA, sécurité et préparation production
- Tests fonctionnels, régression, responsive, API et permissions.
- Revue des dépendances et secrets.
- Test de charge proportionné au trafic attendu.
- Test de sauvegarde/restauration et procédure de retour arrière.

**Sortie :** anomalies bloquantes corrigées et procès-verbal de recette.

### Phase 7 — Déploiement et accompagnement
- Déploiement après approbation formelle.
- Vérification santé applicative et monitoring.
- Formation des administrateurs et employés.
- Suivi renforcé après ouverture.

**Sortie :** Go/No-Go signé, responsables d'exploitation identifiés et guide utilisateur remis.

## 5. Proposition de sprints

Hypothèse indicative : sprints de deux semaines. Le PO et l'équipe ajustent le périmètre selon la capacité réelle.

| Sprint | Objectif | Résultat attendu |
|---|---|---|
| 0 | Cadrage, règles métier, architecture, maquettes | Périmètre et décisions validés |
| 1 | Fondations, base de données et environnement de test | Socle exécutable |
| 2 | Catalogue, catégories, recherche et fiches produits | Catalogue navigable |
| 3 | Panier, stock et création de commande | Parcours commande testable |
| 4 | Back-office, rôles, produits et commandes | Gestion magasin opérationnelle en test |
| 5 | QA, sécurité, sauvegardes et déploiement de préproduction | Version candidate testée |
| 6 | Recette, formation et décision de lancement | Go/No-Go documenté |

Ce planning n'est pas une promesse de date : il dépend de la taille de l'équipe, de la validation du catalogue et des choix de paiement/livraison.

## 6. Règles de collaboration et qualité

- Toute fonctionnalité est liée à une issue ou une story du backlog.
- Développement sur branche dédiée ; Pull Request obligatoire vers la branche principale.
- Revue par une autre personne avant fusion.
- Tests automatisés et contrôles de sécurité exécutés avant fusion.
- Aucun secret, mot de passe, clé privée ou fichier client dans Git.
- Les migrations DB sont versionnées et relues.
- Les changements de production nécessitent une approbation autorisée et un plan de retour arrière.
- Les bugs sont consignés avec étapes de reproduction, impact, priorité et responsable.
- La Definition of Done du backlog est obligatoire.

## 7. Matrice de responsabilité simplifiée

| Activité | Responsable opérationnel | Validation |
|---|---|---|
| Priorités fonctionnelles | PO | Direction / représentants métier |
| Maquettes et parcours | UI/UX | PO |
| Code frontend/backend | Développeurs | Revue technique + QA |
| Modèle et migrations DB | DBA / Backend | Revue technique |
| Infrastructure et sauvegardes | Admin système / DevOps | Sécurité + direction pour production |
| Tests et recette | QA | PO / utilisateurs magasin |
| Catalogue et prix | Responsable catalogue | Direction / magasin |
| Mise en production | DevOps | Go/No-Go direction + PO |

## 8. Livrables de fin de projet

- Cahier de besoins et règles métier.
- Maquettes et bibliothèque UI.
- Code source frontend/backend et documentation API.
- Schéma DB, migrations et dictionnaire de données.
- Catalogue initial validé.
- Back-office et matrice des permissions.
- Plans et rapports de tests / PV de recette.
- Dossier d'exploitation, sauvegarde, restauration et sécurité.
- Pipeline CI/CD et procédure de déploiement.
- Guides utilisateur et administrateur.
- Procès-verbal de validation et décision Go/No-Go.

## 9. Informations à confirmer par PS STORE

- Noms des personnes affectées à chaque fonction.
- Disponibilités et compétences de l'équipe.
- Budget et calendrier cible.
- Catalogue réel, prix et stocks.
- Paiement, livraison, retrait, retours et garantie.
- Responsable métier habilité à valider les commandes et la mise en production.

---
**Statut :** organisation proposée, à compléter avec les noms des membres réels. Aucun rôle n'est considéré comme pourvu sans désignation explicite.
