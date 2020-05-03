## Extinction MiniJeux - Package

![Node.js CI](https://github.com/extinction-minijeux/extinction-package/workflows/Node.js%20CI/badge.svg?branch=master)

**Téléchargement**  
- Directement sur nos [releases github](https://github.com/extinction-minijeux/extinction-package/releases)
- Sur notre projet [sourceforge](https://sourceforge.net/projects/extinction-minijeux/files/)

**Compilation**  
*Le projet utilise [electron](https://www.electronjs.org/) et [electron-forge](https://www.electronforge.io/) ainsi que le plugin [PepperFlashPlugin](https://www.electronjs.org/docs/tutorial/using-pepper-flash-plugin)*   

Le code source principal se trouve dans `src/index.js` et plus exactement le bout de code suivant : `mainWindow.loadURL("https://www.extinction-minijeux.fr/executable.html");`  
Electron nous permet alors d'embarquer un "mini-navigateur" avec le plugin flash et de charger la version navigateur sur un installateur pour Windows et Mac (ce qui explique donc qu'il fasse environ 70Mo).

Pour compiler, il suffit de cloner le repo, faire un `npm install` puis `npm start` pour démarrer en temps réel ou `npm make` pour compiler (cela compilera en fonction du `package.json` et de votre machine).

**Pourquoi Electron ?**  
Suite à des problèmes de fluidité rencontrés avec Adobe Flash Player lorsque nous compilons depuis Adobe Animate 2020 ou Adobe Flash CS6, seule la version sur navigateur semble être fluide et corriger tous les problèmes. Electron nous permet alors de corriger ces problèmes.

**Pourquoi Sourceforge et Github ?**  
Nous n'avons pas les moyens de faire signer notre code, surtout pour la version Flash qui vise à disparaître, notre nom de domaine n'est pas reconnu comme "de confiance" pour les téléchargements car très peu de téléchargements ont été effectués. La publication sur Sourceforge et sur Github vous prouve qu'il n'y a aucun virus ou code malveillant dans ce que nous vous fournissons.

**Contact**  
Par mail : contact@extinction-minijeux.fr

**License**  
GNU GPL V3.0 - Disponible sur notre [github](https://github.com/extinction-minijeux/extinction-package/blob/master/LICENSE)

## Extinction MiniJeux - Release notes
**V1.0.0 - 03/05/2020** (les futures versions seront incrémentales)  
- Ajout de l'option Zoom qui permet de retrouver le `100%` et `Afficher tout` de Flash
- Publication du code source et création du projet sur Sourceforge

**V1.0.0 - 02/05/2020**  
- Création de l'installateur pour corriger les problèmes de fluidité, de mises à jour et d'antivirus.  
- Création de la page Sourceforge qui assure une sécurité du code via l'analyse de Bitdefender  
- L'installateur est plus lourd que l'ancienne version .exe car il embarque le système "Electron" qui est un "pseudo-navigateur" intégré au sein d'une application logicielle, cela nous permet de corriger les problèmes de fluidité rencontrés par nos joueurs.
