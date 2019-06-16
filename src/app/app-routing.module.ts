import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsResolver } from './service/news-resolver.service';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
  { path: 'news',
    component: NewsComponent,
    resolve: {
      news: NewsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [NewsResolver]
})
export class AppRoutingModule { }
