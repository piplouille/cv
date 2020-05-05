import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvRoutingModule } from './cv-routing.module';
import { CvHomeComponent } from './cv-home/cv-home.component';
import { CvIntroductionComponent } from './cv-introduction/cv-introduction.component';
import { CvExperienceComponent } from './cv-experience/cv-experience.component';
import { CvStudiesComponent } from './cv-studies/cv-studies.component';
import { CvSkillsComponent } from './cv-skills/cv-skills.component';
import { CvServicesComponent } from './cv-services/cv-services.component';
import { CvPortfolioComponent } from './cv-portfolio/cv-portfolio.component';


@NgModule({
  declarations: [CvHomeComponent, CvIntroductionComponent, CvExperienceComponent, CvStudiesComponent, CvSkillsComponent, CvServicesComponent, CvPortfolioComponent],
  imports: [
    CommonModule,
    CvRoutingModule
  ]
})
export class CvModule { }
