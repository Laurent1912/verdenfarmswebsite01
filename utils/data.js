import {
  FiBox,
  FiTruck,
  FiTool,
  FiUsers,
  FiDroplet,
  FiSun,
  FiMaximize,
  FiTrendingUp,
  FiMapPin,
  FiRefreshCw,
  FiLayers,
  FiShield,
} from "react-icons/fi";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Impact", href: "#impact" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const IMPACT_STATS = [
  { value: 32, suffix: "", label: "Plants Per Tower", icon: FiLayers },
  { value: 24, suffix: "+", label: "Towers Deployed", icon: FiBox },
  { value: 2, prefix: "Up to ", suffix: "×", label: "Land Productivity Increase", icon: FiTrendingUp },
  { value: 95, prefix: "Up to ", suffix: "%", label: "Water Savings", icon: FiDroplet },
  { value: 12, suffix: "mo", label: "Year-Round Production", icon: FiRefreshCw },
  { value: 100, suffix: "%", label: "Locally Adapted Innovation", icon: FiMapPin },
];

export const ABOUT_PILLARS = [
  "Urban farming",
  "Commercial vegetable production",
  "Household food security",
  "Climate resilience",
  "Youth-led agribusiness",
  "Sustainable agriculture adoption",
];

export const SERVICES = [
  {
    title: "Vertical Farming Tower Systems",
    description:
      "Modular, space-efficient towers engineered for African climates — grow up to 32 plants in the footprint of a single pot.",
    icon: FiBox,
  },
  {
    title: "Fresh Produce Supply",
    description:
      "Consistent, locally grown lettuce, spinach and leafy greens supplied fresh to households, hotels and institutions.",
    icon: FiTruck,
  },
  {
    title: "Farm Setup & Installation",
    description:
      "End-to-end design, delivery and on-site installation of your vertical farm — ready to grow from day one.",
    icon: FiTool,
  },
  {
    title: "Training & Demonstration Programs",
    description:
      "Hands-on training and demo farms that equip youth, women and agripreneurs to run profitable vertical farms.",
    icon: FiUsers,
  },
];

export const WHY_REASONS = [
  { title: "Efficient Land Use", value: 92, icon: FiMaximize },
  { title: "Water-Efficient Production", value: 95, icon: FiDroplet },
  { title: "Climate-Smart Farming", value: 88, icon: FiSun },
  { title: "Locally Adapted Solutions", value: 90, icon: FiMapPin },
  { title: "Scalable Infrastructure", value: 85, icon: FiLayers },
  { title: "Reliable Year-Round Production", value: 96, icon: FiRefreshCw },
];

export const IMPACT_AREAS = [
  { title: "Youth Employment", description: "Creating green jobs and agribusiness pathways for young people.", icon: FiUsers },
  { title: "Women in Agribusiness", description: "Empowering women to lead and own profitable farming ventures.", icon: FiShield },
  { title: "Sustainable Food Production", description: "Clean, chemical-light growing methods that protect the land.", icon: FiSun },
  { title: "Urban Food Accessibility", description: "Fresh produce grown close to the cities and homes that need it.", icon: FiMapPin },
  { title: "Water Conservation", description: "Closed-loop systems that save up to 95% of the water used in fields.", icon: FiDroplet },
  { title: "Climate-Smart Adoption", description: "Resilient systems that perform through heat, drought and seasonality.", icon: FiRefreshCw },
];

export const PROJECT_TIMELINE = [
  { phase: "01", title: "24 Prototype Towers", description: "A pilot fleet of 24 vertical towers installed and operating in Iringa." },
  { phase: "02", title: "Lettuce & Spinach Production", description: "Active cultivation of leafy greens optimised for the local climate." },
  { phase: "03", title: "Production Testing", description: "Measuring yields, growth cycles and water performance in real conditions." },
  { phase: "04", title: "Market Validation", description: "Confirming demand with hotels, institutions and local buyers." },
  { phase: "05", title: "Client Onboarding", description: "Bringing first commercial clients onto the Verden Farms system." },
  { phase: "06", title: "Commercial Supply Preparation", description: "Scaling toward reliable, year-round commercial supply." },
];

