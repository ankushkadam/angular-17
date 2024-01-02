import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./stand-alone/user/user.component').then(u => u.UserComponent)
  },
  {
    path: 'if-else',
    loadComponent: () => import('./control-flow/if-else/if-else.component').then(u => u.IfElseComponent)
  },
  {
    path: 'switch-case',
    loadComponent: () => import('./control-flow/switch-case/switch-case.component').then(u => u.SwitchCaseComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
