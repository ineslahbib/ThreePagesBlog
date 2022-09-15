import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
    children: [
      {
        path: 'list',
        component: BlogListComponent,
      },
      {
        path: 'createComponent',
        component: BlogFormComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
