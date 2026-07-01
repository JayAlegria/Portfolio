export interface WorkflowStep {
  label: string;
  subtext: string;
  icon: 'webhook' | 'database' | 'ai' | 'slack' | 'calendar' | 'email' | 'timer' | 'check' | 'tickets' | 'update';
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
    id: 'isp-assistant',
    indexStr: '1 / 2',
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
    indexStr: '2 / 2',
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