export interface ServiceOffering {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  imageUrl: string;
}

export interface Achievement {
  metric: string;
  label: string;
  context: string;
}

export interface Client {
  name: string;
  sector: string;
  logoUrl: string;
}

export interface ProjectCaseStudy {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  impact: string;
  imageUrl: string;
}

export interface CompanyProfile {
  heroTitle: string;
  heroSubtitle: string;
  services: ServiceOffering[];
  achievements: Achievement[];
  clients: Client[];
  projects: ProjectCaseStudy[];
}
