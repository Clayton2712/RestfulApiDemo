import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialListComponent } from './components/tutorial-list/tutorial-list.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';

const routes: Routes = [ { path: 'tutorials-list', component: TutorialListComponent },
{ path: 'add-tutorial', component: AddTutorialComponent }, 
{ path: 'tutorial-detail', component: TutorialDetailsComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