export const TEAM = [
  {
    name: "Angel Ezekiel",
    role: "Team Lead",
    bio: "Drives Verden Farms' vision and strategy, aligning the team around climate-smart growth across Tanzania.",
    initials: "AE",
  },
  {
    name: "Eric Kisanga",
    role: "Operations & Technology Lead",
    bio: "Leads the engineering and operations of the tower systems, from design to reliable field deployment.",
    initials: "EK",
  },
  {
    name: "Idwika James",
    role: "Farm Manager",
    bio: "Oversees daily cultivation, crop health and yield performance across the pilot farm.",
    initials: "IJ",
  },
  {
    name: "Manyaka Thomas",
    role: "Marketing Lead",
    bio: "Builds the Verden Farms brand and grows demand with households, hotels and institutions.",
    initials: "MT",
  },
  {
    name: "Fredy Laurent Samba",
    role: "Finance Lead",
    bio: "Manages financial planning and sustainability, keeping growth disciplined and investor-ready.",
    initials: "FS",
  },
];

export const FAQS = [
  {
    q: "What can be grown in Verden Farms towers?",
    a: "Our towers are ideal for leafy greens and herbs such as lettuce, spinach, kale, basil and similar fast-growing vegetables that thrive in vertical, soil-light systems.",
  },
  {
    q: "How many plants can one tower support?",
    a: "Each standard Verden Farms tower supports up to 32 plants in a compact footprint, dramatically increasing how much you can grow per square metre.",
  },
  {
    q: "Are the systems suitable for households?",
    a: "Yes. Our towers are designed to be space-efficient and easy to manage, making them a great fit for households that want fresh produce at home with minimal space.",
  },
  {
    q: "Do the systems use a lot of water?",
    a: "No — quite the opposite. Our closed-loop, water-efficient design can save up to 80–95% of the water compared with traditional open-field farming.",
  },
  {
    q: "Can Verden Farms support commercial installations?",
    a: "Absolutely. We design and install scalable, multi-tower systems for hotels, institutions and agribusinesses, and prepare clients for reliable commercial supply.",
  },
  {
    q: "Do you provide installation support?",
    a: "Yes. We handle end-to-end farm setup and installation, plus training and demonstration so your team is confident operating the system from day one.",
  },
];

export const GALLERY_ITEMS = [
  { label: "Tower Photos", tone: "from-forest-700 to-forest-900", span: "md:col-span-2 md:row-span-2" },
  { label: "Growing Crops", tone: "from-forest-500 to-forest-700", span: "" },
  { label: "Team Working", tone: "from-forest-800 to-ink", span: "" },
  { label: "Irrigation Systems", tone: "from-forest-600 to-forest-800", span: "md:col-span-2" },
  { label: "Farm Setup", tone: "from-forest-700 to-forest-950", span: "" },
  { label: "Seedlings", tone: "from-forest-500 to-forest-800", span: "" },
  { label: "Construction Process", tone: "from-forest-800 to-forest-950", span: "md:col-span-2" },
];

export const PARTNER_CATEGORIES = [
  { category: "Hotels", logos: ["Hotel Group", "Lodge Co.", "Resort Ltd"] },
  { category: "Demo Farms", logos: ["AgriHub", "GreenField", "FarmLab"] },
  { category: "Institutions", logos: ["University", "Council", "Foundation"] },
  { category: "Agribusiness", logos: ["AgroTrade", "FreshCo", "HarvestX"] },
];

export const INTEREST_OPTIONS = [
  "Tower Purchase",
  "Fresh Produce",
  "Partnership",
  "Demo Farm",
  "Training",
];

export const CONTACT = {
  location: "Mtwivila B near Magic Site - Iringa, Tanzania",
  email: "hello@verdenfarms.co.tz",
  whatsapp: "+255 700 000 000",
  whatsappLink: "https://wa.me/255700000000",
};
