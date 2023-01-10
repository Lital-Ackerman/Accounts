import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOperationComponent } from './components/add-operation/add-operation.component';
import { DisplayOperationsComponent } from './components/display-operations/display-operations.component';

const routes: Routes = [
{
  path: "displayOperations",
  component: DisplayOperationsComponent
},
{
  path: "addOperation",
  component: AddOperationComponent
},
{
  path: '',
  redirectTo: 'displayOperations',
  pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
