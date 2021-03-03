import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'floatingBanner', 
    loadChildren: () => import('./floating-banner/floating-banner.module').then(m => m.FloatingBannerModule) 
  }, 
  { 
    path: 'category', 
    loadChildren: () => import('./e-com-category-page/e-com-category-page.module').then(m => m.EComCategoryPageModule) 
  }, 
  { 
    path: 'inputOutput', 
    loadChildren: () => import('./count-down-io/count-down-io.module').then(m => m.CountDownIOModule) 
  }, 
  { 
    path: 'subject', 
    loadChildren: () => import('./count-down-subject/count-down-subject.module').then(m => m.CountDownSubjectModule) 
  }, 
  { 
    path: 'smartTable', 
    loadChildren: () => import('./smart-table/smart-table.module').then(m => m.SmartTableModule) 
  }, 
  // { 
  //   path: 'dynamicDiv', 
  //   loadChildren: () => import('./dynamic-div/dynamic-div.module').then(m => m.DynamicDivModule) 
  // },
  { 
    path: 'dynamicDiv', 
    loadChildren: () => import('./dyn-div/dyn-div.module').then(m => m.DynDivModule) 
  }, 
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
