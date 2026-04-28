/* ============================================================
   Mountain House Hub — Community Resources Data
   ============================================================ */

const RESOURCES = [
  {
    id: 1,
    name: "Tracy Fire Department",
    category: "Emergency Services",
    description: "Fire prevention education, emergency medical services, community safety programs, and CPR/first aid training.",
    address: "Tracy, CA",
    phone: "(209) 831-4200",
    hours: "Emergency: 911 | Non-emergency: Mon – Fri",
    website: "https://www.sjcfire.org/operations/stations",
    tags: ["fire", "emergency", "safety", "CPR", "first aid"],
    featured: false,
    icon: "🚒"
  },
  {
    id: 2,
    name: "Tracy Police Department",
    category: "Emergency Services",
    description: "Non-emergency police services, community outreach programs, neighborhood watch support, and public safety resources.",
    address: "1000 Civic Center Dr, Tracy, CA 95376",
    phone: "(209) 831-6550",
    hours: "Non-emergency: Mon – Fri 8:00 AM – 5:00 PM",
    website: "https://tracypd.com/",
    tags: ["police", "safety", "neighborhood watch", "community outreach"],
    featured: false,
    icon: "🚔"
  },
  {
    id: 3,
    name: "Crunch Fitness – Tracy",
    category: "Health & Fitness",
    description: "Affordable, judgment-free fitness center offering cardio and strength equipment, group classes, and personal training. Welcoming to all fitness levels.",
    address: "1975 W 11th St, Tracy, CA 95376",
    phone: "(209) 929-0882",
    hours: "Mon – Fri 4:00 AM – 11:00 PM · Sat – Sun 5:00 AM – 10:00 PM",
    website: "https://www.crunch.com/locations/tracy",
    tags: ["fitness", "gym", "classes", "personal training", "health"],
    featured: false,
    icon: "🏋️"
  },
  {
    id: 4,
    name: "Royal Kings Basketball Club",
    category: "Youth Programs",
    description: "Non-profit AAU youth basketball program offering competitive travel teams, skills training, and certified coaching for boys and girls. Focuses on player development, fitness, and academic growth on and off the court.",
    address: "52 Fauna Court, Mountain House, CA 95391",
    phone: "(209) 319-7290",
    hours: "Timings vary by age group",
    website: "http://www.royalkings.org/home.html",
    tags: ["youth", "basketball", "AAU", "sports", "coaching"],
    featured: true,
    icon: "🏀",
    spotlight: {
      impact: "Serving youth across Mountain House & Tracy",
      founded: "Mountain House-based nonprofit",
      about: "Royal Kings Basketball Club is a non-profit AAU youth basketball program right here in Mountain House. The club fields competitive travel teams for boys and girls, providing certified coaching, skills development, and a culture that values both athletic and academic achievement. Whether your child is new to the game or an experienced player, the Royal Kings family is committed to helping them grow.",
      howToAccess: "Visit royalkings.org or call (209) 319-7290 to learn about tryouts, team schedules, and registration. Located at 52 Fauna Court, Mountain House."
    }
  },
  {
    id: 5,
    name: "Tracy Interfaith Ministries",
    category: "Food & Nutrition",
    description: "Provides food pantry, clothing, and emergency assistance for individuals and families in need.",
    address: "311 W Grant Line Rd, Tracy, CA 95376",
    phone: "(209) 836-5424",
    hours: "Mon – Thu 10 AM – 2 PM · Sat 10 AM – 12 PM",
    website: "https://tracyinterfaith.org",
    tags: ["food", "clothing", "emergency", "free", "families"],
    featured: true,
    icon: "🥫",
    spotlight: {
      impact: "Supporting families in need across Tracy",
      founded: "Tracy-based interfaith nonprofit",
      about: "Tracy Interfaith Ministries is a faith-driven nonprofit serving Tracy residents with food pantry services, clothing assistance, and emergency financial help. The organization brings together local faith communities to ensure that neighbors facing hardship have access to basic necessities and compassionate support.",
      howToAccess: "Visit the pantry at 311 W Grant Line Rd, Tracy during open hours. No appointment necessary for most services. Call (209) 836-5424 for more information."
    }
  },
  {
    id: 6,
    name: "The Hill Foundation Community Food Bank",
    category: "Food & Nutrition",
    description: "Local food bank offering groceries and support services for low-income residents.",
    address: "11176 W Larch Rd, Tracy, CA 95304",
    phone: "(209) 832-0006",
    hours: "Wed 9 AM – 4:30 PM",
    website: "http://thehillfoundation.info",
    tags: ["food bank", "groceries", "low-income", "free", "community"],
    featured: false,
    icon: "🛒"
  },
  {
    id: 7,
    name: "Community Medical Centers",
    category: "Healthcare",
    description: "Affordable primary care, dental, and behavioral health services across multiple locations.",
    address: "Multiple locations (Tracy & Stockton, CA)",
    phone: "(209) 234-2100",
    hours: "Mon – Fri 8 AM – 5 PM",
    website: "https://www.communitymedicalcenters.org",
    tags: ["health", "medical", "dental", "behavioral health", "affordable"],
    featured: false,
    icon: "⚕️"
  },
  {
    id: 8,
    name: "Mountain House Community Center",
    category: "Community Programs",
    description: "Community hub offering recreation programs, fitness classes, and events for residents.",
    address: "655 S Central Pkwy, Mountain House, CA 95391",
    phone: "(209) 835-1234",
    hours: "Mon – Sun 6 AM – 10 PM",
    website: "https://www.mountainhousecsd.org",
    tags: ["recreation", "fitness", "events", "community", "programs"],
    featured: true,
    icon: "🏘️",
    spotlight: {
      impact: "10,000+ annual participants",
      founded: "2009",
      about: "The Mountain House Community Center is the social and recreational heart of our community. From youth sports leagues to fitness classes, community events to meeting spaces — the center offers something for every resident. Managed by the Mountain House Community Services District, it is a welcoming space where neighbors come together year-round.",
      howToAccess: "Walk in during operating hours at 655 S Central Pkwy. Program registration is available online at mountainhousecsd.org or at the front desk. Many programs are free or low-cost."
    }
  },
  {
    id: 9,
    name: "Lolly Hansen Senior Center",
    category: "Health & Fitness",
    description: "Recreational activities, health and wellness programs, seminars, and resource center for adults 50+. Classes include Cardio, Yoga, Tai Chi, and jewelry making.",
    address: "375 E 9th St, Tracy, CA 95376",
    phone: "(209) 831-6240",
    hours: "Mon – Fri 8:00 AM – 4:00 PM",
    website: "https://www.cityoftracy.org/Departments/Parks-Recreation-Community-Services/Lolly-Hansen-Senior-Center",
    tags: ["seniors", "yoga", "tai chi", "wellness", "50+", "classes"],
    featured: false,
    icon: "🧘"
  },
  {
    id: 10,
    name: "Tracy Volunteer Caregivers",
    category: "Community Programs",
    description: "Non-medical assistance, transportation to appointments, companionship, and errand services for seniors and disabled residents.",
    address: "Tracy, CA",
    phone: "(209) 835-2772",
    hours: "Contact for scheduling",
    website: "",
    tags: ["seniors", "transportation", "caregiving", "disabled", "volunteers"],
    featured: false,
    icon: "🤝"
  },
  {
    id: 12,
    name: "Tracy Earth Project",
    category: "Community Programs",
    description: "Environmental sustainability education, youth bike program, community garden, tree planting, and regenerative gardening workshops.",
    address: "Tracy, CA",
    phone: "",
    hours: "Events announced on website",
    website: "https://www.tracyearthproject.org/",
    tags: ["environment", "sustainability", "youth", "garden", "bikes"],
    featured: false,
    icon: "🌱"
  },
  {
    id: 13,
    name: "A To Z Psychotherapy",
    category: "Healthcare",
    description: "Accessible, culturally competent mental health services for at-risk women and children. Individual, family, couples, and group therapy. Ages 5 and up.",
    address: "35 E 10th St, Suite A, Tracy, CA 95376",
    phone: "(209) 627-7667",
    hours: "Mon – Fri 9:00 AM – 6:00 PM",
    website: "https://www.atozpsychotherapy.org/",
    tags: ["mental health", "therapy", "counseling", "children", "women"],
    featured: false,
    icon: "🧠"
  },
  {
    id: 14,
    name: "Living Grace Senior Care",
    category: "Community Programs",
    description: "Senior retirement activities, games, reading, companionship programs, and volunteer opportunities for those who love working with the elderly.",
    address: "Tracy, CA",
    phone: "(209) 833-2200",
    hours: "Contact for schedule",
    website: "",
    tags: ["seniors", "companionship", "volunteers", "activities", "elderly"],
    featured: false,
    icon: "💛"
  },
  {
    id: 16,
    name: "Charles Gracie Jiu-Jitsu Academy Mountain House",
    category: "Health & Fitness",
    description: "Brazilian Jiu-Jitsu classes for kids and adults, including beginner-friendly programs, kids classes, and open mat sessions in Mountain House.",
    address: "1174 Tradition St, Mountain House, CA 95391",
    phone: "(209) 650-6545",
    hours: "Mon & Wed: 10:30 AM – 12:30 PM, 4:00 – 8:30 PM | Tue & Thu: 3:00 – 8:30 PM | Fri: 4:45 – 6:15 PM | Sat: 9:30 AM – 12:30 PM",
    website: "https://charlesgracie.com",
    tags: ["martial arts", "jiu-jitsu", "kids", "adults", "fitness"],
    featured: false,
    icon: "🥋"
  },
  {
    id: 15,
    name: "San Joaquin County Human Services Agency",
    category: "Community Programs",
    description: "Direct and referral services including employment assistance, MediCal, CalFresh, CalWORKs, and general relief benefits.",
    address: "Multiple locations in San Joaquin County",
    phone: "(209) 468-1000",
    hours: "Mon – Fri 8:00 AM – 5:00 PM",
    website: "https://www.sjgov.org/hsa",
    tags: ["MediCal", "CalFresh", "CalWORKs", "benefits", "employment"],
    featured: false,
    icon: "🏛️"
  }
];

