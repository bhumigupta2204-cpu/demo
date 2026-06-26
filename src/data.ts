const heroImg = 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format,compress&fit=crop&q=80&w=1200&fm=webp';
const serumImg = 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format,compress&fit=crop&q=80&w=600&fm=webp';
const lipstickImg = 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format,compress&fit=crop&q=80&w=600&fm=webp';
const hairoilImg = 'https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format,compress&fit=crop&q=80&w=600&fm=webp';
const cleanserImg = 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format,compress&fit=crop&q=80&w=600&fm=webp';
const lotionImg = 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format,compress&fit=crop&q=80&w=600&fm=webp';

import { Product, BlogPost } from './types.ts';

export { heroImg, serumImg, lipstickImg, hairoilImg, cleanserImg, lotionImg };

export const products: Product[] = [
  {
    id: '1',
    name: 'Hydrating Face Serum',
    description: 'Deeply moisturizes the skin and provides a highly concentrated burst of hydration. Suitable for all skin types and rich in Vitamin C.',
    details: [
      'Deeply moisturizes the skin',
      'Suitable for all skin types',
      'Rich in Vitamin C'
    ],
    price: 32.00,
    category: 'Skincare',
    image: serumImg,
    fallbackImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600',
    rating: 4.8,
    reviewsCount: 142
  },
  {
    id: '2',
    name: 'Matte Lipstick Collection',
    description: 'A luxurious range of lipsticks featuring a long-lasting formula that hydrates while giving a smooth, lightweight velvet finish.',
    details: [
      'Long-lasting formula',
      'Available in multiple shades',
      'Smooth and lightweight'
    ],
    price: 18.00,
    category: 'Makeup',
    image: lipstickImg,
    fallbackImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=600',
    rating: 4.9,
    reviewsCount: 208
  },
  {
    id: '3',
    name: 'Nourishing Hair Oil',
    description: 'Our proprietary herbal hair therapy promotes healthy, glossy locks, prevents breakages, and deeply re-conditions your scalp.',
    details: [
      'Promotes healthy hair growth',
      'Reduces hair fall',
      'Natural ingredients'
    ],
    price: 26.50,
    category: 'Hair Care',
    image: hairoilImg,
    fallbackImage: 'https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&q=80&w=600',
    rating: 4.7,
    reviewsCount: 95
  },
  {
    id: '4',
    name: 'Gentle Face Cleanser',
    description: 'Formulated with organic botanicals to remove daily impurities and sebum without stripping. Leaves skin pH balanced, fresh, and soft.',
    details: [
      'Removes dirt and impurities',
      'Keeps skin fresh and soft',
      'Dermatologist tested'
    ],
    price: 15.00,
    category: 'Skincare',
    image: cleanserImg,
    fallbackImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=600',
    rating: 4.6,
    reviewsCount: 174
  },
  {
    id: '5',
    name: 'Body Lotion',
    description: 'Provides 24-hour weightless hydration with a non-greasy fast-absorbing matrix. Excellent for daily application after warm showers.',
    details: [
      'Provides 24-hour hydration',
      'Non-greasy formula',
      'Suitable for daily use'
    ],
    price: 22.00,
    category: 'Body Care',
    image: lotionImg,
    fallbackImage: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=600',
    rating: 4.5,
    reviewsCount: 88
  },
  {
    id: '6',
    name: 'Silk Eye Mask & Roller Set',
    description: 'The ultimate beauty sleep accompaniment. Includes an organic Mulberry silk sleep mask and a calming Rose Quartz dual-action cooling roller.',
    details: [
      'Genuine natural rose quartz',
      'Promotes lymphatic drainage',
      'Minimizes sensory light disturbance'
    ],
    price: 29.00,
    category: 'Beauty Accessories',
    image: 'https://images.unsplash.com/photo-1601049676099-e7ed07d825b0?auto=format&fit=crop&q=80&w=600',
    fallbackImage: 'https://images.unsplash.com/photo-1601049676099-e7ed07d825b0?auto=format&fit=crop&q=80&w=600',
    rating: 4.8,
    reviewsCount: 63
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: '5 Simple Skincare Tips for Healthy Skin',
    excerpt: 'Healthy skin starts with proper cleansing, moisturizing, and sun protection. Following a daily skincare routine can help maintain glowing skin.',
    content: `Healthy skin starts with proper cleansing, moisturizing, and sun protection. Following a structured daily skincare routine can help maintain a youthful, radiant, and glowing skin complexion. Here is a simple, dermatologist-approved blueprint:

1. **Gentle Double-Cleansing**: Wash your face morning and night to remove sebum, environment dust, and cosmetics. Avoid bar soaps which imbalance your skin pH.
2. **Never Skip daily Hydration**: Serums containing Vitamin C or Hyaluronic acid draw water and lock it down. Apply right after cleansing while your skin is still damp.
3. **Moisturizing Cream Shield**: Apply cream or gel lotion to create a physical barrier preventing skin-surface water loss.
4. **Broad Spectrum Daily SPF**: UVA/UVB rays accelerate cellular breakdown, leading to fine lines. Wear SPF 30+ even on overcast winter days.
5. **Inner Wellness and Water**: Clear skin operates from the inside-out. Drink plenty of water and prioritize high-quality sleep for cell-repair.`,
    date: 'June 18, 2026',
    readTime: '4 min read',
    category: 'Skincare Routine',
    author: 'Elena Rostova',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'blog-2',
    title: 'Best Makeup Trends in 2026',
    excerpt: 'Natural makeup looks, glossy hydrating lips, and lightweight breathable foundations are among the top beauty trends this year.',
    content: `Natural makeup looks, glossy hydrating lips, and lightweight breathable foundations are among the top beauty trends in 2026. This year, the beauty community embraces the "Clean Skin, bold attitude" aesthetic.

- **Dewy Skin Tints instead of Heavy Foundations**: People are tossing high-coverage matte foundations and embracing water-based skin serums and tinted oils that let natural beauty shine through.
- **Laminated Brows and Monochromatic Blushes**: Brushed-up fluffy eyebrows combined with a soft splash of warm peach or terracotta cream blush across the cheekbones and nose bridge.
- **Glass-like Lip Finishes**: Moving away from the ultra-dry, cracked liquid lips of the past decade. 2026 is dominated by nourishing peptide lip treatments with high-shine wet gloss effects.
- **Pop-of-color Graphic Eyeliners**: Bright cobalt blue, emerald green, and pastel orange minimalist wings layered with natural bare lids.`,
    date: 'May 20, 2026',
    readTime: '3 min read',
    category: 'Makeup & Trends',
    author: 'Maya Sorel',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'blog-3',
    title: 'How to Choose Products for Your Skin Type',
    excerpt: 'Understanding your skin type helps you select products that provide the best results and prevent unwanted irritation.',
    content: `Understanding your skin type helps you select products that provide the best results, maximize product efficacy, and prevent sudden chemical flare-ups or irritation. Here's how to identify yours:

- **Dry Skin**: Often feels tight, patchy, or flaky, especially after washing. Look for hydrating cleansers, squalane-based serums, and lock-in cremes loaded with ceramides and hyaluronic acid.
- **Oily Skin**: High sebum production resulting in shiny forehead or cheeks. Look for water-light gel moisturizers, clay masks, and ingredients like Salicylic Acid (BHA) and Niacinamide to normalize pore sizing.
- **Combination Skin**: Typically oily in the T-zone (forehead, nose, chin) but normal/dry on cheeks. Benefit from multi-masking and lightweight oil-free creams.
- **Sensitive Skin**: Prone to redness, itching, or hot flushes. Avoid synthetic fragrances, strong alcohols, and harsh physical exfoliators. Prioritize soothing botanical extracts like Centella Asiatica (Cica), Allantoin, and Aloe Vera.`,
    date: 'April 14, 2026',
    readTime: '5 min read',
    category: 'Skincare Guide',
    author: 'Dr. Sarah Lin',
    image: 'https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'blog-4',
    title: 'Benefits of Using Vitamin C Serum',
    excerpt: 'Vitamin C serum helps brighten the skin, fade persistent dark spots, and improve overall skin texture significantly.',
    content: `Vitamin C serum helps brighten the skin, reduce dark spots, and improve overall skin texture. It acts as an incredibly potent antioxidant that shields raw skin from everyday environmental pollution, blue light, and cellular UV damage.

### Key Benefits of L-Ascorbic Acid:
1. **Fades Dark Spots & Hyperpigmentation**: Vitamin C blocks excess melanin production, gently blending sun spots and post-acne pigmentation marks over weeks.
2. **Supercharges Collagen Synthesis**: Collagen keeps skin bouncy. Vitamin C serves as a foundational co-factor for the body's natural collagen production.
3. **Evens Out Skin Texture**: Reduces minor skin inflammation and speeds up cellular renewal, creating a smooth finish.
4. **Boosts Sunscreen Efficacy**: Applying Vitamin C under your daily sunscreen boosts its skin-protection coefficient, capturing free radicals that pass past the SPF barrier.`,
    date: 'March 05, 2026',
    readTime: '4 min read',
    category: 'Ingredients',
    author: 'Elena Rostova',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600'
  }
];
