import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CompanyContentService } from '../../../../core/services/company-content.service';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
})
export class DashboardPageComponent {
  private readonly contentService = inject(CompanyContentService);

  protected readonly profile = this.contentService.getProfile();

  private readonly imageFallbackMap: Record<'service' | 'client' | 'project', string> = {
    service: 'assets/placeholders/service-placeholder.svg',
    client: 'assets/placeholders/client-placeholder.svg',
    project: 'assets/placeholders/project-placeholder.svg',
  };

  protected setFallbackImage(event: Event, type: 'service' | 'client' | 'project'): void {
    const imageElement = event.target as HTMLImageElement | null;
    if (!imageElement || imageElement.dataset['fallbackApplied'] === 'true') {
      return;
    }

    imageElement.dataset['fallbackApplied'] = 'true';
    imageElement.src = this.imageFallbackMap[type];
  }
}
