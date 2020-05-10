import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvHomeComponent } from './cv-home/cv-home.component';
import { CvIntroductionComponent } from './cv-introduction/cv-introduction.component';
import { CvExperienceComponent } from './cv-experience/cv-experience.component';
import { CvStudiesComponent } from './cv-studies/cv-studies.component';
import { CvSkillsComponent } from './cv-skills/cv-skills.component';
import { CvServicesComponent } from './cv-services/cv-services.component';
import { CvPortfolioComponent } from './cv-portfolio/cv-portfolio.component';


const routes: Routes = [
  {path: 'cv', component: CvHomeComponent,
    children: [
      {path: '', redirectTo: 'introduction', pathMatch: 'full', data: { num: 1 }},
      {path: 'introduction', component: CvIntroductionComponent, data: { num: 1 }},
      {path: 'experience', component: CvExperienceComponent, data: { num: 3 }},
      {path: 'studies', component: CvStudiesComponent, data: { num: 2 }},
      {path: 'skills', component: CvSkillsComponent, data: { num: 4 }},
      {path: 'services', component: CvServicesComponent, data: { num: 5 }},
      {path: 'portfolio', component: CvPortfolioComponent, data: { num: 6 }}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvRoutingModule { }
