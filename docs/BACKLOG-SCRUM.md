# Backlog Scrum — PS STORE

**Version :** 1.0 — Novembre 2026  
**Projet :** Application e-commerce PS STORE  
**Dépôt :** [Bibichezugu/PS_STORE_PLATEFORME](https://github.com/Bibichezugu/PS_STORE_PLATEFORME)

## 1. Vision du produit

Permettre aux clients de consulter les jeux vidéo, consoles et accessoires de PS STORE, de passer commande et d'en suivre le traitement. Donner à l'équipe du magasin les moyens de gérer le catalogue, les stocks et les commandes.

Le backlog est construit à partir du plan de développement issu du document d'inventaire. Celui-ci mentionne des jeux physiques PS4, PS5 et Xbox, des consoles PlayStation 5 et éditions spéciales, ainsi que des accessoires gaming. Le PC HP avec Intel Core i5 de 7e génération doit être confirmé comme article à vendre ou matériel interne.

**Priorités :** P1 = indispensable au MVP ; P2 = utile après le socle ; P3 = amélioration.  
**Estimations :** points indicatifs à ajuster par l'équipe lors du Sprint Planning.

## 2. Rôles

- **Client :** consulte le catalogue, recherche un article, voit son prix et sa disponibilité, passe commande et suit son statut.
- **Administrateur :** gère produits, catégories, stocks, commandes, utilisateurs internes et rapports.
- **Employé :** traite les commandes et effectue les opérations de stock autorisées.
- **Product Owner :** priorise le backlog, clarifie les règles métier et valide les fonctionnalités.
- **Scrum Master :** facilite les cérémonies Scrum et aide à lever les obstacles.
- **Équipe de développement :** conçoit, développe, teste et livre un incrément utilisable à chaque sprint.

## 3. Product Backlog — User stories

| ID | Épopée | User story | Critères d'acceptation essentiels | Priorité | Points |
|---|---|---|---|---|---:|
| PS-01 | Catalogue | En tant que visiteur, je veux voir les catégories afin de parcourir l'offre. | Catégories Jeux, Consoles et Accessoires accessibles ; navigation sans erreur. | P1 | 3 |
| PS-02 | Catalogue | En tant que visiteur, je veux consulter les produits afin de découvrir l'offre. | Chaque carte affiche au minimum nom, image si disponible, prix si renseigné et disponibilité. | P1 | 5 |
| PS-03 | Catalogue | En tant que visiteur, je veux filtrer les jeux par plateforme. | Filtres PS4, PS5 et Xbox ; résultats correspondant au filtre. | P1 | 3 |
| PS-04 | Catalogue | En tant que visiteur, je veux ouvrir une fiche produit afin de vérifier ses caractéristiques. | Nom, description, catégorie, plateforme/compatibilité, état, prix, photos et disponibilité affichés si renseignés. | P1 | 5 |
| PS-05 | Recherche | En tant que visiteur, je veux rechercher un produit par son nom. | Résultats correspondant au texte saisi ; message si aucun résultat. | P1 | 3 |
| PS-06 | Panier | En tant que client, je veux ajouter un produit au panier. | Produit ajouté avec quantité et prix ; quantité indisponible refusée. | P1 | 5 |
| PS-07 | Panier | En tant que client, je veux modifier ou retirer un article. | Quantité et total recalculés ; suppression de ligne ; stock recontrôlé. | P1 | 3 |
| PS-08 | Commande | En tant que client, je veux saisir mes coordonnées et mon mode de réception. | Champs obligatoires validés ; informations nécessaires au retrait ou à la livraison collectées. | P1 | 5 |
| PS-09 | Commande | En tant que client, je veux recevoir un numéro de commande. | Commande unique créée ; numéro et récapitulatif affichés. | P1 | 5 |
| PS-10 | Suivi | En tant que client, je veux consulter le statut de ma commande. | Numéro de commande permettant de retrouver le statut sans exposer les commandes d'autres clients. | P1 | 5 |
| PS-11 | Administration | En tant qu'administrateur, je veux me connecter pour protéger l'espace de gestion. | Authentification obligatoire ; pages admin interdites sans session autorisée. | P1 | 5 |
| PS-12 | Produits | En tant qu'administrateur, je veux créer et modifier un produit. | Création/modification possibles ; champs obligatoires contrôlés ; publication ou masquage. | P1 | 5 |
| PS-13 | Produits | En tant qu'administrateur, je veux gérer les photos et caractéristiques. | Images associées aux produits ; formats et tailles contrôlés. | P1 | 3 |
| PS-14 | Stock | En tant qu'employé autorisé, je veux enregistrer une entrée ou sortie de stock. | Chaque mouvement conserve produit, quantité, date, motif et utilisateur ; stock mis à jour. | P1 | 5 |
| PS-15 | Stock | En tant qu'administrateur, je veux définir un seuil d'alerte. | Alerte lorsque le stock atteint ou passe sous le seuil défini. | P2 | 3 |
| PS-16 | Commandes | En tant qu'employé, je veux consulter les commandes afin de les traiter. | Liste avec numéro, date, client, total et statut ; détail consultable. | P1 | 5 |
| PS-17 | Commandes | En tant qu'employé autorisé, je veux modifier le statut d'une commande. | Workflow respecté ; changements historisés ; transitions invalides bloquées. | P1 | 5 |
| PS-18 | Sécurité | En tant qu'administrateur, je veux attribuer des rôles. | Permissions appliquées côté serveur ; actions non autorisées bloquées. | P1 | 5 |
| PS-19 | Tableau de bord | En tant qu'administrateur, je veux voir les commandes et ruptures de stock. | Commandes récentes et produits en rupture/faible stock visibles. | P2 | 5 |
| PS-20 | Rapports | En tant qu'administrateur, je veux consulter les ventes par période. | Totaux calculés selon une règle métier validée par PS STORE. | P3 | 5 |

## 4. Backlog technique

| ID | Sujet | Travail attendu | Priorité | Points |
|---|---|---|---|---:|
| TECH-01 | Fondations projet | Initialiser dépôt, environnements, structure frontend/backend et conventions de code. | P1 | 3 |
| TECH-02 | Base de données | Modèles Produit, Catégorie, Stock/Mouvement, Client, Commande, LigneCommande et Utilisateur. | P1 | 5 |
| TECH-03 | API | API sécurisées pour catalogue, commande, stock et administration. | P1 | 5 |
| TECH-04 | Sécurité | Validation serveur, sessions, contrôle d'accès et stockage sécurisé des secrets. | P1 | 5 |
| TECH-05 | Responsive | Vérifier les écrans sur mobile, tablette et ordinateur. | P1 | 3 |
| TECH-06 | Sauvegardes | Configurer sauvegarde et restauration de la base. | P1 | 3 |
| TECH-07 | Tests | Tester stock, création de commande, permissions et statuts. | P1 | 5 |
| TECH-08 | Déploiement | Préparer production, HTTPS, configuration et procédure de mise en ligne. | P1 | 5 |
| TECH-09 | Observabilité | Journalisation des erreurs et suivi des événements importants. | P2 | 3 |

## 5. Proposition de découpage en sprints

Hypothèse : sprints de deux semaines. Le contenu doit être confirmé par l'équipe selon sa capacité et les dépendances.

| Sprint | Objectif | Stories / livrables | Résultat attendu |
|---|---|---|---|
| Sprint 0 | Préparer le projet | TECH-01, TECH-02, architecture, maquettes et règles métier. | Socle technique et périmètre validés. |
| Sprint 1 | Rendre le catalogue consultable | PS-01 à PS-05, API catalogue. | Visiteur capable de parcourir, filtrer et rechercher les produits. |
| Sprint 2 | Permettre une commande | PS-06 à PS-10, disponibilité et création de commande. | Client capable d'envoyer une commande et de consulter son statut. |
| Sprint 3 | Administrer produits et stocks | PS-11 à PS-15, TECH-04, premiers tests. | Équipe capable de gérer les produits et le stock. |
| Sprint 4 | Traiter les commandes et préparer la sortie | PS-16 à PS-18, PS-19 si capacité, TECH-05 à TECH-08. | Employés capables de traiter les commandes ; version testable et déployable. |
| Après MVP | Améliorer le pilotage | PS-20, TECH-09, promotions et intégrations de paiement/livraison si décidées. | Évolutions selon les retours et besoins du magasin. |

## 6. Definition of Done (DoD)

Une story est terminée lorsque :
- le code est intégré ;
- les critères d'acceptation sont vérifiés ;
- les tests pertinents passent ;
- les erreurs bloquantes sont corrigées ;
- l'interface fonctionne sur mobile et ordinateur pour les parcours concernés ;
- la documentation utile est mise à jour ;
- le Product Owner valide le résultat.

## 7. Rituels Scrum

| Rituel | Cadence | But |
|---|---|---|
| Sprint Planning | Début de sprint | Choisir l'objectif du sprint et les stories réalisables. |
| Daily Scrum | Chaque jour ouvré, 15 min | Synchroniser l'équipe et identifier les obstacles. |
| Sprint Review | Fin de sprint | Démontrer l'incrément et recueillir les retours du magasin. |
| Sprint Retrospective | Fin de sprint | Décider d'une amélioration concrète pour le sprint suivant. |
| Backlog Refinement | Régulièrement | Clarifier stories, critères, dépendances et estimations. |

## 8. Risques, dépendances et décisions à prendre

1. **Catalogue incomplet :** le rapport source ne donne pas le détail de chaque produit, les prix, quantités, références ni photos. Préparer et valider un fichier catalogue avant import.
2. **Paiement :** aucun moyen de paiement n'est spécifié. Décider si le MVP enregistre une commande sans paiement en ligne ou intègre un prestataire.
3. **Livraison et retrait :** définir zones, tarifs, délais, frais et procédure de retrait.
4. **Réservation du stock :** décider si le stock est réservé à la création de commande ou après confirmation par le magasin/paiement.
5. **État et garantie :** définir les règles pour les articles neufs ou d'occasion et les garanties applicables.
6. **Ordinateur HP :** confirmer s'il est commercialisable ou réservé à l'usage interne.

## 9. Actions prioritaires avant Sprint 1

- Nommer le Product Owner.
- Confirmer les règles de paiement, livraison et retrait.
- Compléter le catalogue avec prix, quantités, références et photos.
- Définir les statuts de commande et le moment de réservation du stock.
- Décider du sort du PC HP mentionné dans l'inventaire.


## 10. Backlog Administration Système — Infrastructure hybride

La conception détaillée est documentée dans [docs/ADMIN-SYSTEME-PS-STORE.md](ADMIN-SYSTEME-PS-STORE.md). Les tâches ci-dessous complètent le backlog technique existant. Elles ne signifient pas que les ressources Cloud ou le matériel ont déjà été achetés.

| ID | Sujet | Travail attendu | Priorité | Dépendance |
|---|---|---|---|---|
| SYS-01 | Cadrage infrastructure | Inventorier charge, données, contraintes métier et exigences de disponibilité. | P1 | — |
| SYS-02 | Choix Cloud | Comparer régions, latence depuis Lubumbashi, coûts et exigences de données. | P1 | SYS-01 |
| SYS-03 | Budget et devis | Obtenir devis Cloud, serveur Dell, UPS et connectivité. | P1 | SYS-01 |
| SYS-04 | Environnements | Préparer développement, test et production. | P1 | SYS-02 |
| SYS-05 | Durcissement Linux | Configurer SSH par clé, MFA, pare-feu, comptes et correctifs. | P1 | SYS-04 |
| SYS-06 | VPN | Installer WireGuard et définir les règles d'accès réseau. | P1 | SYS-04 |
| SYS-07 | Serveur physique | Installer et documenter le serveur secondaire et son UPS. | P1 | SYS-03 |
| SYS-08 | Base de données | Installer PostgreSQL et définir maintenance et accès. | P1 | SYS-04 |
| SYS-09 | Sauvegardes | Configurer Restic, chiffrement, rétention et copie hors site. | P1 | SYS-08 |
| SYS-10 | Restauration | Réaliser un test documenté de restauration. | P1 | SYS-09 |
| SYS-11 | Monitoring | Installer Prometheus, Grafana et Alertmanager. | P1 | SYS-04 |
| SYS-12 | Centralisation des logs | Déployer Loki avec politique de rétention. | P2 | SYS-04 |
| SYS-13 | Alertes | Définir seuils, tableaux de bord et canaux de notification. | P1 | SYS-11 |
| SYS-14 | Automatisation infra | Versionner les configurations Ansible et contrôler leur exécution. | P2 | SYS-05, SYS-06 |
| SYS-15 | CI/CD | Mettre en place GitHub Actions, tests et approbation avant production. | P1 | SYS-04 |
| SYS-16 | Gestion incidents | Créer registre d'incidents, niveaux de gravité et procédures d'escalade. | P1 | SYS-11 |
| SYS-17 | Tests de reprise | Simuler panne Cloud, perte VPN, panne locale et restauration. | P1 | SYS-07 à SYS-16 |
| SYS-18 | Audit sécurité | Vérifier accès, secrets, correctifs, journaux et règles réseau. | P1 | SYS-05 à SYS-16 |
| SYS-19 | Documentation exploitation | Rédiger runbooks, maintenance, contacts et responsabilités. | P2 | SYS-16 |
| SYS-20 | Go/No-Go production | Valider les critères de sécurité, sauvegarde, reprise et supervision. | P1 | SYS-17 à SYS-19 |


---

*PS STORE — Backlog Scrum initial | Version 1.1 | Novembre 2026*
