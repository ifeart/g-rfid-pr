import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { DebugPageComponent } from './pages/debug-page/debug-page.component';
import { PrinciplesComponent } from './pages/principles/principles.component';
import { ImplementationsComponent } from './pages/implementations/implementations.component';
import { ComparePageComponent } from './pages/compare-page/compare-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'history', component: HistoryPageComponent},
  { path: 'principles', component: PrinciplesComponent},
  { path: 'implementations', component: ImplementationsComponent},
  { path: 'debug', component: DebugPageComponent},
  { path: 'compare', component: ComparePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
