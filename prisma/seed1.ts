import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const initialProduct: Prisma.ProductCreateInput[] = [
  {
    name: "Bitterballs",
    description: "8 Stuks met mosterd",
    price: 8,
    published: true,
    slug: "bitterballs",
    category: {
      connectOrCreate: {
        where: {
          slug: "snacks"
        },
        create: {
          name: "Snacks",
          slug: "snacks",
          published: true
        }
      }
    }
  },
  {
    name: "Portie friet",
    description: "met mayo/ketchup",
    price: 4.5,
    published: true,
    slug: "portie-friet",
    category: {
      connectOrCreate: {
        where: {
          slug: "snacks"
        },
        create: {
          name: "Snacks",
          slug: "snacks"
        }
      }
    }
  },
  {
    name: "Portie olijven",
    description: "",
    price: 6,
    published: true,
    slug: "portie-olijven",
    category: {
      connectOrCreate: {
        where: {
          slug: "snacks"
        },
        create: {
          name: "Snacks",
          slug: "snacks"
        }
      }
    }
  },
  {
    name: "Bitterballen (vegan)",
    description: "8 stucks met mosterd",
    price: 8,
    published: true,
    slug: "bitterballen-vegan",
    category: {
      connectOrCreate: {
        where: {
          slug: "snacks"
        },
        create: {
          name: "Snacks",
          slug: "snacks"
        }
      }
    }
  },
  {
    name: "Kaastengels (vegan)",
    description: "8 stucks met chilisaus",
    price: 8,
    published: true,
    slug: "Kaastengels-vegan",
    category: {
      connectOrCreate: {
        where: {
          slug: "snacks"
        },
        create: {
          name: "Snacks",
          slug: "snacks"
        }
      }
    }
  },
  {
    name: "Mini frikandellen",
    description: "8 stucks met mayonaise",
    price: 7.5,
    published: true,
    slug: "mini-frikandellen",
    category: {
      connectOrCreate: {
        where: {
          slug: "snacks"
        },
        create: {
          name: "Snacks",
          slug: "snacks"
        }
      }
    }
  },
  {
    name: "Plateau 1: Hollandse Klassiekers",
    description:
      "Old Amsterdam 2x, Jonge kaas 2x, Leverworst met zuur 2x, Ossenworst met mosterd 2x",
    price: 8.5,
    published: true,
    slug: "plateau-1-hollandse-klassiekers",
    category: {
      connectOrCreate: {
        where: {
          slug: "borrel-plateau"
        },
        create: {
          name: "Borrel Plateau",
          slug: "borrel-plateau"
        }
      }
    }
  },
  {
    name: "Plateau 2: Bittergranituur",
    description:
      "Bitterballen 2x, Kaastengels 2x, Mini frikandel 2x, Vlammetjes 2x, Mini loempia's 2x, mayo-mosterd-ketchup",
    price: 9,
    published: true,
    slug: "plateau-2-bittergranituur",
    category: {
      connectOrCreate: {
        where: {
          slug: "borrel-plateau"
        },
        create: {
          name: "Borrel Plateau",
          slug: "borrel-plateau"
        }
      }
    }
  },
  {
    name: "Plateau 3: Bittergranituur de luxe",
    description:
      "Garnalen kroketjes 2x, Geitenkaas kroketjes 2x, Japanese gefrituurde kip 2x, Ebi fry 'shrimpp' (vegan), bitterbal 2x, truffelmayo-whiskeycocktailsaus-limoenmayo",
    price: 13,
    published: true,
    slug: "plateau-3-bittergranituur-de-luxe",
    category: {
      connectOrCreate: {
        where: {
          slug: "borrel-plateau"
        },
        create: {
          name: "Borrel Plateau",
          slug: "borrel-plateau"
        }
      }
    }
  },
  {
    name: "Plateau 4: Charcuterie",
    description:
      "Coppa di parma 20gr, Iberico ham 20gr, Brandt & Levie venkelworst 25gr, Gerookte amandelen 20gr, Gemarineerde olijven 40 gr, wild zwijn pate 25gr, toastjes 40gr",
    price: 13,
    published: true,
    slug: "plateau-4-charcuterie",
    category: {
      connectOrCreate: {
        where: {
          slug: "borrel-plateau"
        },
        create: {
          name: "Borrel Plateau",
          slug: "borrel-plateau"
        }
      }
    }
  },
  {
    name: "Plateau 5: Kaasplateau van Kef",
    description:
      "4 vershillende kazen van Kef met kletzenbrood, cranberryjam en druiven",
    price: 13,
    published: true,
    slug: "plateau-5-kaasplateau-van-kef",
    category: {
      connectOrCreate: {
        where: {
          slug: "borrel-plateau"
        },
        create: {
          name: "Borrel Plateau",
          slug: "borrel-plateau"
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
