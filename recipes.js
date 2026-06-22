/* ============================================================
   CARNET D'ÉTÉ — DONNÉES DES RECETTES
   Édite CE fichier pour ajouter ou modifier une recette.
   Ne touche pas à index.html (c'est l'app, pas les données).

   Schéma d'une recette :
   {
     id:"slug-unique",            // identifiant court, sans espace/accent
     name:"Nom affiché",
     emoji:"🥗",                   // s'affiche si pas de photo
     image:"images/slug.jpg",     // photo optionnelle dans /images
     servings:4,                  // portions de référence
     tags:["végé","salade"],
     ingredients:[
       // cat = rayon : Fruits | Légumes | Herbes | Crèmerie | Boulangerie | Épicerie
       {item:"citron", qty:1, unit:"", cat:"Fruits"},
       {item:"huile d'olive", qty:0, unit:"", cat:"Épicerie"} // qty:0 = pas de quantité affichée
     ],
     steps:["Étape 1.","Étape 2."]
   }
   ============================================================ */
window.RECIPES = [
  {
    id:"green-goddess", name:"Green Goddess Salad", emoji:"🥗",
    image:"images/green-goddess.jpg", servings:4, temps:20, tags:["végé","salade"],
    ingredients:[
      {item:"chou vert", qty:600, unit:"g", cat:"Légumes"},
      {item:"concombre", qty:1, unit:"", cat:"Légumes"},
      {item:"cébettes (oignons verts)", qty:1, unit:"botte", cat:"Légumes"},
      {item:"épinards frais", qty:60, unit:"g", cat:"Légumes"},
      {item:"basilic frais", qty:20, unit:"g", cat:"Herbes"},
      {item:"ciboulette", qty:4, unit:"c.s.", cat:"Herbes"},
      {item:"ail", qty:2, unit:"gousses", cat:"Légumes"},
      {item:"citron", qty:1, unit:"", cat:"Fruits"},
      {item:"noix de cajou", qty:150, unit:"g", cat:"Épicerie"},
      {item:"levure maltée", qty:3, unit:"c.s.", cat:"Épicerie"},
      {item:"huile d'olive", qty:4, unit:"c.s.", cat:"Épicerie"},
      {item:"sel", qty:1, unit:"c.c.", cat:"Épicerie"},
    ],
    steps:[
      "Faire tremper les noix de cajou 15 min à l'eau chaude (ou une nuit à froid).",
      "Hacher très finement chou, concombre, cébettes et ciboulette dans un grand saladier.",
      "Mixer cajous égouttés, épinards, basilic, levure maltée, ail, jus de citron, huile, eau et sel jusqu'à une sauce lisse et bien verte.",
      "Verser la sauce, mélanger, rectifier sel/citron et servir frais."
    ]
  },
  {
    id:"pasteque-feta", name:"Pastèque & feta", emoji:"🍉",
    image:"images/pasteque-feta.jpg", servings:4, temps:10, tags:["végé","salade","sans cuisson"],
    ingredients:[
      {item:"pastèque", qty:800, unit:"g", cat:"Fruits"},
      {item:"feta", qty:200, unit:"g", cat:"Crèmerie"},
      {item:"menthe fraîche", qty:15, unit:"g", cat:"Herbes"},
      {item:"citron", qty:1, unit:"", cat:"Fruits"},
      {item:"huile d'olive", qty:2, unit:"c.s.", cat:"Épicerie"},
      {item:"olives noires", qty:80, unit:"g", cat:"Épicerie"},
    ],
    steps:[
      "Couper la pastèque en cubes, émietter la feta par-dessus.",
      "Parsemer de menthe ciselée et d'olives.",
      "Arroser d'huile d'olive et d'un trait de citron. Servir bien frais."
    ]
  },
  {
    id:"pates-courgette", name:"Pâtes froides citron & courgette", emoji:"🍋",
    image:"images/pates-courgette.jpg", servings:4, temps:25, tags:["végé","pâtes"],
    ingredients:[
      {item:"pâtes courtes", qty:350, unit:"g", cat:"Épicerie"},
      {item:"courgette", qty:2, unit:"", cat:"Légumes"},
      {item:"citron", qty:1, unit:"", cat:"Fruits"},
      {item:"parmesan", qty:60, unit:"g", cat:"Crèmerie"},
      {item:"basilic frais", qty:20, unit:"g", cat:"Herbes"},
      {item:"ail", qty:1, unit:"gousse", cat:"Légumes"},
      {item:"huile d'olive", qty:3, unit:"c.s.", cat:"Épicerie"},
      {item:"pignons de pin", qty:40, unit:"g", cat:"Épicerie"},
    ],
    steps:[
      "Cuire les pâtes, les rincer à l'eau froide et égoutter.",
      "Râper les courgettes crues, mélanger avec ail écrasé, zeste et jus de citron, huile.",
      "Ajouter les pâtes, le parmesan, les pignons et le basilic. Rectifier l'assaisonnement et réserver au frais."
    ]
  },
  {
    id:"gaspacho", name:"Gaspacho", emoji:"🍅",
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Gazpacho%20-%20La%20Ola.JPG?width=800", servings:4, temps:15, tags:["vegan","soupe","sans cuisson"],
    ingredients:[
      {item:"tomates mûres", qty:1, unit:"kg", cat:"Légumes"},
      {item:"concombre", qty:1, unit:"", cat:"Légumes"},
      {item:"poivron rouge", qty:1, unit:"", cat:"Légumes"},
      {item:"ail", qty:1, unit:"gousse", cat:"Légumes"},
      {item:"pain rassis", qty:50, unit:"g", cat:"Boulangerie"},
      {item:"vinaigre de Xérès", qty:1, unit:"c.s.", cat:"Épicerie"},
      {item:"huile d'olive", qty:4, unit:"c.s.", cat:"Épicerie"},
    ],
    steps:[
      "Couper grossièrement tomates, concombre et poivron.",
      "Mixer avec ail, pain trempé, vinaigre, huile et un peu d'eau froide.",
      "Saler, passer au chinois pour plus de finesse, et placer au frais au moins 2 h."
    ]
  },
  {
    id:"parmigiana", name:"Parmigiana", emoji:"🍆",
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Parmigiana%20di%20melanzane.jpg?width=800", servings:6, temps:120, tags:["végé","gratin","italien","four"],
    ingredients:[
      {item:"aubergines (grosses)", qty:3, unit:"", cat:"Légumes"},
      {item:"ail", qty:2, unit:"gousses", cat:"Légumes"},
      {item:"tomates pelées (ou passata)", qty:2, unit:"boîtes 400g", cat:"Épicerie"},
      {item:"mozzarella fiordilatte", qty:300, unit:"g", cat:"Crèmerie"},
      {item:"parmigiano reggiano", qty:100, unit:"g", cat:"Crèmerie"},
      {item:"provola fumée (option)", qty:100, unit:"g", cat:"Crèmerie"},
      {item:"basilic", qty:1, unit:"bouquet", cat:"Herbes"},
      {item:"huile d'olive", qty:0, unit:"", cat:"Épicerie"},
      {item:"huile de friture (arachide/tournesol)", qty:0, unit:"", cat:"Épicerie"},
      {item:"gros sel", qty:0, unit:"", cat:"Épicerie"},
      {item:"sel fin", qty:0, unit:"", cat:"Épicerie"},
      {item:"poivre", qty:0, unit:"", cat:"Épicerie"},
    ],
    steps:[
      "Mozzarella : coupe-la et mets-la à égoutter 1–2 h pour qu'elle ne rende pas d'eau.",
      "Aubergines : coupe en tranches de 5–7 mm, fais dégorger en passoire avec du gros sel par couches 45–60 min, rince vite et sèche très bien.",
      "Sauce : huile d'olive + ail écrasé sans le brûler, ajoute les tomates, sel et poivre, mijote 20–30 min, retire l'ail et ajoute le basilic déchiré.",
      "Friture : chauffe l'huile à 170–180°C et fais frire les tranches 1–2 min par face jusqu'à doré, puis égoutte sur papier absorbant.",
      "Montage (four 190°C) : fine couche de sauce, puis aubergines → sauce → mozzarella (+ provola) → parmigiano → basilic. Répète 2–3 couches, finis par sauce + parmigiano.",
      "Cuisson : 30–40 min jusqu'à une croûte dorée et des bords qui bullent.",
      "Repos : laisse reposer 20–30 min avant de couper. Encore meilleure réchauffée le lendemain."
    ]
  },
  {
    id:"salade-cyclades", name:"Salade verte des Cyclades", emoji:"🫒",
    image:"https://commons.wikimedia.org/wiki/Special:FilePath/Greece%20Food%20Horiatiki.JPG?width=800", servings:4, temps:15, tags:["végé","salade","grec"],
    ingredients:[
      {item:"concombre", qty:1, unit:"", cat:"Légumes"},
      {item:"batavia", qty:0.5, unit:"", cat:"Légumes"},
      {item:"oignons nouveaux (cébettes)", qty:5, unit:"", cat:"Légumes"},
      {item:"aneth", qty:1, unit:"bouquet", cat:"Herbes"},
      {item:"feta", qty:200, unit:"g", cat:"Crèmerie"},
      {item:"olives de Kalamata", qty:0, unit:"", cat:"Épicerie"},
      {item:"câpres", qty:0, unit:"", cat:"Épicerie"},
      {item:"citron", qty:1, unit:"", cat:"Fruits"},
      {item:"huile d'olive", qty:0, unit:"", cat:"Épicerie"},
      {item:"sel", qty:0, unit:"", cat:"Épicerie"},
      {item:"poivre", qty:0, unit:"", cat:"Épicerie"},
    ],
    steps:[
      "Émince le concombre et la batavia, coupe les cébettes en rondelles.",
      "Mélange dans un saladier avec l'aneth ciselé, les olives et les câpres.",
      "Ajoute la feta émiettée, assaisonne d'huile d'olive, jus de citron, sel et poivre."
    ]
  },
  {
    id:"salade-fenouil", name:"Fenouil, agrumes & pistaches", emoji:"🍊",
    image:"images/salade-fenouil.jpg", servings:4, temps:20, tags:["végé","salade"],
    ingredients:[
      {item:"fenouil", qty:1, unit:"bulbe", cat:"Légumes"},
      {item:"oignon rouge", qty:0.5, unit:"", cat:"Légumes"},
      {item:"pousses d'épinards", qty:2, unit:"poignées", cat:"Légumes"},
      {item:"pamplemousse", qty:1, unit:"", cat:"Fruits"},
      {item:"orange", qty:1, unit:"", cat:"Fruits"},
      {item:"pistaches émondées", qty:0, unit:"", cat:"Épicerie"},
      {item:"moutarde en grains", qty:0, unit:"", cat:"Épicerie"},
      {item:"vinaigre de framboise", qty:0, unit:"", cat:"Épicerie"},
      {item:"sirop d'érable", qty:0, unit:"", cat:"Épicerie"},
      {item:"levure maltée", qty:0, unit:"", cat:"Épicerie"},
      {item:"huile d'olive", qty:0, unit:"", cat:"Épicerie"},
      {item:"sel", qty:0, unit:"", cat:"Épicerie"},
      {item:"poivre", qty:0, unit:"", cat:"Épicerie"},
    ],
    steps:[
      "Émince finement le fenouil et l'oignon rouge (à la mandoline si possible).",
      "Pèle les agrumes à vif et prélève les suprêmes.",
      "Prépare la vinaigrette : moutarde, huile, vinaigre de framboise, sirop d'érable, levure maltée, sel et poivre.",
      "Dresse les pousses d'épinards, le fenouil et les agrumes, arrose de vinaigrette et parsème de pistaches."
    ]
  },
  {
    id:"courgettes-feta", name:"Courgettes pimentées sur lit de feta", emoji:"🌶️",
    image:"images/courgettes-feta.jpg", servings:4, temps:30, tags:["végé","poêle","grec"],
    ingredients:[
      {item:"courgettes", qty:4, unit:"", cat:"Légumes"},
      {item:"ail", qty:4, unit:"gousses", cat:"Légumes"},
      {item:"oignon rouge", qty:1, unit:"", cat:"Légumes"},
      {item:"feta", qty:300, unit:"g", cat:"Crèmerie"},
      {item:"yaourt grec", qty:200, unit:"g", cat:"Crèmerie"},
      {item:"citron", qty:1, unit:"", cat:"Fruits"},
      {item:"basilic frais", qty:0, unit:"", cat:"Herbes"},
      {item:"flocons de piment", qty:0, unit:"", cat:"Épicerie"},
      {item:"huile d'olive", qty:0, unit:"", cat:"Épicerie"},
      {item:"sel", qty:0, unit:"", cat:"Épicerie"},
      {item:"fleur de sel", qty:0, unit:"", cat:"Épicerie"},
    ],
    steps:[
      "Coupe les courgettes en rondelles et poêle-les avec l'ail, les flocons de piment, l'huile et le sel jusqu'à coloration.",
      "Mixe la feta avec l'ail, le jus de citron, l'huile d'olive et le yaourt grec pour une crème lisse.",
      "Étale la crème de feta dans l'assiette, dispose les courgettes par-dessus.",
      "Termine avec l'oignon rouge émincé, le basilic et un peu de fleur de sel."
    ]
  },
  {
    id:"boulettes-champignons", name:"Boulettes de champignons, sauce tomate", emoji:"🍝",
    image:"images/boulettes-champignons.jpg", servings:4, temps:50, tags:["végé","pâtes"],
    ingredients:[
      {item:"oignon", qty:1, unit:"", cat:"Légumes"},
      {item:"oignon jaune", qty:1, unit:"", cat:"Légumes"},
      {item:"ail", qty:5, unit:"gousses", cat:"Légumes"},
      {item:"champignons de Paris", qty:300, unit:"g", cat:"Légumes"},
      {item:"pomme de terre", qty:1, unit:"", cat:"Légumes"},
      {item:"persil plat", qty:12, unit:"branches", cat:"Herbes"},
      {item:"basilic", qty:0, unit:"", cat:"Herbes"},
      {item:"flocons d'avoine", qty:50, unit:"g", cat:"Épicerie"},
      {item:"chapelure", qty:50, unit:"g", cat:"Épicerie"},
      {item:"œuf", qty:1, unit:"", cat:"Crèmerie"},
      {item:"origan", qty:2, unit:"c.c.", cat:"Épicerie"},
      {item:"thym", qty:2, unit:"c.c.", cat:"Épicerie"},
      {item:"laurier", qty:1, unit:"feuille", cat:"Épicerie"},
      {item:"sucre", qty:1, unit:"c.c.", cat:"Épicerie"},
      {item:"concentré de tomate", qty:70, unit:"g", cat:"Épicerie"},
      {item:"coulis de tomates", qty:400, unit:"ml", cat:"Épicerie"},
      {item:"huile d'olive", qty:6, unit:"c.s.", cat:"Épicerie"},
      {item:"huile de friture", qty:0, unit:"", cat:"Épicerie"},
      {item:"spaghettis", qty:350, unit:"g", cat:"Épicerie"},
      {item:"sel", qty:0, unit:"", cat:"Épicerie"},
      {item:"poivre", qty:0, unit:"", cat:"Épicerie"},
    ],
    steps:[
      "Mixe oignon, ail, champignons et pomme de terre râpée, fais revenir pour assécher, puis laisse tiédir.",
      "Ajoute origan, thym, persil, flocons d'avoine, chapelure et l'œuf, assaisonne et forme des boulettes.",
      "Fais-les frire (ou dorer à la poêle) jusqu'à coloration, puis réserve.",
      "Sauce : fais revenir l'oignon jaune et l'ail, ajoute laurier, origan, thym, sucre, concentré et coulis, mijote 20 min.",
      "Cuis les spaghettis, nappe de sauce, ajoute les boulettes et le basilic."
    ]
  },
  {
    id:"haricots-grecs", name:"Haricots sauce tomate à la grecque", emoji:"🫘",
    image:"images/haricots-grecs.jpg", servings:4, temps:60, tags:["vegan","mijoté","grec"],
    ingredients:[
      {item:"haricots verts", qty:500, unit:"g", cat:"Légumes"},
      {item:"pommes de terre à chair ferme", qty:2, unit:"", cat:"Légumes"},
      {item:"oignons jaunes", qty:2, unit:"", cat:"Légumes"},
      {item:"concentré de tomate", qty:140, unit:"g", cat:"Épicerie"},
      {item:"coulis de tomates", qty:700, unit:"ml", cat:"Épicerie"},
      {item:"sucre", qty:1, unit:"c.c.", cat:"Épicerie"},
      {item:"origan séché", qty:1, unit:"c.c.", cat:"Épicerie"},
      {item:"huile d'olive", qty:6, unit:"c.s.", cat:"Épicerie"},
      {item:"sel", qty:1, unit:"c.c.", cat:"Épicerie"},
      {item:"riz (pour servir)", qty:0, unit:"", cat:"Épicerie"},
    ],
    steps:[
      "Fais revenir les oignons émincés dans l'huile d'olive.",
      "Ajoute les pommes de terre en morceaux et les haricots verts, mélange.",
      "Incorpore concentré, coulis, sucre, origan et sel, puis couvre d'eau à hauteur.",
      "Mijote 35–45 min jusqu'à ce que les légumes soient fondants. Sers avec du riz."
    ]
  },
  {
    id:"kisir", name:"Kısır (salade de boulgour turque)", emoji:"🌾",
    image:"images/kisir.jpg", servings:6, temps:40, tags:["vegan","salade","sans cuisson"],
    ingredients:[
      {item:"boulgour fin (köftelik)", qty:220, unit:"g", cat:"Épicerie"},
      {item:"oignons nouveaux", qty:8, unit:"", cat:"Légumes"},
      {item:"persil plat", qty:1, unit:"botte", cat:"Herbes"},
      {item:"menthe fraîche", qty:0.5, unit:"botte", cat:"Herbes"},
      {item:"concentré de tomate", qty:1.5, unit:"c.s.", cat:"Épicerie"},
      {item:"concentré de piment (biber salçası)", qty:1.5, unit:"c.s.", cat:"Épicerie"},
      {item:"huile d'olive", qty:0, unit:"", cat:"Épicerie"},
      {item:"mélasse de grenade (nar ekşisi)", qty:7, unit:"c.s.", cat:"Épicerie"},
      {item:"citron", qty:0.5, unit:"", cat:"Fruits"},
      {item:"sel", qty:0, unit:"", cat:"Épicerie"},
      {item:"poivre noir", qty:0, unit:"", cat:"Épicerie"},
      {item:"cumin", qty:0, unit:"", cat:"Épicerie"},
    ],
    steps:[
      "Verse l'eau (≈600 ml, moitié bouillante / moitié à température ambiante) sur le boulgour, couvre d'une assiette et laisse gonfler 15–30 min, jusqu'à ce que les grains soient tendres.",
      "Pendant ce temps, hache très finement les oignons nouveaux, le persil et la menthe.",
      "Mélange concentré de tomate, concentré de piment, huile d'olive, 3 c.s. de mélasse de grenade, sel, poivre et cumin en une sauce homogène.",
      "Étale le boulgour gonflé dans un grand plat, ajoute la sauce et pétris à la main jusqu'à une couleur uniforme.",
      "Incorpore d'abord la menthe et les oignons, mélange pour parfumer le boulgour, puis ajoute le persil. Pétris délicatement, sans écraser les herbes.",
      "Ajoute 3 c.s. de mélasse de grenade et le jus du demi-citron. Pétris à peine : trop travaillé, la chaleur des mains « cuit » le citron et rend le goût âcre.",
      "Transvase dans un saladier, arrose du dernier 1 c.s. de mélasse de grenade et sers frais, avec des feuilles de laitue. Afiyet olsun !"
    ]
  },
  {
    id:"creme-feta-betterave", name:"Crème de feta à la betterave", emoji:"🥣",
    image:"images/creme-feta-betterave.jpg", servings:4, temps:5, tags:["végé","sans cuisson"],
    ingredients:[
      {item:"betterave cuite", qty:130, unit:"g", cat:"Légumes"},
      {item:"feta", qty:200, unit:"g", cat:"Crèmerie"},
      {item:"citron", qty:1, unit:"", cat:"Fruits"},
      {item:"ail", qty:1, unit:"gousse", cat:"Légumes"},
      {item:"persil plat", qty:4, unit:"branches", cat:"Herbes"},
      {item:"huile d'olive", qty:0, unit:"", cat:"Épicerie"},
      {item:"aneth séché", qty:0, unit:"", cat:"Épicerie"},
      {item:"graines de sésame", qty:0, unit:"", cat:"Épicerie"},
    ],
    steps:[
      "Mets tous les ingrédients dans un mixeur, puis mixe jusqu'à obtenir une crème lisse.",
      "Sers à l'apéro avec un filet d'huile d'olive et des graines de sésame. Idéal avec des pitas, du pain grillé ou des bâtonnets de crudités."
    ]
  },
  {
    id:"salade-ete-croquante", name:"La salade qui sent l'été", emoji:"🥗",
    image:"images/salade-ete-croquante.jpg", servings:6, temps:20, tags:["végé","salade","sans cuisson"],
    ingredients:[
      {item:"radis", qty:1, unit:"botte", cat:"Légumes"},
      {item:"poivron rouge", qty:200, unit:"g", cat:"Légumes"},
      {item:"poivron jaune", qty:200, unit:"g", cat:"Légumes"},
      {item:"poivron vert", qty:200, unit:"g", cat:"Légumes"},
      {item:"tomates cerises", qty:200, unit:"g", cat:"Légumes"},
      {item:"concombre", qty:200, unit:"g", cat:"Légumes"},
      {item:"échalote", qty:1, unit:"", cat:"Légumes"},
      {item:"feta", qty:150, unit:"g", cat:"Crèmerie"},
      {item:"persil plat", qty:0, unit:"", cat:"Herbes"},
      {item:"ciboulette", qty:0, unit:"", cat:"Herbes"},
      {item:"menthe fraîche", qty:0, unit:"", cat:"Herbes"},
      {item:"citron", qty:1, unit:"", cat:"Fruits"},
      {item:"huile d'olive", qty:0, unit:"", cat:"Épicerie"},
      {item:"sel", qty:0, unit:"", cat:"Épicerie"},
      {item:"poivre", qty:0, unit:"", cat:"Épicerie"},
    ],
    steps:[
      "Coupe tous les légumes en tout petits dés : radis, poivrons, tomates cerises, concombre et échalote. C'est le secret d'une salade bien croquante.",
      "Cisèle finement les herbes (persil, ciboulette, menthe) et ajoute-les aux légumes.",
      "Émiette la feta par-dessus.",
      "Assaisonne d'huile d'olive, de jus de citron, de sel et de poivre. Mélange et ajuste le reste à l'œil. Sers bien frais."
    ]
  }
];
