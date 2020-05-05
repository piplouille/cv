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
      {path: '', redirectTo: 'introduction', pathMatch: 'full'},
      {path: 'introduction', component: CvIntroductionComponent},
      {path: 'experience', component: CvExperienceComponent},
      {path: 'studies', component: CvStudiesComponent},
      {path: 'skills', component: CvSkillsComponent},
      {path: 'services', component: CvServicesComponent},
      {path: 'portfolio', component: CvPortfolioComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvRoutingModule { }
