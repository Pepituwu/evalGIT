# Compte rendu GIT

## Initialisation 

``` shell
cd Documents/
git clone https://github.com/Pepituwu/evalGIT.git
cd evalGIT/ 

git config user.email "mon email"
git config user.name "Pepituwu"
```

## Création et modification de ma branche (CSS)

Dans le terminal : 

``` shell 
git checkout -b css
mkdir css
cd css/
touch style.css
```

Dans les fichiers css (style et mobile-wireframe) : 

``` css 
* {
    margin: 0%;
    padding : 0%;
}

/* ... allez voir sur github le reste */
```

De retour dans notre terminal :

``` shell 
cd ..
git add css 
git commit -m "Upload du css"
git push -u origin css
```

## Mise en commun

``` shell 
git pull 
git checkout release1
git merge css
git commit -m "Merge CSS"
git push -u origin release1
```

Une fois que tout le monde a fini : 
`git pull`
