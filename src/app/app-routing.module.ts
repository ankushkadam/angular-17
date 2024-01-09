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
  },
  {
    path: 'for',
    loadComponent: () => import('./control-flow/for-loop/for-loop.component').then(u => u.ForLoopComponent)
  },
  {
    path: 'signal',
    loadComponent: () => import('./signal/signal-wrapper/signal-wrapper.component').then(u => u.SignalWrapperComponent)
  },
  {
    path: 'defer',
    loadComponent: () => import('./defer/parent/parent.component').then(u => u.ParentComponent)
  },
  {
    path: 'two-way-binding',
    loadComponent: () => import('./two-way-binding/parent/parent.component').then(u => u.ParentComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
