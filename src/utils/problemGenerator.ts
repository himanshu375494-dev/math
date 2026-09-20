import { GameMode, GeneratedProblem, SpeedDifficulty } from '../types';

export const GAME_MODES: GameMode[] = [
  // --- वैदिक व बेस गुणा ---
  {
    id: 'half-double-mult',
    category: 'vedic',
    nameHi: 'हाफ व डबल गुणा (÷2 ×2, ÷4, ÷8) 🌗',
    nameEn: 'Half & Double Multiply 🌗',
    badge: 'हाफ-डबल',
    defaultTimeLimitMs: { easy: 7000, medium: 4800, god: 3000, zen: 0 },
    hintHi: 'ट्रिक: एक को 2/4/8 से भाग दें व दूसरे को 2/4/8 से गुणा करें! 16×35 = 8×70 = 560, 48×125 = 6×1000 = 6000!',
    hintEn: 'Trick: Halve one & double the other! (16×35 = 8×70 = 560, 48×125 = 6×1000 = 6000)',
  },
  {
    id: 'base-100-mult',
    category: 'vedic',
    nameHi: '100 बेस गुणा (Nikhilam) ⚡',
    nameEn: 'Base 100 Multiply ⚡',
    badge: '100 बेस',
    defaultTimeLimitMs: { easy: 7500, medium: 5000, god: 3200, zen: 0 },
    hintHi: 'निखिलम्: 104 × 107 = (104+7) | (4×7) = 11128, 96 × 94 = (96-6) | (4×6) = 9024',
    hintEn: 'Base 100: 104 × 107 = (104+7)|(4×7) = 11128, 96 × 94 = 9024',
  },
  {
    id: 'base-1000-mult',
    category: 'vedic',
    nameHi: '1000 बेस गुणा (Nikhilam) 🧠',
    nameEn: 'Base 1000 Multiply 🧠',
    badge: '1000 बेस',
    defaultTimeLimitMs: { easy: 8500, medium: 6000, god: 3800, zen: 0 },
    hintHi: '1000 बेस: 1004 × 1007 = (1004+7) | 028 = 1011028',
    hintEn: 'Base 1000: 1004 × 1007 = (1004+7) | 028 = 1011028',
  },
  {
    id: 'mult-9-series',
    category: 'vedic',
    nameHi: '9, 99, 999 से गुणा 🎯',
    nameEn: 'Multiply by 9, 99, 999 🎯',
    badge: 'एक न्यून',
    defaultTimeLimitMs: { easy: 6500, medium: 4500, god: 2800, zen: 0 },
    hintHi: 'एक न्यूनेन पूर्वेण: 47 × 99 = (47-1) और (100-47) = 4653! 68 × 99 = 6732',
    hintEn: 'Ekanyunena: 47 × 99 = (47-1) and (100-47) = 4653',
  },
  {
    id: 'criss-cross-2x2',
    category: 'vedic',
    nameHi: 'क्रॉस गुणा 2×2 (उर्ध्व-तिर्यक) ⚡',
    nameEn: 'Criss-Cross 2×2 ⚡',
    badge: '2×2 गुणा',
    defaultTimeLimitMs: { easy: 9500, medium: 6500, god: 4000, zen: 0 },
    hintHi: 'उर्ध्व तिर्यग्भ्याम्: 1. इकाई×इकाई, 2. क्रॉस गुणा का जोड़, 3. दहाई×दहाई! e.g. 23×41 = 943',
    hintEn: 'Urdhva Tiryagbhyam: 1. Vertical, 2. Cross add, 3. Vertical! e.g. 23×41 = 943',
  },
  {
    id: 'random-2digit-mult',
    category: 'vedic',
    nameHi: 'रैंडम 2-अंक × 2-अंक गुणा 🎲',
    nameEn: '2-Digit × 2-Digit Random Mult 🎲',
    badge: 'रैंडम 2D×2D',
    defaultTimeLimitMs: { easy: 11000, medium: 7500, god: 4500, zen: 0 },
    hintHi: 'ट्रिक: स्प्लिट या क्रॉस विधि: 34 × 26 = (34 × 20) + (34 × 6) = 680 + 204 = 884 या उर्ध्व-तिर्यक!',
    hintEn: 'Trick: Split: 34 × 26 = (34 × 20) + (34 × 6) = 884! Or criss-cross.',
  },
  {
    id: 'mult-11',
    category: 'vedic',
    nameHi: '11 से त्वरित गुणा ⚡',
    nameEn: 'Multiply by 11 ⚡',
    badge: '× 11',
    defaultTimeLimitMs: { easy: 5500, medium: 3800, god: 2400, zen: 0 },
    hintHi: 'ट्रिक: बीच में अंकों का जोड़ लिखें! 43 × 11 = 4(4+3)3 = 473, 78 × 11 = 858',
    hintEn: 'Trick: Add adjacent digits: 43 × 11 = 4(4+3)3 = 473',
  },
  {
    id: 'same-tens-10',
    category: 'vedic',
    nameHi: 'दहाई समान, इकाई 10 योग 🧩',
    nameEn: 'Same Tens, Sum 10 🧩',
    badge: 'वैदिक गुणा',
    defaultTimeLimitMs: { easy: 6500, medium: 4500, god: 2800, zen: 0 },
    hintHi: 'ट्रिक: 64 × 66 = (6×7) | (4×6) = 4224, 43 × 47 = (4×5) | (3×7) = 2021',
    hintEn: 'Trick: 64 × 66 = (6×7)|(4×6) = 4224',
  },
  {
    id: 'mult-25-50',
    category: 'mult_square',
    nameHi: '25 व 50 से गुणा 🚀',
    nameEn: 'Multiply 25 & 50 🚀',
    badge: 'हाफ-डबल',
    defaultTimeLimitMs: { easy: 6000, medium: 4000, god: 2500, zen: 0 },
    hintHi: 'ट्रिक: ×25 के लिए 4 से भाग देकर 00 लगाएं (48×25 = 1200), ×50 के लिए आधा करके 00 लगाएं',
    hintEn: 'Trick: N×25 = (N/4)*100, N×50 = (N/2)*100',
  },

  // --- प्रतिशत व भिन्न ---
  {
    id: 'fraction-to-percent',
    category: 'fractions',
    nameHi: 'भिन्न से प्रतिशत (1/X ➔ %) 📊',
    nameEn: 'Fraction to Percent 📊',
    badge: 'SSC/Banking',
    hasDecimal: true,
    defaultTimeLimitMs: { easy: 6000, medium: 4000, god: 2500, zen: 0 },
    hintHi: 'SSC/Bank: 1/8=12.5%, 1/6=16.67%, 1/7=14.28%, 3/8=37.5%, 1/12=8.33%',
    hintEn: 'Fractions: 1/8=12.5%, 1/6=16.67%, 1/7=14.28%, 3/8=37.5%',
  },
  {
    id: 'percent-complement',
    category: 'subtraction',
    nameHi: 'परसेंटेज कॉम्प्लिमेंट (.5) 📊',
    nameEn: 'Percent Complement (.5) 📊',
    badge: '100 - %',
    hasDecimal: true,
    defaultTimeLimitMs: { easy: 6500, medium: 4500, god: 2800, zen: 0 },
    hintHi: 'ट्रिक: 100 - 37.5 = 62.5, 100 - 12.5 = 87.5, 100 - 62.5 = 37.5',
    hintEn: 'Trick: Common exam fractions: 100 - 37.5 = 62.5, 100 - 12.5 = 87.5',
  },

  // --- वर्ग, क्यूब व मूल ---
  {
    id: 'cube-root',
    category: 'mult_square',
    nameHi: 'घनमूल रिफ्लेक्स (∛X) 🧊',
    nameEn: 'Cube Root (∛X) 🧊',
    badge: 'वैदिक घनमूल',
    defaultTimeLimitMs: { easy: 6000, medium: 4000, god: 2400, zen: 0 },
    hintHi: 'वैदिक ट्रिक: अंतिम अंक (2<->8, 3<->7, बाकी वही) और पहले 3-अंक ग्रुप का नजदीकी घन!',
    hintEn: 'Vedic cube root: Last digit mapping (2<->8, 3<->7) + nearest root of prefix!',
  },
  {
    id: 'square-root',
    category: 'mult_square',
    nameHi: 'वर्गमूल रिफ्लेक्स (√X) 🔍',
    nameEn: 'Square Root Reflex 🔍',
    badge: 'वर्गमूल',
    defaultTimeLimitMs: { easy: 6000, medium: 4000, god: 2400, zen: 0 },
    hintHi: 'ट्रिक: इकाई अंक और नजदीकी वर्ग पहचानें! √576 = 24, √1296 = 36',
    hintEn: 'Trick: Identify unit digit and nearest root! √576 = 24, √1296 = 36',
  },
  {
    id: 'unit-5-square',
    category: 'mult_square',
    nameHi: 'इकाई 5 वर्ग (X5²) 🎯',
    nameEn: 'Unit 5 Square 🎯',
    badge: 'एकाधिकेन',
    defaultTimeLimitMs: { easy: 5000, medium: 3500, god: 2200, zen: 0 },
    hintHi: 'एकाधिकेन पूर्वेण: 35² = (3×4) व 25 = 1225, 75² = (7×8) व 25 = 5625',
    hintEn: 'Ending in 5: 35² = (3×4) and 25 = 1225',
  },
  {
    id: 'squares-50',
    category: 'mult_square',
    nameHi: '50 बेस वर्ग (41² - 59²) ⚡',
    nameEn: 'Squares near 50 ⚡',
    badge: '50 बेस',
    defaultTimeLimitMs: { easy: 6000, medium: 4000, god: 2400, zen: 0 },
    hintHi: 'ट्रिक: (25 ± d) और d²! 54² = (25+4) और 4² = 2916, 47² = (25-3) और 3² = 2209',
    hintEn: 'Trick: (25 ± d) and d²! 54² = 2916, 47² = 2209',
  },
  {
    id: 'squares',
    category: 'mult_square',
    nameHi: 'स्क्वायर रिफ्लेक्स (11² - 40²) ⚡',
    nameEn: 'Square Reflex (11² - 40²) ⚡',
    badge: 'कोर स्क्वेयर्स',
    defaultTimeLimitMs: { easy: 5000, medium: 3500, god: 2200, zen: 0 },
    hintHi: 'ट्रिक: बेस 25/50 या 5 पर खत्म होने वाले नंबर (X5² = X*(X+1) और 25)।',
    hintEn: 'Trick: Base 25/50 rules or numbers ending in 5: X5² = X*(X+1) followed by 25.',
  },
  {
    id: 'cubes',
    category: 'mult_square',
    nameHi: 'क्यूब पावर (1³ - 15³) 🧊',
    nameEn: 'Cube Power (1³ - 15³) 🧊',
    badge: '1³ - 15³',
    defaultTimeLimitMs: { easy: 5000, medium: 3500, god: 2200, zen: 0 },
    hintHi: 'ट्रिक: 7³=343, 8³=512, 9³=729, 11³=1331, 12³=1728 याद रखें।',
    hintEn: 'Trick: Memorize 7³=343, 8³=512, 9³=729, 11³=1331, 12³=1728.',
  },

  // --- घटाव व रिफ्लेक्स ---
  {
    id: 'reflex-traps',
    category: 'reflex',
    nameHi: 'रिफ्लेक्स ट्रैप ⚡',
    nameEn: 'Reflex Traps ⚡',
    badge: 'स्पीड',
    defaultTimeLimitMs: { easy: 5000, medium: 3400, god: 2000, zen: 0 },
    hintHi: 'ट्रिक: 9 और 10 के पूरक में धोखा मत खाना! (73 <-> 27, 67 <-> 33)',
    hintEn: 'Trick: Don’t fall for 9 and 10 complement swaps! (73 <-> 27, 67 <-> 33)',
  },
  {
    id: 'hard-single',
    category: 'subtraction',
    nameHi: '100 - X (कठिन 2-अंक)',
    nameEn: '100 - X (Hard Double)',
    badge: 'कोर घटाव',
    defaultTimeLimitMs: { easy: 5500, medium: 3800, god: 2400, zen: 0 },
    hintHi: 'ट्रिक: पहले अंक को 9 से और इकाई के अंक को 10 से घटाएं।',
    hintEn: 'Trick: Tens digit from 9, and units digit from 10.',
  },
  {
    id: 'vedic-1000',
    category: 'vedic',
    nameHi: '1000 - XYZ (वैदिक बेस) 🧠',
    nameEn: '1000 - XYZ (Vedic Base) 🧠',
    badge: '1000 बेस',
    defaultTimeLimitMs: { easy: 6000, medium: 4200, god: 2500, zen: 0 },
    hintHi: 'निखिलं नवतश्चरमं दशतः: सभी अंक 9 से और अंतिम इकाई अंक 10 से घटाएं!',
    hintEn: 'Nikhilam Sutra: All digits from 9, and the last unit digit from 10!',
  },
  {
    id: 'decimal',
    category: 'subtraction',
    nameHi: '100 - XX.YY (.00)',
    nameEn: '100 - XX.YY (Decimals)',
    badge: 'सटीकता',
    hasDecimal: true,
    defaultTimeLimitMs: { easy: 7500, medium: 5200, god: 3200, zen: 0 },
    hintHi: 'ट्रिक: दशमलव के बाद .YY को 100 से घटाएं और पूर्णांक में 1 बढ़ाकर 100 से घटाएं।',
    hintEn: 'Trick: Subtract decimal part from 100, add 1 to whole part and subtract from 100.',
  },
  {
    id: 'double',
    category: 'subtraction',
    nameHi: '100 - A - B',
    nameEn: '100 - A - B (Double)',
    badge: 'डबल माइनस',
    defaultTimeLimitMs: { easy: 7000, medium: 4800, god: 3000, zen: 0 },
    hintHi: 'ट्रिक: पहले A और B को मन में जोड़ें (A+B), फिर उसे 100 से घटाएं।',
    hintEn: 'Trick: Mentally add (A + B) first, then subtract the sum from 100.',
  },
  {
    id: 'missing-number',
    category: 'reflex',
    nameHi: 'मिसिंग नंबर (? रिवर्स) 🧩',
    nameEn: 'Missing Number (? Reverse) 🧩',
    badge: 'रिवर्स माइंड',
    defaultTimeLimitMs: { easy: 6000, medium: 4000, god: 2500, zen: 0 },
    hintHi: 'ट्रिक: समीकरण को उल्टा सोचें! 100 - ? = 37 का अर्थ है 100 - 37 = ?',
    hintEn: 'Trick: Flip equation: 100 - ? = 37 means 100 - 37 = ?',
  },

  // --- स्पीड स्प्रिंट ---
  {
    id: 'mult-speed',
    category: 'mult_square',
    nameHi: 'गुणा स्प्रिंट (2-Digit × 1) 🎯',
    nameEn: 'Speed Multiply (2D × 1D) 🎯',
    badge: '2D × 1D',
    defaultTimeLimitMs: { easy: 6000, medium: 4000, god: 2500, zen: 0 },
    hintHi: 'ट्रिक: (दहाई × नंबर) + (इकाई × नंबर) मन में सीधे जोड़ें। e.g. 18×7 = 70+56 = 126.',
    hintEn: 'Trick: Split & add mentally: (Tens × N) + (Units × N). e.g. 18×7 = 70+56 = 126.',
  },
  {
    id: 'lightning-add',
    category: 'addition',
    nameHi: 'जोड़ स्प्रिंट (A + B > 100) ➕',
    nameEn: 'Lightning Add (A + B) ➕',
    badge: 'तेज जोड़',
    defaultTimeLimitMs: { easy: 5500, medium: 3800, god: 2400, zen: 0 },
    hintHi: 'ट्रिक: बाएं से दाएं जोड़ें! पहले दहाई जोड़ें (60+70=130), फिर इकाई (8+7=15) = 145.',
    hintEn: 'Trick: Left-to-Right mental addition! 68+77 = (60+70) + (8+7) = 145.',
  },

  // --- नए प्रतियोगी परीक्षा व स्पीड ट्रिक्स (11 New Modes) ---
  {
    id: 'reverse-percentage',
    category: 'fractions',
    nameHi: 'रिवर्स प्रतिशत (A% of B) 🔄',
    nameEn: 'Reverse Percent (A% of B) 🔄',
    badge: 'A% of B = B% of A',
    defaultTimeLimitMs: { easy: 6500, medium: 4500, god: 2800, zen: 0 },
    hintHi: 'रिवर्स ट्रिक: A% of B = B% of A! e.g. 64% of 25 = 25% of 64 = 16, 72% of 50 = 36',
    hintEn: 'Trick: A% of B = B% of A! e.g. 64% of 25 = 25% of 64 = 16, 72% of 50 = 36',
  },
  {
    id: 'percent-split',
    category: 'fractions',
    nameHi: 'प्रतिशत स्प्लिट (10% ± 1%) 📊',
    nameEn: 'Percent Split (10% ± 1%) 📊',
    badge: '10% ± 1%',
    defaultTimeLimitMs: { easy: 7000, medium: 4800, god: 3000, zen: 0 },
    hintHi: 'स्प्लिट ट्रिक: 15% of 240 = 10%(24) + 5%(12) = 36! 21% of 300 = 60 + 3 = 63',
    hintEn: 'Split trick: 15% of 240 = 24 + 12 = 36! 21% of 300 = 60 + 3 = 63',
  },
  {
    id: 'successive-percent',
    category: 'fractions',
    nameHi: 'क्रमागत % परिवर्तन (AB नियम) 📈',
    nameEn: 'Successive % (AB Rule) 📈',
    badge: 'a + b + ab/100',
    hasDecimal: true,
    defaultTimeLimitMs: { easy: 7000, medium: 4800, god: 3000, zen: 0 },
    hintHi: 'AB फॉर्मूला: a + b + (ab/100)%! e.g. +20% और +10% = 20+10+2 = 32%',
    hintEn: 'Formula: a + b + (ab/100)%! e.g. +20% and +10% = 32%, +30% and +20% = 56%',
  },
  {
    id: 'diff-of-squares',
    category: 'vedic',
    nameHi: 'वर्गों का अंतर (a² - b²) ⚡',
    nameEn: 'Difference of Squares (a² - b²) ⚡',
    badge: 'a² - b²',
    defaultTimeLimitMs: { easy: 7000, medium: 4800, god: 3000, zen: 0 },
    hintHi: 'ट्रिक: 53 × 47 = (50+3)(50-3) = 2500 - 9 = 2491, 43² - 42² = 43 + 42 = 85',
    hintEn: 'Trick: 53 × 47 = 50² - 3² = 2500 - 9 = 2491, 43² - 42² = 85',
  },
  {
    id: 'consecutive-mult',
    category: 'vedic',
    nameHi: 'क्रमागत गुणा (n × n+1) 🎯',
    nameEn: 'Consecutive Mult (n × n+1) 🎯',
    badge: 'n² + n',
    defaultTimeLimitMs: { easy: 6500, medium: 4400, god: 2800, zen: 0 },
    hintHi: 'ट्रिक: n × (n+1) = n² + n! e.g. 24 × 25 = 576 + 24 = 600, 15 × 16 = 225 + 15 = 240',
    hintEn: 'Trick: n × (n+1) = n² + n! e.g. 24 × 25 = 576 + 24 = 600, 15 × 16 = 240',
  },
  {
    id: 'div-5-25',
    category: 'reflex',
    nameHi: '5 व 25 से त्वरित भाग 🚀',
    nameEn: 'Quick Divide by 5 & 25 🚀',
    badge: '÷5, ÷25',
    hasDecimal: true,
    defaultTimeLimitMs: { easy: 6000, medium: 4000, god: 2500, zen: 0 },
    hintHi: 'ट्रिक: ÷5 के लिए संख्या का दोगुना करके दशमलव 1 स्थान बाएं लगाएं (342 ÷ 5 = 68.4)',
    hintEn: 'Trick: ÷5 double the number and shift decimal left 1 place (342 ÷ 5 = 68.4)',
  },
  {
    id: 'tables-12-19',
    category: 'mult_square',
    nameHi: '12 से 19 पहाड़े स्प्रिंट ⚡',
    nameEn: '12 to 19 Tables Sprint ⚡',
    badge: '12–19 पहाड़े',
    defaultTimeLimitMs: { easy: 5000, medium: 3500, god: 2200, zen: 0 },
    hintHi: 'एग्जाम फाउंडेशन: 17 × 7 = 119, 19 × 6 = 114, 18 × 8 = 144, 16 × 7 = 112',
    hintEn: 'Tables Reflex: 17 × 7 = 119, 19 × 6 = 114, 18 × 8 = 144, 16 × 7 = 112',
  },
  {
    id: 'base-200-500',
    category: 'vedic',
    nameHi: '200 व 500 बेस गुणा 🧠',
    nameEn: 'Base 200 & 500 Mult 🧠',
    badge: '200/500 बेस',
    defaultTimeLimitMs: { easy: 8000, medium: 5500, god: 3500, zen: 0 },
    hintHi: 'अनुपातिक बेस: 204 × 206 = (204+6)×2 | (4×6) = 420 | 24 = 42024',
    hintEn: 'Base 200: 204 × 206 = (204+6)*2 | (4*6) = 42024',
  },
  {
    id: 'split-mult-3x1',
    category: 'mult_square',
    nameHi: '3-अंक × 1-अंक स्प्लिट गुणा 🎯',
    nameEn: '3D × 1D Split Mult 🎯',
    badge: '3D × 1D',
    defaultTimeLimitMs: { easy: 6500, medium: 4500, god: 2800, zen: 0 },
    hintHi: 'स्प्लिट गुणा: 342 × 4 = (1200 + 160 + 8) = 1368, 423 × 3 = 1269',
    hintEn: 'Split: 342 × 4 = (1200 + 160 + 8) = 1368, 423 × 3 = 1269',
  },
  {
    id: 'digital-root',
    category: 'reflex',
    nameHi: 'डिजिटल सम / बीजांक 🧩',
    nameEn: 'Digital Root Reflex 🧩',
    badge: 'बीजांक 1-9',
    defaultTimeLimitMs: { easy: 5500, medium: 3800, god: 2400, zen: 0 },
    hintHi: 'बीजांक: अंकों को तब तक जोड़ें जब तक 1 अंक (1-9) न बचे! e.g. 3478 -> 22 -> 4',
    hintEn: 'Sum of digits repeatedly until 1-9! e.g. 3478 -> 22 -> 4',
  },
  {
    id: 'speed-kmh-ms',
    category: 'reflex',
    nameHi: 'गति कंवर्जन (km/h ➔ m/s) 🏎️',
    nameEn: 'Speed (km/h ➔ m/s) 🏎️',
    badge: '× 5/18',
    hasDecimal: true,
    defaultTimeLimitMs: { easy: 6000, medium: 4200, god: 2600, zen: 0 },
    hintHi: 'ट्रिक: km/h से m/s के लिए 5/18 से गुणा करें! 72 km/h = 20 m/s, 54 km/h = 15 m/s',
    hintEn: 'Formula: km/h × (5/18) = m/s. 72 km/h = 20 m/s, 54 km/h = 15 m/s',
  },

  // --- जोड़ स्पेशल मोड्स (6 New Addition Drills) ---
  {
    id: 'add-transposed',
    category: 'addition',
    nameHi: 'उल्टे अंकों का जोड़ (ab + ba) ⚡',
    nameEn: 'Transposed Sum (ab + ba) ⚡',
    badge: '11 × (a+b)',
    defaultTimeLimitMs: { easy: 5000, medium: 3500, god: 2200, zen: 0 },
    hintHi: 'ट्रिक: ab + ba = 11 × (a + b)! e.g. 47 + 74 = 11 × 11 = 121, 63 + 36 = 99, 85 + 58 = 143',
    hintEn: 'Trick: ab + ba = 11 × (a + b)! e.g. 47 + 74 = 11 × 11 = 121, 85 + 58 = 143',
  },
  {
    id: 'add-compensation',
    category: 'addition',
    nameHi: 'राउंड-ऑफ जोड़ (+29, +98) 🎯',
    nameEn: 'Rounding & Adjustment 🎯',
    badge: 'राउंड-ऑफ ट्रिक',
    defaultTimeLimitMs: { easy: 5500, medium: 3800, god: 2400, zen: 0 },
    hintHi: 'ट्रिक: +29 को (+30 - 1) और +98 को (+100 - 2) करके जोड़ें! 67 + 29 = 97 - 1 = 96',
    hintEn: 'Trick: 67 + 29 = (67 + 30) - 1 = 96! 145 + 98 = 245 - 2 = 243',
  },
  {
    id: 'add-cross-100',
    category: 'addition',
    nameHi: '100 पार ब्रिजिंग जोड़ 🌉',
    nameEn: 'Crossing 100 Barrier 🌉',
    badge: 'ब्रिजिंग जोड़',
    defaultTimeLimitMs: { easy: 5500, medium: 3800, god: 2400, zen: 0 },
    hintHi: 'ब्रिजिंग: 100 तक पहुंचे फिर बाकी जोड़ें! 87 + 16 = (87+13=100) + 3 = 103, 94 + 19 = 113',
    hintEn: 'Bridge 100: 87 + 16 = (87+13) + 3 = 103! 94 + 19 = 113',
  },
  {
    id: 'add-3d-2d',
    category: 'addition',
    nameHi: '3-अंक + 2-अंक बाएं से दाएं 🧠',
    nameEn: '3D + 2D Left-to-Right 🧠',
    badge: '3D + 2D जोड़',
    defaultTimeLimitMs: { easy: 6500, medium: 4500, god: 2800, zen: 0 },
    hintHi: 'बाएं से दाएं: 348 + 75 = (340 + 70 = 410) + (8 + 5 = 13) = 423! 567 + 58 = 625',
    hintEn: 'Left-to-Right: 348 + 75 = 410 + 13 = 423! 567 + 58 = 625',
  },
  {
    id: 'add-running-sum',
    category: 'addition',
    nameHi: 'रनिंग सम (3-4 संख्याएं) 🌊',
    nameEn: 'Continuous Running Sum 🌊',
    badge: 'DI स्पेशल',
    defaultTimeLimitMs: { easy: 7500, medium: 5000, god: 3200, zen: 0 },
    hintHi: 'जोड़े बनाएं: 14 + 26 + 18 + 32 = (14+26=40) + (18+32=50) = 90! 23 + 17 + 35 + 25 = 100',
    hintEn: 'Group pairs: 14 + 26 + 18 + 32 = 40 + 50 = 90!',
  },
  {
    id: 'add-decimal',
    category: 'addition',
    nameHi: 'दशमलव जोड़ रिफ्लेक्स 🔢',
    nameEn: 'Decimal Addition Reflex 🔢',
    badge: 'दशमलव जोड़',
    hasDecimal: true,
    defaultTimeLimitMs: { easy: 6500, medium: 4500, god: 2800, zen: 0 },
    hintHi: 'दशमलव ट्रिक: 14.6 + 8.7 = 22 + 1.3 = 23.3! 3.85 + 4.15 = 8',
    hintEn: 'Decimal reflex: 14.6 + 8.7 = 23.3! 3.85 + 4.15 = 8',
  },

  {
    id: 'mix-blitz',
    category: 'all',
    nameHi: 'एक्सट्रीम मिक्स ब्लिट्ज़ 🔥',
    nameEn: 'Extreme Mix Blitz 🔥',
    badge: 'महा-चैलेंज',
    hasDecimal: true,
    defaultTimeLimitMs: { easy: 5500, medium: 3600, god: 2200, zen: 0 },
    hintHi: 'अलर्ट: सभी 43 मोड्स का रैंडम टेस्ट! अपनी न्यूरल स्पीड को टेस्ट करें!',
    hintEn: 'Alert: Rapid mixed drills from all 43 categories! Pure neural reflex test!',
  },
];

