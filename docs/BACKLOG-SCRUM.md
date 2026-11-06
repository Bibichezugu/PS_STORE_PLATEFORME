# Backlog Scrum — PS STORE

**Version :** 1.2 — 6 novembre 2026  
**Produit :** plateforme e-commerce PS STORE  
**Dépôt :** [Bibichezugu/PS_STORE_PLATEFORME](https://github.com/Bibichezugu/PS_STORE_PLATEFORME)  
**Référence :** backlog initial, document téléversé d'inventaire et backlog fonctionnel de la plateforme.

## 1. Vision du produit

Construire une plateforme e-commerce permettant aux clients de découvrir les produits gaming de PS STORE, de vérifier leurs caractéristiques et leur disponibilité, de constituer un panier, de passer commande et d'en suivre le traitement. L'équipe du magasin doit disposer d'un espace d'administration pour gérer les produits, les stocks et les commandes.

### Périmètre catalogue issu de l'inventaire

- Jeux physiques pour **PS4, PS5 et Xbox**.
- Consoles **PlayStation 5**, y compris les éditions spéciales.
- Accessoires gaming : manettes, casques, stations de recharge et casques VR.
- Ordinateur portable **HP avec Intel Core i5 de 7e génération** : article à commercialiser ou matériel interne à confirmer avant publication.
- Les prix, quantités, références, photos, état (neuf/occasion) et garanties doivent être confirmés à partir de l'inventaire validé. Aucune valeur commerciale ne doit être inventée.

## 2. Acteurs et rôles Scrum

| Acteur | Responsabilité |
|---|---|
| Visiteur / Client | Parcourir le catalogue, rechercher, ajouter au panier, commander et suivre sa commande. |
| Employé | Consulter et traiter les commandes ; réaliser les mouvements de stock autorisés. |
| Administrateur | Gérer produits, catégories, stocks, comptes, rôles, commandes et rapports. |
| Product Owner | Porter la vision, prioriser le Product Backlog, clarifier les règles métier et accepter les stories. |
| Scrum Master | Faciliter les événements Scrum et lever les obstacles. |
| Équipe de développement | Concevoir, développer, tester, documenter et livrer un incrément utilisable. |

## 3. Règles de priorisation et estimation

- **P1** : indispensable au MVP.
- **P2** : important, à planifier après le parcours de vente de base.
- **P3** : amélioration non bloquante du MVP.
- Les points sont des estimations initiales relatives (Fibonacci simplifié : 1, 2, 3, 5, 8). Ils seront réévalués collectivement au Refinement / Sprint Planning.
- Tous les éléments démarrent avec le statut **À faire**. Un statut ne passe à « Terminé » qu'après vérification et validation.

## 4. Product Backlog — User Stories

| ID | Épopée | User story | Critères d'acceptation | Priorité | Points |
|---|---|---|---|---|---:|
| PS-01 | Navigation | En tant que visiteur, je veux parcourir les catégories afin de trouver rapidement une famille de produits. | Les catégories Jeux, Consoles et Accessoires sont visibles et navigables ; les liens fonctionnent sur mobile et ordinateur. | P1 | 3 |
| PS-02 | Catalogue | En tant que visiteur, je veux consulter la liste des produits afin de découvrir l'offre disponible. | Les cartes affichent les informations disponibles : nom, image, prix et disponibilité ; les produits masqués ne sont pas affichés. | P1 | 5 |
| PS-03 | Catalogue | En tant que visiteur, je veux filtrer les jeux par plateforme afin de trouver les titres compatibles. | Les filtres PS4, PS5 et Xbox fonctionnent ; la liste correspond au filtre choisi ; une remise à zéro est possible. | P1 | 3 |
| PS-04 | Fiche produit | En tant que visiteur, je veux consulter une fiche détaillée afin de connaître les caractéristiques d'un article. | La fiche affiche nom, description, catégorie, plateforme/compatibilité, état, prix, photos et disponibilité lorsque ces données sont renseignées. | P1 | 5 |
| PS-05 | Recherche | En tant que visiteur, je veux rechercher un article par son nom afin de le retrouver rapidement. | La recherche accepte une saisie partielle ; les résultats sont pertinents ; un message apparaît sans résultat. | P1 | 3 |
| PS-06 | Panier | En tant que client, je veux ajouter un produit au panier afin de préparer ma commande. | Le produit et sa quantité apparaissent dans le panier ; le prix est repris du catalogue ; une quantité supérieure au stock disponible est refusée. | P1 | 5 |
| PS-07 | Panier | En tant que client, je veux modifier les quantités ou retirer un article afin de corriger mon panier. | Le total est recalculé ; la suppression fonctionne ; la disponibilité est revérifiée avant validation. | P1 | 3 |
| PS-08 | Validation | En tant que client, je veux saisir mes coordonnées et choisir le mode de réception afin de transmettre ma commande. | Les champs obligatoires sont validés ; les informations nécessaires à la livraison ou au retrait sont collectées ; les erreurs sont explicites. | P1 | 5 |
| PS-09 | Commande | En tant que client, je veux recevoir une confirmation et un numéro de commande afin de garder une preuve de ma demande. | Une référence unique est générée ; un récapitulatif affiche les lignes, quantités et total ; la commande est persistée. | P1 | 5 |
| PS-10 | Suivi | En tant que client, je veux consulter l'état de ma commande afin de connaître son avancement. | Le suivi vérifie la référence et un élément d'identification ; seules les informations de la commande concernée sont exposées. | P1 | 5 |
| PS-11 | Authentification | En tant qu'administrateur, je veux me connecter à l'espace de gestion afin de protéger les opérations internes. | Une session valide est requise ; les accès anonymes sont refusés ; la déconnexion invalide la session. | P1 | 5 |
| PS-12 | Gestion produits | En tant qu'administrateur, je veux créer, modifier et désactiver un produit afin de maintenir le catalogue à jour. | Les champs requis sont contrôlés ; un produit peut être publié ou masqué ; les changements sont persistés. | P1 | 5 |
| PS-13 | Médias et attributs | En tant qu'administrateur, je veux gérer les photos et caractéristiques afin de présenter correctement chaque article. | Les images sont associées au bon produit ; formats et tailles sont contrôlés ; les attributs varient selon la famille de produit. | P1 | 3 |
| PS-14 | Stock | En tant qu'employé autorisé, je veux enregistrer les entrées et sorties de stock afin de maintenir les quantités exactes. | Chaque mouvement conserve produit, quantité, date, motif et auteur ; le stock est recalculé ; les quantités négatives sont bloquées. | P1 | 5 |
| PS-15 | Stock | En tant qu'administrateur, je veux définir un seuil d'alerte afin d'anticiper les ruptures. | Un seuil est configurable par produit ; une alerte apparaît lorsque la quantité atteint ou passe sous ce seuil. | P2 | 3 |
| PS-16 | Traitement commandes | En tant qu'employé, je veux consulter la liste et le détail des commandes afin de les préparer. | La liste affiche référence, date, client, total et statut ; les détails des articles sont consultables par un employé autorisé. | P1 | 5 |
| PS-17 | Traitement commandes | En tant qu'employé autorisé, je veux faire évoluer le statut d'une commande afin de suivre son traitement. | Les transitions autorisées sont définies ; chaque changement est historisé ; une transition invalide est refusée. | P1 | 5 |
| PS-18 | Rôles et permissions | En tant qu'administrateur, je veux attribuer des rôles afin de limiter les opérations selon les responsabilités. | Les rôles administrateur et employé ont des permissions distinctes ; les permissions sont contrôlées côté serveur. | P1 | 5 |
| PS-19 | Tableau de bord | En tant qu'administrateur, je veux visualiser les commandes récentes et les alertes de stock afin de piloter l'activité. | Le tableau de bord présente des données issues de la base ; commandes récentes et ruptures/faibles stocks sont identifiables. | P2 | 5 |
| PS-20 | Rapports | En tant qu'administrateur, je veux consulter les ventes par période afin d'analyser l'activité. | Les totaux sont calculés sur les commandes selon une règle métier validée ; la période sélectionnée est visible. | P3 | 5 |

## 5. Backlog technique

| ID | Élément technique | Travail attendu | Priorité | Points |
|---|---|---|---|---:|
| TECH-01 | Fondations | Structurer le frontend et le backend, les environnements, les conventions et la configuration. | P1 | 3 |
| TECH-02 | Modèle de données | Concevoir les entités Produit, Catégorie, Stock, Mouvement, Client, Commande, LigneCommande, Utilisateur et Rôle. | P1 | 5 |
| TECH-03 | API | Exposer des API documentées pour catalogue, panier/commande, stock et administration. | P1 | 5 |
| TECH-04 | Sécurité applicative | Valider côté serveur, protéger les sessions, appliquer les permissions et sécuriser les secrets. | P1 | 5 |
| TECH-05 | Responsive et accessibilité | Vérifier les parcours sur mobile, tablette et ordinateur ; traiter les principaux problèmes d'accessibilité. | P1 | 3 |
| TECH-06 | Sauvegarde applicative | Automatiser la sauvegarde de la base et documenter la restauration. | P1 | 3 |
| TECH-07 | Qualité et tests | Ajouter tests unitaires/intégration pour stock, commandes, statuts et permissions. | P1 | 5 |
| TECH-08 | Livraison | Préparer configuration de production, HTTPS, déploiement et procédure de retour arrière. | P1 | 5 |
| TECH-09 | Observabilité | Centraliser les erreurs et événements utiles ; définir les alertes de base. | P2 | 3 |

## 6. Proposition de planification des sprints

Hypothèse de travail : sprints de deux semaines. Les objectifs et la capacité sont à confirmer par l'équipe.

| Sprint | Objectif | Éléments indicatifs | Incrément attendu |
|---|---|---|---|
| Sprint 0 | Cadrer et préparer | TECH-01, TECH-02, règles de paiement/livraison/stock, structure des données et maquettes. | Socle prêt ; règles métier clarifiées ; catalogue source vérifié. |
| Sprint 1 | Découvrir les produits | PS-01 à PS-05, première API catalogue. | Catalogue consultable, filtrable et recherchable. |
| Sprint 2 | Passer une commande | PS-06 à PS-10, persistance des commandes et contrôles de disponibilité. | Parcours panier, validation, confirmation et suivi opérationnel. |
| Sprint 3 | Administrer le catalogue et le stock | PS-11 à PS-15, TECH-04, TECH-07. | Connexion admin, gestion des produits, médias et mouvements de stock. |
| Sprint 4 | Traiter et piloter les commandes | PS-16 à PS-19, TECH-05, TECH-06, TECH-08. | Traitement des commandes, permissions, tableau de bord et version déployable de test. |
| Après MVP | Améliorer le pilotage | PS-20, TECH-09 et évolutions priorisées par le Product Owner. | Rapports et améliorations selon les retours réels. |

## 7. Definition of Ready (DoR)

Une story peut entrer dans un sprint lorsque :
- sa valeur métier est comprise ;
- ses critères d'acceptation sont écrits et vérifiables ;
- les dépendances et données nécessaires sont identifiées ;
- l'équipe comprend le périmètre et peut estimer l'effort ;
- les décisions bloquantes (paiement, livraison, règles de stock) sont clarifiées pour la story concernée.

## 8. Definition of Done (DoD)

Une story est terminée lorsque :
- le code est intégré dans la branche de travail prévue ;
- les critères d'acceptation sont vérifiés ;
- les tests pertinents passent ;
- aucune anomalie bloquante connue ne subsiste ;
- le parcours fonctionne sur les formats d'écran concernés ;
- les contrôles de sécurité pertinents sont appliqués ;
- la documentation utile est mise à jour ;
- le Product Owner valide l'incrément.

## 9. Événements Scrum

| Événement | Cadence | Finalité |
|---|---|---|
| Sprint Planning | Début de sprint | Définir l'objectif du sprint et sélectionner les éléments réalisables. |
| Daily Scrum | Chaque jour ouvré, 15 minutes | Inspecter l'avancement vers l'objectif et adapter le plan. |
| Sprint Review | Fin de sprint | Démontrer l'incrément aux parties prenantes et recueillir leurs retours. |
| Sprint Retrospective | Fin de sprint | Choisir une amélioration concrète du fonctionnement de l'équipe. |
| Backlog Refinement | Régulièrement | Clarifier, découper, prioriser et estimer les éléments futurs. |

## 10. Décisions métier à obtenir

1. **Paiement :** confirmer si le MVP enregistre les commandes sans paiement en ligne ou s'il faut intégrer un prestataire. Aucun prestataire n'est présumé.
2. **Livraison et retrait :** définir zones desservies, frais, délais, coordonnées et procédure de retrait.
3. **Réservation du stock :** décider si le stock est réservé à la création, à la confirmation ou au paiement de la commande.
4. **Statuts :** valider le workflow (ex. reçue, confirmée, en préparation, prête/expédiée, terminée, annulée).
5. **État et garantie :** préciser les règles pour produits neufs ou d'occasion et garanties applicables.
6. **PC HP :** confirmer si l'ordinateur HP i5 7e génération est un article à vendre ou un équipement interne.
7. **Données catalogue :** faire valider les prix, quantités, références, photos et descriptions avant import ou publication.

## 11. Risques et dépendances

- Un inventaire sans prix, quantité ou référence confirmés ne permet pas de publier des offres fiables.
- La commande dépend de règles explicites de disponibilité et de réservation du stock.
- Le paiement et la livraison restent hors périmètre détaillé tant que les décisions métier ne sont pas prises.
- La gestion des rôles doit être appliquée côté serveur, pas uniquement masquée dans l'interface.
- Les fonctions d'administration et de commande nécessitent une API et une base de données persistante ; une démonstration frontend locale ne constitue pas une livraison complète.

## 12. Suivi du backlog

| Champ | Règle |
|---|---|
| Statut initial | À faire |
| Statuts de travail | À faire → En cours → En revue / En test → Terminé |
| Priorité | P1 / P2 / P3 |
| Estimation | Points d'histoire, révisables en équipe |
| Validation | Critères d'acceptation + DoD + validation Product Owner |
| Traçabilité | Conserver les identifiants PS-01 à PS-20 et TECH-01 à TECH-09 dans les tickets et commits associés |

## 13. Backlog infrastructure / exploitation (support du produit)

Ces éléments soutiennent la disponibilité, la sécurité et l'exploitation de PS STORE. Ils ne remplacent pas les stories fonctionnelles de la plateforme. Ils restent conditionnés aux choix budgétaires et à la validation de l'architecture.

| ID | Travail attendu | Priorité | Dépendance |
|---|---|---|---|
| SYS-01 | Cadrer charge, données, disponibilité et exigences d'exploitation. | P1 | — |
| SYS-02 | Comparer les offres Cloud, régions, latence et coûts. | P1 | SYS-01 |
| SYS-03 | Obtenir les devis Cloud, serveur secondaire, UPS et connectivité. | P1 | SYS-01 |
| SYS-04 | Préparer les environnements développement, test et production. | P1 | SYS-02 |
| SYS-05 | Durcir Linux : SSH par clé, MFA, pare-feu, comptes et correctifs. | P1 | SYS-04 |
| SYS-06 | Mettre en place WireGuard et les règles d'accès VPN. | P1 | SYS-04 |
| SYS-07 | Installer et documenter le serveur physique secondaire et son UPS. | P1 | SYS-03 |
| SYS-08 | Installer/configurer PostgreSQL, accès et maintenance. | P1 | SYS-04 |
| SYS-09 | Automatiser les sauvegardes chiffrées, rétention et copie hors site. | P1 | SYS-08 |
| SYS-10 | Tester et documenter la restauration de la base et des fichiers. | P1 | SYS-09 |
| SYS-11 | Déployer la supervision Prometheus et Grafana. | P1 | SYS-04 |
| SYS-12 | Centraliser les journaux avec une politique de rétention. | P2 | SYS-04 |
| SYS-13 | Définir alertes, seuils et canaux de notification. | P1 | SYS-11 |
| SYS-14 | Versionner et automatiser les configurations avec Ansible. | P2 | SYS-05, SYS-06 |
| SYS-15 | Mettre en place CI/CD avec tests et approbation avant production. | P1 | SYS-04 |
| SYS-16 | Définir le registre d'incidents, gravités et escalades. | P1 | SYS-11 |
| SYS-17 | Tester les scénarios de panne Cloud, VPN, serveur local et restauration. | P1 | SYS-07 à SYS-16 |
| SYS-18 | Réaliser un audit des accès, secrets, correctifs, journaux et règles réseau. | P1 | SYS-05 à SYS-16 |
| SYS-19 | Rédiger les procédures d'exploitation, maintenance et responsabilités. | P2 | SYS-16 |
| SYS-20 | Réaliser la revue Go/No-Go avant ouverture en production. | P1 | SYS-17 à SYS-19 |

---

**Note de gestion :** ce document constitue le Product Backlog initial. Les estimations, le contenu des sprints et les priorités doivent être inspectés et adaptés par l'équipe Scrum à chaque cycle. La présence d'une tâche dans le backlog ne signifie pas qu'elle est développée ou déployée.
