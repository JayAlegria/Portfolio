export interface WorkflowStep {
  label: string;
  subtext: string;
  icon: 'webhook' | 'database' | 'ai' | 'slack' | 'calendar' | 'email' | 'timer' | 'check' | 'tickets' | 'update' | 'document' | 'bot' | 'detective' | 'analytics' | 'editFile' | 'telegram'
}

export interface Workflow {
  title: string;
  steps: WorkflowStep[];
}

export interface Project {
  id: string;
  indexStr: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  problem: string;
  techStack: string[];
  keyFeatures: string[];
  outcomes: string[];
  workflows: Workflow[];
}
export const projectsData: Project[] = [
  {
    id: 'resume-enhancer',
    indexStr: '1 / 3',
    title: 'Resume Enhancer',
    subtitle: 'AI-Powered Resume Optimization Engine',
    category: 'AI Automation / HR Technology',
    summary: "An AI-powered resume enhancement automation that analyzes a candidate's resume against a target job description, identifies skill and experience gaps, and generates tailored recommendations to improve alignment. The system optimizes resume content, highlights relevant qualifications, and increases the likelihood of passing applicant tracking systems (ATS) and attracting recruiter attention.",
    problem: 'Job seekers often submit generic resumes that fail to align with specific job requirements, resulting in poor ATS scores, missed keyword matches, and reduced interview opportunities. Manual resume tailoring is time-consuming and inconsistent, creating inefficiencies in the job application process.',
    techStack: [
      'n8n',
      'Google Vertex AI',
      'Gemini 2.5 Pro',
      'Airtable',
      'Telegram',
      'GitHub API'
    ],
    keyFeatures: [
      'AI-powered resume and job description analysis',
      'Job description compatibility scoring',
      'Skill gap and keyword matching',
      'Automated resume enhancement',
      'Strengths and weaknesses assessment',
      'Cover letter builder'
    ],
    outcomes: [
      'Reduced manual resume tailoring time by up to 90%',
      'Improved ATS compatibility through keyword optimization',
      'Identified missing skills and experience gaps automatically',
      'Automated the end-to-end resume optimization workflow'
    ],
    workflows: [
      {
        title: 'Resume Analysis Workflow',
        steps: [
          {
            label: 'Telegram Bot',
            subtext: 'Sends the job descriptions',
            icon: 'bot'
          },
          {
            label: 'Document Inputs',
            subtext: 'Captures job details and resume',
            icon: 'document'
          },
          {
            label: 'AI Parsing Engine',
            subtext: 'Extracts skills, experience, and keywords',
            icon: 'ai'
          },
          {
            label: 'ATS Matching',
            subtext: 'Calculates resume-job alignment score',
            icon: 'check'
          },
          {
            label: 'Gap Analysis',
            subtext: 'Identifies missing skills and keywords',
            icon: 'analytics'
          }
        ]
      },
      {
        title: 'Resume Enhancement Workflow',
        steps: [
          {
            label: 'AI Recommendation Engine',
            subtext: 'Generates tailored improvements',
            icon: 'ai'
          },
          {
            label: 'Content Optimization',
            subtext: 'Enhances resume sections and wording',
            icon: 'document'
          },
          {
            label: 'Professional Summary Generator',
            subtext: 'Creates role-specific summary',
            icon: 'check'
          },
          {
            label: 'ATS Optimization',
            subtext: 'Improves keyword relevance',
            icon: 'editFile'
          }
        ]
      },
      {
        title: 'Report Delivery Workflow',
        steps: [
          {
            label: 'Score Compilation',
            subtext: 'Aggregates analysis results',
            icon: 'analytics'
          },
          {
            label: 'Report Generation',
            subtext: 'Creates detailed enhancement report',
            icon: 'editFile'
          },
          {
            label: 'Telegram Notification',
            subtext: 'Delivers results instantly',
            icon: 'telegram'
          }
        ]
      }
    ]
  },
  {
    id: 'isp-assistant',
    indexStr: '2 / 3',
    title: 'ISP Management Assistant',
    subtitle: 'AI-Powered ISP Operations Automator',
    category: 'AI Automation / Operations',
    summary: 'An AI-powered ISP operations assistant that automates payment verification, customer support ticketing, and billing reminder workflows.',
    problem: 'Manual verification of digital payment screenshots led to severe processing backlogs. Simultaneously, high customer support tickets and missed payment deadlines stretched operations thin, resulting in revenue leakage and long query waiting times.',
    techStack: ['n8n', 'Google Vertex', 'Gemini Flash 2.5', 'Supabase', 'Google Sheets API', 'Facebook Webhook API', 'Gmail API', 'Telegram API'],
    keyFeatures: [
      'Automated receipt parsing & OCR matching',
      'Real-time fraud & duplicate transaction checks',
      'Intelligent support message classification',
      'Automated billing reminders'
    ],
    outcomes: [
      'Reduced payment verification turnaround by 92%',
      'Handled 74% of common support inquiries without human agent intervention',
      'Slashed late payments by 35% through proactive automated billing nudges',
      'Automated billing notifications'
    ],
    workflows: [
      {
        title: 'Payment Verification Workflow',
        steps: [
          { label: 'Facebook Webhook', subtext: 'Triggers on user message', icon: 'webhook' },
          { label: 'Database Lookup', subtext: 'Verifies customer profile', icon: 'database' },
          { label: 'AI Receipt Parsing', subtext: 'OCR extracts payment details', icon: 'ai' },
          { label: 'Fraud Detection', subtext: 'Validates reference number', icon: 'check' },
          { label: 'System Update', subtext: 'Syncs to Database & Sheets', icon: 'update' }
        ]
      },
      {
        title: 'Customer Support Management',
        steps: [
          { label: 'Facebook Webhook', subtext: 'Triggers on incoming message', icon: 'webhook' },
          { label: 'AI Agent Brain', subtext: 'Analyzes intent & sentiment', icon: 'ai' },
          { label: 'Inquiry Classification', subtext: 'Categorizes inquiry type', icon: 'check' },
          { label: 'Auto-Ticketing', subtext: 'Saves logged ticket to Sheets/DB', icon: 'tickets' }
        ]
      },
      {
        title: 'Billing Reminder Automation',
        steps: [
          { label: 'Scheduled Cron', subtext: 'Daily execution cycle', icon: 'timer' },
          { label: 'Billing Scanner', subtext: 'Queries upcoming due dates', icon: 'check' },
          { label: 'Auto Email Generator', subtext: 'Crafts custom alert with payment links', icon: 'email' }
        ]
      }
    ]
  },
  {
    id: 'recruitment-assistant',
    indexStr: '3 / 3',
    title: 'AI Recruitment Assistant',
    subtitle: 'End-to-End Recruitment Pipeline Automation',
    category: 'AI Automation / HR Tech',
    summary: 'An end-to-end AI recruitment automation platform that screens candidates, evaluates resumes, assists recruiters, and automates interview scheduling.',
    problem: 'HR teams were bogged down filtering hundreds of unqualified resumes per job posting, causing high latency in reaching peak candidates and causing top-tier talent to drop out due to slow feedback loops.',
    techStack: ['n8n', 'Google Vertex', 'Gemini Flash 2.5', 'Slack API', 'Calendly API', 'Google Sheet'],
    keyFeatures: [
      'Advanced semantic resume parsing & scoring',
      'Automated Slack recruiter workspace alerts',
      'Adaptive candidate pathing & screening feedback',
      'Instant self-serve interview slot bookings'
    ],
    outcomes: [
      'Reduced average screening times from 6 days to under 4 minutes',
      'Decreased interview scheduling drop-offs',
      'Maintained consistent evaluation framework across countless test resumes'
    ],
    workflows: [
      {
        title: 'Candidate Screening Flow',
        steps: [
          { label: 'Form Submission', subtext: 'Applicant uploads resume', icon: 'webhook' },
          { label: 'AI Resume Analysis', subtext: 'Compares resume details to JD requirements', icon: 'ai' },
          { label: 'System Alerts', subtext: 'Notifies applicant & Slack recruiter channel', icon: 'slack' }
        ]
      },
      {
        title: 'Interview Qualification Flow',
        steps: [
          { label: 'Sheets DB Trigger', subtext: 'Monitors candidate updates', icon: 'database' },
          { label: 'Assess Criteria', subtext: 'Checks AI screening grades', icon: 'check' },
          { label: 'Dynamic Branching', subtext: 'Passed? Calendly Link | Failed? Soft Rejection Email', icon: 'calendar' }
        ]
      }
    ],
  },
];