const hardNumbersSingle = [
  17, 19, 23, 27, 29, 31, 33, 34, 37, 38, 39,
  44, 45, 46, 47, 48, 49,
  53, 54, 56, 57, 58, 59,
  64, 66, 68, 69,
  71, 72, 74, 76, 77, 78, 79,
  83, 86, 87, 88,
  91, 92, 93, 94, 96, 97, 98,
];

const reflexTrapNumbers = [
  73, 27, 67, 33, 43, 57, 84, 16, 78, 22,
  64, 36, 83, 17, 38, 62, 47, 53, 29, 71,
  89, 11, 76, 24, 63, 37, 42, 58, 86, 14,
  68, 32, 72, 28, 61, 39, 49, 51, 81, 19,
  74, 26, 82, 18,
];

const hardDecimals = [
  13, 17, 19, 23, 27, 29, 31, 34, 37, 38, 39,
  42, 46, 47, 48, 51, 53, 57, 58, 61, 63, 67,
  69, 71, 72, 73, 76, 78, 81, 83, 87, 89, 92, 94,
];

const percentHalves = [
  12.5, 17.5, 22.5, 27.5, 32.5, 37.5, 42.5, 47.5,
  52.5, 57.5, 62.5, 67.5, 72.5, 77.5, 82.5, 87.5,
  14.5, 28.5, 33.5, 44.5, 66.5,
];

