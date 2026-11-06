# Backlog produit et technique — plateforme e-commerce PS STORE

**Version :** 2.0 — 6 novembre 2026  
**Référence :** [Backlog Scrum](BACKLOG-SCRUM.md)  
**Dépôt :** Bibichezugu/PS_STORE_PLATEFORME  
**Branche :** main

## 1. Objectif et périmètre

Ce backlog pilote la conception, le développement, les tests et la mise en production de la plateforme e-commerce PS STORE. Il est directement dérivé des user stories PS-01 à PS-20 du backlog Scrum.

La plateforme doit permettre aux visiteurs et clients de découvrir les jeux vidéo, consoles et accessoires, rechercher et filtrer les articles, constituer un panier, passer commande et suivre le traitement. L'équipe du magasin doit pouvoir administrer le catalogue, les stocks, les commandes et les accès.

Les travaux d'infrastructure (serveurs, réseau, VPN, sauvegardes et supervision) restent des prérequis d'exploitation : ils soutiennent la plateforme mais ne constituent pas ses fonctionnalités métier.

## 2. Backlog fonctionnel de la plateforme

| ID lot | Fonctionnalité | Tâches concrètes | Critère de validation | Stories Scrum | Priorité | Sprint cible |
|---|---|---|---|---|---|---|
| PLAT-01 | Navigation et catégories | Construire les entrées Jeux, Consoles et Accessoires ; gérer la navigation entre catégories. | Chaque catégorie est accessible et affiche ses produits. | PS-01 | P1 | Sprint 1 |
| PLAT-02 | Catalogue produits | Afficher les cartes produit avec nom, visuel, prix et disponibilité selon les données enregistrées. | Les informations proviennent du catalogue persistant, pas de données de démonstration. | PS-02 | P1 | Sprint 1 |
| PLAT-03 | Filtres par plateforme | Ajouter les filtres PS4, PS5 et Xbox. | Les résultats correspondent à la plateforme sélectionnée. | PS-03 | P1 | Sprint 1 |
| PLAT-04 | Fiche produit | Créer une page détail avec description, compatibilité, état, prix, photos et stock. | La fiche présente les informations enregistrées et gère les champs absents. | PS-04 | P1 | Sprint 1 |
| PLAT-05 | Recherche catalogue | Ajouter la recherche par nom, l'état vide et le message sans résultat. | La recherche fonctionne sur les données réelles du catalogue. | PS-05 | P1 | Sprint 1 |
| PLAT-06 | Panier client | Ajouter un article, modifier sa quantité, retirer une ligne et recalculer le total. | Les quantités invalides ou supérieures au stock sont refusées. | PS-06, PS-07 | P1 | Sprint 2 |
| PLAT-07 | Validation de commande | Créer le formulaire de coordonnées et le choix retrait/livraison avec validations. | Les champs requis et informations de réception sont contrôlés. | PS-08 | P1 | Sprint 2 |
| PLAT-08 | Création de commande | Enregistrer commande et lignes, générer un numéro unique et afficher le récapitulatif. | Une commande persistante et identifiable est créée. | PS-09 | P1 | Sprint 2 |
| PLAT-09 | Suivi client | Permettre la consultation du statut à partir du numéro de commande avec contrôle d'accès. | Un client ne peut pas consulter la commande d'un autre client. | PS-10 | P1 | Sprint 2 |
| PLAT-10 | Connexion administration | Créer l'écran de connexion et protéger toutes les routes de gestion. | Un visiteur non authentifié ne peut accéder à aucune page admin. | PS-11 | P1 | Sprint 3 |
| PLAT-11 | Gestion du catalogue admin | Créer, modifier, publier et masquer un produit avec validation des champs. | Les changements sont persistés et visibles sur le storefront selon publication. | PS-12 | P1 | Sprint 3 |
| PLAT-12 | Photos et caractéristiques | Associer les images et gérer plateforme, état et compatibilité des produits. | Formats et tailles contrôlés ; images liées à la bonne fiche. | PS-13 | P1 | Sprint 3 |
| PLAT-13 | Mouvements de stock | Enregistrer entrées/sorties avec quantité, date, motif et utilisateur ; recalculer le stock. | Chaque mouvement est historisé et le stock résultant est cohérent. | PS-14 | P1 | Sprint 3 |
| PLAT-14 | Alertes de stock | Permettre de définir un seuil et signaler les produits sous ce seuil. | Une alerte apparaît lorsque le stock atteint ou passe sous le seuil. | PS-15 | P2 | Sprint 3 |
| PLAT-15 | Traitement des commandes | Lister les commandes, afficher leur détail et permettre aux employés autorisés de les traiter. | Liste et détail affichent les informations nécessaires au traitement. | PS-16 | P1 | Sprint 4 |
| PLAT-16 | Workflow des statuts | Définir les transitions autorisées et historiser chaque changement. | Une transition invalide est bloquée et l'historique est consultable. | PS-17 | P1 | Sprint 4 |
| PLAT-17 | Rôles et permissions | Définir les rôles administrateur/employé et contrôler chaque action sensible côté serveur. | Les permissions sont vérifiées côté API, pas uniquement dans l'interface. | PS-18 | P1 | Sprint 4 |
| PLAT-18 | Tableau de bord | Afficher les commandes récentes, ruptures et faibles stocks. | Les indicateurs correspondent aux données réelles de la plateforme. | PS-19 | P2 | Sprint 4 |
| PLAT-19 | Rapports de ventes | Calculer les ventes par période selon une règle métier validée. | Les totaux sont vérifiables à partir des commandes prises en compte. | PS-20 | P3 | Après MVP |

