Projet Angular
===

# Début d'un projet
Créer un nouveau projet :
```
ng new <titre>
```

Lancer l'application :
```
ng serve --open
```

Ajouter un component :
```
ng generate component <nom component>
```

Dans le fichier .html on gère l'affichage, dans le .ts les paramètres, les méthodes et le .css évident.

# Serveur json (BDD)

On crée le serveur :
```
npm init -y
```

On installe les dépendances :
```
npm install --save json-server
```

A la racine, dans le fichier ```package.json```, ajouter dans scripts la ligne :
```
"scripts": {
  "start-server": "json-server --watch db.json",
  "test": (...)
}
```

Créer un fichier ```db.json``` et on y colle :
```
{
  "table": [
    {
      "champ1": valeur,
      "champ2": valeur
    },
    {
      "champ1": valeur2,
      "champ2": valeur2
    }
  ]
}
```

Puis, on ```npm run``` ou ````npm run start-server```

# Steps

## On crée les différentes pages

```ng generate component <nom>```

## On crée les images de nos tables de BDD

```ng generate class <nom>```

# Les routes

Dans ```src/app/app-routing.module.ts```, exemple de route :

```
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

//{path:... , component: nameofcomponents}
const routes: Routes = [];

const routes: Routes = [
  {path:"", component: HomeComponent}
  {path:"about", component: AboutComponent}
];
```
avec *home* et *about* les noms de components.

# Importer son site html/css

C'est à ce moment là que l'on peut recoller tout notre site dans index.html.
On crée les autres pages avec des routes et des components.
Ne pas oublier de remettre le css global.

Faire un component pour le header, la navbar, le footer est intéressant pour pouvoir les import sur les autres pages.

# Créer la navbar

Les liens des *a* ne doivent pas être des ```href``` classiques, ils deviennent des ```routerLink="about"```, avec *about* le nom du path défini dans les routes.

En ajoutant l'option aux *li* ```routerLinkActive="active"``` et ```[routerLinkActiveOptions]="{exact:true}"``` au *li* actif, on a la gestion d'onglet actif.

# Ajouter un système de produits et de panier

**Attention : je n'ai pas fini cette partie, c'est n'imp**

## Ajouter un carousel pour afficher les produits

On crée un component Carousel.

On crée une classe CarouselItem : ```ng g class models/CarouselItem.model```

## Créer un service Store



## Créer un component Product dans models

Avec les attributs *name = ""*, *image = ""*, *id = 0*, *description = ""*, *price = 0*.

## Créer un component cart dans models

On lui ajoute les méthode *addToCart(product: Product)*, *deleteFromCart (index: number)* ainsi que les attributs *products: Product[]*, *_total: number*, *_discount: number*, *_size: number*.


