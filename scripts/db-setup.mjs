import { neon, neonConfig } from "@neondatabase/serverless";
import fs from "fs";
import path from "path";

// Force the driver to use HTTP fetch instead of WebSockets/TCP
neonConfig.poolQueryViaFetch = true;

// Read .env.local manually to get DATABASE_URL
const envPath = path.resolve(".env.local");
let databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl && fs.existsSync(envPath)) {
  const envFileContent = fs.readFileSync(envPath, "utf-8");
  const match = envFileContent.match(/DATABASE_URL=["']?([^"'\s]+)["']?/);
  if (match) {
    databaseUrl = match[1];
  }
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
        seo_description TEXT
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
        seo_description TEXT
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
        meta_description TEXT
      );
    `;
    console.log("✓ 'site_settings' table created or exists");

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
    const contactSettingsCount = await sql`SELECT count(*) FROM contact_page_settings;`;
    if (parseInt(contactSettingsCount[0].count) === 0) {
      await sql`
        INSERT INTO contact_page_settings (
          id, hero_title, hero_subtitle, email,
          uk_office_label, uk_office_badge, uk_office_address, uk_office_phone,
          india_office_label, india_office_badge, india_office_address, india_office_phone1, india_office_phone2,
          operating_hours, sla_note, security_title, security_description,
          form_title, form_subtitle, success_message, success_description
        ) VALUES (
          1,
          'Connect with Our Competency Experts',
          'Have questions about enterprise licensing, ISO audit compliance, custom role mapping, or integrations? We are here to help.',
          'hello@skillmetrics.io',
          'UK Headquarters', 'Corporate Licensing', 'SkillMetrics Ltd, 128 City Road, London, EC1V 2NX, United Kingdom', '+44 20 7946 0192',
          'R&D and Delivery Center', 'India HQ', 'SkillMetrics Tech India, 4th Floor, Sector 62, Noida, UP 201301, India', '+91 120 496 0192', '+91 98765 43210',
          'Monday – Friday, 9:30 AM – 6:30 PM IST (GMT+5:30)',
          'Our technical support team typically responds to all enterprise queries within 2 hours during operational windows.',
          'Enterprise Grade Data Privacy & Security',
          'SkillMetrics complies with GDPR, SOC2 Type II (in progress), and ISO 27001 standards. All client sandbox environments are fully isolated with AES-256 database encryption at rest.',
          'Send us a message',
          'Fill out the form below, and our solutions architects will reach out shortly.',
          'Submission Successful!',
          'Thank you for reaching out. A SkillMetrics enterprise specialist will contact you shortly.'
        );
      `;
      console.log("✓ Seeded default contact page settings");
    }

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