## 3. Backlog technique applicatif

| ID | Composant | Travail attendu | Livrable / preuve | Stories liées | Priorité |
|---|---|---|---|---|---|
| TECH-01 | Socle applicatif | Structurer frontend, backend, environnements et conventions. | Application démarrable en local et configuration documentée. | PS-01 à PS-20 | P1 |
| TECH-02 | Modèle de données | Créer les modèles Produit, Catégorie, Plateforme, Stock, Mouvement, Client, Commande, LigneCommande et Utilisateur. | Schéma relationnel versionné et migrations exécutables. | PS-02 à PS-19 | P1 |
| TECH-03 | API métier | Développer les API catalogue, recherche, commande, suivi, stock et administration. | Endpoints documentés, validations et erreurs cohérentes. | PS-01 à PS-19 | P1 |
| TECH-04 | Authentification et autorisations | Sécuriser sessions, mots de passe, rôles et accès admin/employé. | Tests prouvant le refus des accès non autorisés côté serveur. | PS-11, PS-18 | P1 |
| TECH-05 | Interface responsive | Adapter catalogue, fiches, panier, commande et administration au mobile, tablette et ordinateur. | Parcours vérifiés sur les trois formats. | PS-01 à PS-19 | P1 |
| TECH-06 | Sauvegarde applicative | Automatiser les sauvegardes de la base et documenter la restauration. | Sauvegarde planifiée et preuve de restauration. | PS-08 à PS-19 | P1 |
| TECH-07 | Tests | Tester recherche, disponibilité, panier, commande, suivi, stock, statuts et permissions. | Suite de tests reproductible et résultats enregistrés. | PS-01 à PS-20 | P1 |
| TECH-08 | Mise en production | Préparer HTTPS, configuration de production et procédure de déploiement/retour arrière. | Version déployable et procédure documentée. | PS-01 à PS-19 | P1 |
| TECH-09 | Journalisation | Tracer erreurs et événements métier sans exposer de données sensibles. | Logs exploitables pour diagnostiquer et suivre les opérations. | PS-09, PS-14, PS-17 | P2 |

## 4. Découpage indicatif des sprints

| Sprint | Objectif plateforme | Contenu |
|---|---|---|
| Sprint 0 | Préparer le socle | TECH-01, TECH-02, architecture applicative, maquettes et règles métier. |
| Sprint 1 | Rendre le catalogue consultable | PLAT-01 à PLAT-05, API catalogue et interface responsive initiale. |
| Sprint 2 | Permettre une commande | PLAT-06 à PLAT-09, panier persistant, validation et suivi. |
| Sprint 3 | Administrer produits et stocks | PLAT-10 à PLAT-14, authentification, gestion catalogue et mouvements de stock. |
| Sprint 4 | Traiter les commandes et préparer la sortie | PLAT-15 à PLAT-18, rôles, workflow, tableau de bord, tests et déploiement. |
| Après MVP | Améliorer le pilotage | PLAT-19, rapports, évolutions et intégrations décidées par le Product Owner. |

