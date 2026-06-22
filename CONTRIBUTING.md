# Ajouter une recette au Carnet d'été

Le site est statique (GitHub → Netlify). **Toutes les recettes vivent dans `recipes.js`.**
On ne touche jamais à `index.html` (c'est l'app, pas les données).

## Publier une recette en 3 étapes

1. Ouvre le repo dans **Claude Code** (ou un éditeur).
2. Ajoute un objet recette à la fin du tableau `window.RECIPES` dans `recipes.js`.
3. `git commit` + `git push` sur `main` → **Netlify redéploie tout seul, c'est en ligne.**

> Si on veut se relire avant publication : ouvre une *pull request* au lieu de pousser sur `main`.

## Schéma d'une recette

```js
{
  id:"slug-unique",            // court, sans espace ni accent (sert d'identifiant)
  name:"Nom affiché",
  emoji:"🥗",                   // affiché tant qu'il n'y a pas de photo
  image:"images/slug.jpg",     // photo optionnelle, à déposer dans /images
  servings:4,                  // portions de référence
  tags:["végé","salade"],
  ingredients:[
    // cat = rayon : Fruits | Légumes | Herbes | Crèmerie | Boulangerie | Épicerie
    {item:"citron", qty:1, unit:"", cat:"Fruits"},
    {item:"huile d'olive", qty:0, unit:"", cat:"Épicerie"} // qty:0 → pas de quantité affichée
  ],
  steps:["Étape 1.","Étape 2."]
}
```

## Règles simples
- `id` **unique** (vérifie qu'aucune autre recette n'a le même).
- Une seule ligne par ingrédient : additionne les doublons d'une même recette
  (ex. l'ail utilisé à deux endroits → une ligne `qty:4`).
- Les basiques (sel, poivre, huile…) → `qty:0` pour ne pas afficher de quantité.
- Range chaque ingrédient dans le bon **rayon** (`cat`) pour que la liste de courses se trie bien.

## Astuce Claude
Donne ta recette en langage naturel à ton Claude et demande-lui de la
**formater selon le schéma ci-dessus**, puis colle l'objet dans `recipes.js`.