const squareCandidates = [
  12, 13, 14, 15, 16, 17, 18, 19,
  21, 22, 23, 24, 25, 26, 27, 28, 29,
  31, 32, 33, 34, 35, 36, 37, 38, 39,
];

const cubeCandidates = [
  4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15,
];

const unit5SquareCandidates = [
  15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125,
];

const base50SquareCandidates = [
  41, 42, 43, 44, 46, 47, 48, 49,
  51, 52, 53, 54, 56, 57, 58, 59,
];

const squareRootCandidates = [
  12, 13, 14, 15, 16, 17, 18, 19,
  21, 22, 23, 24, 25, 26, 27, 28, 29,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  45, 48, 52, 54, 56,
];

const cubeRootCandidates = [
  11, 12, 13, 14, 15, 16, 17, 18, 19,
  21, 22, 23, 24, 25, 26, 27, 28, 29,
  31, 32, 33, 34, 35, 36, 37, 38,
  41, 42, 45, 51,
];

const mult25Candidates = [
  16, 24, 28, 32, 36, 44, 48, 52, 56, 64, 68, 72, 76, 84, 88, 92, 96,
];

const mult50Candidates = [
  24, 36, 42, 46, 54, 62, 68, 74, 82, 86, 94, 98,
];

interface FractionProblemData {
  fraction: string;
  answer: string;
  acceptable?: string[];
}

