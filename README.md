## Partie 1 : Git


Pour initialiser un dépôt Git, utilisez la commande suivante : 

```bash 
git init
```

Cela crée un nouveau dépôt Git vide.

### 2. Création du projet Express

Créez un nouveau répertoire pour votre application et initialisez-le avec npm :

```bash
mkdir app
cd app
npm init -y
```

Installez Express et dotenv pour votre projet :

```bash
npm install express 
npm install dotenv
```

Créez un fichier `.gitignore` pour ignorer les fichiers non nécessaires :

```bash
touch .gitignore
```

Vous pouvez utiliser un modèle de fichier `.gitignore` pour Node.js disponible [ici](https://github.com/github/gitignore/blob/main/Node.gitignore).

### 3. Création du serveur

Créez un fichier `server.js` et ajoutez le code suivant :

```js
const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.send(`Hello world`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

```

### 4. Premier Commit

Ajoutez tous les fichiers au dépôt et faites un commit :

```bash
git add .
git commit -m "Initial commit"
```

### 5. Lier le Dépôt Local au Dépôt Distant

Ajoutez le dépôt distant et poussez les modifications :

```bash
git remote add origin <url du dépôt distant> 
git push -u origin master
```

## Partie 2 : Docker

### 1. Création du Fichier Dockerfile

Créez un fichier `Dockerfile` :

```bash
touch Dockerfile
```

### 2. Édition du Fichier Dockerfile

Ajoutez le contenu suivant à votre `Dockerfile` :

```Dockerfile
FROM node:21

WORKDIR /app

COPY ./app/package*.json ./

RUN npm install

COPY ./app .

EXPOSE 3000

CMD ["node", "server.js"]
```

#### Explications des Commandes Dockerfile

- `FROM node:21`
    
    - Utilise l'image officielle Node.js version 21 comme base pour construire l'image Docker. 
- `WORKDIR /app`
    
    - Définit le répertoire de travail pour les commandes suivantes. Toutes les commandes suivantes seront exécutées dans ce répertoire. Cela crée également le répertoire `/app` dans le conteneur si ce n'est pas déjà fait.
- `COPY ./app/package*.json ./`
    
    - Copie les fichiers `package.json` et `package-lock.json` depuis le répertoire local `./app` vers le répertoire de travail `/app` dans l'image Docker. Ces fichiers sont nécessaires pour installer les dépendances de l'application.
- `RUN npm install`
    
    - Exécute la commande `npm install` dans le répertoire de travail pour installer toutes les dépendances spécifiées dans `package.json`. 
- `COPY ./app .`
    
    - Copie tous les fichiers et répertoires du répertoire local `./app` vers le répertoire de travail `/app` dans l'image Docker. Cela inclut le code source et autres fichiers nécessaires pour exécuter l'application.
- `EXPOSE 3000`
    
    - Informe Docker que l'application à l'intérieur du conteneur écoutera sur le port 3000. 
- `CMD ["node", "server.js"]`
    
    - Définit la commande à exécuter lorsque le conteneur est démarré. Ici, elle lance le serveur en utilisant Node.js pour exécuter le fichier `server.js`.

### 3. Construction de l'Image Docker

Construisez l'image Docker avec la commande suivante :

```bash
docker build -t <mon-image> .
```

### 4. Lancement du Conteneur

Démarrez le conteneur en mappant le port 3000 :

```bash
docker run -p 3000:3000 <mon-image>
```

### 5. Vérification du Conteneur

Vérifiez que le conteneur est en cours d'exécution :

```bash
docker ps
```

### 6. Arrêter et Supprimer le Conteneur

Pour arrêter et supprimer le conteneur, utilisez :

```bash
docker stop <container_id || container_name> 
docker rm <container_id || container_name>
```

Remplacez `<container_id>` par l'identifiant du conteneur ou remplacez `<container_name>` par le nom du conteneur

## Commit pour Docker

Après avoir configuré Docker, ajoutez et commettez les modifications :

```bash
git add . 
git commit -m "add: Dockerfile"
git push
```

