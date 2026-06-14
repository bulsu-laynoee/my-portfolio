// data/projects.ts

export const projectsData = [
  {
    slug: "parkbulsu",
    title: "ParkBulSU",
    shortDescription: "A comprehensive web and mobile-based parking management system featuring QR code scanning for vehicle entry.",
    fullDescription: "ParkBulSU is a complete parking management solution designed for Bulacan State University. It features a mobile app for users to scan QR codes for entry, real-time slot monitoring for administrators, and comprehensive analytics generation to track parking usage throughout the campus.",
    image: "/projects/ParkBulsu.jpg", 
    gallery: [
      "/projects/Sole-Avenue.jpg",
    ],
    tags: ["Full-Stack", "Mobile", "System Analytics"],
    techStack: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    slug: "luxury-level",
    title: "Luxury Level E-Commerce",
    shortDescription: "Managed and optimized an e-commerce platform, handling migration to Vercel Pro and Cloudflare R2.",
    fullDescription: "This project involved the complete migration and optimization of the Luxury Level e-commerce platform. Key achievements include migrating hosting to Vercel Pro, integrating Cloudflare R2 for efficient image storage, and prioritizing secure Supabase client-side operations by properly managing environment variables.",
    image: "/projects/level-logo.svg",
    gallery: ["/images/luxlevel-screenshot.png"],
    tags: ["Next.js", "Vercel", "Cloudflare", "Supabase"],
    techStack: ["Next.js", "Tailwind CSS", "Supabase", "Vercel"],
    liveUrl: "https://www.luxurylevelco.com/", // <--- DINAGDAG NATIN ITO
  },
  {
    slug: "sole-avenue",
    title: "Sole Avenue Automated Inventory",
    shortDescription: "An automated inventory and notification system using Google Apps Script.",
    fullDescription: "Developed during an internship at Sole Avenue, this system automates inventory tracking and customer notifications. Built using Google Apps Script and Google Sheets, it automatically triggers email notifications to customers when order statuses change to 'Arrived' or 'Cancelled'.",
    image: "/projects/Sole-Avenue.jpg",
    gallery: ["/images/soleave-screenshot.png"],
    tags: ["Automation", "Google Apps Script", "API"],
    techStack: ["Google Apps Script", "Google Sheets", "JavaScript"],
  },
  {
    slug: "scale-up-philippines",
    title: "Scale Up Philippines",
    shortDescription: "A Puppeteer web scraper to synchronize product data directly into a Supabase database.",
    fullDescription: "A backend automation tool built to scrape luxury product data. Using Puppeteer, the script fetches detailed product information such as brand names, prices, and images, and automatically synchronizes this data into a Supabase database for administrative review before going live.",
    image: "/projects/SU-PH.jpg",
    gallery: ["/images/scraper-screenshot.png"],
    tags: ["Puppeteer", "Node.js", "Data Synchronization"],
    techStack: ["HTML", "CSS", "JavaScript", "MySQL"],
    liveUrl: "https://scaleupphilippines.com/",
  }
];