const fractionList: FractionProblemData[] = [
  { fraction: '1/2', answer: '50' },
  { fraction: '1/3', answer: '33.33', acceptable: ['33.33', '33.3'] },
  { fraction: '2/3', answer: '66.67', acceptable: ['66.67', '66.66', '66.6'] },
  { fraction: '1/4', answer: '25' },
  { fraction: '3/4', answer: '75' },
  { fraction: '1/5', answer: '20' },
  { fraction: '2/5', answer: '40' },
  { fraction: '3/5', answer: '60' },
  { fraction: '4/5', answer: '80' },
  { fraction: '1/6', answer: '16.67', acceptable: ['16.67', '16.66', '16.6'] },
  { fraction: '5/6', answer: '83.33', acceptable: ['83.33', '83.3'] },
  { fraction: '1/7', answer: '14.28', acceptable: ['14.28', '14.3'] },
  { fraction: '2/7', answer: '28.57', acceptable: ['28.57', '28.6'] },
  { fraction: '3/7', answer: '42.85', acceptable: ['42.85', '42.86'] },
  { fraction: '4/7', answer: '57.14', acceptable: ['57.14', '57.1'] },
  { fraction: '1/8', answer: '12.5', acceptable: ['12.5', '12.50'] },
  { fraction: '3/8', answer: '37.5', acceptable: ['37.5', '37.50'] },
  { fraction: '5/8', answer: '62.5', acceptable: ['62.5', '62.50'] },
  { fraction: '7/8', answer: '87.5', acceptable: ['87.5', '87.50'] },
  { fraction: '1/9', answer: '11.11', acceptable: ['11.11', '11.1'] },
  { fraction: '2/9', answer: '22.22', acceptable: ['22.22', '22.2'] },
  { fraction: '4/9', answer: '44.44', acceptable: ['44.44', '44.4'] },
  { fraction: '5/9', answer: '55.55', acceptable: ['55.55', '55.5'] },
  { fraction: '1/11', answer: '9.09', acceptable: ['9.09', '9.1'] },
  { fraction: '2/11', answer: '18.18', acceptable: ['18.18', '18.2'] },
  { fraction: '1/12', answer: '8.33', acceptable: ['8.33', '8.3'] },
  { fraction: '5/12', answer: '41.67', acceptable: ['41.67', '41.6'] },
  { fraction: '7/12', answer: '58.33', acceptable: ['58.33', '58.3'] },
  { fraction: '1/13', answer: '7.69', acceptable: ['7.69', '7.7'] },
  { fraction: '1/14', answer: '7.14', acceptable: ['7.14', '7.1'] },
  { fraction: '1/15', answer: '6.67', acceptable: ['6.67', '6.66', '6.6'] },
  { fraction: '1/16', answer: '6.25' },
  { fraction: '3/16', answer: '18.75' },
  { fraction: '1/20', answer: '5' },
  { fraction: '1/25', answer: '4' },
];

