export const profile = {
  name: "Meet Shah",
  role: "Cloud & DevOps Engineer",
  location: "Toronto, ON",
  availability: "Open to hybrid, remote, and contract",
  residency: "Canadian Permanent Resident",
  email: "hire@meetshahdev.com",
  summary:
    "AWS-certified Cloud & DevOps Engineer with 3+ years across cloud infrastructure, automation, and software engineering, currently designing and operating AWS environments for client engagements.",
  agentLine:
    "Works with Claude Code and OpenAI Codex, and builds production RAG pipelines and AI agents on Amazon Bedrock.",
  links: [
    { label: "GitHub", href: "https://github.com/MeetJainAi" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/meetjain/" },
    { label: "Email", href: "mailto:hire@meetshahdev.com" },
    { label: "Resume", href: "/resume.pdf" },
  ],
};

export const stats = [
  { value: "<2h", label: "New environment, down from three days" },
  { value: "∼22%", label: "Client AWS spend reduced" },
  { value: "20+", label: "Workloads migrated on schedule" },
  { value: "12m", label: "Release, down from 45 minutes" },
];

export const rail = [
  { id: "signal", index: "00", label: "Signal" },
  { id: "record", index: "01", label: "Record" },
  { id: "systems", index: "02", label: "Systems" },
  { id: "stack", index: "03", label: "Stack" },
  { id: "proof", index: "04", label: "Proof" },
  { id: "contact", index: "05", label: "Contact" },
];

export const roles = [
  {
    org: "Arihant eSolutions Inc.",
    title: "Cloud Solution Architect",
    when: "Apr 2025 — Present",
    place: "Toronto, ON",
    points: [
      "Cut new client environment provisioning from three days of manual console work to under two hours with 15+ reusable Terraform modules, S3 remote state, DynamoDB locking, and per-environment workspaces.",
      "Delivered AWS architectures across 8+ client engagements, reviewed against the Well-Architected Framework.",
      "Migrated 20+ application workloads to AWS, with every cutover finished inside its maintenance window.",
      "Reduced release time from 45 minutes of manual steps to a 12-minute pipeline across Jenkins, GitHub Actions, and AWS CodePipeline.",
      "Reduced client monthly AWS spend by ∼22% and closed 30+ IAM, logging, and backup findings.",
    ],
  },
  {
    org: "Arihant eSolutions Inc.",
    title: "Cloud Support Engineer",
    when: "Oct 2024 — Mar 2025",
    place: "Toronto, ON",
    points: [
      "Resolved 200+ tickets across EC2, RDS, S3, VPC, and IAM within agreed response targets.",
      "Kept alert acknowledgement under 15 minutes during covered hours.",
      "Cut time on recurring requests by roughly 30% with Python and Bash automation, and wrote 10+ runbooks.",
    ],
  },
  {
    org: "Mobiuso",
    title: "Software Engineer",
    when: "Nov 2020 — Nov 2021",
    place: "Remote",
    points: [
      "Supported migration of 20+ on-premises workloads to AWS alongside a senior engineer.",
      "Built REST APIs in Python and Perl, and ETL that fed Tableau and Excel reports.",
    ],
  },
  {
    org: "Radixweb",
    title: "Software Engineer Intern",
    when: "May 2019 — Dec 2019",
    place: "Ahmedabad, India",
    points: [
      "Shipped backend features in Django, Flask, and Node.js, with REST APIs on PostgreSQL and MongoDB.",
    ],
  },
];

export const projects = [
  {
    id: "orin",
    index: "01",
    title: "orin.finance",
    kicker: "Cloud-native financial analytics",
    summary:
      "Production AWS footprint for a financial analytics platform: Terraform, GitHub Actions, and a Bedrock RAG pipeline that cites source filings.",
    points: [
      "Provisioned VPC, ECS Fargate, RDS PostgreSQL, Lambda, S3, and API Gateway in Terraform, with remote state in S3 and DynamoDB locking.",
      "Ingested SEC EDGAR and market data with rate limiting, retries, schema validation, and idempotent upserts.",
      "Built a RAG pipeline on Amazon Bedrock with LangChain and LangGraph so answers cite source documents.",
      "Routed models across providers by cost and latency, with fallback, per-request cost tracking, and tool calling over MCP.",
    ],
    stack: ["AWS", "Terraform", "Python", "PostgreSQL", "Bedrock", "LangGraph"],
    href: null as string | null,
  },
  {
    id: "autoresearch",
    index: "02",
    title: "Autoresearch Codex Plugin",
    kicker: "Agent skill for local research loops",
    summary:
      "A portable Codex plugin that bootstraps Karpathy-style autoresearch on a local machine, a VPS, or a small GPU.",
    points: [
      "Installs a Codex plugin and a skill that detects CPU, CUDA, or Apple Silicon, then overlays a portable training workspace.",
      "Verified on a Linux CPU VPS: install, runtime detection, uv sync, prepare, and a short train smoke run.",
      "CUDA and Apple Silicon paths are in the bootstrap and still need hardware-specific release tests.",
    ],
    stack: ["Python", "Codex", "uv"],
    href: "https://github.com/MeetJainAi/autoresearch-codex-plugin",
  },
  {
    id: "game",
    index: "03",
    title: "AWS Serverless Game",
    kicker: "Auth, scores, live leaderboard",
    summary:
      "A cloud-native game platform on AWS with user authentication, score tracking, and a real-time leaderboard.",
    points: [
      "Serverless architecture with a TypeScript frontend, built to show DevOps automation and a scalable backend.",
    ],
    stack: ["AWS", "TypeScript", "Serverless"],
    href: "https://github.com/MeetJainAi/AWS-SERVERLESS-GAME-DEMO",
  },
];

export const skillGroups: { id: string; label: string; skills: string[] }[] = [
  {
    id: "agents",
    label: "Agents",
    skills: ["Claude Code", "OpenAI Codex", "GitHub Copilot", "Amazon Bedrock", "LangGraph", "MCP", "RAG"],
  },
  {
    id: "cloud",
    label: "Cloud",
    skills: ["AWS", "EC2", "ECS", "EKS", "Lambda", "VPC", "RDS", "S3", "IAM"],
  },
  {
    id: "iac",
    label: "Infrastructure",
    skills: ["Terraform", "Terragrunt", "CloudFormation", "Ansible", "Helm"],
  },
  {
    id: "delivery",
    label: "Delivery",
    skills: ["GitHub Actions", "Jenkins", "GitLab CI", "CodePipeline", "ArgoCD", "Docker", "Kubernetes"],
  },
  {
    id: "reliability",
    label: "Reliability",
    skills: ["CloudWatch", "Prometheus", "Grafana", "Datadog", "Multi-AZ", "Disaster recovery"],
  },
  {
    id: "code",
    label: "Code & data",
    skills: ["Python", "boto3", "Bash", "SQL", "PostgreSQL", "MySQL"],
  },
];

export const ticker = [
  "Terraform",
  "ECS Fargate",
  "EKS",
  "GitHub Actions",
  "Bedrock",
  "LangGraph",
  "MCP",
  "Claude Code",
  "Codex",
  "CloudWatch",
  "RDS",
  "IAM",
];

export const certifications = [
  {
    id: "saa",
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    href: "https://www.credly.com/badges/be497759-e794-4ed1-b6a1-1f0b80a77d98/public_url",
  },
  {
    id: "dea",
    title: "AWS Certified Data Engineer – Associate",
    issuer: "Amazon Web Services",
    href: null as string | null,
  },
  {
    id: "mle",
    title: "AWS Certified Machine Learning Engineer – Associate",
    issuer: "Amazon Web Services",
    href: "https://www.credly.com/badges/fa28db1e-b8d3-485c-b22c-7c75840fd435/public_url",
  },
  {
    id: "tf",
    title: "HashiCorp Certified: Terraform Associate (003)",
    issuer: "HashiCorp",
    href: "https://www.credly.com/badges/431aa5ed-a495-41da-b341-22a956d652d3",
  },
  {
    id: "oracle",
    title: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    issuer: "Oracle",
    href: null as string | null,
  },
];

export const education = [
  {
    school: "Lambton College",
    credential: "Post-Graduate Diploma, Cloud Computing for Big Data",
    when: "2022 — 2024",
    place: "Toronto, ON",
  },
  {
    school: "Parul University",
    credential: "B.Tech., Computer Science and Engineering",
    when: "2016 — 2020",
    place: "India",
  },
];

export const replies: { keys: string[]; line: string; target: string }[] = [
  {
    keys: ["orin", "finance", "rag", "bedrock", "filing"],
    line: "orin.finance runs on Terraform and ECS. The RAG pipeline on Bedrock cites the source filing.",
    target: "systems",
  },
  {
    keys: ["codex", "autoresearch", "plugin", "claude"],
    line: "The Codex plugin bootstraps a local autoresearch loop. The Linux CPU path is verified.",
    target: "systems",
  },
  {
    keys: ["game", "serverless", "leaderboard"],
    line: "The serverless game demo is auth, scores, and a live leaderboard on AWS.",
    target: "systems",
  },
  {
    keys: ["terraform", "aws", "architect", "provision", "migrate"],
    line: "At Arihant, new environments went from three days to under two hours. Twenty-plus workloads moved on schedule.",
    target: "record",
  },
  {
    keys: ["cert", "proof", "badge", "associate"],
    line: "Three AWS Associate certifications, Terraform Associate, and Oracle Generative AI.",
    target: "proof",
  },
  {
    keys: ["contact", "email", "hire", "resume"],
    line: "hire@meetshahdev.com — Toronto, open to hybrid, remote, and contract.",
    target: "contact",
  },
  {
    keys: ["stack", "skill", "kubernetes", "python"],
    line: "Terraform, Kubernetes, GitHub Actions, Python, and agent tooling on Bedrock.",
    target: "stack",
  },
];
