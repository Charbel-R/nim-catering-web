import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const initialProduct: Prisma.ProductCreateInput[] = [
  {
    name: "Bitterballs",
    description: "8 Stuks met mosterd",
    price: 8,
    isPublished: true,
    slug: "bitterballs",
    category: {
      connectOrCreate: {
        where: {
          slug: "snacks"
        },
        create: {
          name: "Snacks",
          slug: "snacks",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Portie friet",
    description: "met mayo/ketchup",
    price: 4.5,
    isPublished: true,
    slug: "portie-friet",
    category: {
      connectOrCreate: {
        where: {
          slug: "snacks"
        },
        create: {
          name: "Snacks",
          slug: "snacks",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Portie olijven",
    description: "",
    price: 6,
    isPublished: true,
    slug: "portie-olijven",
    category: {
      connectOrCreate: {
        where: {
          slug: "snacks"
        },
        create: {
          name: "Snacks",
          slug: "snacks",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Bitterballen (vegan)",
    description: "8 stucks met mosterd",
    price: 8,
    isPublished: true,
    slug: "bitterballen-vegan",
    category: {
      connectOrCreate: {
        where: {
          slug: "snacks"
        },
        create: {
          name: "Snacks",
          slug: "snacks",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Kaastengels (vega)",
    description: "8 stucks met chilisaus",
    price: 8,
    isPublished: true,
    slug: "kaastengels-vega",
    category: {
      connectOrCreate: {
        where: {
          slug: "snacks"
        },
        create: {
          name: "Snacks",
          slug: "snacks",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Mini frikandellen",
    description: "8 stucks met mayonaise",
    price: 7.5,
    isPublished: true,
    slug: "mini-frikandellen",
    category: {
      connectOrCreate: {
        where: {
          slug: "snacks"
        },
        create: {
          name: "Snacks",
          slug: "snacks",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Vlammetjes",
    description: "8 stuks met chilisaus",
    price: 8.0,
    isPublished: true,
    slug: "vlammetjes",
    category: {
      connectOrCreate: {
        where: {
          slug: "snacks"
        },
        create: {
          name: "Snacks",
          slug: "snacks",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Mini loempia's (vegan)",
    description: "8 stuks met chilisaus",
    price: 7.5,
    isPublished: true,
    slug: "mini-loempias-vegan",
    category: {
      connectOrCreate: {
        where: {
          slug: "snacks"
        },
        create: {
          name: "Snacks",
          slug: "snacks",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Ebi fry 'shrimp' (vegan)",
    description: "6 stuks met chilisaus",
    price: 8,
    isPublished: true,
    slug: "ebi-fry-shrimp-vegan",
    category: {
      connectOrCreate: {
        where: {
          slug: "snacks"
        },
        create: {
          name: "Snacks",
          slug: "snacks",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Garnalen kroketjes",
    description: "6 stuks met chilisaus",
    price: 13,
    isPublished: true,
    slug: "garnalen-kroketjes",
    category: {
      connectOrCreate: {
        where: {
          slug: "snacks"
        },
        create: {
          name: "Snacks",
          slug: "snacks",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Geitenkaas kroketjes (vega)",
    description: "8 stuks met chilisaus",
    price: 13,
    isPublished: true,
    slug: "geitenkaas-kroketjes-vega",
    category: {
      connectOrCreate: {
        where: {
          slug: "snacks"
        },
        create: {
          name: "Snacks",
          slug: "snacks",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Ebi fry shrimp",
    description: "6 stuks met chilisaus",
    price: 9.5,
    isPublished: true,
    slug: "ebi-fry-shrimp",
    category: {
      connectOrCreate: {
        where: {
          slug: "snacks"
        },
        create: {
          name: "Snacks",
          slug: "snacks",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Kara Age (Japanse gefrituurde kip)",
    description: "6 stuks met chilisaus",
    price: 9,
    isPublished: true,
    slug: "kara-age-japanse-gefrituurde-kip",
    category: {
      connectOrCreate: {
        where: {
          slug: "snacks"
        },
        create: {
          name: "Snacks",
          slug: "snacks",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Gyoza kip",
    description: "5 stuks met sojasaus",
    price: 7.5,
    isPublished: true,
    slug: "gyoza-kip",
    category: {
      connectOrCreate: {
        where: {
          slug: "snacks"
        },
        create: {
          name: "Snacks",
          slug: "snacks",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Brood met dip (vega)",
    description: "Plukbrood met bieten hummus en aioli",
    price: 7.5,
    isPublished: true,
    slug: "brood-met-dip-vega",
    category: {
      connectOrCreate: {
        where: {
          slug: "snacks"
        },
        create: {
          name: "Snacks",
          slug: "snacks",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Plateau 1: Hollandse Klassiekers",
    description:
      "Old Amsterdam 2x, Jonge kaas 2x, Leverworst met zuur 2x, Ossenworst met mosterd 2x",
    price: 8.5,
    isPublished: true,
    slug: "plateau-1-hollandse-klassiekers",
    category: {
      connectOrCreate: {
        where: {
          slug: "borrel-plateau"
        },
        create: {
          name: "Borrel Plateau's",
          slug: "borrel-plateau",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Plateau 2: Bittergarnituur",
    description:
      "Bitterballen 2x, Kaastengels 2x, Mini frikandel 2x, Vlammetjes 2x, Mini loempia's 2x, mayo-mosterd-ketchup",
    price: 9,
    isPublished: true,
    slug: "plateau-2-bittergarnituur",
    category: {
      connectOrCreate: {
        where: {
          slug: "borrel-plateau"
        },
        create: {
          name: "Borrel Plateau's",
          slug: "borrel-plateau",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Plateau 3: Bittergarnituur de luxe",
    description:
      "Garnalen kroketjes 2x, Geitenkaas kroketjes 2x, Japanse gefrituurde kip 2x, Ebi fry 'shrimp' (vegan), bitterbal 2x, truffelmayo-whiskeycocktailsaus-limoenmayo",
    price: 13,
    isPublished: true,
    slug: "plateau-3-bittergarnituur-de-luxe",
    category: {
      connectOrCreate: {
        where: {
          slug: "borrel-plateau"
        },
        create: {
          name: "Borrel Plateau's",
          slug: "borrel-plateau",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Plateau 4: Charcuterie",
    description:
      "Coppa di parma 20gr, Iberico ham 20gr, Brandt & Levie venkelworst 25gr, Gerookte amandelen 20gr, Gemarineerde olijven 40gr, wild zwijn pate 25gr, toastjes 40gr",
    price: 13,
    isPublished: true,
    slug: "plateau-4-charcuterie",
    category: {
      connectOrCreate: {
        where: {
          slug: "borrel-plateau"
        },
        create: {
          name: "Borrel Plateau's",
          slug: "borrel-plateau",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Plateau 5: Kaasplateau van Kef",
    description:
      "4 verschillende kazen van Kef met kletzenbrood, cranberryjam en druiven.",
    price: 13,
    isPublished: true,
    slug: "plateau-5-kaasplateau-van-kef",
    category: {
      connectOrCreate: {
        where: {
          slug: "borrel-plateau"
        },
        create: {
          name: "Borrel Plateau's",
          slug: "borrel-plateau",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Plateau 6: Oesters (per 6)",
    description: "Gillardeau oesters Met citroen en sjalotten vinaigrette",
    price: 27,
    isPublished: true,
    slug: "plateau-6-oesters-per-6",
    category: {
      connectOrCreate: {
        where: {
          slug: "borrel-plateau"
        },
        create: {
          name: "Borrel Plateau's",
          slug: "borrel-plateau",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Plateau 7: Fruits de mer (voor 4 personen)",
    description:
      "Gekookte Canadese kreeft 1, Oesters Fine de Claire 12, Halve krab 500gr, Gekookte gamba's 500gr, Mosselen 800gr, Kokkels 500gr, Garnalen/rivierkreeft cocktail 4 stuks, coktailsaus-limoenmayo-citroen",
    price: 235,
    isPublished: true,
    slug: "plateau-7-fruits-de-mer-voor-4-personen",
    category: {
      connectOrCreate: {
        where: {
          slug: "borrel-plateau"
        },
        create: {
          name: "Borrel Plateau's",
          slug: "borrel-plateau",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Plateau 8: Vegan (3 a 4 personen)",
    description:
      "Brood met dips (hummus, olijventapenade), geroosterde groenten, druiven, 4x vegan bitterbal, 4x Mini loempia's, 4x Ebi fry 'shrimp', Tomatentartaar met pompoen/'feta' crème",
    price: 23.5,
    isPublished: true,
    slug: "plateau-8-vegan-3-a-4-personen",
    category: {
      connectOrCreate: {
        where: {
          slug: "borrel-plateau"
        },
        create: {
          name: "Borrel Plateau's",
          slug: "borrel-plateau",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Plateau 9: Tapas (3 a 4 personen)",
    description:
      "4x kipborrelpootje, 4x albondigas, 4x garnalenkroket, olijven, brood met dips (hummus, aioli), 8 x Coppa di Parma en 4x Franse kaas",
    price: 23.5,
    isPublished: true,
    slug: "plateau-9-tapas-3-a-4-personen",
    category: {
      connectOrCreate: {
        where: {
          slug: "borrel-plateau"
        },
        create: {
          name: "Borrel Plateau's",
          slug: "borrel-plateau",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Plateau 10: Vis (3 a 4 personen)",
    description:
      "Gerookte forelfilets 2x, 100 gr gerookte zalm, 1 zijde gestoomde makreel, rivierkreeft cocktail",
    price: 23.5,
    isPublished: true,
    slug: "plateau-10-vis-3-a-4-personen",
    category: {
      connectOrCreate: {
        where: {
          slug: "borrel-plateau"
        },
        create: {
          name: "Borrel Plateau's",
          slug: "borrel-plateau",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Plateau 11: Canapés (per 5 stuks)",
    description:
      "Blini's met: -Gerookte zalm en mierikswortel crème -Gerookte makreel met rode bieten hummus -Parmaham, pesto, mozzarella -Geitenkaas, gekarameliseerde rode ui -Carpaccio, parmezaanse kaas,...",
    price: 15,
    isPublished: true,
    slug: "plateau-11-canapes-per-5-stuks",
    category: {
      connectOrCreate: {
        where: {
          slug: "borrel-plateau"
        },
        create: {
          name: "Borrel Plateau's",
          slug: "borrel-plateau",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Scallop Carpaccio",
    description:
      "with pickled vegetables, wakame, yuzu hollandaise, and smoked salt",
    price: 12,
    isPublished: true,
    slug: "scallop-carpaccio",
    category: {
      connectOrCreate: {
        where: {
          slug: "voor-gerechten"
        },
        create: {
          name: "Voor Gerechten",
          slug: "voor-gerechten",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Truffle-Celeriac Soup (vegan)",
    description: "with fresh truffle shavings and hazelnut crunch",
    price: 12,
    isPublished: true,
    slug: "truffle-celeriac-soup-vegan",
    category: {
      connectOrCreate: {
        where: {
          slug: "voor-gerechten"
        },
        create: {
          name: "Voor Gerechten",
          slug: "voor-gerechten",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Pork belly",
    description:
      "with an oriental glaze, oven-roasted pineapple, and pepper-paprika cream",
    price: 12,
    isPublished: true,
    slug: "pork-belly",
    category: {
      connectOrCreate: {
        where: {
          slug: "voor-gerechten"
        },
        create: {
          name: "Voor Gerechten",
          slug: "voor-gerechten",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Butterfish",
    description:
      "pan-fried in tomato tapenade, with orzo salad, chervil oil, and a Grana Padano crisp",
    price: 22,
    isPublished: true,
    slug: "butterfish",
    category: {
      connectOrCreate: {
        where: {
          slug: "hoofd-gerechten"
        },
        create: {
          name: "Hoofd Gerechten",
          slug: "hoofd-gerechten",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Venison Stew",
    description: "with potato gratin, Brussels sprouts, parsnip, and steak",
    price: 22,
    isPublished: true,
    slug: "venison-stew",
    category: {
      connectOrCreate: {
        where: {
          slug: "hoofd-gerechten"
        },
        create: {
          name: "Hoofd Gerechten",
          slug: "hoofd-gerechten",
          isPublished: true
        }
      }
    }
  },
  {
    name: "King Oyster Mushroom Scallops (vegan)",
    description:
      "with fregola risotto, shiitake cream, roasted cherry tomatoes, and miso glaze",
    price: 22,
    isPublished: true,
    slug: "king-oyster-mushroom-scallops-vegan",
    category: {
      connectOrCreate: {
        where: {
          slug: "hoofd-gerechten"
        },
        create: {
          name: "Hoofd Gerechten",
          slug: "hoofd-gerechten",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Meat Lovers",
    description:
      "Hamburger on a bun, sausage, shaslick, chicken satay + sauces and salad",
    price: 19.5,
    isPublished: true,
    slug: "meat-lovers",
    category: {
      connectOrCreate: {
        where: {
          slug: "bbq"
        },
        create: {
          name: "BBQ",
          slug: "bbq",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Vegan",
    description:
      "Hamburger on a bun, sausage, shaslick, tofu sate + sauces and salad (all vegan)",
    price: 19.5,
    isPublished: true,
    slug: "vegan",
    category: {
      connectOrCreate: {
        where: {
          slug: "bbq"
        },
        create: {
          name: "BBQ",
          slug: "bbq",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Lunch Menu 1",
    description:
      "The lunch menu consists of: Pumpkin soup with baked pumpkin, pumpkin seeds and fresh cream Club sandwich (2 halfs p.p.), Roasted chicken, bacon, lettuce, tomato, harissa mayo (opt: vegan) Roast beef, re...",
    price: 16,
    isPublished: true,
    slug: "lunch-menu-1",
    category: {
      connectOrCreate: {
        where: {
          slug: "lunch"
        },
        create: {
          name: "Lunch",
          slug: "lunch",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Lunch Menu 2",
    description:
      "The lunch menu consists of: Green Goodness salad: Lil gem, shredded chicken, quinoa, zucchini, avocado, halloumi, green dressing, seed mix. Sandwiches (2 p.p.): -Goat cheese, fig, arugula, honey -Smashed...",
    price: 19.5,
    isPublished: true,
    slug: "lunch-menu-2",
    category: {
      connectOrCreate: {
        where: {
          slug: "lunch"
        },
        create: {
          name: "Lunch",
          slug: "lunch",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Black Angus burger 200 gr with fries",
    description:
      "Brioche bun, lettuce, bacon (optional), tomato, caramelized onion, pickles, mayo, cheddar",
    price: 14.5,
    isPublished: true,
    slug: "black-angus-burger-200-gr-with-fries",
    category: {
      connectOrCreate: {
        where: {
          slug: "burgers"
        },
        create: {
          name: "Burgers",
          slug: "burgers",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Beyond Meat burger (vegan) with fries",
    description:
      "Brioche bun, lettuce, guacamole, tomato, caramelized onion, pickle, vegan mayo",
    price: 14.5,
    isPublished: true,
    slug: "beyond-meat-burger-vegan-with-fries",
    category: {
      connectOrCreate: {
        where: {
          slug: "burgers"
        },
        create: {
          name: "Burgers",
          slug: "burgers",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Black Angus burger 180 gr",
    description: "Without fries",
    price: 10.5,
    isPublished: true,
    slug: "black-angus-burger-180-gr",
    category: {
      connectOrCreate: {
        where: {
          slug: "burgers"
        },
        create: {
          name: "Burgers",
          slug: "burgers",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Beyond Meat burger (vegan)",
    description: "Without fries",
    price: 10.5,
    isPublished: true,
    slug: "beyond-meat-burger-vegan",
    category: {
      connectOrCreate: {
        where: {
          slug: "burgers"
        },
        create: {
          name: "Burgers",
          slug: "burgers",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Italian",
    description:
      "Vitello Tonnato, rucola salad (vegan), Salad caprese, fresh baked focaccia with tapenade and aioli, lasagna bolognese, chicken in a Italian creamy sauce, Potato's from the oven",
    price: 22.5,
    isPublished: true,
    slug: "italian",
    category: {
      connectOrCreate: {
        where: {
          slug: "buffet"
        },
        create: {
          name: "Buffet",
          slug: "buffet",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Indonesian food",
    description:
      "Nasi Goreng, Bami, Sajoer lodeh (mixed vegetables in a spicy coconut sauce), Terong Belado (spicy 'sticky' eggplant), Rendang (coconut stew), Satay ajam with satay sauce, Telor soy sauce (egg in swe...",
    price: 23.5,
    isPublished: true,
    slug: "indonesian-food",
    category: {
      connectOrCreate: {
        where: {
          slug: "buffet"
        },
        create: {
          name: "Buffet",
          slug: "buffet",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Stamppot buffet",
    description:
      "Boerenkool. Zuurkool. Hutspot. Gelderse rookworst. Gehaktballetjes in jus. Speklap. Mosterd-piccalilly",
    price: 18.5,
    isPublished: true,
    slug: "stamppot-buffet",
    category: {
      connectOrCreate: {
        where: {
          slug: "buffet"
        },
        create: {
          name: "Buffet",
          slug: "buffet",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Vegan buffet",
    description:
      "Geroosterde bloemkoolsoep (vegan) met gebakken bloemkool, hazelnoot en 'beurre noisette'. Tomatentartaar (vegan) met pompoen/feta crème. Plukbrood met dips (hummus, olijventapenade). Orzo...",
    price: 23.5,
    isPublished: true,
    slug: "vegan-buffet",
    category: {
      connectOrCreate: {
        where: {
          slug: "buffet"
        },
        create: {
          name: "Buffet",
          slug: "buffet",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Tiramisu",
    description: "Lekker voor bij het Italiaans buffet",
    price: 5.5,
    isPublished: true,
    slug: "tiramisu",
    category: {
      connectOrCreate: {
        where: {
          slug: "buffet"
        },
        create: {
          name: "Buffet",
          slug: "buffet",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Spekkoek",
    description: "Lekker voor bij het Indonesisch buffet",
    price: 3.5,
    isPublished: true,
    slug: "spekkoek",
    category: {
      connectOrCreate: {
        where: {
          slug: "buffet"
        },
        create: {
          name: "Buffet",
          slug: "buffet",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Sticky ginger pudding",
    description: "with mango bavarois and toffee sauce",
    price: 9,
    isPublished: true,
    slug: "sticky-ginger-pudding",
    category: {
      connectOrCreate: {
        where: {
          slug: "na-gerechten"
        },
        create: {
          name: "Na Gerechten",
          slug: "na-gerechten",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Cheeseplatter from Kef",
    description: "4 cheeses, 4 slices of Kletzen bread, grapes, cranberry jam",
    price: 10,
    isPublished: true,
    slug: "cheeseplatter-from-kef",
    category: {
      connectOrCreate: {
        where: {
          slug: "na-gerechten"
        },
        create: {
          name: "Na Gerechten",
          slug: "na-gerechten",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Panna Cotta (vegan)",
    description:
      "of white chocolate, cardamom, coconut, and marinated pineapple",
    price: 9,
    isPublished: true,
    slug: "panna-cotta-vegan",
    category: {
      connectOrCreate: {
        where: {
          slug: "na-gerechten"
        },
        create: {
          name: "Na Gerechten",
          slug: "na-gerechten",
          isPublished: true
        }
      }
    }
  },
  {
    name: "2 Gangen Menu (Voor - Hoofd)",
    description: "",
    price: 30.5,
    isPublished: true,
    slug: "2-gangen-menu-voor-hoofd",
    category: {
      connectOrCreate: {
        where: {
          slug: "menu"
        },
        create: {
          name: "Menu's",
          slug: "menu",
          isPublished: true
        }
      }
    }
  },
  {
    name: "2 Gangen Menu (Hoofd - Dessert)",
    description: "",
    price: 27.5,
    isPublished: true,
    slug: "2-gangen-menu-hoofd-dessert",
    category: {
      connectOrCreate: {
        where: {
          slug: "menu"
        },
        create: {
          name: "Menu's",
          slug: "menu",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Kid's menu",
    description: "",
    price: 17.5,
    isPublished: true,
    slug: "kids-menu",
    category: {
      connectOrCreate: {
        where: {
          slug: "menu"
        },
        create: {
          name: "Menu's",
          slug: "menu",
          isPublished: true
        }
      }
    }
  },
  {
    name: "4 Gangen Menu (Voor - Tussen - Hoofd - Dessert)",
    description: "",
    price: 49.5,
    isPublished: true,
    slug: "4-gangen-menu-voor-tussen-hoofd-dessert",
    category: {
      connectOrCreate: {
        where: {
          slug: "menu"
        },
        create: {
          name: "Menu's",
          slug: "menu",
          isPublished: true
        }
      }
    }
  },
  {
    name: "3 Gangen Menu (Voor - Hoofd - Dessert)",
    description: "",
    price: 38.5,
    isPublished: true,
    slug: "3-gangen-menu-voor-hoofd-dessert",
    category: {
      connectOrCreate: {
        where: {
          slug: "menu"
        },
        create: {
          name: "Menu's",
          slug: "menu",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Walking dinner",
    description:
      "6 handzame gerechten van ons huidige menu 2 voor - 2 hoofd - 2 dessert",
    price: 38.5,
    isPublished: true,
    slug: "walking-dinner",
    category: {
      connectOrCreate: {
        where: {
          slug: "walking-dinner"
        },
        create: {
          name: "Walking Dinner",
          slug: "walking-dinner",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Luxe walking dinner",
    description:
      "Luxe walking dinner menu Garnalencocktail whiskey cocktailsaus, Hollandse garnalen, gerookte zalm, avocado. Steak tartaar klassiek met zuurdesem croutons en ansjovis crème. Ravioli van kreeft in een...",
    price: 57.5,
    isPublished: true,
    slug: "luxe-walking-dinner",
    category: {
      connectOrCreate: {
        where: {
          slug: "walking-dinner"
        },
        create: {
          name: "Walking Dinner",
          slug: "walking-dinner",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Kaviaar 30 gram",
    description:
      "Baeri met blini's, kappertjes, uitjes, peterselie, eigeel, eiwit",
    price: 80,
    isPublished: true,
    slug: "kaviaar-30-gram",
    category: {
      connectOrCreate: {
        where: {
          slug: "caviar"
        },
        create: {
          name: "Caviar",
          slug: "caviar",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Kaviaar 50 gram",
    description:
      "Baeri met blini's, kappertjes, uitjes, peterselie, eigeel, eiwit",
    price: 120,
    isPublished: true,
    slug: "kaviaar-50-gram",
    category: {
      connectOrCreate: {
        where: {
          slug: "caviar"
        },
        create: {
          name: "Caviar",
          slug: "caviar",
          isPublished: true
        }
      }
    }
  },
  {
    name: "Kaviaar 125 gram",
    description:
      "Baeri met blini's, kappertjes, uitjes, peterselie, eigeel, eiwit",
    price: 275,
    isPublished: true,
    slug: "kaviaar-125-gram",
    category: {
      connectOrCreate: {
        where: {
          slug: "caviar"
        },
        create: {
          name: "Caviar",
          slug: "caviar",
          isPublished: true
        }
      }
    }
  }
];

async function main() {
  console.log("Start seeding ...");
  for (const p of initialProduct) {
    const product = await prisma.product.create({
      data: p
    });
    console.log(`Created product with id: ${product.id}`);
  }
  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
