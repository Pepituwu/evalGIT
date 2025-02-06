bonjour , c'est le md d'ADAM MAHFOUF  je mettrait toute les commande et les explication de commande 

### 1. Verifier ou installer GIT sur la machine   

Verifier l'installation :   
`git --version`      
   
 ```shell
apt install git 
git --version 
```
2. Creer le fichier concerné :
```shell
cd documents
mkdir groupe2 
cd groupe2
```
3. Initier git :
```shell
git init
```
 
### 2.  Etant donné qu'oscar a crée le deposite je n'ai plus qu'a me connecter et le copier 

```git clone https://github.com/Pepituwu/evalGIT.git``` 

on a copié le depot , maintenant on va se deplacer dans le dossier 

`ls`   
`cd evalGIT/` 

une fois dans le dossier on crée une branche   

Authentification 

```shell 
git config user.email adam1mahfouf@gmail.com
git config user.name demdem45 
```
par la suite je crée les branches que je vais utilisé 

`git checkout -b 'nom' `   
`git checkout -b 'html' `   

Etant donné que je suis énormement tete en
l'air je les appelé 'nom' et 'html'    
je les renomme donc    

`git branch -m nom html1`  
`git branch -m html html2`    

je nomme un fichier html1 et l'autre html2 car il y'auras plusieur version d'essaie    
je me place dans ma branche html1 pour pouvoir bien placé ma premiere version 

*`git checkout 'html1'`   
grace a WinSCP je viens introduire le fichier html dans ma marchine virtuelle 

maintenant que mon fichier est dans ma VM je vais push mon html1 avec ma branche pour que mes collegues regardent ce que j'ai fait 

``` shell
git add index.html
git commit -m ceci-est-mon-html
git push -u origin html1  
 ```

je confirme avec eux la reception de mon travaille ; tout est bon , maintenant je peux faire du versionning 

je vais voir ce que mon collegue a fait en css avec la commande 
`git pull origin css`

j'ai retravaillé sur une version 2 que je viens reinserré dans git
 `git checkout 'html2'`  
 ``` shell
git add index
git commit -m ceci-est-mon-html
git push -u origin html2 
 ```

une fois que les collaborateur m'ont proposé des motification 
je vais introduire la version finale dnas la la branche release 