## 5. Règles de suivi

- **P1** : indispensable au MVP ; **P2** : amélioration importante ; **P3** : évolution après MVP.
- Statuts autorisés : À faire, En cours, En revue, Bloqué, Terminé.
- Une tâche ne passe à **Terminé** qu'après vérification de son critère d'acceptation et présence d'une preuve (code, test, démonstration ou validation).
- Les identifiants PS du backlog Scrum sont conservés pour assurer la traçabilité.
- Les tâches SYS-01 à SYS-20 restent suivies dans la partie infrastructure/exploitation du backlog Scrum et ne sont pas mélangées aux fonctionnalités de la boutique.

## 6. Points métier à confirmer

1. Le MVP enregistre-t-il une commande sans paiement en ligne ou faut-il intégrer un prestataire ?
2. Quelles zones, conditions, durées et tarifications pour livraison et retrait ?
3. À quel moment le stock est-il réservé : création, confirmation ou paiement ?
4. Quelles règles pour les articles neufs/d'occasion et les garanties ?
5. Le PC HP i5 7e génération est-il un produit à vendre ou un matériel interne ?

## 7. Definition of Done

Une tâche est terminée lorsque le code est intégré, les critères d'acceptation vérifiés, les tests pertinents réussis, les erreurs bloquantes corrigées, le parcours concerné adapté aux écrans visés, la documentation mise à jour et le résultat validé par le Product Owner.

> **État initial :** ce document planifie le travail. Il ne constitue pas une preuve que les fonctionnalités sont déjà développées ou déployées.


## 8. Complément issu des documents téléversés — inventaire réel et équipe

Cette section traduit en tâches de plateforme les informations du **Rapport d'Équipement et Stock – PS STORE** (DOC-20261103-WA0469.pdf) et du document **Répartition officielle des membres et attributions – Groupe SGBD** (DOC-20261105-WA0611.pdf). Elle complète les stories PS-01 à PS-20 sans déclarer les produits, quantités ou prix comme déjà vérifiés.

### 8.1 Périmètre catalogue à prendre en charge

Le rapport d'inventaire identifie les familles suivantes :

- **Jeux vidéo physiques :** titres récents et classiques sur supports PS4, PS5 et Xbox.
- **Consoles :** PlayStation 5 standard et éditions spéciales, dont l'édition Fortnite mentionnée dans le rapport.
- **Accessoires et périphériques :** manettes DualSense, casques audio sans fil, stations de recharge et casques VR.
- **Matériel informatique :** ordinateur portable HP argenté, Intel Core i5 de 7e génération, ports USB, sortie vidéo, Ethernet RJ45 et prise audio. Son statut commercial (produit à vendre ou équipement interne) reste à confirmer.

Le rapport ne fournit pas de références SKU, prix, quantités exactes, état unitaire, compatibilités détaillées ni photos exploitables pour chaque fiche. Ces données doivent être inventoriées et validées avant publication du catalogue.

### 8.2 Tâches complémentaires liées à l'inventaire

