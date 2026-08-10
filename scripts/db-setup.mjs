import { neon, neonConfig } from "@neondatabase/serverless";
import fs from "fs";
import path from "path";

import dns from "node:dns";

if (typeof dns.setDefaultResultOrder === "function") {
  dns.setDefaultResultOrder("verbatim");
}

neonConfig.poolQueryViaFetch = false;

// Read .env.local manually to get DATABASE_URL
const envPath = path.resolve(".env.local");
let databaseUrl = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL;

if (!databaseUrl && fs.existsSync(envPath)) {
  const envFileContent = fs.readFileSync(envPath, "utf-8");
  const unpooledMatch = envFileContent.match(/DATABASE_URL_UNPOOLED=["']?([^"'\s]+)["']?/);
  const pooledMatch = envFileContent.match(/DATABASE_URL=["']?([^"'\s]+)["']?/);
  databaseUrl = unpooledMatch ? unpooledMatch[1] : (pooledMatch ? pooledMatch[1] : undefined);
}

if (!databaseUrl) {
  console.error("DATABASE_URL not found in environment or .env.local");
  process.exit(1);
}

const sql = neon(databaseUrl);

async function setup() {
  console.log("Setting up database tables...");

  try {
    // 1. Posts Table
    await sql`
      CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        slug TEXT UNIQUE NOT NULL,
        excerpt TEXT,
        main_image TEXT,
        published_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        reading_time TEXT,
        category TEXT,
        author_name TEXT,
        author_role TEXT,
        author_avatar TEXT,
        seo_title TEXT,
        seo_description TEXT,
        seo_keywords TEXT,
        content TEXT
      );
    `;
    console.log("✓ 'posts' table created or exists");

    // 2. Case Studies Table
    await sql`
      CREATE TABLE IF NOT EXISTS case_studies (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        slug TEXT UNIQUE NOT NULL,
        company_name TEXT,
        company_logo TEXT,
        industry TEXT,
        excerpt TEXT,
        cover_image TEXT,
        challenge TEXT,
        solution TEXT,
        results JSONB DEFAULT '[]'::jsonb,
        testimonial_quote TEXT,
        testimonial_author TEXT,
        testimonial_role TEXT,
        content TEXT,
        published_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        seo_title TEXT,
        seo_description TEXT,
        seo_keywords TEXT
      );
    `;
    console.log("✓ 'case_studies' table created or exists");

    // 3. Resources Table
    await sql`
      CREATE TABLE IF NOT EXISTS resources (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        slug TEXT UNIQUE NOT NULL,
        category TEXT,
        badge TEXT,
        read_time TEXT,
        summary TEXT,
        image TEXT,
        author TEXT,
        author_role TEXT,
        published_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        key_takeaways JSONB DEFAULT '[]'::jsonb,
        content TEXT,
        seo_title TEXT,
        seo_description TEXT,
        seo_keywords TEXT
      );
    `;
    console.log("✓ 'resources' table created or exists");

    // 4. Site Settings Table
    await sql`
      CREATE TABLE IF NOT EXISTS site_settings (
        id INTEGER PRIMARY KEY DEFAULT 1 CHECK (id = 1),
        hero_title TEXT,
        hero_subtitle TEXT,
        hero_cta_text TEXT,
        features_title TEXT,
        features_subtitle TEXT,
        card1_image TEXT,
        card2_image TEXT,
        card3_image TEXT,
        card4_image TEXT,
        card5_image TEXT,
        capabilities_title TEXT,
        capabilities_subtitle TEXT,
        comparison_title TEXT,
        comparison_subtitle TEXT,
        why_us_title TEXT,
        why_us_subtitle TEXT,
        roi_title TEXT,
        roi_subtitle TEXT,
        stat1_value TEXT,
        stat1_label TEXT,
        stat2_value TEXT,
        stat2_label TEXT,
        stat3_value TEXT,
        stat3_label TEXT,
        testimonials_title TEXT,
        testimonials_subtitle TEXT,
        banner_enabled BOOLEAN DEFAULT false,
        banner_text TEXT,
        banner_link TEXT,
        calendly_url TEXT,
        meta_title TEXT,
        meta_description TEXT,
        keywords TEXT,
        allow_indexing BOOLEAN DEFAULT true,
        google_site_verification TEXT,
        google_analytics_id TEXT,
        site_url TEXT
      );
    `;

    // Migration alter statements for site_settings columns
    await sql`ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS keywords TEXT;`;
    await sql`ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS allow_indexing BOOLEAN DEFAULT true;`;
    await sql`ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS google_site_verification TEXT;`;
    await sql`ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS google_analytics_id TEXT;`;
    await sql`ALTER TABLE site_settings ADD COLUMN IF NOT EXISTS site_url TEXT;`;

    console.log("✓ 'site_settings' table created or updated");

    // 5. Contact Page Settings Table
    await sql`
      CREATE TABLE IF NOT EXISTS contact_page_settings (
        id INTEGER PRIMARY KEY DEFAULT 1 CHECK (id = 1),
        hero_title TEXT,
        hero_subtitle TEXT,
        email TEXT,
        uk_office_label TEXT,
        uk_office_badge TEXT,
        uk_office_address TEXT,
        uk_office_phone TEXT,
        india_office_label TEXT,
        india_office_badge TEXT,
        india_office_address TEXT,
        india_office_phone1 TEXT,
        india_office_phone2 TEXT,
        operating_hours TEXT,
        sla_note TEXT,
        security_title TEXT,
        security_description TEXT,
        form_title TEXT,
        form_subtitle TEXT,
        success_message TEXT,
        success_description TEXT
      );
    `;
    console.log("✓ 'contact_page_settings' table created or exists");

    // 6. Submissions Tables
    await sql`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        company TEXT,
        message TEXT NOT NULL,
        submitted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    await sql`
      CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
        id SERIAL PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    await sql`
      CREATE TABLE IF NOT EXISTS demo_requests (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        company TEXT NOT NULL,
        requirement TEXT,
        submitted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    console.log("✓ submission tables created or exists");

    // 7. Page Content Table (for editing page sections from Studio)
    await sql`
      CREATE TABLE IF NOT EXISTS page_content (
        id SERIAL PRIMARY KEY,
        page_slug TEXT NOT NULL,
        page_name TEXT NOT NULL,
        section_id TEXT NOT NULL,
        section_name TEXT NOT NULL,
        content_json JSONB NOT NULL DEFAULT '{}'::jsonb,
        section_order INTEGER DEFAULT 0,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(page_slug, section_id)
      );
    `;
    console.log("✓ 'page_content' table created or exists");

    // Seeding: Home Page Content
    const homeContentCount = await sql`SELECT count(*) FROM page_content WHERE page_slug = 'home';`;
    if (parseInt(homeContentCount[0].count) === 0) {
      const homeSections = [
        {
          section_id: 'hero',
          section_name: 'Hero Section',
          section_order: 1,
          content_json: {
            title: "India's #1 Skill Management Software",
            subtitle: "Automate workforce skill matrices, benchmark role competencies, and evaluate developer capabilities 3x faster with objective AI assessments.",
            ctaText: "Book a Demo",
            ctaLink: "/book-demo",
            ctaText2: "Explore Features",
            ctaLink2: "#features"
          }
        },
        {
          section_id: 'features',
          section_name: 'Features Section',
          section_order: 2,
          content_json: {
            title: "Everything Your Engineering Org Needs to Scale Talent",
            subtitle: "Scroll to explore how SkillMetrics automates technical evaluations, eliminates skill blind spots, and accelerates workforce capability."
          }
        },
        {
          section_id: 'card1',
          section_name: 'Feature Card 1 — Skill Matrix',
          section_order: 3,
          content_json: {
            title: "Skill Matrix",
            description: "A virtually 'unbreakable' tool that basically works in real-time to showcase essential skills or competencies of your staff members, particularly, need to perform a certain task.",
            description2: "Additionally, Extra features enable you to harmonize your overall organizational activities based on performance, delivery, and core competencies.",
            image: "/skillmetrics.png"
          }
        },
        {
          section_id: 'card2',
          section_name: 'Feature Card 2 — Employee Metrics',
          section_order: 4,
          content_json: {
            title: "Employee Metrics",
            description: "Employee competency matrix visually tracks employee skills with a super dynamic matrix grid view. Discover missing competencies, and find the right candidates for the right tasks at the right time.",
            description2: "Flexible customisations in grid view can yield you the best results in employee matrices. What are those customisations? How organisations have benefitted using these tailor-made solutions?",
            image: "/emp.jpg"
          }
        },
        {
          section_id: 'card3',
          section_name: 'Feature Card 3 — AI Assessments',
          section_order: 5,
          content_json: {
            title: "AI-Based Assessments",
            description: "Interactive AI bots to create super easy assessments. Self integrated, system enabled with flexible adaptability to controlling environment makes your observation tasks hassle free and step ahead.",
            image: "/ai_asses.png"
          }
        },
        {
          section_id: 'card4',
          section_name: 'Feature Card 4 — Multi-Skilling',
          section_order: 6,
          content_json: {
            title: "Multi-Skilling",
            description: "Multiskilling mechanisms that make your ManPower flexible and more powerful in problem-solving & task executing WorkPower.",
            image: "/multi-skilling.png"
          }
        },
        {
          section_id: 'card5',
          section_name: 'Feature Card 5 — Competency Mapping',
          section_order: 7,
          content_json: {
            title: "Competency Mapping",
            description: "Functional radars, capability graphs, and training feedback loops designed to benchmark employee proficiency across technical stacks and operational workflows.",
            description2: "Imprint workforce capabilities into central radar frameworks, track growth over time, and eliminate manual spreadsheet errors with automated capability scorecards.",
            image: "/compentancy-mapping.jpg"
          }
        },
        {
          section_id: 'capabilities',
          section_name: 'Core Platform Capabilities',
          section_order: 8,
          content_json: {
            title: "Core Platform Capabilities",
            subtitle: "Purpose-built tools designed for technical recruiters, hiring managers, and enterprise engineering leads.",
            cap1Title: "Skill Matrix",
            cap1Badge: "REAL-TIME MATRIX",
            cap1Desc: "Real-time competency tracking and automated skill visualization grid. Discover missing competencies, assign right candidates to right tasks, and eliminate spreadsheet errors.",
            cap2Title: "Employee Metrics",
            cap2Badge: "TALENT ANALYTICS",
            cap2Desc: "Dynamic grid view with custom tailoring & performance tracking. Track employee growth over time with customizable matrix views and automated capability reports.",
            cap3Title: "AI-Based Assessments",
            cap3Badge: "AUTOMATED EVALUATION",
            cap3Desc: "Interactive AI engine for rapid, highly accurate candidate evaluation. Minimizes manual work, boosts employee engagement, and delivers precise skill scores automatically.",
            cap4Title: "Multi-Skilling",
            cap4Badge: "MANPOWER ALLOCATION",
            cap4Desc: "Flexible workforce allocation & runtime problem-solving. Equip employees with multiple skills, adjust manpower on the fly, and manage shifts with one click.",
            cap5Title: "Competency Mapping",
            cap5Badge: "GAP ANALYSIS",
            cap5Desc: "Functional radars, capability graphs, and training feedback loops designed to benchmark employee proficiency across technical stacks and operational workflows.",
            cap6Title: "Up-Skilling & Re-Skilling",
            cap6Badge: "CONTINUOUS LEARNING",
            cap6Desc: "Continuous workforce learning pathways aligned to tech trends. Expand employee skillsets to keep pace with changing market demands, tech stacks, and industry shifts."
          }
        },
        {
          section_id: 'comparison',
          section_name: 'Excel vs SkillMetrics',
          section_order: 9,
          content_json: {
            title: "Legacy Excel Spreadsheets vs. SkillMetrics Intelligence",
            subtitle: "Drag the interactive slider below to see how error-prone manual spreadsheets compare to automated, real-time AI skill matrix tracking."
          }
        },
        {
          section_id: 'why_us',
          section_name: 'Why Engineering Leaders Choose Us',
          section_order: 10,
          content_json: {
            title: "Why Engineering Leaders Choose SkillMetrics",
            subtitle: "Built specifically to eliminate engineering interview friction, reduce bad hires, and maximize developer productivity across your engineering organization.",
            image: "/skillmetrics.png"
          }
        },
        {
          section_id: 'roi',
          section_name: 'Annual Savings & ROI',
          section_order: 11,
          content_json: {
            title: "Save Up To $1M+ In Annual Engineering & Hiring Costs",
            subtitle: "By automating technical candidate screening, eliminating mis-hires, and reclaiming developer interview hours, SkillMetrics delivers measurable enterprise savings from Month 1."
          }
        },
        {
          section_id: 'stats',
          section_name: 'Key Statistics',
          section_order: 12,
          content_json: {
            stat1Value: "1 Lakh+",
            stat1Label: "Skilled Up",
            stat2Value: "50+",
            stat2Label: "Organizations",
            stat3Value: "50,000+",
            stat3Label: "Reskilled"
          }
        },
        {
          section_id: 'testimonials',
          section_name: 'Client Testimonials Header',
          section_order: 13,
          content_json: {
            title: "What Our Clients Say",
            subtitle: "Trusted by CTOs, VPs of Engineering, and HR Leaders at leading tech enterprises."
          }
        }
      ];

      for (const s of homeSections) {
        await sql`
          INSERT INTO page_content (page_slug, page_name, section_id, section_name, section_order, content_json)
          VALUES ('home', 'Home Page', ${s.section_id}, ${s.section_name}, ${s.section_order}, ${JSON.stringify(s.content_json)}::jsonb)
          ON CONFLICT (page_slug, section_id) DO UPDATE SET content_json = EXCLUDED.content_json;
        `;
      }
      console.log("✓ Seeded default home page_content sections");
    }

    // Seeding: Site Settings
    const settingsCount = await sql`SELECT count(*) FROM site_settings;`;
    if (parseInt(settingsCount[0].count) === 0) {
      await sql`
        INSERT INTO site_settings (
          id, hero_title, hero_subtitle, hero_cta_text, features_title, features_subtitle,
          card1_image, card2_image, card3_image, card4_image, card5_image,
          capabilities_title, capabilities_subtitle, comparison_title, comparison_subtitle,
          why_us_title, why_us_subtitle, roi_title, roi_subtitle,
          stat1_value, stat1_label, stat2_value, stat2_label, stat3_value, stat3_label,
          testimonials_title, testimonials_subtitle, banner_enabled, banner_text, banner_link,
          calendly_url, meta_title, meta_description
        ) VALUES (
          1,
          'India''s #1 Skill Management Software',
          'Automate workforce skill matrices, benchmark role competencies, and evaluate developer capabilities 3x faster with objective AI assessments.',
          'Book a Demo',
          'Everything Your Engineering Org Needs to Scale Talent',
          'Scroll to explore how SkillMetrics automates technical evaluations, eliminates skill blind spots, and accelerates workforce capability.',
          '/skillmetrics.png', '/emp.jpg', '/ai_asses.png', '/multi-skilling.png', '/compentancy-mapping.jpg',
          'Core Platform Capabilities',
          'Purpose-built tools designed for technical recruiters, hiring managers, and enterprise engineering leads.',
          'Legacy Excel Spreadsheets vs. SkillMetrics Intelligence',
          'Drag the interactive slider below to see how error-prone manual spreadsheets compare to automated, real-time AI skill matrix tracking.',
          'Why Engineering Leaders Choose SkillMetrics',
          'Built specifically to eliminate engineering interview friction, reduce bad hires, and maximize developer productivity across your engineering organization.',
          'Save Up To $1M+ In Annual Engineering & Hiring Costs',
          'By automating technical candidate screening, eliminating mis-hires, and reclaiming developer interview hours, SkillMetrics delivers measurable enterprise savings from Month 1.',
          '1 Lakh+', 'Skilled Up', '50+', 'Organizations', '50,000+', 'Reskilled',
          'What Our Clients Say',
          'Trusted by CTOs, VPs of Engineering, and HR Leaders at leading tech enterprises.',
          false, '', '',
          'https://calendly.com/vivekkhairnar-dev/new-meeting',
          'Skill Management & Training | Competency-Based System',
          'Optimize competency and skill management to enhance workforce performance. Streamline development, skill matrices, training records, and developer capability tracking with SkillMetrics.'
        );
      `;
      console.log("✓ Seeded default site settings");
    }

    // Seeding: Contact Page Settings
    await sql`
      INSERT INTO contact_page_settings (
        id, hero_title, hero_subtitle, email,
        uk_office_label, uk_office_badge, uk_office_address, uk_office_phone,
        india_office_label, india_office_badge, india_office_address, india_office_phone1, india_office_phone2,
        operating_hours, sla_note, security_title, security_description,
        form_title, form_subtitle, success_message, success_description
      ) VALUES (
        1,
        'Enterprise Support, Demo & Contact Us',
        'Have questions about custom skill matrices, enterprise security, or biometric integrations? Talk to our specialists.',
        'info@skillmetrics.net',
        'UK Office',
        'Global HQ',
        'Flat-3, Farraline Court Strothers Lane, Inverness, IV11PN, UK',
        '+44 743 889 5016',
        'India Office',
        'R&D Center',
        '5th, 3rd floor, Sadashiv Motkari Complex, Sadashiv Nagar, Opp Sagar Sweets, Govind Nagar, Nashik – 422009',
        '+91 77200 86663',
        '+91 93731 33117',
        'Monday – Friday: 9:00 AM – 7:00 PM (IST / GMT)',
        '24/7 SLA Support for Enterprise Tier',
        'Enterprise Grade Security & Audits',
        'ISO 27001 & SOC-2 Type II certified. All competency assessments & biometric data encrypted via AES-256 with optional dedicated VPC deployment.',
        'Send Us a Message',
        'Fill out the details below and we''ll get back to you immediately.',
        'Message Sent Successfully!',
        'Thank you for reaching out. Our enterprise specialist will contact you at your email address within 2 hours.'
      )
      ON CONFLICT (id) DO UPDATE SET
        hero_title = EXCLUDED.hero_title,
        hero_subtitle = EXCLUDED.hero_subtitle,
        email = EXCLUDED.email,
        uk_office_label = EXCLUDED.uk_office_label,
        uk_office_badge = EXCLUDED.uk_office_badge,
        uk_office_address = EXCLUDED.uk_office_address,
        uk_office_phone = EXCLUDED.uk_office_phone,
        india_office_label = EXCLUDED.india_office_label,
        india_office_badge = EXCLUDED.india_office_badge,
        india_office_address = EXCLUDED.india_office_address,
        india_office_phone1 = EXCLUDED.india_office_phone1,
        india_office_phone2 = EXCLUDED.india_office_phone2,
        operating_hours = EXCLUDED.operating_hours,
        sla_note = EXCLUDED.sla_note,
        security_title = EXCLUDED.security_title,
        security_description = EXCLUDED.security_description,
        form_title = EXCLUDED.form_title,
        form_subtitle = EXCLUDED.form_subtitle,
        success_message = EXCLUDED.success_message,
        success_description = EXCLUDED.success_description;
    `;
    console.log("✓ Seeded default contact page settings");

    // Seeding: Sample Blog Posts
    const postsCount = await sql`SELECT count(*) FROM posts;`;
    if (parseInt(postsCount[0].count) === 0) {
      await sql`
        INSERT INTO posts (
          title, slug, excerpt, main_image, reading_time, category, author_name, author_role, content
        ) VALUES 
        (
          'Automating Skill Matrices for ISO 27001 Audits',
          'automating-skill-matrices-iso-audits',
          'How engineering organizations can transition from error-prone Excel files to dynamic, verified competency databases to simplify compliance audits.',
          '/skillmetrics.png',
          '6 min read',
          'Compliance & Audits',
          'Vivek Khairnar',
          'Lead Talent Architect',
          '### Introduction\n\nCompliance audits are a necessity for modern enterprise engineering organizations. Keeping training records and skill matrices updated is a key part of ISO 27001 compliance. However, doing this with spreadsheets is incredibly difficult.\n\n### The Problem with Excel\n\nManual spreadsheets quickly get out of date, lack validation, and don''t provide an audit trail. Auditor checks often fail when spreadsheets don''t match reality.\n\n### Transitioning to Automated Platforms\n\nUsing a unified database like SkillMetrics solves these compliance challenges by providing:\n1. Real-time updates\n2. Verifiable assessment logs\n3. Immutable history logs for auditors.\n\nReady to automate? Contact our solutions engineering team today!'
        ),
        (
          'Competency Mapping in the Age of Generative AI',
          'competency-mapping-generative-ai',
          'Why the traditional software engineer skill definitions are changing, and how CTOs should rebuild their development frameworks.',
          '/ai_asses.png',
          '8 min read',
          'Workforce AI',
          'SkillMetrics Editorial',
          'Industry Research',
          '### The AI Shift\n\nGenerative AI has shifted the responsibilities of software engineers. Traditional skills like pure syntax generation are being superseded by system design, prompt engineering, and debugging skills.\n\n### Re-mapping Competencies\n\nCTOs must rebuild their development competency frameworks to emphasize:\n- AI Tool integration proficiency\n- Code verification and unit testing\n- System scalability architecture\n\nIntegrating AI assessments is critical to mapping these new skills.'
        );
      `;
      console.log("✓ Seeded default blog posts");
    }

    // Seeding: Sample Case Studies
    const caseStudiesCount = await sql`SELECT count(*) FROM case_studies;`;
    if (parseInt(caseStudiesCount[0].count) === 0) {
      await sql`
        INSERT INTO case_studies (
          title, slug, company_name, company_logo, industry, excerpt, cover_image, challenge, solution,
          results, testimonial_quote, testimonial_author, testimonial_role, content
        ) VALUES (
          'FinTech Leader Automates Developer Assessments',
          'fintech-leader-automates-assessments',
          'PayGlobe Inc',
          '/logo-3.png',
          'Financial Services',
          'How a tier-1 fintech provider reduced candidate screening time by 75% and reclaimed thousands of developer interview hours.',
          '/emp.jpg',
          'PayGlobe was struggling with high candidate dropout rates and spending 30+ hours of senior developer time per week on manual interviews.',
          'They integrated SkillMetrics AI screening workflows to automatically evaluate candidate programming proficiency and system design competence.',
          '[{"metric": "75%", "label": "Time Saved"}, {"metric": "100%", "label": "Objective Grading"}]'::jsonb,
          'SkillMetrics has completely revolutionized how we hire developers. We saved hundreds of thousands of dollars in engineering hours.',
          'Sanjay Kumar',
          'VP of Engineering',
          '### The Challenge\n\nPayGlobe needed to hire 100+ software engineers while maintaining high quality and keeping engineering costs low.\n\n### The Solution\n\nBy replacing manual initial screens with SkillMetrics, the hiring team could identify top-tier talent automatically.\n\n### The Results\n\n- 75% reduction in time-to-hire\n- Improved quality of hires\n- Boosted developer morale by reducing interview load.'
        );
      `;
      console.log("✓ Seeded default case studies");
    }

    // Seeding: Sample Resources
    const resourcesCount = await sql`SELECT count(*) FROM resources;`;
    if (parseInt(resourcesCount[0].count) === 0) {
      await sql`
        INSERT INTO resources (
          title, slug, category, badge, read_time, summary, image, author, author_role,
          key_takeaways, content
        ) VALUES (
          'The Enterprise Guide to Competency Frameworks',
          'enterprise-guide-competency-frameworks',
          'Whitepapers',
          'Featured Guide',
          '15 min read',
          'A comprehensive whitepaper outlining how to define, structure, and scale technical competency frameworks in enterprise settings.',
          '/compentancy-mapping.jpg',
          'SkillMetrics Research Group',
          'Talent Strategy & Architecture',
          '["Learn to align HR and Engineering objectives", "Step-by-step competency mapping blueprint", "How to design career progression paths"]'::jsonb,
          '### Rebuilding Competency Frameworks\n\nThis guide outlines industry-proven frameworks to align your talent requirements with actual developer skills. Read the full PDF download or check out our interactive models inside the platform.'
        );
      `;
      console.log("✓ Seeded default resources");
    }

    console.log("Database tables initialized and seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Database setup failed:", error);
    process.exit(1);
  }
}

setup();
