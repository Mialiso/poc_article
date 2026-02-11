import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { CategoriesList } from './components/categories-list/categories-list';
import { ArticlesList } from './components/articles-list/articles-list';
import { AddArticle } from './components/add-article/add-article';
import { Login } from './components/login/login';

export const routes: Routes = [
  { path: '', component: Home, pathMatch:"full" },
  { path: 'categories', component: CategoriesList },
  { path: 'articles', component: ArticlesList },
  { path: 'add-article', component: AddArticle },
  { path: 'login', component: Login },
];