// --- न्यू मोड्स डेटा सेट्स (New Modes Candidates) ---
const reversePercentMultipliers = [25, 50, 75, 20, 200];
const reversePercentFours = [16, 24, 28, 32, 36, 44, 48, 52, 64, 72, 84, 96];
const reversePercentEvens = [24, 34, 42, 48, 56, 64, 72, 78, 86, 92];
const reversePercentFives = [25, 35, 45, 55, 65, 75, 85, 95];

const successivePairs = [
  { a: 20, b: 10, ans: '32' },
  { a: 20, b: 20, ans: '44' },
  { a: 30, b: 20, ans: '56' },
  { a: 25, b: 20, ans: '50' },
  { a: 40, b: 10, ans: '54' },
  { a: 50, b: 20, ans: '80' },
  { a: 30, b: 10, ans: '43' },
  { a: 50, b: 10, ans: '65' },
  { a: 15, b: 10, ans: '26.5' },
  { a: 25, b: 10, ans: '37.5' },
  { a: 40, b: 20, ans: '68' },
  { a: 30, b: 30, ans: '69' },
  { a: 20, b: 5, ans: '26' },
  { a: 10, b: 10, ans: '21' },
];

const diffSquaresPairs = [
  { a: 53, b: 47, ans: '2491', badge: '50² - 3²' },
  { a: 54, b: 46, ans: '2484', badge: '50² - 4²' },
  { a: 56, b: 44, ans: '2464', badge: '50² - 6²' },
  { a: 57, b: 43, ans: '2451', badge: '50² - 7²' },
  { a: 58, b: 42, ans: '2436', badge: '50² - 8²' },
  { a: 63, b: 57, ans: '3591', badge: '60² - 3²' },
  { a: 64, b: 56, ans: '3584', badge: '60² - 4²' },
  { a: 62, b: 58, ans: '3596', badge: '60² - 2²' },
  { a: 42, b: 38, ans: '1596', badge: '40² - 2²' },
  { a: 43, b: 37, ans: '1591', badge: '40² - 3²' },
  { a: 73, b: 67, ans: '4891', badge: '70² - 3²' },
  { a: 72, b: 68, ans: '4896', badge: '70² - 2²' },
  { a: 82, b: 78, ans: '6396', badge: '80² - 2²' },
  { a: 83, b: 77, ans: '6391', badge: '80² - 3²' },
];

const consecutiveDiffSquares = [
  { a: 43, b: 42, ans: '85' },
  { a: 67, b: 66, ans: '133' },
  { a: 85, b: 84, ans: '169' },
  { a: 52, b: 51, ans: '103' },
  { a: 36, b: 35, ans: '71' },
  { a: 29, b: 28, ans: '57' },
  { a: 74, b: 73, ans: '147' },
  { a: 91, b: 90, ans: '181' },
  { a: 48, b: 47, ans: '95' },
  { a: 63, b: 62, ans: '125' },
];

const consecutiveMultCandidates = [
  12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 28, 29, 31, 35,
];

const div5Candidates = [
  134, 146, 178, 214, 238, 243, 264, 318, 342, 416, 426, 437, 512, 529, 634, 728, 816, 924,
];

const div25Candidates = [
  84, 124, 132, 148, 188, 216, 264, 312, 356, 428, 620, 712, 840,
];

const tables12To19 = [
  12, 13, 14, 15, 16, 17, 18, 19,
];

const split3x1Candidates = [
  124, 135, 142, 215, 234, 246, 314, 325, 342, 412, 423, 436, 514, 525, 612, 715,
];

const digitalRootCandidates = [
  3478, 5832, 7419, 8256, 9631, 4682, 6147, 7293, 8524, 9168, 5472, 6835, 7159, 8346, 9284, 45291, 38164, 72915,
];

const speedKmhMsPairs = [
  { kmh: 18, ms: '5' },
  { kmh: 36, ms: '10' },
  { kmh: 54, ms: '15' },
  { kmh: 72, ms: '20' },
  { kmh: 90, ms: '25' },
  { kmh: 108, ms: '30' },
  { kmh: 126, ms: '35' },
  { kmh: 144, ms: '40' },
  { kmh: 162, ms: '45' },
  { kmh: 180, ms: '50' },
  { kmh: 45, ms: '12.5' },
  { kmh: 63, ms: '17.5' },
];

// --- जोड़ स्पेशल डेटा सेट्स (Addition Drills Candidates) ---
const compensationAddends = [19, 29, 39, 49, 59, 18, 28, 38, 48, 98, 99];
const compensationBases = [
  34, 46, 57, 63, 68, 74, 86, 93, 125, 137, 146, 158, 164, 175, 186,
];

const cross100Bases = [
  76, 78, 82, 84, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97,
];

const add3dCandidates = [
  145, 168, 237, 256, 328, 345, 367, 428, 456, 473, 538, 564, 627, 654, 736, 847,
];
const add2dCandidates = [
  38, 45, 48, 54, 57, 63, 68, 74, 78, 85, 87, 94,
];

const runningSumPresets = [
  { nums: [14, 26, 18, 32], ans: '90' },
  { nums: [23, 17, 35, 25], ans: '100' },
  { nums: [16, 24, 19, 21], ans: '80' },
  { nums: [28, 12, 33, 27], ans: '100' },
  { nums: [15, 35, 22, 18], ans: '90' },
  { nums: [34, 16, 29, 21], ans: '100' },
  { nums: [42, 18, 25, 15], ans: '100' },
  { nums: [13, 27, 31, 19], ans: '90' },
  { nums: [45, 38, 25], ans: '108' },
  { nums: [64, 27, 36], ans: '127' },
  { nums: [53, 28, 47], ans: '128' },
  { nums: [37, 45, 63], ans: '145' },
  { nums: [48, 29, 52], ans: '129' },
  { nums: [72, 35, 28], ans: '135' },
  { nums: [26, 44, 38, 12], ans: '120' },
  { nums: [19, 31, 24, 36], ans: '110' },
];

const decimalAddPairs = [
  { a: 14.6, b: 8.7, ans: '23.3' },
  { a: 23.4, b: 18.8, ans: '42.2' },
  { a: 12.5, b: 19.8, ans: '32.3' },
  { a: 34.7, b: 16.5, ans: '51.2' },
  { a: 27.9, b: 14.4, ans: '42.3' },
  { a: 45.6, b: 26.8, ans: '72.4' },
  { a: 18.7, b: 15.6, ans: '34.3' },
  { a: 38.8, b: 24.5, ans: '63.3' },
  { a: 15.9, b: 27.4, ans: '43.3' },
  { a: 3.85, b: 4.15, ans: '8', acceptable: ['8', '8.0', '8.00'] },
  { a: 6.75, b: 5.25, ans: '12', acceptable: ['12', '12.0', '12.00'] },
  { a: 12.35, b: 7.65, ans: '20', acceptable: ['20', '20.0', '20.00'] },
  { a: 8.45, b: 6.55, ans: '15', acceptable: ['15', '15.0', '15.00'] },
  { a: 14.25, b: 8.75, ans: '23', acceptable: ['23', '23.0', '23.00'] },
];

