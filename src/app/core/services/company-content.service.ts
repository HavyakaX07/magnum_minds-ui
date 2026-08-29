import { Injectable } from '@angular/core';
import { CompanyProfile } from '../models/company.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyContentService {
  getProfile(): CompanyProfile {
    return {
      heroTitle: 'Magnum Minds AI Solutions Dashboard',
      heroSubtitle:
        'Designing and delivering enterprise AI products that improve efficiency, intelligence, and customer outcomes.',
      services: [
        {
          id: 'strategy',
          title: 'AI Strategy and Advisory',
          description:
            'Roadmaps, use-case prioritization, and measurable AI operating models aligned to business goals.',
          highlights: ['Use-case discovery', 'ROI modeling', 'Governance and risk controls'],
          imageUrl:
            'https://picsum.photos/seed/mm-service-strategy/1200/800',
        },
        {
          id: 'genai',
          title: 'Generative AI Product Development',
          description:
            'Production-grade copilots, chat experiences, and workflow automation with secure enterprise patterns.',
          highlights: ['Agentic workflows', 'RAG architecture', 'Responsible AI guardrails'],
          imageUrl:
            'https://picsum.photos/seed/mm-service-genai/1200/800',
        },
        {
          id: 'data',
          title: 'Data Engineering for AI',
          description:
            'Reliable data platforms and pipelines that feed analytics, ML, and realtime AI decisions.',
          highlights: ['Modern data stack', 'Data quality pipelines', 'Realtime event processing'],
          imageUrl:
            'https://picsum.photos/seed/mm-service-data/1200/800',
        },
        {
          id: 'mlops',
          title: 'MLOps and Continuous Optimization',
          description:
            'Model lifecycle operations, observability, and deployment automation for stable AI at scale.',
          highlights: ['CI/CD for models', 'Monitoring and drift alerts', 'A/B experimentation'],
          imageUrl:
            'https://picsum.photos/seed/mm-service-mlops/1200/800',
        },
      ],
      achievements: [
        {
          metric: '120+',
          label: 'AI and Data Programs Delivered',
          context: 'Across finance, healthcare, retail, and manufacturing.',
        },
        {
          metric: '37%',
          label: 'Average Process Efficiency Gain',
          context: 'Measured post go-live for automation-first projects.',
        },
        {
          metric: '99.95%',
          label: 'Solution Availability Target',
          context: 'For production-critical customer platforms.',
        },
        {
          metric: '4.8/5',
          label: 'Client Satisfaction Rating',
          context: 'Based on quarterly stakeholder feedback reports.',
        },
      ],
      clients: [
        {
          name: 'HelioBank Group',
          sector: 'Financial Services',
          logoUrl:
            'https://picsum.photos/seed/mm-client-helio/640/420',
        },
        {
          name: 'Northstar Health Network',
          sector: 'Healthcare',
          logoUrl:
            'https://picsum.photos/seed/mm-client-northstar/640/420',
        },
        {
          name: 'Orbit Retail Systems',
          sector: 'Retail and eCommerce',
          logoUrl:
            'https://picsum.photos/seed/mm-client-orbit/640/420',
        },
        {
          name: 'Titan Forge Manufacturing',
          sector: 'Industrial and Manufacturing',
          logoUrl:
            'https://picsum.photos/seed/mm-client-titan/640/420',
        },
        {
          name: 'Skyline Logistics',
          sector: 'Supply Chain',
          logoUrl:
            'https://picsum.photos/seed/mm-client-skyline/640/420',
        },
      ],
      projects: [
        {
          title: 'Intelligent Claims Co-Pilot',
          client: 'HelioBank Group',
          challenge:
            'Manual claim triage caused delayed resolutions and inconsistent policy interpretation.',
          solution:
            'Built a multimodal GenAI co-pilot that summarizes evidence, suggests next actions, and flags policy gaps.',
          impact: 'Reduced claim cycle time by 41% and improved first-pass accuracy by 29%.',
          imageUrl:
            'https://picsum.photos/seed/mm-project-claims/1200/800',
        },
        {
          title: 'Clinical Documentation Intelligence',
          client: 'Northstar Health Network',
          challenge:
            'Clinicians spent excessive time on notes and coding quality varied across departments.',
          solution:
            'Implemented speech-to-structured-note pipeline with coding recommendations and confidence indicators.',
          impact: 'Saved 7.5 hours per clinician weekly and improved coding completeness by 22%.',
          imageUrl:
            'https://picsum.photos/seed/mm-project-clinical/1200/800',
        },
        {
          title: 'Realtime Demand Forecast Platform',
          client: 'Orbit Retail Systems',
          challenge:
            'Inventory mismatch due to delayed forecasting updates across regions.',
          solution:
            'Delivered event-driven demand forecasting with model retraining and scenario simulation dashboards.',
          impact: 'Lowered stockout incidents by 33% and reduced excess inventory carrying costs by 18%.',
          imageUrl:
            'https://picsum.photos/seed/mm-project-forecast/1200/800',
        },
      ],
    };
  }
}
