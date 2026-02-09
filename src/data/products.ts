export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  hoverImage: string;
  category: string;
  collection: string;
  description: string;
  details: string[];
  material: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export interface Collection {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  heroImage: string;
  season: string;
}

export const categories: Category[] = [
  {
    id: 'diamond-rings',
    name: 'Diamond Rings',
    description: 'Brilliant diamond rings from classic solitaires to dazzling halo settings, each stone hand-selected for exceptional fire and clarity.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    productCount: 14,
  },
  {
    id: 'diamond-necklaces',
    name: 'Diamond Necklaces',
    description: 'Exquisite diamond necklaces and pendants that capture light from every angle, draping the décolletage in pure radiance.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    productCount: 12,
  },
  {
    id: 'diamond-earrings',
    name: 'Diamond Earrings',
    description: 'From timeless diamond studs to cascading drop earrings, each pair sparkles with unmatched brilliance.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    productCount: 16,
  },
  {
    id: 'diamond-bracelets',
    name: 'Diamond Bracelets',
    description: 'Diamond tennis bracelets, bangles, and cuffs that encircle the wrist with a river of scintillating brilliance.',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    productCount: 10,
  },
  {
    id: 'diamond-bridal',
    name: 'Bridal Diamonds',
    description: 'The most important diamond of your life — engagement rings and wedding bands crafted for forever.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
    productCount: 18,
  },
  {
    id: 'loose-diamonds',
    name: 'Loose Diamonds',
    description: 'GIA-certified loose diamonds in every cut — round brilliant, emerald, oval, pear, and cushion — ready for your dream setting.',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
    productCount: 20,
  },
];

export const collections: Collection[] = [
  {
    id: 'brilliant-cut',
    name: 'Brilliant Cut',
    tagline: 'Maximum fire, infinite beauty',
    description: 'The round brilliant cut — 57 facets engineered for maximum light return. Our Brilliant Cut collection showcases the most iconic diamond shape in modern and timeless settings of platinum and white gold.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=1600&q=80',
    season: 'Signature Collection',
  },
  {
    id: 'emerald-cut',
    name: 'Emerald Cut',
    tagline: 'Art Déco sophistication',
    description: 'The emerald cut diamond speaks to those who appreciate architectural beauty. Step-cut facets create a hall-of-mirrors effect — bold, clean, and breathtakingly elegant.',
    image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=1600&q=80',
    season: 'Permanent Collection',
  },
  {
    id: 'pave-diamond',
    name: 'Pavé Diamond',
    tagline: 'A blanket of brilliance',
    description: 'Pavé settings create an unbroken surface of diamond light. Tiny stones set impossibly close together transform each piece into a shimmering, three-dimensional masterwork.',
    image: 'https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600721391689-2564bb8055de?w=1600&q=80',
    season: 'Spring/Summer 2026',
  },
  {
    id: 'solitaire',
    name: 'The Solitaire',
    tagline: 'One diamond, absolute perfection',
    description: 'Nothing compares to the purity of a single exceptional diamond. Our Solitaire collection celebrates the singular beauty of the world\'s finest stones in minimalist, flawless settings.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1600&q=80',
    season: 'Bridal Collection',
  },
  {
    id: 'halo',
    name: 'Halo',
    tagline: 'Diamonds within diamonds',
    description: 'A center diamond encircled by a luminous ring of smaller stones, the halo setting amplifies brilliance and creates an aura of extraordinary light and dimension.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1600&q=80',
    season: 'Fall/Winter 2025',
  },
  {
    id: 'vintage-diamond',
    name: 'Vintage Diamond',
    tagline: 'Heirloom brilliance, reimagined',
    description: 'Inspired by the grand jewelry houses of the early 20th century, our Vintage Diamond collection features old European cuts, milgrain details, and filigree settings that honor a golden age of craftsmanship.',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=1600&q=80',
    season: 'Haute Joaillerie',
  },
];

export const products: Product[] = [
  // Diamond Rings
  {
    id: 'r1',
    name: 'Lumière Solitaire Ring',
    price: 18500,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600&q=80',
    category: 'diamond-rings',
    collection: 'solitaire',
    description: 'A flawless 2.5-carat round brilliant diamond set in a classic six-prong platinum mount. The definition of timeless diamond luxury.',
    details: ['2.5-carat round brilliant diamond', 'D color, VVS1 clarity', 'Platinum six-prong setting', 'GIA certified'],
    material: 'Platinum & Diamond',
    isNew: true,
  },
  {
    id: 'r2',
    name: 'Éclat Pavé Band',
    price: 9200,
    image: 'https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80',
    category: 'diamond-rings',
    collection: 'pave-diamond',
    description: 'Micro-pavé diamonds completely encircle this 18K white gold band, creating an unbroken ribbon of scintillating brilliance.',
    details: ['1.2 total carat weight', '18K white gold', 'Micro-pavé setting', 'Comfort-fit band'],
    material: '18K White Gold & Diamonds',
    isBestseller: true,
  },
  {
    id: 'r3',
    name: 'Reine Emerald-Cut Ring',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80',
    category: 'diamond-rings',
    collection: 'emerald-cut',
    description: 'A breathtaking 3-carat emerald-cut diamond flanked by tapered baguette diamonds in a platinum Art Déco setting.',
    details: ['3-carat emerald-cut diamond', 'Tapered baguette side stones', 'Platinum setting', 'GIA certified, E color, VS1'],
    material: 'Platinum & Diamonds',
    isNew: true,
  },
  {
    id: 'r4',
    name: 'Couronne Halo Ring',
    price: 14800,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
    category: 'diamond-rings',
    collection: 'halo',
    description: 'A 1.5-carat cushion-cut center diamond crowned by a luminous halo of round brilliants, all set in 18K white gold.',
    details: ['1.5-carat cushion center', '0.45ct halo diamonds', '18K white gold', 'GIA certified'],
    material: '18K White Gold & Diamonds',
    isBestseller: true,
  },
  // Diamond Necklaces
  {
    id: 'n1',
    name: 'Rivière Diamond Necklace',
    price: 42000,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80',
    category: 'diamond-necklaces',
    collection: 'brilliant-cut',
    description: 'Forty graduated round brilliant diamonds flow seamlessly around the neck in this iconic rivière necklace — pure diamond magnificence.',
    details: ['12.5 total carat weight', 'Graduated round brilliants', 'Platinum', 'Hidden box clasp with safety'],
    material: 'Platinum & Diamonds',
    isBestseller: true,
  },
  {
    id: 'n2',
    name: 'Solitaire Diamond Pendant',
    price: 8900,
    image: 'https://images.unsplash.com/photo-1515562141589-67f0d569b33e?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1602752250015-39cb6f905e4c?w=600&q=80',
    category: 'diamond-necklaces',
    collection: 'solitaire',
    description: 'A single 1-carat round brilliant diamond floats on an invisible platinum chain — the essence of elegant simplicity.',
    details: ['1-carat round brilliant', 'D color, VVS2 clarity', 'Platinum chain 16-18 inch', 'GIA certified'],
    material: 'Platinum & Diamond',
  },
  {
    id: 'n3',
    name: 'Diamant Y-Necklace',
    price: 24500,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80',
    category: 'diamond-necklaces',
    collection: 'pave-diamond',
    description: 'Pavé-set diamonds descending in a Y-formation, culminating in a pear-shaped diamond drop. Showstopping décolletage luxury.',
    details: ['5.8 total carat weight', 'Pear-shaped drop 1.2ct', '18K white gold', 'Adjustable length'],
    material: '18K White Gold & Diamonds',
    isNew: true,
  },
  // Diamond Earrings
  {
    id: 'e1',
    name: 'Brilliance Studs',
    price: 7600,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80',
    category: 'diamond-earrings',
    collection: 'brilliant-cut',
    description: 'Classic round brilliant diamond studs in a four-prong platinum setting — the cornerstone of every diamond collection.',
    details: ['1.0 carat total (0.5ct each)', 'E color, VS1 clarity', 'Platinum four-prong', 'Screw-back posts'],
    material: 'Platinum & Diamonds',
    isBestseller: true,
  },
  {
    id: 'e2',
    name: 'Cascade Diamond Drops',
    price: 16200,
    image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80',
    category: 'diamond-earrings',
    collection: 'halo',
    description: 'Articulated diamond drop earrings with graduating halos that dance with light at the slightest movement.',
    details: ['3.2 total carat weight', 'Three graduating halos', '18K white gold', 'Post with omega back'],
    material: '18K White Gold & Diamonds',
    isNew: true,
  },
  {
    id: 'e3',
    name: 'Déco Linear Earrings',
    price: 21000,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80',
    category: 'diamond-earrings',
    collection: 'emerald-cut',
    description: 'Linear emerald-cut diamonds descend in a geometric cascade — a celebration of Art Déco architecture in diamond form.',
    details: ['4.4 total carat weight', 'Emerald-cut diamonds', 'Platinum', 'Lever-back closure'],
    material: 'Platinum & Diamonds',
  },
  // Diamond Bracelets
  {
    id: 'b1',
    name: 'Éternité Tennis Bracelet',
    price: 28000,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1600721391689-2564bb8055de?w=600&q=80',
    category: 'diamond-bracelets',
    collection: 'brilliant-cut',
    description: 'The quintessential diamond tennis bracelet — 45 perfectly matched round brilliants set in a seamless platinum line.',
    details: ['7.5 total carat weight', 'D-F color, VS clarity', 'Platinum', 'Box clasp with double safety'],
    material: 'Platinum & Diamonds',
    isBestseller: true,
  },
  {
    id: 'b2',
    name: 'Diamond Bangle Cuff',
    price: 35500,
    image: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=600&q=80',
    category: 'diamond-bracelets',
    collection: 'pave-diamond',
    description: 'A sculpted gold cuff entirely blanketed in pavé diamonds — over 400 stones creating a continuous river of light.',
    details: ['8.2 total carat weight', '400+ pavé-set diamonds', '18K white gold', 'Hinged with safety clasp'],
    material: '18K White Gold & Diamonds',
    isNew: true,
  },
  {
    id: 'b3',
    name: 'Vintage Diamond Bracelet',
    price: 19800,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1515562141589-67f0d569b33e?w=600&q=80',
    category: 'diamond-bracelets',
    collection: 'vintage-diamond',
    description: 'Old European-cut diamonds set in intricate milgrain platinum links — a breathtaking nod to early 20th century grandeur.',
    details: ['5.8 total carat weight', 'Old European-cut diamonds', 'Platinum milgrain', 'Fold-over clasp'],
    material: 'Platinum & Diamonds',
  },
  // Bridal Diamonds
  {
    id: 'br1',
    name: 'Éternité Engagement Ring',
    price: 38500,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
    category: 'diamond-bridal',
    collection: 'solitaire',
    description: 'The ultimate symbol of eternal love — a flawless 3-carat round brilliant diamond in our signature six-prong platinum setting.',
    details: ['3-carat round brilliant', 'D color, IF clarity', 'Platinum six-prong setting', 'GIA certified'],
    material: 'Platinum & Diamond',
    isBestseller: true,
  },
  {
    id: 'br2',
    name: 'Diamond Eternity Band',
    price: 12800,
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
    category: 'diamond-bridal',
    collection: 'brilliant-cut',
    description: 'A full-circle eternity band of perfectly matched round brilliant diamonds in shared-prong platinum — symbolizing infinite love.',
    details: ['2.4 total carat weight', 'Shared-prong setting', 'Platinum', 'GIA certified stones'],
    material: 'Platinum & Diamonds',
    isNew: true,
  },
  // Loose Diamonds
  {
    id: 'ld1',
    name: '2ct Round Brilliant Diamond',
    price: 24000,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80',
    category: 'loose-diamonds',
    collection: 'brilliant-cut',
    description: 'An exceptional 2-carat round brilliant diamond with ideal proportions, maximum fire, and extraordinary light performance.',
    details: ['2.01 carats', 'D color, VVS1 clarity', 'Excellent cut, polish & symmetry', 'GIA report included'],
    material: 'Natural Diamond',
    isBestseller: true,
  },
  {
    id: 'ld2',
    name: '3ct Emerald-Cut Diamond',
    price: 42000,
    image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80',
    category: 'loose-diamonds',
    collection: 'emerald-cut',
    description: 'A museum-quality 3-carat emerald-cut diamond with mesmerizing step-cut facets and exceptional clarity.',
    details: ['3.05 carats', 'E color, VVS2 clarity', 'Excellent polish & symmetry', 'GIA report included'],
    material: 'Natural Diamond',
    isNew: true,
  },
];

export const getProductsByCategory = (categoryId: string) =>
  products.filter((p) => p.category === categoryId);

export const getProductsByCollection = (collectionId: string) =>
  products.filter((p) => p.collection === collectionId);

export const getProductById = (id: string) =>
  products.find((p) => p.id === id);

export const getCategoryById = (id: string) =>
  categories.find((c) => c.id === id);

export const getCollectionById = (id: string) =>
  collections.find((c) => c.id === id);

export const getFeaturedProducts = () =>
  products.filter((p) => p.isNew || p.isBestseller).slice(0, 8);

export const formatPrice = (price: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(price);
