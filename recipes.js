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
  },
  {
    id:"wrap-frais", name:"Wrap frais (poulet ou végé)", emoji:"🌯",
    image:"images/wrap-frais.jpg", servings:4, temps:25, tags:["végé","poêle","wrap"],
    ingredients:[
      {item:"tortillas de blé (wraps)", qty:8, unit:"", cat:"Boulangerie"},
      {item:"émincé végétal (ou blanc de poulet)", qty:400, unit:"g", cat:"Crèmerie"},
      {item:"laitue (ou jeunes pousses)", qty:0.5, unit:"", cat:"Légumes"},
      {item:"concombre", qty:1, unit:"", cat:"Légumes"},
      {item:"tomate", qty:2, unit:"", cat:"Légumes"},
      {item:"carotte", qty:2, unit:"", cat:"Légumes"},
      {item:"avocat", qty:1, unit:"", cat:"Légumes"},
      {item:"oignon rouge", qty:1, unit:"", cat:"Légumes"},
      {item:"graines de grenade", qty:1, unit:"", cat:"Fruits"},
      {item:"ail", qty:1, unit:"gousse", cat:"Légumes"},
      {item:"coriandre fraîche (ou menthe)", qty:0, unit:"", cat:"Herbes"},
      {item:"yaourt grec", qty:200, unit:"g", cat:"Crèmerie"},
      {item:"citron", qty:1, unit:"", cat:"Fruits"},
      {item:"paprika fumé", qty:0, unit:"", cat:"Épicerie"},
      {item:"cumin", qty:0, unit:"", cat:"Épicerie"},
      {item:"huile d'olive", qty:0, unit:"", cat:"Épicerie"},
      {item:"sel", qty:0, unit:"", cat:"Épicerie"},
      {item:"poivre", qty:0, unit:"", cat:"Épicerie"},
    ],
    steps:[
      "Assaisonne l'émincé végétal (ou le poulet coupé en lanières) avec un peu d'huile, le paprika fumé, le cumin, du sel et du poivre.",
      "Poêle à feu vif jusqu'à coloration : 5–6 min pour le végé, 8–10 min pour le poulet (bien cuit à cœur). Réserve.",
      "Sauce : mélange le yaourt grec, l'ail écrasé, le jus de citron, du sel et du poivre.",
      "Prépare les crudités : émince la laitue, le concombre, la tomate et l'oignon rouge ; râpe les carottes ; tranche l'avocat.",
      "Tiédis légèrement les tortillas (poêle ou micro-ondes) pour qu'elles roulent sans casser.",
      "Tartine chaque wrap de sauce, garnis de crudités, de protéine, de graines de grenade et de coriandre. Roule bien serré, replie une extrémité, coupe en deux et sers frais."
    ]
  },
  {
    id:"houmous", name:"Houmous", emoji:"🧆",
    image:"images/houmous.jpg", servings:4, temps:10, tags:["vegan","sans cuisson"],
    ingredients:[
      {item:"pois chiches cuits", qty:400, unit:"g", cat:"Épicerie"},
      {item:"ail", qty:1, unit:"gousse", cat:"Légumes"},
      {item:"citron", qty:0.5, unit:"", cat:"Fruits"},
      {item:"tahini", qty:3, unit:"c.s.", cat:"Épicerie"},
      {item:"glaçons", qty:3, unit:"", cat:"Épicerie"},
      {item:"persil plat", qty:3, unit:"branches", cat:"Herbes"},
      {item:"huile d'olive", qty:0, unit:"", cat:"Épicerie"},
      {item:"sel", qty:0, unit:"", cat:"Épicerie"},
      {item:"cumin", qty:0, unit:"", cat:"Épicerie"},
      {item:"sumac", qty:0, unit:"", cat:"Épicerie"},
    ],
    steps:[
      "Pèle les pois chiches pour une texture extra-lisse.",
      "Mets les pois chiches, l'ail, le sel, le tahini et l'huile d'olive dans un mixeur, presse le jus de citron et mixe à vitesse moyenne.",
      "Ajoute les glaçons progressivement pour garder le mélange frais et obtenir une texture crémeuse. Ajuste avec plus de citron, tahini ou sel si besoin.",
      "Sers avec une garniture de sumac, cumin et persil, et un filet d'huile d'olive."
    ]
  },
  {
    id:"salade-orzo", name:"Salade d'orzo au tzatziki", emoji:"🥗",
    image:"images/salade-orzo.jpg", servings:4, temps:25, tags:["végé","salade","pâtes","grec"],
    ingredients:[
      {item:"orzo (risoni / pâtes-riz)", qty:400, unit:"g", cat:"Épicerie"},
      {item:"concombre", qty:1, unit:"", cat:"Légumes"},
      {item:"oignon rouge", qty:1, unit:"", cat:"Légumes"},
      {item:"ail", qty:1, unit:"gousse", cat:"Légumes"},
      {item:"menthe fraîche", qty:0.5, unit:"botte", cat:"Herbes"},
      {item:"yaourt grec", qty:250, unit:"g", cat:"Crèmerie"},
      {item:"feta", qty:150, unit:"g", cat:"Crèmerie"},
      {item:"citron", qty:2, unit:"", cat:"Fruits"},
      {item:"huile d'olive", qty:0, unit:"", cat:"Épicerie"},
      {item:"zaatar", qty:0, unit:"", cat:"Épicerie"},
      {item:"fleur de sel", qty:0, unit:"", cat:"Épicerie"},
      {item:"poivre", qty:0, unit:"", cat:"Épicerie"},
    ],
    steps:[
      "Cuis l'orzo en eau bouillante salée selon le paquet, égoutte et rince à l'eau froide pour le refroidir. Réserve.",
      "Coupe le concombre en petits dés, émince finement l'oignon rouge, râpe ou hache l'ail et cisèle la menthe.",
      "Dans un saladier, mélange l'orzo froid avec le concombre, l'oignon rouge, l'ail et la menthe.",
      "Ajoute le yaourt grec, le jus de citron, un filet d'huile d'olive, la fleur de sel, le poivre et le zaatar. Mélange bien pour tout enrober.",
      "Incorpore la moitié de la feta émiettée, puis parsème le reste sur le dessus. Termine par un peu de zaatar, quelques feuilles de menthe et un tour de poivre. Sers frais."
    ]
  },
  {
    id:"gyros-pleurotes", name:"Gyros de pleurotes", emoji:"🥙",
    image:"images/gyros-pleurotes.jpg", servings:4, temps:80, tags:["végé","four","grec"],
    ingredients:[
      {item:"pleurotes", qty:200, unit:"g", cat:"Légumes"},
      {item:"champignons de Paris", qty:100, unit:"g", cat:"Légumes"},
      {item:"oignon rouge", qty:1.5, unit:"", cat:"Légumes"},
      {item:"concombre", qty:1, unit:"", cat:"Légumes"},
      {item:"tomates", qty:2, unit:"", cat:"Légumes"},
      {item:"salade (laitue)", qty:0.5, unit:"", cat:"Légumes"},
      {item:"ail", qty:4, unit:"gousses", cat:"Légumes"},
      {item:"aneth", qty:0.5, unit:"bouquet", cat:"Herbes"},
      {item:"menthe fraîche", qty:10, unit:"feuilles", cat:"Herbes"},
      {item:"citron", qty:2, unit:"", cat:"Fruits"},
      {item:"yaourt grec", qty:150, unit:"g", cat:"Crèmerie"},
      {item:"pitas", qty:4, unit:"", cat:"Boulangerie"},
      {item:"frites (surgelées)", qty:0, unit:"", cat:"Épicerie"},
      {item:"sauce soja", qty:3, unit:"c.s.", cat:"Épicerie"},
      {item:"origan séché", qty:2, unit:"c.c.", cat:"Épicerie"},
      {item:"paprika fumé", qty:1, unit:"c.c.", cat:"Épicerie"},
      {item:"cumin", qty:0.5, unit:"c.c.", cat:"Épicerie"},
      {item:"huile d'olive", qty:0, unit:"", cat:"Épicerie"},
      {item:"fleur de sel", qty:0, unit:"", cat:"Épicerie"},
    ],
    steps:[
      "Préchauffe le four à 180°C (th. 6).",
      "Marinade : épluche et presse 3 gousses d'ail, puis mélange dans un saladier avec la sauce soja, le jus d'½ citron, l'origan, le paprika fumé, le cumin, 1 c.s. d'eau et 5 c.s. d'huile d'olive.",
      "Légumes rôtis : effiloche les pleurotes en lanières à la main, coupe les champignons en quatre, émince l'oignon rouge. Mets champignons et oignon dans la marinade et mélange bien.",
      "Étale les légumes sur une plaque et enfourne à mi-hauteur 20 min.",
      "Tzatziki : râpe le concombre et presse-le pour retirer l'eau. Presse 1 grosse gousse d'ail, hache l'aneth et la menthe. Mélange avec le yaourt grec, 2 c.s. de jus de citron, 3 c.s. d'huile d'olive et une pincée de fleur de sel. Laisse reposer au frais au moins 30 min.",
      "Assemble : garnis chaque pita de salade, tomates et oignon rouge, ajoute les pleurotes rôties et quelques cuillerées de tzatziki. Sers avec des frites."
    ]
  },
  {
    id:"nuggets-chou-fleur", name:"Nuggets de chou-fleur façon fish & chips", emoji:"🍤",
    image:"images/nuggets-chou-fleur.jpg", servings:4, temps:75, tags:["vegan","friture"],
    ingredients:[
      {item:"chou-fleur", qty:500, unit:"g", cat:"Légumes"},
      {item:"pommes de terre", qty:500, unit:"g", cat:"Légumes"},
      {item:"oignon rouge", qty:0.5, unit:"", cat:"Légumes"},
      {item:"ciboulette", qty:0, unit:"", cat:"Herbes"},
      {item:"yaourt", qty:150, unit:"g", cat:"Crèmerie"},
      {item:"lait", qty:50, unit:"ml", cat:"Crèmerie"},
      {item:"farine", qty:200, unit:"g", cat:"Épicerie"},
      {item:"bière", qty:250, unit:"ml", cat:"Épicerie"},
      {item:"cornichons", qty:4, unit:"", cat:"Épicerie"},
      {item:"câpres", qty:2, unit:"c.c.", cat:"Épicerie"},
      {item:"moutarde", qty:2, unit:"c.c.", cat:"Épicerie"},
      {item:"feuille de nori", qty:1, unit:"", cat:"Épicerie"},
      {item:"miso blanc", qty:1, unit:"c.c.", cat:"Épicerie"},
      {item:"bicarbonate de soude", qty:1, unit:"c.c.", cat:"Épicerie"},
      {item:"ail en poudre", qty:0.5, unit:"c.c.", cat:"Épicerie"},
      {item:"paprika fumé", qty:0.5, unit:"c.c.", cat:"Épicerie"},
      {item:"huile d'olive", qty:0, unit:"", cat:"Épicerie"},
      {item:"huile de friture", qty:0, unit:"", cat:"Épicerie"},
      {item:"sel", qty:0, unit:"", cat:"Épicerie"},
    ],
    steps:[
      "Préchauffe le four à 200°C (th. 6-7). Coupe les pommes de terre en deux, dépose-les sur une plaque, arrose d'huile d'olive et de sel, mélange et enfourne 30 min.",
      "Sauce : hache l'oignon rouge, les cornichons et les câpres (au mixeur ou au couteau), hache la ciboulette. Mélange le tout avec la moutarde et le yaourt.",
      "Nuggets : détaille le chou-fleur en fleurettes et cuis-les 10 min à la vapeur. Réserve. Dans un saladier, mélange la farine, le bicarbonate, l'ail en poudre, le paprika, le sel et la feuille de nori émiettée. Ajoute le miso, la bière et le lait, puis mélange jusqu'à une pâte lisse.",
      "Chauffe l'huile de friture. Trempe les fleurettes dans la pâte à beignets, plonge-les dans l'huile et laisse dorer sur toutes les faces.",
      "Sers les nuggets avec les pommes de terre au four et la sauce."
    ]
  },
  {
    id:"gratin-haricots-mozza", name:"Gratin de haricots aux tomates & mozzarella", emoji:"🧀",
    image:"images/gratin-haricots-mozza.jpg", servings:4, temps:40, tags:["végé","gratin","four"],
    ingredients:[
      {item:"tomates", qty:2, unit:"", cat:"Légumes"},
      {item:"ail", qty:3, unit:"gousses", cat:"Légumes"},
      {item:"basilic frais", qty:1, unit:"poignée", cat:"Herbes"},
      {item:"mozzarella râpée", qty:200, unit:"g", cat:"Crèmerie"},
      {item:"haricots blancs cuits", qty:400, unit:"g", cat:"Épicerie"},
      {item:"concentré de tomate", qty:70, unit:"g", cat:"Épicerie"},
      {item:"paprika doux", qty:1, unit:"c.c.", cat:"Épicerie"},
      {item:"origan séché", qty:0.5, unit:"c.c.", cat:"Épicerie"},
      {item:"thym", qty:0.5, unit:"c.c.", cat:"Épicerie"},
      {item:"pain (pour servir)", qty:0, unit:"", cat:"Boulangerie"},
      {item:"huile d'olive", qty:0, unit:"", cat:"Épicerie"},
      {item:"sel", qty:0, unit:"", cat:"Épicerie"},
      {item:"poivre", qty:0, unit:"", cat:"Épicerie"},
    ],
    steps:[
      "Épluche et hache l'ail, détaille les tomates en dés. Préchauffe le four à 210°C (th. 7).",
      "Dans une poêle (idéalement qui va au four), fais revenir l'ail et les tomates dans 3 c.s. d'huile d'olive pendant 5 min.",
      "Ajoute le concentré de tomate, les haricots blancs, le paprika, l'origan et le thym ; poursuis 5 min en écrasant un peu les haricots à la spatule. Ajoute le basilic, sale, poivre et mélange.",
      "Si besoin transvase dans un plat à four, puis répartis la mozzarella râpée par-dessus.",
      "Enfourne 15 min ; si la mozzarella n'est pas assez gratinée, passe sous le gril quelques minutes. Sers avec des tranches de pain grillées."
    ]
  },
  {
    id:"caviar-aubergines-tahini", name:"Caviar d'aubergines au tahini", emoji:"🍆",
    image:"images/caviar-aubergines-tahini.jpg", servings:4, temps:60, tags:["vegan","four","sans cuisson"],
    ingredients:[
      {item:"aubergines", qty:2, unit:"", cat:"Légumes"},
      {item:"oignon nouveau", qty:1, unit:"", cat:"Légumes"},
      {item:"ail", qty:2, unit:"gousses", cat:"Légumes"},
      {item:"citron", qty:1, unit:"", cat:"Fruits"},
      {item:"persil plat", qty:1, unit:"botte", cat:"Herbes"},
      {item:"tahini", qty:3, unit:"c.s.", cat:"Épicerie"},
      {item:"cumin", qty:0, unit:"", cat:"Épicerie"},
      {item:"huile d'olive", qty:0, unit:"", cat:"Épicerie"},
      {item:"sel", qty:0, unit:"", cat:"Épicerie"},
    ],
    steps:[
      "Préchauffe le four à 200°C (th. 6-7). Lave les aubergines et pique la peau à la fourchette.",
      "Enfourne-les sur une plaque 50 min. En fin de cuisson, tu peux allumer le gril pour faire griller la peau quelques minutes.",
      "Épluche les aubergines et mets la chair dans un mixeur avec l'oignon nouveau, l'ail, 2 c.s. de jus de citron, 4 c.s. d'huile d'olive, le tahini, le cumin, le persil et du sel. Mixe jusqu'à une consistance lisse et légèrement mousseuse. Ajuste l'assaisonnement.",
      "Laisse reposer au moins 1 h au frais. Sers avec des pitas, du pain ou des crudités (délicieux aussi en sandwich)."
    ]
  },
  {
    id:"chou-fleur-sesame", name:"Chou-fleur caramélisé au sésame", emoji:"🥦",
    image:"images/chou-fleur-sesame.jpg", servings:4, temps:40, tags:["vegan","four"],
    ingredients:[
      {item:"chou-fleur (~700 g)", qty:1, unit:"", cat:"Légumes"},
      {item:"ail", qty:3, unit:"gousses", cat:"Légumes"},
      {item:"gingembre frais", qty:1, unit:"morceau", cat:"Légumes"},
      {item:"oignon nouveau", qty:1, unit:"", cat:"Légumes"},
      {item:"boisson végétale", qty:190, unit:"ml", cat:"Épicerie"},
      {item:"farine", qty:120, unit:"g", cat:"Épicerie"},
      {item:"fécule de maïs", qty:40, unit:"g", cat:"Épicerie"},
      {item:"sauce soja (tamari)", qty:6, unit:"c.s.", cat:"Épicerie"},
      {item:"sirop d'érable", qty:6, unit:"c.s.", cat:"Épicerie"},
      {item:"vinaigre de riz", qty:3, unit:"c.s.", cat:"Épicerie"},
      {item:"huile de sésame", qty:1, unit:"c.s.", cat:"Épicerie"},
      {item:"sauce sriracha", qty:1, unit:"c.s.", cat:"Épicerie"},
      {item:"graines de sésame", qty:0, unit:"", cat:"Épicerie"},
      {item:"ail en poudre", qty:0.5, unit:"c.c.", cat:"Épicerie"},
      {item:"riz (pour servir)", qty:0, unit:"", cat:"Épicerie"},
      {item:"sel", qty:0, unit:"", cat:"Épicerie"},
    ],
    steps:[
      "Préchauffe le four à 220°C (th. 7-8) et casse le chou-fleur en fleurettes.",
      "Pâte : mélange dans un bol la farine, 40 g de fécule de maïs, le sel, 2 c.c. de graines de sésame, l'ail en poudre et la boisson végétale. Trempe les fleurettes dedans, étale-les sur une plaque et enfourne à mi-hauteur 20 min.",
      "Sauce : mixe l'ail et le gingembre en pâte. Dans un wok chaud, verse la sauce soja, le sirop d'érable, le vinaigre de riz, l'huile de sésame, la sriracha et la pâte ail-gingembre. Porte à ébullition puis mijote 5 min.",
      "Délaye 2 c.s. de fécule de maïs dans 100 ml d'eau froide, verse dans le wok et mélange : la sauce épaissit en ~5 min jusqu'à devenir épaisse et collante.",
      "Transfère aussitôt le chou-fleur dans le wok et enrobe bien chaque morceau. Sers avec du riz, des graines de sésame et des rondelles d'oignon nouveau."
    ]
  },
  {
    id:"aubergines-ottomane", name:"Aubergines farcies à l'ottomane", emoji:"🍆",
    image:"images/aubergines-ottomane.jpg", servings:4, temps:105, tags:["vegan","four","grec"],
    ingredients:[
      {item:"aubergines", qty:4, unit:"", cat:"Légumes"},
      {item:"oignons jaunes", qty:2, unit:"", cat:"Légumes"},
      {item:"ail", qty:1, unit:"gousse", cat:"Légumes"},
      {item:"tomates concassées en conserve", qty:300, unit:"g", cat:"Épicerie"},
      {item:"concentré de tomate", qty:140, unit:"g", cat:"Épicerie"},
      {item:"cannelle en poudre", qty:0.5, unit:"c.c.", cat:"Épicerie"},
      {item:"origan séché", qty:0.5, unit:"c.c.", cat:"Épicerie"},
      {item:"laurier", qty:2, unit:"feuilles", cat:"Épicerie"},
      {item:"huile d'olive", qty:0, unit:"", cat:"Épicerie"},
      {item:"sel", qty:0, unit:"", cat:"Épicerie"},
    ],
    steps:[
      "Lave les aubergines et fends-les dans la longueur au couteau, sans les couper en deux ni retirer le pédoncule.",
      "Chauffe 8 c.s. d'huile d'olive dans une grande poêle, dépose les aubergines, couvre et fais-les frire 20 min en les tournant : elles doivent devenir molles et la chair commencer à se détacher.",
      "Pendant ce temps, émince les oignons en fines lamelles et hache grossièrement l'ail.",
      "Fais-les revenir 10 min dans une casserole avec 3 c.s. d'huile d'olive. Ajoute le concentré de tomate, la cannelle, l'origan et le laurier, laisse revenir quelques minutes, puis ajoute les tomates concassées et 3 c.s. d'eau. Sale et laisse mijoter à petits bouillons au moins 10 min.",
      "Préchauffe le four à 180°C (th. 6). Dépose les aubergines dans un plat.",
      "Avec une fourchette, écrase la chair par la fente (sans percer la peau) et farcis d'abord de sauce tomate ; répartis le reste de sauce autour.",
      "Enfourne 45 min. Laisse tiédir, voire refroidir, avant de servir — encore meilleur le lendemain !"
    ]
  },
  {
    id:"moussaka-vege", name:"Moussaka végétarienne", emoji:"🥘",
    image:"images/moussaka-vege.jpg", servings:10, temps:150, tags:["végé","gratin","grec","four"],
    ingredients:[
      {item:"aubergines", qty:3, unit:"", cat:"Légumes"},
      {item:"courgettes", qty:3, unit:"", cat:"Légumes"},
      {item:"pommes de terre", qty:6, unit:"", cat:"Légumes"},
      {item:"oignons jaunes", qty:2, unit:"", cat:"Légumes"},
      {item:"ail", qty:2, unit:"gousses", cat:"Légumes"},
      {item:"champignons de Paris", qty:400, unit:"g", cat:"Légumes"},
      {item:"persil plat", qty:1, unit:"bouquet", cat:"Herbes"},
      {item:"œuf", qty:1, unit:"", cat:"Crèmerie"},
      {item:"lait", qty:1, unit:"l", cat:"Crèmerie"},
      {item:"beurre", qty:80, unit:"g", cat:"Crèmerie"},
      {item:"parmesan râpé (facultatif)", qty:50, unit:"g", cat:"Crèmerie"},
      {item:"quinoa", qty:100, unit:"g", cat:"Épicerie"},
      {item:"concentré de tomate", qty:140, unit:"g", cat:"Épicerie"},
      {item:"farine", qty:110, unit:"g", cat:"Épicerie"},
      {item:"cannelle en poudre", qty:1.5, unit:"c.c.", cat:"Épicerie"},
      {item:"laurier", qty:2, unit:"feuilles", cat:"Épicerie"},
      {item:"noix muscade", qty:0, unit:"", cat:"Épicerie"},
      {item:"origan séché", qty:0, unit:"", cat:"Épicerie"},
      {item:"huile d'olive", qty:0, unit:"", cat:"Épicerie"},
      {item:"sel", qty:0, unit:"", cat:"Épicerie"},
      {item:"poivre", qty:0, unit:"", cat:"Épicerie"},
    ],
    steps:[
      "Légumes : préchauffe le four à 200°C (th. 6-7). Coupe aubergines, courgettes et pommes de terre épluchées en lamelles de ½ cm dans la longueur. Étale sur des plaques, badigeonne d'huile d'olive, origan, sel et poivre, puis enfourne 30 min (en plusieurs fournées si besoin).",
      "Couche du milieu : émince et hache oignons et ail, fais-les revenir dans une sauteuse avec l'huile d'olive et le laurier ~10 min. Ajoute le concentré de tomate, laisse revenir. Mixe grossièrement les champignons et ajoute-les. Rince le quinoa, ajoute-le avec 200 ml d'eau, la cannelle, le persil haché et le sel. Fais revenir 20 min en remuant. Réserve.",
      "Béchamel : bats l'œuf dans un bol de lait. Dans une casserole, chauffe l'huile d'olive et le beurre, ajoute la farine et cuis 5 min. Verse le mélange œuf-lait puis le reste du lait petit à petit en fouettant jusqu'à la consistance voulue. Ajoute cannelle, noix muscade, sel, poivre et le parmesan (facultatif).",
      "Montage (plat ~35×25 cm huilé) : couche de pommes de terre → aubergines → courgettes → 1 cm de béchamel. Refais une couche de légumes, verse la préparation champignons-quinoa, finis par une couche d'aubergines puis la dernière béchamel.",
      "Enfourne à 180°C environ 45 min à 1 h, jusqu'à ce que le dessus soit bien doré. Laisse reposer avant de couper — encore meilleure réchauffée le lendemain (et elle se congèle très bien)."
    ]
  },
  {
    id:"brocoli-saute-soja", name:"Brocoli sauté à l'ail & sauce soja", emoji:"🥦",
    image:"images/brocoli-saute-soja.jpg", servings:4, temps:18, tags:["vegan","poêle"],
    ingredients:[
      {item:"brocoli", qty:1, unit:"tête", cat:"Légumes"},
      {item:"ail", qty:3, unit:"gousses", cat:"Légumes"},
      {item:"sauce soja", qty:4, unit:"c.s.", cat:"Épicerie"},
      {item:"huile de sésame", qty:1, unit:"c.s.", cat:"Épicerie"},
      {item:"cacahuètes crues", qty:1, unit:"c.s.", cat:"Épicerie"},
      {item:"fécule de maïs", qty:1, unit:"c.c.", cat:"Épicerie"},
      {item:"flocons de piment", qty:0, unit:"", cat:"Épicerie"},
      {item:"huile de tournesol", qty:0, unit:"", cat:"Épicerie"},
      {item:"riz (pour servir)", qty:0, unit:"", cat:"Épicerie"},
    ],
    steps:[
      "Dans un bol, mélange 4 c.s. d'eau, la sauce soja, l'huile de sésame, les flocons de piment et la fécule de maïs jusqu'à ce qu'il n'y ait plus de grumeaux. Réserve.",
      "Concasse grossièrement les cacahuètes. Réserve.",
      "Rince le brocoli et détaille-le en petites fleurettes (tu peux éplucher le tronc et l'émincer). Épluche et presse l'ail.",
      "Chauffe un wok à feu vif avec l'huile de tournesol, fais revenir le brocoli et l'ail 3-4 min.",
      "Baisse à feu moyen, ajoute la sauce et les cacahuètes, poursuis 3-4 min. Sers chaud, accompagné de riz."
    ]
  },
  {
    id:"salade-brocoli-cranberries", name:"Salade de brocoli, cranberries & amandes", emoji:"🥗",
    image:"images/salade-brocoli-cranberries.jpg", servings:4, temps:15, tags:["végé","salade","sans cuisson"],
    ingredients:[
      {item:"brocoli", qty:1, unit:"tête", cat:"Légumes"},
      {item:"carotte", qty:1, unit:"", cat:"Légumes"},
      {item:"oignon rouge", qty:0.5, unit:"", cat:"Légumes"},
      {item:"yaourt grec (ou yaourt de soja)", qty:150, unit:"g", cat:"Crèmerie"},
      {item:"amandes effilées", qty:20, unit:"g", cat:"Épicerie"},
      {item:"cranberries séchées", qty:20, unit:"g", cat:"Épicerie"},
      {item:"moutarde fine", qty:2, unit:"c.c.", cat:"Épicerie"},
      {item:"moutarde en grains", qty:1, unit:"c.c.", cat:"Épicerie"},
      {item:"vinaigre de cidre", qty:1, unit:"c.s.", cat:"Épicerie"},
      {item:"sirop d'érable", qty:0.5, unit:"c.c.", cat:"Épicerie"},
      {item:"sel", qty:0, unit:"", cat:"Épicerie"},
      {item:"poivre", qty:0, unit:"", cat:"Épicerie"},
    ],
    steps:[
      "Nettoie le brocoli et casse-le en petits tronçons à la main. Épluche et râpe le tronc du brocoli et la carotte. Émince finement le demi-oignon rouge.",
      "Fais griller les amandes effilées à sec quelques minutes à la poêle jusqu'à ce qu'elles dorent.",
      "Vinaigrette : mélange le yaourt, la moutarde fine, la moutarde en grains, le sirop d'érable, le vinaigre de cidre, le sel et le poivre.",
      "Assemble tous les ingrédients de la salade dans un grand saladier, ajoute les cranberries et les amandes, puis assaisonne de vinaigrette."
    ]
  },
  {
    id:"rillettes-pleurotes", name:"Rillettes de pleurotes", emoji:"🍄",
    image:"images/rillettes-pleurotes.jpg", servings:4, temps:30, tags:["vegan","poêle"],
    ingredients:[
      {item:"pleurotes", qty:150, unit:"g", cat:"Légumes"},
      {item:"échalotes", qty:3, unit:"", cat:"Légumes"},
      {item:"ail", qty:2, unit:"gousses", cat:"Légumes"},
      {item:"lentilles vertes", qty:50, unit:"g", cat:"Épicerie"},
      {item:"noix", qty:40, unit:"g", cat:"Épicerie"},
      {item:"levure maltée", qty:2, unit:"c.s.", cat:"Épicerie"},
      {item:"sauce soja", qty:1, unit:"c.s.", cat:"Épicerie"},
      {item:"cognac", qty:1, unit:"c.c.", cat:"Épicerie"},
      {item:"huile de noisette", qty:1, unit:"c.c.", cat:"Épicerie"},
      {item:"piment d'Espelette", qty:0.5, unit:"c.c.", cat:"Épicerie"},
      {item:"huile d'olive", qty:0, unit:"", cat:"Épicerie"},
      {item:"cornichons", qty:0, unit:"", cat:"Épicerie"},
      {item:"pain (pour servir)", qty:0, unit:"", cat:"Boulangerie"},
    ],
    steps:[
      "Cuis les lentilles à l'eau bouillante jusqu'à ce qu'elles soient tendres, égoutte et réserve.",
      "Émince finement les échalotes en lanières et effiloche très finement les pleurotes à la main dans la longueur.",
      "Chauffe l'huile d'olive dans une poêle et fais revenir 15 min les échalotes et les pleurotes avec l'ail pressé. Quand les pleurotes dorent, ajoute le cognac, laisse évaporer et retire du feu.",
      "Mets tous les ingrédients SAUF le mélange de pleurotes dans un mixeur et mixe jusqu'à une texture assez lisse (ajoute un peu d'eau si besoin).",
      "Ajoute les pleurotes et mixe à peine (1-2 à-coups) pour les incorporer sans perdre le côté filandreux.",
      "Transvase en bocal et laisse reposer au frais au moins 30 min. Sers sur des tranches de pain grillé avec des cornichons."
    ]
  },
  {
    id:"oeufs-cocotte-butternut", name:"Œufs cocotte, butternut & épinards", emoji:"🥚",
    image:"images/oeufs-cocotte-butternut.jpg", servings:4, temps:35, tags:["végé","four"],
    ingredients:[
      {item:"butternut", qty:280, unit:"g", cat:"Légumes"},
      {item:"épinards", qty:200, unit:"g", cat:"Légumes"},
      {item:"ail", qty:1, unit:"gousse", cat:"Légumes"},
      {item:"œufs", qty:4, unit:"", cat:"Crèmerie"},
      {item:"crème liquide", qty:120, unit:"ml", cat:"Crèmerie"},
      {item:"parmesan", qty:4, unit:"c.c.", cat:"Crèmerie"},
      {item:"beurre", qty:0, unit:"", cat:"Crèmerie"},
      {item:"noix muscade", qty:0, unit:"", cat:"Épicerie"},
      {item:"huile", qty:0, unit:"", cat:"Épicerie"},
      {item:"sel", qty:0, unit:"", cat:"Épicerie"},
      {item:"poivre", qty:0, unit:"", cat:"Épicerie"},
      {item:"pain (mouillettes)", qty:0, unit:"", cat:"Boulangerie"},
    ],
    steps:[
      "Épluche et coupe la butternut en dés, puis cuis-la à la vapeur jusqu'à ce qu'elle soit tendre.",
      "Préchauffe le four à 180°C (th. 6). Remplis d'eau à mi-hauteur un plat capable d'accueillir 4 ramequins et enfourne-le.",
      "Rince et hache grossièrement les épinards, presse l'ail. Fais-les revenir à la poêle avec l'huile jusqu'à ce que les épinards réduisent.",
      "Répartis la butternut dans les ramequins et écrase-la grossièrement, saupoudre de noix muscade. Ajoute les épinards et la crème, mélange rapidement.",
      "Casse un œuf dans chaque ramequin, saupoudre de parmesan, sale et poivre. Dépose les ramequins dans le plat au four et cuis 20 min.",
      "Déguste aussitôt avec des mouillettes de pain grillé et beurré."
    ]
  },
  {
    id:"parmentier-potimarron-lentilles", name:"Parmentier de potimarron & lentilles", emoji:"🎃",
    image:"images/parmentier-potimarron-lentilles.jpg", servings:4, temps:100, tags:["vegan","gratin","four"],
    ingredients:[
      {item:"potimarron", qty:600, unit:"g", cat:"Légumes"},
      {item:"pommes de terre à purée", qty:300, unit:"g", cat:"Légumes"},
      {item:"oignon jaune", qty:1, unit:"", cat:"Légumes"},
      {item:"carotte", qty:1, unit:"", cat:"Légumes"},
      {item:"céleri (branche)", qty:1, unit:"branche", cat:"Légumes"},
      {item:"ail", qty:2, unit:"gousses", cat:"Légumes"},
      {item:"champignons de Paris", qty:150, unit:"g", cat:"Légumes"},
      {item:"romarin", qty:1, unit:"branche", cat:"Herbes"},
      {item:"lentilles vertes", qty:120, unit:"g", cat:"Épicerie"},
      {item:"coulis de tomates", qty:250, unit:"ml", cat:"Épicerie"},
      {item:"boisson végétale", qty:30, unit:"ml", cat:"Épicerie"},
      {item:"laurier", qty:2, unit:"feuilles", cat:"Épicerie"},
      {item:"noix muscade", qty:0, unit:"", cat:"Épicerie"},
      {item:"huile d'olive", qty:0, unit:"", cat:"Épicerie"},
      {item:"sel", qty:0, unit:"", cat:"Épicerie"},
      {item:"poivre", qty:0, unit:"", cat:"Épicerie"},
    ],
    steps:[
      "Purée : épluche et coupe le potimarron et les pommes de terre en morceaux, cuis-les à la vapeur jusqu'à tendreté, puis réduis en purée avec la boisson végétale, la noix muscade, 2 c.s. d'huile d'olive, sel et poivre. Réserve.",
      "Garniture : rince et cuis les lentilles à l'eau bouillante selon le paquet. Émince oignon, carotte, céleri et ail ; coupe les champignons en dés.",
      "Dans un faitout, fais revenir oignon, carotte et céleri avec le laurier et le romarin 7-8 min dans l'huile d'olive. Ajoute l'ail et les champignons, poursuis 10 min. Ajoute les lentilles égouttées et le coulis de tomates, sale, poivre et laisse revenir encore 10 min.",
      "Préchauffe le four à 180°C (th. 6). Étale la garniture aux lentilles dans un plat, aplatis, puis recouvre de purée.",
      "Enfourne 30 min (passe 5 min sous le gril pour gratiner si tu veux). Laisse tiédir avant de servir."
    ]
  },
  {
    id:"croquettes-potimarron-chevre", name:"Croquettes de potimarron au chèvre", emoji:"🧆",
    image:"images/croquettes-potimarron-chevre.jpg", servings:4, temps:65, tags:["végé","friture"],
    ingredients:[
      {item:"potimarron", qty:500, unit:"g", cat:"Légumes"},
      {item:"ciboulette", qty:0, unit:"", cat:"Herbes"},
      {item:"chèvre frais", qty:100, unit:"g", cat:"Crèmerie"},
      {item:"œuf", qty:1, unit:"", cat:"Crèmerie"},
      {item:"graines de lin moulues", qty:40, unit:"g", cat:"Épicerie"},
      {item:"flocons d'avoine", qty:40, unit:"g", cat:"Épicerie"},
      {item:"chapelure", qty:0, unit:"", cat:"Épicerie"},
      {item:"ail en poudre", qty:0, unit:"", cat:"Épicerie"},
      {item:"noix muscade", qty:0, unit:"", cat:"Épicerie"},
      {item:"huile de friture", qty:0, unit:"", cat:"Épicerie"},
      {item:"sel", qty:0, unit:"", cat:"Épicerie"},
      {item:"poivre", qty:0, unit:"", cat:"Épicerie"},
    ],
    steps:[
      "Épluche et coupe le potimarron, cuis-le à la vapeur ~20 min puis réduis-le en purée.",
      "Ajoute les graines de lin moulues, les flocons d'avoine, la muscade, sel et poivre. Mélange bien et laisse reposer au moins 10 min.",
      "Pendant ce temps, hache la ciboulette et mélange-la avec le chèvre frais et l'ail en poudre. Forme 12 petites boules.",
      "Bats l'œuf dans un bol, verse la chapelure dans une assiette creuse.",
      "Mains humides : prélève une portion de purée, aplatis-la, dépose une boule de chèvre au centre et referme en croquette. Roule-la dans la chapelure, puis l'œuf, puis à nouveau la chapelure.",
      "Chauffe ~1 cm d'huile dans une poêle et fais frire les croquettes 2-3 min de chaque côté. Égoutte sur papier absorbant et sers aussitôt."
    ]
  },
  {
    id:"crinkle-cake-courgette-feta", name:"Crinkle cake courgette & feta", emoji:"🥧",
    image:"images/crinkle-cake-courgette-feta.jpg", servings:4, temps:65, tags:["végé","four","grec"],
    ingredients:[
      {item:"courgette", qty:1, unit:"", cat:"Légumes"},
      {item:"menthe fraîche", qty:0, unit:"", cat:"Herbes"},
      {item:"feta", qty:200, unit:"g", cat:"Crèmerie"},
      {item:"œufs", qty:2, unit:"", cat:"Crèmerie"},
      {item:"crème liquide", qty:150, unit:"ml", cat:"Crèmerie"},
      {item:"pâte filo", qty:10, unit:"feuilles", cat:"Épicerie"},
      {item:"huile d'olive", qty:0, unit:"", cat:"Épicerie"},
      {item:"sel", qty:0, unit:"", cat:"Épicerie"},
      {item:"poivre", qty:0, unit:"", cat:"Épicerie"},
    ],
    steps:[
      "Préchauffe le four à 180°C (th. 6). Badigeonne le fond d'un plat (~15×25 cm) avec 1 c.s. d'huile d'olive.",
      "Coupe les feuilles de filo en deux dans la longueur, forme des accordéons avec chacune et dépose-les serrés dans le plat. Verse 3 c.s. d'huile par-dessus.",
      "Coupe la courgette et la feta en fines lamelles longues et glisse-les dans les plis de l'accordéon, ainsi que les feuilles de menthe.",
      "Bats les œufs avec la crème, sel et poivre, puis verse sur le plat.",
      "Enfourne 50 min. Sers aussitôt."
    ]
  },
  {
    id:"tarte-fine-courgette-burrata", name:"Tarte fine courgette & burrata", emoji:"🫓",
    image:"images/tarte-fine-courgette-burrata.jpg", servings:4, temps:40, tags:["végé","four","italien"],
    ingredients:[
      {item:"courgettes", qty:2, unit:"", cat:"Légumes"},
      {item:"ail", qty:1, unit:"gousse", cat:"Légumes"},
      {item:"basilic frais", qty:1, unit:"poignée", cat:"Herbes"},
      {item:"ricotta", qty:120, unit:"g", cat:"Crèmerie"},
      {item:"burrata", qty:1, unit:"boule", cat:"Crèmerie"},
      {item:"pâte feuilletée", qty:1, unit:"rouleau", cat:"Épicerie"},
      {item:"vinaigre balsamique", qty:0, unit:"", cat:"Épicerie"},
      {item:"huile d'olive", qty:0, unit:"", cat:"Épicerie"},
      {item:"fleur de sel", qty:0, unit:"", cat:"Épicerie"},
      {item:"sel", qty:0, unit:"", cat:"Épicerie"},
      {item:"poivre", qty:0, unit:"", cat:"Épicerie"},
    ],
    steps:[
      "Hache l'ail et le basilic, mélange-les à la ricotta, sale et poivre.",
      "Préchauffe le four à 190°C (th. 6-7). Tranche les courgettes en fines lamelles à la mandoline.",
      "Étale la pâte feuilletée sur une plaque, répartis la ricotta dessus, dispose les rondelles de courgette et verse un filet d'huile d'olive.",
      "Enfourne 25 min. À la sortie, dépose la burrata au centre, ajoute un filet de vinaigre balsamique, de la fleur de sel et le basilic restant. Déguste tiède ou froid."
    ]
  },
  {
    id:"salsa-tomates-gingembre", name:"Salsa de tomates, coriandre & gingembre", emoji:"🌶️",
    image:"images/salsa-tomates-gingembre.jpg", servings:4, temps:10, tags:["vegan","sans cuisson"],
    ingredients:[
      {item:"tomates bien mûres", qty:500, unit:"g", cat:"Légumes"},
      {item:"gingembre frais", qty:15, unit:"g", cat:"Légumes"},
      {item:"ail", qty:2, unit:"gousses", cat:"Légumes"},
      {item:"oignon jaune", qty:1, unit:"", cat:"Légumes"},
      {item:"coriandre fraîche", qty:0.5, unit:"botte", cat:"Herbes"},
      {item:"citron vert", qty:0.5, unit:"", cat:"Fruits"},
      {item:"vinaigre", qty:1, unit:"c.s.", cat:"Épicerie"},
      {item:"sucre", qty:1, unit:"c.c.", cat:"Épicerie"},
      {item:"sel", qty:0, unit:"", cat:"Épicerie"},
      {item:"tortillas (pour servir)", qty:0, unit:"", cat:"Boulangerie"},
    ],
    steps:[
      "Coupe les tomates en tout petits dés. Pèle le gingembre, l'ail et l'oignon.",
      "Passe le gingembre, l'ail et l'oignon au mixeur avec la coriandre et le jus de citron vert.",
      "Assemble tous les ingrédients dans un grand bol avec le vinaigre, le sucre et le sel.",
      "Laisse reposer 1 à 2 h au frais pour développer les saveurs. À déguster avec des tortillas !"
    ]
  },
  {
    id:"tomates-farcies-riz", name:"Tomates farcies au riz & herbes fraîches", emoji:"🍅",
    image:"images/tomates-farcies-riz.jpg", servings:4, temps:100, tags:["vegan","four","grec"],
    ingredients:[
      {item:"tomates (grosses)", qty:5, unit:"", cat:"Légumes"},
      {item:"poivrons", qty:4, unit:"", cat:"Légumes"},
      {item:"oignons jaunes", qty:2, unit:"", cat:"Légumes"},
      {item:"pommes de terre", qty:2, unit:"", cat:"Légumes"},
      {item:"menthe fraîche", qty:1, unit:"bouquet", cat:"Herbes"},
      {item:"persil plat", qty:1, unit:"bouquet", cat:"Herbes"},
      {item:"aneth", qty:1, unit:"bouquet", cat:"Herbes"},
      {item:"riz rond", qty:250, unit:"g", cat:"Épicerie"},
      {item:"huile d'olive", qty:200, unit:"ml", cat:"Épicerie"},
      {item:"sel", qty:0, unit:"", cat:"Épicerie"},
      {item:"poivre", qty:0, unit:"", cat:"Épicerie"},
    ],
    steps:[
      "Coupe les capuchons des poivrons et des tomates (réserve-les). Retire les pépins des poivrons et évide les tomates.",
      "Effeuille la menthe, retire les grosses tiges du persil et de l'aneth (garde les tiges tendres).",
      "Mixe longuement la chair des tomates avec les oignons épluchés et les herbes.",
      "Verse dans un grand bol, ajoute l'huile d'olive, 100 ml d'eau, le riz, sel et poivre, mélange bien.",
      "Préchauffe le four à 210°C (th. 7). Farcis les légumes de ce mélange, replace les capuchons et pose-les dans un grand plat.",
      "Coupe les pommes de terre en grosses frites et répartis-les au fond du plat (elles absorbent l'eau rendue). Arrose d'un filet d'huile d'olive.",
      "Enfourne 15 min, puis baisse à 190°C (th. 6-7) et poursuis 1 h. Encore meilleur dégusté le lendemain !"
    ]
  }
];
