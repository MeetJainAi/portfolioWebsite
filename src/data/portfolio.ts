export type FocusId = "all" | "deploy" | "cloud" | "proof";

export const profile = {
  name: "Meet Shah",
  role: "Cloud and ML engineer",
  bio: "As a Cloud and ML Engineer, I specialize in developing and deploying machine learning models at scale. My expertise spans across major cloud platforms, with a particular focus on AWS, where I've architected and implemented numerous ML solutions.",
  links: [
    { label: "GitHub", href: "https://github.com/MeetJainAi" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/meetjain/" },
    {
      label: "Resume",
      href: "https://drive.google.com/file/d/1tMkqxzBMk9JHjbAPQy74RIwIEspEG7n4/view?usp=sharing",
    },
  ],
  stats: [
    { value: "10+", label: "Models deployed" },
    { value: "500k+", label: "Data points processed" },
    { value: "99.5%", label: "Uptime maintained" },
  ],
};

export const prompts: Record<FocusId, string> = {
  all: "Ask the work.",
  deploy: "Deploy a model that stays up.",
  cloud: "Run one system across three clouds.",
  proof: "Show the credentials behind the work.",
};

export const chips: { id: Exclude<FocusId, "all">; label: string; target: string }[] = [
  { id: "deploy", label: "deploy models", target: "project-deploy" },
  { id: "cloud", label: "multi-cloud", target: "project-cloud" },
  { id: "proof", label: "proof", target: "proof" },
];

export const rail = [
  { id: "signal", index: "00", label: "Top" },
  { id: "work", index: "01", label: "Work" },
  { id: "stack", index: "02", label: "Stack" },
  { id: "proof", index: "03", label: "Proof" },
  { id: "contact", index: "04", label: "Contact" },
];

export type Project = {
  id: string;
  focus: Exclude<FocusId, "all" | "proof">;
  index: string;
  title: string;
  problem: string;
  techStack: string[];
  githubUrl: string;
  metrics: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    id: "project-deploy",
    focus: "deploy",
    index: "01",
    title: "ML Model Deployment Pipeline",
    problem:
      "Automated MLOps pipeline for deploying and monitoring machine learning models at scale using AWS SageMaker and MLflow.",
    techStack: ["AWS", "Python", "MLflow", "Docker", "GitHub Actions"],
    githubUrl: "https://github.com/yourusername/mlops-pipeline",
    metrics: [
      { label: "Deployment time", value: "↓60%" },
      { label: "Model performance", value: "↑25%" },
    ],
  },
  {
    id: "project-cloud",
    focus: "cloud",
    index: "02",
    title: "Multi-Cloud Orchestration",
    problem:
      "Cloud-agnostic infrastructure management system using Terraform and Kubernetes across AWS, Azure, and GCP.",
    techStack: ["Terraform", "Kubernetes", "Python", "Go"],
    githubUrl: "https://github.com/yourusername/cloud-orchestration",
    metrics: [
      { label: "Resource utilization", value: "↑40%" },
      { label: "Cost reduction", value: "↓35%" },
    ],
  },
];

export const skillGroups: { id: string; label: string; skills: { name: string; level: number }[] }[] = [
  {
    id: "ml",
    label: "ML",
    skills: [
      { name: "TensorFlow", level: 90 },
      { name: "PyTorch", level: 85 },
      { name: "Scikit-learn", level: 95 },
      { name: "OpenCV", level: 80 },
      { name: "Keras", level: 85 },
      { name: "MLflow", level: 88 },
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    skills: [
      { name: "AWS", level: 92 },
      { name: "Azure", level: 85 },
      { name: "GCP", level: 80 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "Terraform", level: 88 },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    skills: [
      { name: "Jenkins", level: 85 },
      { name: "GitHub Actions", level: 90 },
      { name: "Ansible", level: 82 },
      { name: "GitLab CI", level: 85 },
      { name: "ArgoCD", level: 80 },
    ],
  },
  {
    id: "data",
    label: "Data",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 88 },
      { name: "Redis", level: 85 },
      { name: "Cassandra", level: 80 },
      { name: "MySQL", level: 92 },
    ],
  },
];

export type Certification = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skills: string[];
};

export const certifications: Certification[] = [
  {
    id: 1,
    title: "AWS Machine Learning Engineer Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialUrl: "https://www.credly.com/badges/fa28db1e-b8d3-485c-b22c-7c75840fd435/public_url",
    skills: ["Machine Learning", "AWS SageMaker", "MLOps"],
  },
  {
    id: 2,
    title: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    date: "2023",
    credentialUrl: "https://www.credly.com/badges/431aa5ed-a495-41da-b341-22a956d652d3",
    skills: ["Infrastructure as Code", "Cloud Architecture", "DevOps"],
  },
  {
    id: 3,
    title: "Oracle Generative AI Professional",
    issuer: "Oracle",
    date: "2024",
    skills: ["Generative AI", "LLMs", "AI Applications"],
  },
  {
    id: 4,
    title: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialUrl: "https://www.credly.com/badges/be497759-e794-4ed1-b6a1-1f0b80a77d98/public_url",
    skills: ["Cloud Architecture", "AWS Services", "System Design"],
  },
];