| ID | Tâche | Travail attendu | Critère de validation / preuve | Priorité | Dépendance |
|---|---|---|---|---|---|
| PLAT-20 | Structurer les familles et sous-catégories | Configurer Jeux physiques, Consoles, Accessoires et Périphériques ; distinguer PS4, PS5 et Xbox ; prévoir VR, manettes, casques et stations de recharge. | Les catégories et filtres correspondent aux familles réellement recensées et sont administrables. | P1 | PLAT-01, TECH-02 |
| PLAT-21 | Compléter les attributs du catalogue gaming | Prévoir plateforme, format physique, modèle/édition, compatibilité, état neuf/occasion, marque, caractéristiques, photos, prix et disponibilité. | Les fiches peuvent décrire un jeu PS4/PS5/Xbox, une PS5 standard/édition spéciale et chaque type d'accessoire sans détourner les champs. | P1 | PLAT-04, TECH-02 |
| PLAT-22 | Réaliser l'inventaire détaillé avant import | Pour chaque article, relever référence, nom exact, catégorie, plateforme/modèle, quantité réelle, état, prix, coût si disponible et photos ; dédoublonner et faire valider par le magasin. | Fichier d'import validé par le responsable métier ; aucune quantité ou aucun prix supposé. | P1 | PLAT-20, PLAT-21 |
| PLAT-23 | Importer et contrôler le catalogue initial | Préparer un import contrôlé des articles validés ; signaler les lignes incomplètes ou doublons ; conserver une trace de l'import. | Échantillon vérifié dans l'administration et sur la boutique ; totaux d'import rapprochés du fichier source. | P1 | PLAT-22, PLAT-11 |
| PLAT-24 | Classer le PC HP i5 de 7e génération | Faire confirmer s'il s'agit d'un article commercialisable ou d'un équipement interne ; si vendu, créer sa fiche avec état, spécifications, prix et stock validés ; sinon l'exclure du catalogue client. | Décision écrite du Product Owner / magasin ; aucun PC publié avant cette décision. | P2 | PLAT-22 |
| PLAT-25 | Gérer les éditions et variantes de consoles | Permettre de distinguer PS5 standard et éditions spéciales (ex. Fortnite), avec attributs propres et stock séparé si nécessaire. | Deux éditions ne sont pas confondues dans le catalogue ou le stock. | P2 | PLAT-21, TECH-02 |

### 8.3 Répartition de travail issue du document d'équipe

Les personnes et rôles ci-dessous reprennent le document téléversé. Cette répartition est une proposition d'affectation du backlog ; elle ne signifie pas que les tâches ont déjà été exécutées.

| Membre | Rôle indiqué dans le document | Responsabilités proposées dans le backlog |
|---|---|---|
| Sangwa Nzungu Bibiche | Master | Pilotage, priorisation, coordination, arbitrage des règles métier et validation des livrables (Product Owner / responsable projet à confirmer). |
| Kalonji Ngoy Prince | Designer | Maquettes UI/UX, charte graphique, visuels publicitaires, composants et validation visuelle du storefront. |
| Kabeya Kabeya Mathias | Administrateur Système | Infrastructure, déploiement, sécurisation de la base de données et disponibilité des environnements. |
| Lukusa Tshileu Fabrice | Main d'œuvre | Inventaire physique, vérification des quantités/états, préparation des commandes et remontée des écarts de stock. |
| Kerlyno | Administrateur Système | Réseau, gestion des accès, maintenance et optimisation des performances système et base de données. |

**Règle d'affectation :** le Product Owner valide les données commerciales (prix, disponibilité, état, livraison et décision sur le PC HP) ; l'équipe technique ne crée pas ces valeurs par supposition. Les noms de comptes GitHub et les assignations GitHub restent à confirmer avant d'affecter des issues.

### 8.4 Prochaines actions de cadrage

1. Organiser un inventaire physique article par article et collecter les photos.
2. Valider les quantités, prix, états et références avec le responsable du magasin.
3. Décider du statut du PC HP i5 (interne ou à vendre).
4. Confirmer les responsabilités Product Owner / Scrum Master et les comptes GitHub des membres.
5. Importer uniquement les lignes contrôlées, puis tester le catalogue, les filtres et les stocks.

### 8.5 Traçabilité documentaire

- `docs/BACKLOG-SCRUM.md` : stories de référence PS-01 à PS-20, tâches TECH et SYS.
- `docs/DESIGN-PS-STORE.md` : écrans, navigation et direction UI/UX.
- `docs/ADMIN-SYSTEME-PS-STORE.md` : cible d'infrastructure et exploitation.
- Document téléversé `DOC-20261103-WA0469.pdf` : caractéristiques du PC et familles de produits observées.
- Document téléversé `DOC-20261105-WA0611.pdf` : membres et attributions de l'équipe.

---

*Complément inventaire et organisation — 6 novembre 2026. Les tâches ajoutées restent « À faire » jusqu'à validation avec une preuve vérifiable.*
