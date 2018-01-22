1- Presentation:

  Ceci est un projet réalisé avec angularJS.
  C'est un mini site contenant:

    Header: ----> Component  (partial_template/app-header)

        Sélecteur de langue pour l'interface
        Chargement des langues via un fichier json
        Récupération de la langue via un cookie ou la langue du navigateur
        Changement en live de la langue (utilisation ngTranslate)

    Barre de navigation contenant 3 onglets: ----> Component (pages/page-principale)

      Page principal (About me):  ----> Component (partial_template/about-me)

      Page formulaire: ----> Component : (partial_template/register)

        Nom, prénom , date de naissance, email, opt-in, etc
        Affichage des erreurs
        Affichage d'une notification dès que l'enregistrement a réussi
        Enregistrement en cookie (pas de service)

      Page recherche: ----> Component : (partial_template/item-list)

        Galerie photo (données dans un fichier json)
        Vue détail de la photo en popup
        Dropdown permettant de filtrer les photos par catégorie
        Champ de recherche
        Permet de filtrer les photos via un tag, catégorie, nom

2- Documentation:

  Les principaux composants de notre architecture sont "partial_templates", "pages", "core"

  1-patial_templates: contient tous les composants qu'on utilisera dans la page principale(
    "app-header": Le header de l'application,

    "about-me": Le composant pour la section about me,

    "item-list": Le composant pour notre page de recherche,

    "register": Le composant pour notre page d'inscription

  )

  2-Pages: Contient un seul composant pour le moment et qui fait appels a tous les composants de partial_templates

  3-Core: Un module qui contient tous les services de l'application

  Mais on a aussi d'autres dossiers très importants (Languages - data - partial_templates/layout)

  Pour l'internalization de l'application pour le moment j'utilise que deux langues (fr, en_US) mais elle est parfaitement extensible pour supporter d'autre langue je récupère
  les informations de la plateforme (lables, texts, ..)depuis les fichiers de Languages
  et data depuis data/items

  partial_template/layouts: Contient le layout pour le pop-up du module item-list


  To Start the server use : "npm start"