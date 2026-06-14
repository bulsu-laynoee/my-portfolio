// data/projects.ts

export const projectsData = [
  {
    slug: "parkbulsu",
    title: "ParkBulSU",
    shortDescription: "A comprehensive web and mobile-based parking management system featuring QR code scanning for vehicle entry.",
    fullDescription: "ParkBulSU is a complete parking management solution designed for the campus. It features a mobile app for users to scan QR codes for entry, real-time slot monitoring for administrators, and comprehensive analytics generation to track parking usage throughout the premises.",
    image: "/projects/ParkBulsu.jpg", 
    gallery: [
      "/projects/ParkBulsu-1.jpg", // Palitan ng totoong pangalan ng mga pictures mo
      "/projects/ParkBulsu-2.jpg"
    ],
    tags: ["Web & Mobile", "System Analytics", "QR System"], // Mapapansin mo, yung una ("Web & Mobile") ang lalabas sa main card
    techStack: ["React.js",  "React Native", "Laravel", "Tailwind CSS", "MySQL"],
  },
  {
    slug: "luxury-level",
    title: "Luxury Level E-Commerce",
    shortDescription: "Managed and optimized an e-commerce platform, handling migration to Vercel Pro and Cloudflare R2.",
    fullDescription: "This project involved the complete migration and optimization of the Luxury Level e-commerce platform. Key achievements include migrating the hosting environment to Vercel Pro, integrating Cloudflare R2 for efficient image storage, and strictly prioritizing secure Supabase client-side operations by properly configuring anon keys over service roles.",
    image: "/projects/level-logo.svg",
    gallery: [
      "/projects/luxlevel-screenshot.png"
    ],
    tags: ["Web", "Vercel", "Cloudflare", "Supabase"],
    techStack: ["React", "Next.js", "Tailwind CSS", "Supabase"],
    liveUrl: "https://www.luxurylevelco.com/", // Lalabas ang "Visit Live Site" button dahil may link ito
  },
  {
    slug: "sole-avenue",
    title: "Sole Avenue Inventory",
    shortDescription: "An automated inventory and notification system built using Google Apps Script and Google Sheets.",
    fullDescription: "Developed during an internship at Sole Avenue, this system automates inventory tracking and customer notifications. Built purely using Google Apps Script and Google Sheets, it automatically triggers email notifications to customers whenever order statuses dynamically change to 'Arrived' or 'Cancelled'.",
    image: "/projects/Sole-Avenue.jpg",
    gallery: [
      "/projects/soleave-screenshot.png"
    ],
    tags: ["Automation", "Google Apps Script", "API"],
    techStack: ["Google Apps Script", "Google Sheets", "JavaScript"],
  },
  /*{
    slug: "scale-up-philippines",
    title: "Scale Up - Staffing & Recruitment Management System",
    shortDescription: "A custom Puppeteer web scraper to synchronize product data directly into a Supabase database.",
    fullDescription: "A backend automation tool built to seamlessly scrape luxury product data. Using Puppeteer, the script fetches detailed product information such as brand names, prices, and images from target sources, and automatically synchronizes this data into a Supabase database for administrative review before going live.",
    image: "/projects/SU-PH.jpg",
    gallery: [
      "/projects/scraper-screenshot.png"
    ],
    tags: ["Backend"],
    techStack: ["HTML", "CSS", "JavaScript", "MySQL", "Google Sheets"],
    liveUrl: "https://scaleupphilippines.com/",
  }*/
];