let lastAnswer = '';

export function generateProblemForMode(modeId: string): GeneratedProblem {
  let targetMode = modeId;
  if (targetMode === 'mix-blitz') {
    const candidateModes = [
      'half-double-mult',
      'reflex-traps',
      'hard-single',
      'vedic-1000',
      'base-100-mult',
      'base-1000-mult',
      'mult-9-series',
      'criss-cross-2x2',
      'random-2digit-mult',
      'mult-11',
      'unit-5-square',
      'same-tens-10',
      'mult-25-50',
      'fraction-to-percent',
      'cube-root',
      'squares-50',
      'square-root',
      'squares',
      'cubes',
      'mult-speed',
      'lightning-add',
      'missing-number',
      'double',
      'reverse-percentage',
      'percent-split',
      'successive-percent',
      'diff-of-squares',
      'consecutive-mult',
      'div-5-25',
      'tables-12-19',
      'base-200-500',
      'split-mult-3x1',
      'digital-root',
      'speed-kmh-ms',
      'add-transposed',
      'add-compensation',
      'add-cross-100',
      'add-3d-2d',
      'add-running-sum',
      'add-decimal',
    ];
    targetMode = candidateModes[Math.floor(Math.random() * candidateModes.length)];
  }

  let problemText = '';
  let answerText = '';
  let acceptableAnswers: string[] | undefined;
  let typeBadge: string | undefined;

  switch (targetMode) {
    case 'half-double-mult': {
      const type = Math.floor(Math.random() * 4);
      if (type === 0) {
        // ÷2 and ×2 with 15, 35, 45
        const multipliers = [15, 35, 45];
        const m = multipliers[Math.floor(Math.random() * multipliers.length)];
        const evens = [14, 16, 18, 22, 24, 26, 28, 32, 34, 36, 42, 44, 48, 52, 64, 82];
        const a = evens[Math.floor(Math.random() * evens.length)];
        const ans = a * m;
        problemText = `${a} × ${m}`;
        answerText = ans.toString();
        typeBadge = '÷2 ×2 ट्रिक';
      } else if (type === 1) {
        // ÷4 and ×4 with 25 or 75
        const m = Math.random() > 0.5 ? 75 : 25;
        const fours = [16, 24, 28, 32, 36, 44, 48, 52, 64, 68, 72, 84, 96];
        const a = fours[Math.floor(Math.random() * fours.length)];
        const ans = a * m;
        problemText = `${a} × ${m}`;
        answerText = ans.toString();
        typeBadge = '÷4 ×4 ट्रिक';
      } else if (type === 2) {
        // ÷8 and ×8 with 125
        const eights = [16, 24, 32, 40, 48, 56, 64, 72, 88, 96];
        const a = eights[Math.floor(Math.random() * eights.length)];
        const ans = a * 125;
        problemText = `${a} × 125`;
        answerText = ans.toString();
        typeBadge = '÷8 ×8 ट्रिक';
      } else {
        // ÷5 and ×5 with numbers ending in 5
        const fives = [35, 45, 55, 65, 85];
        const m = fives[Math.floor(Math.random() * fives.length)];
        const partners = [12, 14, 16, 18, 22, 24];
        const a = partners[Math.floor(Math.random() * partners.length)];
        const ans = a * m;
        problemText = `${a} × ${m}`;
        answerText = ans.toString();
        typeBadge = '÷5 ×5 ट्रिक';
      }
      break;
    }

    case 'fraction-to-percent': {
      const item = fractionList[Math.floor(Math.random() * fractionList.length)];
      problemText = `${item.fraction} = ? %`;
      answerText = item.answer;
      acceptableAnswers = item.acceptable;
      typeBadge = '% भिन्न';
      break;
    }

    case 'cube-root': {
      const root = cubeRootCandidates[Math.floor(Math.random() * cubeRootCandidates.length)];
      const cube = root * root * root;
      problemText = `∛${cube}`;
      answerText = root.toString();
      typeBadge = 'घनमूल ∛';
      break;
    }

    case 'criss-cross-2x2': {
      const a = Math.floor(Math.random() * 55) + 16; // 16..70
      const b = Math.floor(Math.random() * 45) + 14; // 14..58
      const ans = a * b;
      problemText = `${a} × ${b}`;
      answerText = ans.toString();
      typeBadge = '2×2 क्रॉस';
      break;
    }

    case 'random-2digit-mult': {
      // 2-digit x 2-digit completely random numbers: 11..99 x 11..99
      let a = Math.floor(Math.random() * 89) + 11;
      let b = Math.floor(Math.random() * 89) + 11;
      if (a % 10 === 0 && b % 10 === 0) {
        a += Math.floor(Math.random() * 8) + 1;
      }
      const ans = a * b;
      problemText = `${a} × ${b}`;
      answerText = ans.toString();
      typeBadge = 'रैंडम 2D × 2D';
      break;
    }

    case 'mult-9-series': {
      const variant = Math.floor(Math.random() * 3);
      if (variant === 0) {
        // 2-digit × 99
        const num = Math.floor(Math.random() * 85) + 14;
        problemText = `${num} × 99`;
        answerText = (num * 99).toString();
      } else if (variant === 1) {
        // 3-digit × 999
        const num = Math.floor(Math.random() * 850) + 115;
        problemText = `${num} × 999`;
        answerText = (num * 999).toString();
      } else {
        // Single digit × 99 or 9
        const num = Math.floor(Math.random() * 9) + 2;
        problemText = `${num} × 99`;
        answerText = (num * 99).toString();
      }
      typeBadge = '× 99/999';
      break;
    }

    case 'reflex-traps': {
      let num: number;
      do {
        num = reflexTrapNumbers[Math.floor(Math.random() * reflexTrapNumbers.length)];
      } while (num.toString() === lastAnswer);

      const ans = 100 - num;
      problemText = `100 - ${num}`;
      answerText = ans.toString();
      typeBadge = 'रिफ्लेक्स';
      break;
    }

    case 'hard-single': {
      let num: number;
      do {
        num = hardNumbersSingle[Math.floor(Math.random() * hardNumbersSingle.length)];
      } while (num.toString() === lastAnswer);

      const ans = 100 - num;
      problemText = `100 - ${num}`;
      answerText = ans.toString();
      typeBadge = '100-X';
      break;
    }

    case 'decimal': {
      const whole = hardNumbersSingle[Math.floor(Math.random() * hardNumbersSingle.length)];
      const dec = hardDecimals[Math.floor(Math.random() * hardDecimals.length)];
      const fullVal = `${whole}.${dec}`;
      const ans = (100 - parseFloat(fullVal)).toFixed(2);
      problemText = `100 - ${fullVal}`;
      answerText = ans;
      typeBadge = 'दशमलव';
      break;
    }

    case 'double': {
      const a = Math.floor(Math.random() * 35) + 16;
      const b = Math.floor(Math.random() * (92 - a)) + 8;
      const ans = 100 - a - b;
      problemText = `100 - ${a} - ${b}`;
      answerText = ans.toString();
      typeBadge = 'डबल घटाव';
      break;
    }

    case 'vedic-1000': {
      const a = Math.floor(Math.random() * 8) + 1;
      const b = Math.floor(Math.random() * 9);
      const c = Math.floor(Math.random() * 9) + 1;
      const num = a * 100 + b * 10 + c;
      const ans = 1000 - num;
      problemText = `1000 - ${num}`;
      answerText = ans.toString();
      typeBadge = '1000 बेस';
      break;
    }

    case 'base-100-mult': {
      const subType = Math.floor(Math.random() * 3);
      let a = 100;
      let b = 100;
      if (subType === 0) {
        const d1 = Math.floor(Math.random() * 12) + 2;
        let d2 = Math.floor(Math.random() * 12) + 2;
        if (d1 === d2) d2 = (d2 % 12) + 3;
        a = 100 + d1;
        b = 100 + d2;
      } else if (subType === 1) {
        const d1 = Math.floor(Math.random() * 12) + 2;
        let d2 = Math.floor(Math.random() * 12) + 2;
        if (d1 === d2) d2 = (d2 % 12) + 3;
        a = 100 - d1;
        b = 100 - d2;
      } else {
        const d1 = Math.floor(Math.random() * 10) + 2;
        const d2 = Math.floor(Math.random() * 8) + 2;
        a = 100 + d1;
        b = 100 - d2;
      }
      const ans = a * b;
      problemText = `${a} × ${b}`;
      answerText = ans.toString();
      typeBadge = '100 बेस गुणा';
      break;
    }

    case 'base-1000-mult': {
      const isAbove = Math.random() > 0.4;
      let a = 1000;
      let b = 1000;
      if (isAbove) {
        const d1 = Math.floor(Math.random() * 13) + 2;
        let d2 = Math.floor(Math.random() * 13) + 2;
        if (d1 === d2) d2 = (d2 % 13) + 3;
        a = 1000 + d1;
        b = 1000 + d2;
      } else {
        const d1 = Math.floor(Math.random() * 13) + 2;
        let d2 = Math.floor(Math.random() * 13) + 2;
        if (d1 === d2) d2 = (d2 % 13) + 3;
        a = 1000 - d1;
        b = 1000 - d2;
      }
      const ans = a * b;
      problemText = `${a} × ${b}`;
      answerText = ans.toString();
      typeBadge = '1000 बेस गुणा';
      break;
    }

    case 'mult-11': {
      const is3Digit = Math.random() > 0.65;
      let num = 0;
      if (is3Digit) {
        num = Math.floor(Math.random() * 350) + 115;
      } else {
        num = Math.floor(Math.random() * 75) + 23;
      }
      const ans = num * 11;
      problemText = `${num} × 11`;
      answerText = ans.toString();
      typeBadge = '× 11 ट्रिक';
      break;
    }

    case 'unit-5-square': {
      const n = unit5SquareCandidates[Math.floor(Math.random() * unit5SquareCandidates.length)];
      const ans = n * n;
      problemText = `${n}²`;
      answerText = ans.toString();
      typeBadge = 'इकाई 5²';
      break;
    }

    case 'same-tens-10': {
      const tens = Math.floor(Math.random() * 8) + 2;
      const units1 = Math.floor(Math.random() * 8) + 1;
      const actualU1 = units1 === 5 ? (Math.random() > 0.5 ? 4 : 6) : units1;
      const actualU2 = 10 - actualU1;
      const a = tens * 10 + actualU1;
      const b = tens * 10 + actualU2;
      const ans = a * b;
      problemText = `${a} × ${b}`;
      answerText = ans.toString();
      typeBadge = 'इकाई योग 10';
      break;
    }

    case 'mult-25-50': {
      const is25 = Math.random() > 0.5;
      if (is25) {
        const n = mult25Candidates[Math.floor(Math.random() * mult25Candidates.length)];
        const ans = n * 25;
        problemText = `${n} × 25`;
        answerText = ans.toString();
        typeBadge = '× 25 ट्रिक';
      } else {
        const n = mult50Candidates[Math.floor(Math.random() * mult50Candidates.length)];
        const ans = n * 50;
        problemText = `${n} × 50`;
        answerText = ans.toString();
        typeBadge = '× 50 ट्रिक';
      }
      break;
    }

    case 'squares-50': {
      const n = base50SquareCandidates[Math.floor(Math.random() * base50SquareCandidates.length)];
      const ans = n * n;
      problemText = `${n}²`;
      answerText = ans.toString();
      typeBadge = '50 बेस²';
      break;
    }

    case 'square-root': {
      const root = squareRootCandidates[Math.floor(Math.random() * squareRootCandidates.length)];
      const square = root * root;
      problemText = `√${square}`;
      answerText = root.toString();
      typeBadge = 'वर्गमूल √';
      break;
    }

    case 'squares': {
      const n = squareCandidates[Math.floor(Math.random() * squareCandidates.length)];
      const ans = n * n;
      problemText = `${n}²`;
      answerText = ans.toString();
      typeBadge = 'वर्ग X²';
      break;
    }

    case 'cubes': {
      const n = cubeCandidates[Math.floor(Math.random() * cubeCandidates.length)];
      const ans = n * n * n;
      problemText = `${n}³`;
      answerText = ans.toString();
      typeBadge = 'घन X³';
      break;
    }

    case 'mult-speed': {
      const n1 = Math.floor(Math.random() * 30) + 12;
      const n2 = Math.floor(Math.random() * 6) + 3;
      const ans = n1 * n2;
      problemText = `${n1} × ${n2}`;
      answerText = ans.toString();
      typeBadge = 'गुणा 🎯';
      break;
    }

    case 'lightning-add': {
      const a = Math.floor(Math.random() * 45) + 55;
      const b = Math.floor(Math.random() * 45) + 48;
      const ans = a + b;
      problemText = `${a} + ${b}`;
      answerText = ans.toString();
      typeBadge = 'जोड़ ➕';
      break;
    }

    case 'missing-number': {
      const variant = Math.floor(Math.random() * 3);
      if (variant === 0) {
        const a = hardNumbersSingle[Math.floor(Math.random() * hardNumbersSingle.length)];
        const missing = 100 - a;
        problemText = `100 - ? = ${a}`;
        answerText = missing.toString();
      } else if (variant === 1) {
        const b = hardNumbersSingle[Math.floor(Math.random() * hardNumbersSingle.length)];
        const missing = 100 - b;
        problemText = `? + ${b} = 100`;
        answerText = missing.toString();
      } else {
        const a = Math.floor(Math.random() * 700) + 150;
        const missing = 1000 - a;
        problemText = `1000 - ? = ${a}`;
        answerText = missing.toString();
      }
      typeBadge = 'मिसिंग ?';
      break;
    }

    case 'percent-complement': {
      const pct = percentHalves[Math.floor(Math.random() * percentHalves.length)];
      const ans = (100 - pct).toFixed(1);
      problemText = `100 - ${pct}`;
      answerText = ans;
      typeBadge = 'प्रतिशत .5';
      break;
    }

    case 'reverse-percentage': {
      const b = reversePercentMultipliers[Math.floor(Math.random() * reversePercentMultipliers.length)];
      let a = 0;
      let ans = 0;
      if (b === 25) {
        a = reversePercentFours[Math.floor(Math.random() * reversePercentFours.length)];
        ans = a / 4;
      } else if (b === 50) {
        a = reversePercentEvens[Math.floor(Math.random() * reversePercentEvens.length)];
        ans = a / 2;
      } else if (b === 75) {
        a = reversePercentFours[Math.floor(Math.random() * reversePercentFours.length)];
        ans = (a / 4) * 3;
      } else if (b === 20) {
        a = reversePercentFives[Math.floor(Math.random() * reversePercentFives.length)];
        ans = a / 5;
      } else {
        // b === 200
        a = Math.floor(Math.random() * 40) + 12;
        ans = a * 2;
      }
      problemText = `${a}% of ${b}`;
      answerText = ans.toString();
      typeBadge = 'A% of B';
      break;
    }

    case 'percent-split': {
      const splitType = Math.floor(Math.random() * 5);
      if (splitType === 0) {
        const candidates = [120, 160, 240, 280, 320, 360, 480, 640];
        const n = candidates[Math.floor(Math.random() * candidates.length)];
        const ans = (n * 15) / 100;
        problemText = `15% of ${n}`;
        answerText = ans.toString();
      } else if (splitType === 1) {
        const candidates = [100, 200, 300, 400, 500, 600];
        const n = candidates[Math.floor(Math.random() * candidates.length)];
        const ans = (n * 21) / 100;
        problemText = `21% of ${n}`;
        answerText = ans.toString();
      } else if (splitType === 2) {
        const candidates = [200, 300, 400, 500];
        const n = candidates[Math.floor(Math.random() * candidates.length)];
        const ans = (n * 41) / 100;
        problemText = `41% of ${n}`;
        answerText = ans.toString();
      } else if (splitType === 3) {
        const candidates = [200, 300, 400, 500];
        const n = candidates[Math.floor(Math.random() * candidates.length)];
        const ans = (n * 19) / 100;
        problemText = `19% of ${n}`;
        answerText = ans.toString();
      } else {
        const candidates = [120, 160, 240, 320, 360, 440];
        const n = candidates[Math.floor(Math.random() * candidates.length)];
        const ans = (n * 35) / 100;
        problemText = `35% of ${n}`;
        answerText = ans.toString();
      }
      typeBadge = '10% स्प्लिट';
      break;
    }

    case 'successive-percent': {
      const item = successivePairs[Math.floor(Math.random() * successivePairs.length)];
      problemText = `+${item.a}% व +${item.b}% = ? %`;
      answerText = item.ans;
      typeBadge = 'AB नियम';
      break;
    }

    case 'diff-of-squares': {
      const isConsecutive = Math.random() > 0.55;
      if (isConsecutive) {
        const item = consecutiveDiffSquares[Math.floor(Math.random() * consecutiveDiffSquares.length)];
        problemText = `${item.a}² - ${item.b}²`;
        answerText = item.ans;
        typeBadge = 'a² - b²';
      } else {
        const item = diffSquaresPairs[Math.floor(Math.random() * diffSquaresPairs.length)];
        problemText = `${item.a} × ${item.b}`;
        answerText = item.ans;
        typeBadge = item.badge;
      }
      break;
    }

    case 'consecutive-mult': {
      const n = consecutiveMultCandidates[Math.floor(Math.random() * consecutiveMultCandidates.length)];
      const ans = n * (n + 1);
      problemText = `${n} × ${n + 1}`;
      answerText = ans.toString();
      typeBadge = 'n(n+1)';
      break;
    }

    case 'div-5-25': {
      const isDiv5 = Math.random() > 0.45;
      if (isDiv5) {
        const n = div5Candidates[Math.floor(Math.random() * div5Candidates.length)];
        const ans = (n / 5).toFixed(1);
        problemText = `${n} ÷ 5`;
        answerText = ans.endsWith('.0') ? ans.slice(0, -2) : ans;
        if (!ans.endsWith('.0')) {
          acceptableAnswers = [ans];
        }
        typeBadge = '÷5 ट्रिक';
      } else {
        const n = div25Candidates[Math.floor(Math.random() * div25Candidates.length)];
        const ans = (n / 25).toString();
        problemText = `${n} ÷ 25`;
        answerText = ans;
        typeBadge = '÷25 ट्रिक';
      }
      break;
    }

    case 'tables-12-19': {
      const a = tables12To19[Math.floor(Math.random() * tables12To19.length)];
      const b = Math.floor(Math.random() * 7) + 3; // 3 to 9
      const ans = a * b;
      problemText = `${a} × ${b}`;
      answerText = ans.toString();
      typeBadge = '12–19 पहाड़े';
      break;
    }

    case 'base-200-500': {
      const is200 = Math.random() > 0.4;
      if (is200) {
        const d1 = Math.floor(Math.random() * 8) + 2; // 2..9
        let d2 = Math.floor(Math.random() * 8) + 2;
        if (d1 === d2) d2 = (d2 % 8) + 3;
        const a = 200 + d1;
        const b = 200 + d2;
        const ans = a * b;
        problemText = `${a} × ${b}`;
        answerText = ans.toString();
        typeBadge = '200 बेस गुणा';
      } else {
        const d1 = Math.floor(Math.random() * 6) + 2; // 2..7
        let d2 = Math.floor(Math.random() * 6) + 2;
        if (d1 === d2) d2 = (d2 % 6) + 3;
        const a = 500 + d1;
        const b = 500 + d2;
        const ans = a * b;
        problemText = `${a} × ${b}`;
        answerText = ans.toString();
        typeBadge = '500 बेस गुणा';
      }
      break;
    }

    case 'split-mult-3x1': {
      const a = split3x1Candidates[Math.floor(Math.random() * split3x1Candidates.length)];
      const b = Math.floor(Math.random() * 6) + 3; // 3..8
      const ans = a * b;
      problemText = `${a} × ${b}`;
      answerText = ans.toString();
      typeBadge = '3D × 1D स्प्लिट';
      break;
    }

    case 'digital-root': {
      const num = digitalRootCandidates[Math.floor(Math.random() * digitalRootCandidates.length)];
      const ans = ((num - 1) % 9) + 1;
      problemText = `बीजांक: ${num}`;
      answerText = ans.toString();
      typeBadge = 'बीजांक (1-9)';
      break;
    }

    case 'speed-kmh-ms': {
      const isKmhToMs = Math.random() > 0.35;
      if (isKmhToMs) {
        const item = speedKmhMsPairs[Math.floor(Math.random() * speedKmhMsPairs.length)];
        problemText = `${item.kmh} km/h = ? m/s`;
        answerText = item.ms;
        typeBadge = 'km/h ➔ m/s';
      } else {
        const item = speedKmhMsPairs[Math.floor(Math.random() * 8)]; // Clean integers 18..144
        problemText = `${item.ms} m/s = ? km/h`;
        answerText = item.kmh.toString();
        typeBadge = 'm/s ➔ km/h';
      }
      break;
    }

    case 'add-transposed': {
      const a = Math.floor(Math.random() * 8) + 2; // 2..9
      let b = Math.floor(Math.random() * 8) + 1; // 1..8
      if (a === b) b = (b % 8) + 1;
      const n1 = a * 10 + b;
      const n2 = b * 10 + a;
      const ans = 11 * (a + b);
      problemText = `${n1} + ${n2}`;
      answerText = ans.toString();
      typeBadge = 'ab + ba = 11(a+b)';
      break;
    }

    case 'add-compensation': {
      const base = compensationBases[Math.floor(Math.random() * compensationBases.length)];
      const adj = compensationAddends[Math.floor(Math.random() * compensationAddends.length)];
      const ans = base + adj;
      problemText = `${base} + ${adj}`;
      answerText = ans.toString();
      typeBadge = 'राउंड-ऑफ जोड़';
      break;
    }

    case 'add-cross-100': {
      const a = cross100Bases[Math.floor(Math.random() * cross100Bases.length)];
      const diffTo100 = 100 - a;
      const extra = Math.floor(Math.random() * 25) + 3; // 3..27
      const b = diffTo100 + extra;
      const ans = a + b;
      problemText = `${a} + ${b}`;
      answerText = ans.toString();
      typeBadge = '100 पार ब्रिजिंग';
      break;
    }

    case 'add-3d-2d': {
      const a = add3dCandidates[Math.floor(Math.random() * add3dCandidates.length)];
      const b = add2dCandidates[Math.floor(Math.random() * add2dCandidates.length)];
      const ans = a + b;
      problemText = `${a} + ${b}`;
      answerText = ans.toString();
      typeBadge = '3D + 2D जोड़';
      break;
    }

    case 'add-running-sum': {
      const preset = runningSumPresets[Math.floor(Math.random() * runningSumPresets.length)];
      problemText = preset.nums.join(' + ');
      answerText = preset.ans;
      typeBadge = 'रनिंग सम (DI)';
      break;
    }

    case 'add-decimal': {
      const item = decimalAddPairs[Math.floor(Math.random() * decimalAddPairs.length)];
      problemText = `${item.a} + ${item.b}`;
      answerText = item.ans;
      if (item.acceptable) {
        acceptableAnswers = item.acceptable;
      }
      typeBadge = 'दशमलव जोड़';
      break;
    }

    default: {
      const num = reflexTrapNumbers[Math.floor(Math.random() * reflexTrapNumbers.length)];
      const ans = 100 - num;
      problemText = `100 - ${num}`;
      answerText = ans.toString();
      typeBadge = 'रिफ्लेक्स';
    }
  }

  lastAnswer = answerText;
  return { problemText, answerText, acceptableAnswers, typeBadge };
}
