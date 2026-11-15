import heroSalonImg from '../assets/images/hero_nicks_salon_1794739430869.jpg';
import aboutCraftImg from '../assets/images/about_craft_detail_1794739430705.jpg';
import transformBeforeImg from '../assets/images/transform_before_1794739431132.jpg';
import transformAfterImg from '../assets/images/transform_after_1794739432167.jpg';
import lookbookTexturedFadeImg from '../assets/images/lookbook_textured_fade_1794739432416.jpg';
import lookbookClassicScissorImg from '../assets/images/lookbook_classic_scissor_1794739432755.jpg';
import lookbookBeardSculptImg from '../assets/images/lookbook_beard_sculpt_1794739433779.jpg';
import studioConsultationImg from '../assets/images/studio_consultation_1794740109413.jpg';
import studioHotTowelImg from '../assets/images/studio_hot_towel_1794740108695.jpg';
import studioHairWashImg from '../assets/images/studio_hair_wash_1794740110079.jpg';
import studioScissorActionImg from '../assets/images/studio_scissor_action_1794740110092.jpg';

export const SALON_INFO = {
  brandName: "Nick's Salon",
  ownerName: 'Qamar Bashir',
  tagline: 'Precision, style and personal care — experience grooming with a difference at Nick’s Salon.',
  address: 'Kashana View Apartment, Block A, North Nazimabad, Karachi, Pakistan',
  shortAddress: 'Kashana View Apartment, Block A, North Nazimabad',
  phoneDisplay: '+92 300 3691915',
  phoneRaw: '923003691915',
  existingSite: 'https://nickssalon.epizy.com/?i=1',
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Nick's+Salon+Kashana+View+Apartment+Block+A+North+Nazimabad+Karachi",
  openingHoursNote: 'Pending owner confirmation — message on WhatsApp for today’s timings',
};

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${SALON_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export const SALON_IMAGES = {
  hero: heroSalonImg,
  heroAlt: studioConsultationImg,
  aboutCraft: aboutCraftImg,
  transformBefore: transformBeforeImg,
  transformAfter: transformAfterImg,
  lookbookTexturedFade: lookbookTexturedFadeImg,
  lookbookClassicScissor: lookbookClassicScissorImg,
  lookbookBeardSculpt: lookbookBeardSculptImg,
  studioConsultation: studioConsultationImg,
  studioHotTowel: studioHotTowelImg,
  studioHairWash: studioHairWashImg,
  studioScissorAction: studioScissorActionImg,
};

export const TICKER_ITEMS = [
  'Haircut & Styling',
  'Beard Grooming',
  'Scissor Craft',
  'Hair Styling',
  'Hair Wash & Care',
  'Personal Grooming',
  'Taper Fades',
];

export const STUDIO_STRIP_CARDS = [
  {
    num: '01',
    title: 'Haircut & Styling',
    desc: 'Proposed category — precision cuts shaped around your natural growth.',
    image: studioScissorActionImg,
  },
  {
    num: '02',
    title: 'Beard Grooming',
    desc: 'Proposed category — clean cheek lines, jaw definition and balanced trim.',
    image: lookbookBeardSculptImg,
  },
  {
    num: '03',
    title: 'Hair Styling',
    desc: 'Proposed category — blow-dry and natural finish for daily or formal wear.',
    image: lookbookClassicScissorImg,
  },
  {
    num: '04',
    title: 'Hair Wash & Care',
    desc: 'Proposed category — refreshing wash and scalp care before or after styling.',
    image: studioHairWashImg,
  },
  {
    num: '05',
    title: 'Personal Grooming',
    desc: 'Proposed category — attentive finishing touches in a quiet studio chair.',
    image: studioHotTowelImg,
  },
];

export interface ServiceSubItem {
  name: string;
  desc: string;
  status: string;
}

export interface ServiceCategoryGroup {
  id: string;
  index: string;
  title: string;
  tags: string[];
  summary: string;
  items: ServiceSubItem[];
}

/**
 * Editable proposed service menu matching Scissor's accordion structure.
 * Prices and final inclusions are intentionally omitted until owner confirmation.
 */
export const PROPOSED_SERVICE_GROUPS: ServiceCategoryGroup[] = [
  {
    id: 'haircut-styling',
    index: '01',
    title: 'Haircut & Styling',
    tags: ['Proposed Category', 'Consultation', 'Owner Approval Pending'],
    summary:
      'Proposed grooming category focused on structured scissor cuts, taper fades, and balanced proportions suited to how your hair naturally sits.',
    items: [
      {
        name: 'Signature Consultation & Haircut',
        desc: 'Proposed offering — one-on-one consultation, precision cut, and clean neck/ear detailing.',
        status: 'Details & pricing pending owner confirmation',
      },
      {
        name: 'Taper & Fade Cut',
        desc: 'Proposed offering — smooth, gradual blending tailored to your head shape and crown density.',
        status: 'Details & pricing pending owner confirmation',
      },
      {
        name: 'Classic Scissor Cut',
        desc: 'Proposed offering — medium-length layering and natural movement crafted primarily with shears.',
        status: 'Details & pricing pending owner confirmation',
      },
    ],
  },
  {
    id: 'beard-grooming',
    index: '02',
    title: 'Beard Grooming',
    tags: ['Proposed Category', 'Line Sculpting', 'Owner Approval Pending'],
    summary:
      'Proposed beard grooming category designed around sharp symmetry, clean neckline framing, and even density.',
    items: [
      {
        name: 'Beard Trim & Shape',
        desc: 'Proposed offering — balanced length shaping with crisp cheek and neckline definition.',
        status: 'Details & pricing pending owner confirmation',
      },
      {
        name: 'Mustache & Beard Detailing',
        desc: 'Proposed offering — fine scissor and trimmer detailing for a neat, natural contour.',
        status: 'Details & pricing pending owner confirmation',
      },
    ],
  },
  {
    id: 'hair-styling',
    index: '03',
    title: 'Hair Styling',
    tags: ['Proposed Category', 'Finish & Hold', 'Owner Approval Pending'],
    summary:
      'Proposed styling category for everyday polish or formal occasions without heavy stiffness.',
    items: [
      {
        name: 'Blow-Dry & Natural Finish',
        desc: 'Proposed offering — directional blow-dry and light finishing shaped for lasting hold.',
        status: 'Details & pricing pending owner confirmation',
      },
      {
        name: 'Occasion & Event Styling',
        desc: 'Proposed offering — tailored hair setting ahead of weddings, dinners, or family events.',
        status: 'Details & pricing pending owner confirmation',
      },
    ],
  },
  {
    id: 'hair-wash-care',
    index: '04',
    title: 'Hair Wash & Care',
    tags: ['Proposed Category', 'Wash & Scalp', 'Owner Approval Pending'],
    summary:
      'Proposed care category centered on clean scalp preparation and relaxed washing.',
    items: [
      {
        name: 'Refreshing Hair Wash',
        desc: 'Proposed offering — thorough cleansing wash and conditioning rinse to reset hair texture.',
        status: 'Details & pricing pending owner confirmation',
      },
    ],
  },
  {
    id: 'personal-grooming',
    index: '05',
    title: 'Personal Grooming',
    tags: ['Proposed Category', 'Tailored Care', 'Owner Approval Pending'],
    summary:
      'Proposed personal care category reserved for owner-confirmed grooming additions.',
    items: [
      {
        name: 'Personal Grooming Session',
        desc: 'Proposed offering — combined attention to hair, beard, and clean finishing touches.',
        status: 'Details & pricing pending owner confirmation',
      },
    ],
  },
];

export const WHY_CHOOSE_CARDS = [
  {
    index: '01 / 05',
    title: 'Attention to Detail',
    desc: 'Every neckline, fade transition, and parting is checked carefully from multiple angles so the cut grows out evenly.',
    tags: ['Clean lines', 'Balanced proportion', 'Measured craft'],
    image: aboutCraftImg,
  },
  {
    index: '02 / 05',
    title: 'Personalized Grooming',
    desc: 'Every appointment starts with a quiet conversation about your hair texture, crown growth pattern, and daily routine.',
    tags: ['Face shape', 'Texture check', 'Individual fit'],
    image: studioConsultationImg,
  },
  {
    index: '03 / 05',
    title: 'Comfortable Environment',
    desc: 'An orderly, relaxed salon space at Kashana View Apartment in Block A, North Nazimabad where clients are never rushed.',
    tags: ['Calm chair', 'North Nazimabad', 'Unhurried pace'],
    image: heroSalonImg,
  },
  {
    index: '04 / 05',
    title: 'Professional Approach',
    desc: 'Consistent tool preparation, respectful communication, and clean studio discipline from start to finish.',
    tags: ['Hygiene focus', 'Consistent care', 'Direct WhatsApp'],
    image: studioHotTowelImg,
  },
  {
    index: '05 / 05',
    title: 'Focus on Individual Style',
    desc: 'Whether classic executive side-parting or modern textured crop, every cut is shaped around how you actually wear it.',
    tags: ['Classic or modern', 'Natural movement', 'Everyday ease'],
    image: studioScissorActionImg,
  },
];

export const TRANSFORMATION_CASES = [
  {
    id: 'case-1',
    tabNum: '01',
    tabLabel: 'Textured Taper & Beard',
    title: 'From overgrown to sharp',
    desc: 'Illustrative demo preview showing how a structured taper and clean beard line sharpen facial balance.',
    beforeImage: transformBeforeImg,
    afterImage: transformAfterImg,
    proposedCategory: 'Haircut & Styling + Beard Grooming',
    status: 'Illustrative Demo Imagery · Replace with verified client photos',
    stylist: 'Qamar Bashir (Owner upload pending)',
  },
  {
    id: 'case-2',
    tabNum: '02',
    tabLabel: 'Crop & Low Fade',
    title: 'Clean crop proportion',
    desc: 'Illustrative preview highlighting natural matte texture on top paired with a low temple taper.',
    beforeImage: transformBeforeImg,
    afterImage: lookbookTexturedFadeImg,
    proposedCategory: 'Haircut & Styling',
    status: 'Illustrative Demo Imagery · Replace with verified client photos',
    stylist: 'Qamar Bashir (Owner upload pending)',
  },
  {
    id: 'case-3',
    tabNum: '03',
    tabLabel: 'Executive Part & Beard',
    title: 'Refined classic silhouette',
    desc: 'Illustrative preview illustrating structured side parting and sharp cheek-line beard grooming.',
    beforeImage: transformBeforeImg,
    afterImage: lookbookBeardSculptImg,
    proposedCategory: 'Personal Grooming',
    status: 'Illustrative Demo Imagery · Replace with verified client photos',
    stylist: 'Qamar Bashir (Owner upload pending)',
  },
];

export interface TeamMember {
  id: string;
  role: string;
  name: string;
  specialty: string;
  verified: boolean;
  note: string;
  image?: string;
}

export const TEAM_COLUMN_A: TeamMember[] = [
  {
    id: 'qamar-bashir',
    role: 'Lead Stylist & Proprietor',
    name: 'Qamar Bashir',
    specialty: 'Tailored haircuts, personal consultation & men’s grooming',
    verified: true,
    note: 'Verified portrait & full experience summary pending owner upload',
    image: studioConsultationImg,
  },
  {
    id: 'team-slot-3',
    role: 'Stylist Profile Slot',
    name: 'Pending Owner Confirmation',
    specialty: 'Reserved for confirmed salon team member & specialty',
    verified: false,
    note: 'No fictional staff names or credentials displayed',
  },
];

export const TEAM_COLUMN_B: TeamMember[] = [
  {
    id: 'team-slot-2',
    role: 'Barber Profile Slot',
    name: 'Pending Owner Confirmation',
    specialty: 'Reserved for confirmed barber name, photo & specialty',
    verified: false,
    note: 'No fictional staff names or credentials displayed',
  },
  {
    id: 'team-slot-4',
    role: 'Grooming Specialist Slot',
    name: 'Pending Owner Confirmation',
    specialty: 'Reserved for confirmed grooming specialist & portrait',
    verified: false,
    note: 'No fictional staff names or credentials displayed',
  },
];

export const VISIT_STEPS = [
  {
    step: 'Step 01',
    title: 'Consultation',
    desc: 'A calm check-in at the mirror to discuss your hair texture, preferred length, and style direction before beginning.',
    meta: 'At the chair',
    image: studioConsultationImg,
  },
  {
    step: 'Step 02',
    title: 'Personalized Grooming',
    desc: 'Measured scissor cutting, tapering, and beard shaping executed carefully around your natural growth pattern.',
    meta: 'Tailored craft',
    image: studioScissorActionImg,
  },
  {
    step: 'Step 03',
    title: 'Styling',
    desc: 'Clean blow-dry finish and straightforward guidance on maintaining the look effortlessly between visits.',
    meta: 'Natural finish',
    image: lookbookClassicScissorImg,
  },
  {
    step: 'Step 04',
    title: 'Final Look',
    desc: 'A thorough mirror check of hairline, beard symmetry, and collar clean-up before you step out of the studio.',
    meta: 'Detail check',
    image: lookbookBeardSculptImg,
  },
];

export const LOOKBOOK_CARDS = [
  {
    id: 'lb-1',
    title: 'Textured Crop & Low Taper',
    category: 'Haircut & Styling',
    caption: 'Illustrative style reference — replace with verified Nick’s Salon client photography.',
    image: lookbookTexturedFadeImg,
  },
  {
    id: 'lb-2',
    title: 'Classic Scissor-Cut Sweep',
    category: 'Hair Styling',
    caption: 'Illustrative style reference — replace with verified Nick’s Salon client photography.',
    image: lookbookClassicScissorImg,
  },
  {
    id: 'lb-3',
    title: 'Executive Side Part & Sculpted Beard',
    category: 'Beard Grooming',
    caption: 'Illustrative style reference — replace with verified Nick’s Salon client photography.',
    image: lookbookBeardSculptImg,
  },
  {
    id: 'lb-4',
    title: 'Chair & Mirror Consultation',
    category: 'Salon Experience',
    caption: 'Illustrative studio mood visual — replace with Kashana View salon photography.',
    image: studioConsultationImg,
  },
  {
    id: 'lb-5',
    title: 'Precision Scissor Craft',
    category: 'Haircut & Styling',
    caption: 'Illustrative craft visual — replace with verified Nick’s Salon photography.',
    image: studioScissorActionImg,
  },
  {
    id: 'lb-6',
    title: 'Wash & Care Station',
    category: 'Hair Wash & Care',
    caption: 'Illustrative studio mood visual — replace with Kashana View salon photography.',
    image: studioHairWashImg,
  },
];

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'How can I book an appointment?',
    answer:
      'Use the appointment request form below or tap any "Book Appointment" button on this page. Submitting the form opens WhatsApp (+92 300 3691915) with your preferred service, date, and time pre-filled so the salon can confirm availability directly with you.',
  },
  {
    id: 'faq-2',
    question: 'Can I contact the salon through WhatsApp?',
    answer:
      'Yes. You can message Nick’s Salon directly on WhatsApp at +92 300 3691915 for appointment inquiries, directions, and current availability.',
  },
  {
    id: 'faq-3',
    question: 'Where is Nick’s Salon located?',
    answer:
      'Nick’s Salon is located at Kashana View Apartment, Block A, North Nazimabad, Karachi, Pakistan. A direct Google Maps link is provided in the Contact & Location section below.',
  },
  {
    id: 'faq-4',
    question: 'What are the salon’s opening hours?',
    answer:
      'Daily opening and closing hours are marked for owner confirmation before live launch. In the meantime, please send a quick message on WhatsApp (+92 300 3691915) to verify today’s schedule.',
  },
  {
    id: 'faq-5',
    question: 'Can I request a specific barber?',
    answer:
      'You can note Qamar Bashir or mention a barber preference in the Additional Message field of your WhatsApp booking request. Official barber-specific scheduling policies are pending owner confirmation.',
  },
];
