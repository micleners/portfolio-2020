import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { TalksComponent } from './talks/talks.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'talks', component: TalksComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
