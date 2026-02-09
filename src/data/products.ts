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
    id: 'rings',
    name: 'Rings',
    description: 'Exquisite rings crafted to mark life\'s most precious moments, from engagement solitaires to bold cocktail pieces.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    productCount: 12,
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Elegant necklaces and pendants that drape gracefully, adding a touch of brilliance to every neckline.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    productCount: 15,
  },
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'From delicate studs to dramatic chandeliers, each pair is designed to frame and flatter.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    productCount: 18,
  },
  {
    id: 'bracelets',
    name: 'Bracelets',
    description: 'Luxurious bracelets and bangles that encircle the wrist with timeless beauty and masterful artistry.',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    productCount: 10,
  },
  {
    id: 'watches',
    name: 'Watches',
    description: 'Fine timepieces that blend horological tradition with contemporary luxury and impeccable design.',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80',
    productCount: 8,
  },
  {
    id: 'bridal',
    name: 'Bridal',
    description: 'Curated bridal jewelry to make your most special day shimmer with everlasting elegance.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
    productCount: 20,
  },
];

export const collections: Collection[] = [
  {
    id: 'eternal-bloom',
    name: 'Eternal Bloom',
    tagline: 'Where nature meets luxury',
    description: 'Inspired by the fleeting beauty of blossoming gardens, the Eternal Bloom collection captures nature\'s most delicate forms in precious metals and gemstones. Each piece is a botanical marvel, frozen in time.',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600721391689-2564bb8055de?w=1600&q=80',
    season: 'Spring/Summer 2026',
  },
  {
    id: 'celestial-radiance',
    name: 'Celestial Radiance',
    tagline: 'Written in the stars',
    description: 'Drawing from the infinite beauty of the cosmos, Celestial Radiance features star-cut diamonds and crescent motifs set in lustrous gold. A collection for those who dream beyond the horizon.',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1600&q=80',
    season: 'Fall/Winter 2025',
  },
  {
    id: 'ocean-whisper',
    name: 'Ocean Whisper',
    tagline: 'The sea\'s quiet luxury',
    description: 'Oceanic hues of aquamarine, pearl, and turquoise evoke the serene depths of the sea. The Ocean Whisper collection brings coastal elegance to high jewelry with fluid forms and organic textures.',
    image: 'https://images.unsplash.com/photo-1515562141589-67f0d569b33e?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1583484963886-cfe2bff2945f?w=1600&q=80',
    season: 'Resort 2026',
  },
  {
    id: 'art-deco-revival',
    name: 'Art Déco Revival',
    tagline: 'Geometry reimagined',
    description: 'Bold geometric forms meet exquisite craftsmanship in this tribute to the Art Déco era. Clean lines, symmetrical patterns, and striking gemstone combinations define this architectural collection.',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=1600&q=80',
    season: 'Signature Collection',
  },
  {
    id: 'minimalist-luxe',
    name: 'Minimalist Luxe',
    tagline: 'Less is more, beautifully',
    description: 'For the modern woman who finds elegance in simplicity. Clean silhouettes, refined metals, and understated brilliance — proof that luxury whispers louder than it shouts.',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1600&q=80',
    season: 'Permanent Collection',
  },
  {
    id: 'heritage-royale',
    name: 'Heritage Royale',
    tagline: 'Crafted through generations',
    description: 'A celebration of old-world glamour and master craftsmanship. Heritage Royale showcases heirloom-quality pieces with intricate filigree, pavé settings, and museum-worthy gemstones.',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=1600&q=80',
    season: 'Haute Joaillerie',
  },
];

export const products: Product[] = [
  // Rings
  {
    id: 'r1',
    name: 'Pétale Solitaire Ring',
    price: 12800,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600&q=80',
    category: 'rings',
    collection: 'eternal-bloom',
    description: 'A breathtaking solitaire featuring a 2-carat pear-shaped diamond set in platinum, inspired by a single falling petal.',
    details: ['2-carat pear-shaped diamond', 'Platinum setting', 'Handcrafted in Paris', 'Certificate of authenticity'],
    material: 'Platinum & Diamond',
    isNew: true,
  },
  {
    id: 'r2',
    name: 'Celestial Band',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80',
    category: 'rings',
    collection: 'celestial-radiance',
    description: 'A constellation of micro-pavé diamonds wraps gracefully around an 18K white gold band, evoking a stellar night sky.',
    details: ['0.85 total carat weight', '18K white gold', 'Micro-pavé setting', 'Comfort-fit band'],
    material: '18K White Gold & Diamonds',
    isBestseller: true,
  },
  {
    id: 'r3',
    name: 'Déco Emerald Ring',
    price: 22500,
    image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80',
    category: 'rings',
    collection: 'art-deco-revival',
    description: 'A stunning emerald-cut Colombian emerald framed by geometric diamond shoulders, an homage to Art Déco grandeur.',
    details: ['3.2-carat Colombian emerald', 'Step-cut diamond shoulders', '18K yellow gold', 'GIA certified'],
    material: '18K Gold, Emerald & Diamonds',
    isNew: true,
  },
  // Necklaces
  {
    id: 'n1',
    name: 'Cascading Bloom Necklace',
    price: 18900,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80',
    category: 'necklaces',
    collection: 'eternal-bloom',
    description: 'Delicate floral motifs cascade down the décolletage in this masterwork of platinum and brilliant-cut diamonds.',
    details: ['4.5 total carat weight', 'Platinum chain', 'Adjustable length', 'Floral motif design'],
    material: 'Platinum & Diamonds',
    isBestseller: true,
  },
  {
    id: 'n2',
    name: 'Crescent Moon Pendant',
    price: 6200,
    image: 'https://images.unsplash.com/photo-1515562141589-67f0d569b33e?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1602752250015-39cb6f905e4c?w=600&q=80',
    category: 'necklaces',
    collection: 'celestial-radiance',
    description: 'A crescent moon pendant adorned with white diamonds, suspended from a fine gold chain that catches every light.',
    details: ['0.6 total carat weight', '18K rose gold', '16-18 inch adjustable chain', 'Lobster clasp'],
    material: '18K Rose Gold & Diamonds',
  },
  {
    id: 'n3',
    name: 'Pearl Rivière Necklace',
    price: 15600,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80',
    category: 'necklaces',
    collection: 'ocean-whisper',
    description: 'Lustrous South Sea pearls graduated in size, connected by delicate gold links in this breathtaking rivière.',
    details: ['South Sea pearls 9-14mm', '18K yellow gold links', 'Graduated design', 'Hidden clasp'],
    material: '18K Gold & South Sea Pearls',
    isNew: true,
  },
  // Earrings
  {
    id: 'e1',
    name: 'Petal Drop Earrings',
    price: 9800,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80',
    category: 'earrings',
    collection: 'eternal-bloom',
    description: 'Graceful petal-shaped drops in 18K rose gold, set with graduating pink sapphires and brilliant-cut diamonds.',
    details: ['Pink sapphires & diamonds', '18K rose gold', 'Post with butterfly back', 'Drop length 4.5cm'],
    material: '18K Rose Gold, Sapphires & Diamonds',
  },
  {
    id: 'e2',
    name: 'Starlight Studs',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80',
    category: 'earrings',
    collection: 'celestial-radiance',
    description: 'Six-pointed star studs featuring a central brilliant-cut diamond surrounded by a halo of smaller stones.',
    details: ['0.5 carat center stones', '18K white gold', 'Push-back closure', 'Star motif 12mm'],
    material: '18K White Gold & Diamonds',
    isBestseller: true,
  },
  {
    id: 'e3',
    name: 'Géométrie Chandeliers',
    price: 14500,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80',
    category: 'earrings',
    collection: 'art-deco-revival',
    description: 'Dramatic Art Déco chandelier earrings featuring onyx, diamonds, and emeralds in a striking geometric cascade.',
    details: ['Diamonds, onyx & emeralds', 'Platinum & 18K gold', 'Lever-back closure', 'Drop length 7cm'],
    material: 'Platinum, Gold & Gemstones',
    isNew: true,
  },
  // Bracelets
  {
    id: 'b1',
    name: 'Vine Cuff Bracelet',
    price: 11200,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1600721391689-2564bb8055de?w=600&q=80',
    category: 'bracelets',
    collection: 'eternal-bloom',
    description: 'An organic vine motif wraps around the wrist in this sculpted gold cuff, accented with emerald leaves.',
    details: ['18K yellow gold', 'Emerald accents', 'Hinged opening', 'Fits wrists 15-18cm'],
    material: '18K Gold & Emeralds',
  },
  {
    id: 'b2',
    name: 'Simplicity Tennis Bracelet',
    price: 16800,
    image: 'https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=600&q=80',
    category: 'bracelets',
    collection: 'minimalist-luxe',
    description: 'A classic tennis bracelet elevated with exceptional D-flawless diamonds set in a clean platinum line.',
    details: ['5.2 total carat weight', 'D-VVS1 diamonds', 'Platinum', 'Box clasp with safety'],
    material: 'Platinum & Diamonds',
    isBestseller: true,
  },
  {
    id: 'b3',
    name: 'Tidal Wave Bangle',
    price: 7400,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1515562141589-67f0d569b33e?w=600&q=80',
    category: 'bracelets',
    collection: 'ocean-whisper',
    description: 'A sculptural bangle mimicking the gentle undulation of ocean waves, set with aquamarines along the crest.',
    details: ['18K white gold', 'Aquamarine accents', 'Sculpted wave form', 'Slip-on style'],
    material: '18K White Gold & Aquamarine',
  },
  // Watches
  {
    id: 'w1',
    name: 'Hora Élégante',
    price: 34000,
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600&q=80',
    category: 'watches',
    collection: 'heritage-royale',
    description: 'A masterpiece of horology featuring a mother-of-pearl dial, diamond indices, and Swiss automatic movement.',
    details: ['Swiss automatic movement', 'Mother-of-pearl dial', 'Diamond hour markers', '18K rose gold case'],
    material: '18K Rose Gold & Diamonds',
    isNew: true,
  },
  {
    id: 'w2',
    name: 'Minuit Watch',
    price: 8900,
    image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80',
    category: 'watches',
    collection: 'minimalist-luxe',
    description: 'Clean lines and understated luxury define this timepiece with its slim profile and sapphire crystal.',
    details: ['Swiss quartz movement', 'Sapphire crystal', 'Slim 6mm profile', 'Alligator strap'],
    material: 'Stainless Steel & Sapphire Crystal',
  },
  // Bridal
  {
    id: 'br1',
    name: 'Éternité Engagement Ring',
    price: 28500,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
    category: 'bridal',
    collection: 'heritage-royale',
    description: 'The ultimate symbol of eternal love — a flawless round brilliant diamond in our signature six-prong setting.',
    details: ['3-carat round brilliant', 'D color, IF clarity', 'Platinum six-prong setting', 'GIA certified'],
    material: 'Platinum & Diamond',
    isBestseller: true,
  },
  {
    id: 'br2',
    name: 'Amour Wedding Band Set',
    price: 5600,
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
    category: 'bridal',
    collection: 'minimalist-luxe',
    description: 'Matching wedding bands in 18K gold with a shared diamond that symbolizes two lives becoming one.',
    details: ['18K yellow gold', 'Shared diamond design', 'Comfort-fit', 'Engraving available'],
    material: '18K Gold & Diamond',
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
