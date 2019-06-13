import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

export const ROUTES: Routes = [
    { // quando nao digitar caminho, vai para o HOME
        path: '', 
        component: HomeComponent 
    }, 
    { 
        path: 'about', 
        component: AboutComponent 
    }

]