const CAT_SVG = {
  "All Resources":       `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>`,
  "Emergency Services":  `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  "Food & Nutrition":    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h1v11h2V11h1c1.1 0 2-.9 2-2V2"/><path d="M8 2v4"/><path d="M5 2v4"/><path d="M16 3v4a3 3 0 0 0 6 0V3"/><line x1="19" y1="10" x2="19" y2="22"/></svg>`,
  "Health & Fitness":    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
  "Youth Programs":      `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  "Healthcare":          `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,
  "Community Programs":  `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><rect x="9" y="13" width="6" height="8"/><rect x="8" y="8" width="3" height="3"/><rect x="13" y="8" width="3" height="3"/></svg>`
};

const CATEGORIES = [
  { name: "All Resources",      icon: CAT_SVG["All Resources"],      count: RESOURCES.length },
  { name: "Emergency Services", icon: CAT_SVG["Emergency Services"], count: RESOURCES.filter(r => r.category === "Emergency Services").length },
  { name: "Food & Nutrition",   icon: CAT_SVG["Food & Nutrition"],   count: RESOURCES.filter(r => r.category === "Food & Nutrition").length },
  { name: "Health & Fitness",   icon: CAT_SVG["Health & Fitness"],   count: RESOURCES.filter(r => r.category === "Health & Fitness").length },
  { name: "Youth Programs",     icon: CAT_SVG["Youth Programs"],     count: RESOURCES.filter(r => r.category === "Youth Programs").length },
  { name: "Healthcare",         icon: CAT_SVG["Healthcare"],         count: RESOURCES.filter(r => r.category === "Healthcare").length },
  { name: "Community Programs", icon: CAT_SVG["Community Programs"], count: RESOURCES.filter(r => r.category === "Community Programs").length }
];
