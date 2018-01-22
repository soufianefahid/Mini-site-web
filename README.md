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