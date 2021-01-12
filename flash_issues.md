## Extinction MiniJeux - Problèmes avec flash player

**Préambule**

Suite à l'arrêt de Flash Player depuis le 31 décembre 2020 renforcé par la désactivation de son exécution depuis le 12 janvier 2021, certains de nos joueurs ne peuvent plus utiliser le jeu même sur version exécutable.

La solution disponible vous est présentée dessous mais nous tenons à vous rappeler que toute modification sur votre système est de **VOTRE** responsabilité et que vous acceptez volontairement de continuer à exécuter Flash sur votre système.

**Solution**  
Il faut se rendre dans le dossier de l'application Electron.

Windows:
`C:\Users\<user>\AppData\Roaming\Extinction-MiniJeux`  
Linux:
`/home/<user>/.config/Extinction-MiniJeux`  
OS X:
`/Users/<user>/Library/Application Support/Extinction-MiniJeux`

Puis dans le dossier `Pepper Data/Shockwave Flash/`et créer le dossier `System` s'il n'existe pas déjà puis créer le fichier `mms.cfg` avec ce contenu :
```
EnableAllowList=1
AllowListUrlPattern=https://*.extinction-minijeux.fr/
AllowListUrlPattern=xmlsocket://178.33.183.149:5555
AllowListRootMovieOnly=1
```

Vous pouvez trouver le fichier ici (le télécharger et le glisser/déposer dans le bon dossier) : https://github.com/extinction-minijeux/extinction-package/blob/master/mms.cfg

Exemple de chemin complet vers le fichier sur Windows : `C:\Users\<user>\AppData\Roaming\Extinction-MiniJeux\Pepper Data\Shockwave Flash\System\mms.cfg`

Vous l'aurez remarqué ce ficher de configuration permet d'autoriser une liste de domaines, ip, adresses à exécuter Flash Player sur votre ordinateur (ici on autorise extinction-minijeux.fr et notre serveur de jeu).

*Ici on autorise uniquement l'application exécutable Extinction-MiniJeux de pouvoir exécuter du contenu Flash, nous n'apportons aucune aide pour d'autres applications ou navigateurs.*

**Contact**  
Par mail : contact@extinction-minijeux.fr

**License**  
GNU GPL V3.0 - Disponible sur notre [github](https://github.com/extinction-minijeux/extinction-package/blob/master/LICENSE)
