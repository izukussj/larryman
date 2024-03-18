# Larryman

Larryman est une extension Chrome qui intègre un chatbot intelligent. Capable de fournir des réponses instantanées et une assistance directement dans votre navigateur, Larryman est l'outil idéal pour obtenir des définitions, traduire du texte, et engager des conversations basées sur votre contenu web actuel.

## Fonctionnalités

- **Définition de Termes** : Obtenez des définitions instantanées pour le texte sélectionné.
- **Réponses Instantanées** : Posez des questions et recevez des réponses en temps réel.
- **Traduction Dynamique** : Traduisez le texte entre le français et l'anglais directement.
- **Conversation Intelligente** : Interactions basées sur le contexte du texte sélectionné.
- **Interface Utilisateur Intuitive** : Conception épurée et facile à naviguer.

## Débuter

### Prérequis

- Google Chrome
- Node.js

### Installation

1. Clonez ce dépôt : `git clone https://github.com/votreUsername/Larryman.git`
2. Accédez au répertoire de l'extension : `cd Larryman`

### Configuration du Serveur

Le serveur est nécessaire pour traiter les requêtes du chatbot.

1. Accédez au répertoire du serveur : `cd server`
2. Installez les dépendances Node.js : `npm install`
3. Lancez le serveur : `node server.js`

Votre serveur devrait maintenant être en cours d'exécution sur `http://localhost:3000`.

### Chargement de l'Extension

1. Ouvrez Google Chrome et naviguez vers `chrome://extensions/`
2. Activez le mode développeur en haut à droite de la page.
3. Cliquez sur "Charger l'extension non empaquetée" et sélectionnez le dossier de l'extension Larryman.

### Utilisation

Pour interagir avec Larryman, sélectionnez du texte sur une page web, cliquez droit pour ouvrir le menu contextuel, et choisissez l'une des options fournies par l'extension.

## Technologies Utilisées

- **Frontend** : HTML5, CSS3, JavaScript
- **Backend** : Node.js, Express, API OpenAI (GPT-3.5-Turbo)

## Améliorations Futures

Nous envisageons d'ajouter des fonctionnalités telles que la personnalisation de l'interface, un support multilingue élargi, et des fonctionnalités basées sur les comptes utilisateurs.

## Contribuer

Les contributions à Larryman sont toujours les bienvenues. N'hésitez pas à fork le projet, créer une branche pour votre contribution, et soumettre une pull request.


## Contact

Seydina DIOP
seydina.laye85@gmail.com