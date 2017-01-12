import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from "@angular/router";

import { MainComponent } from "./html-layout";
import { HomeComponent } from "./home";
import { PageNotFoundComponent } from "./html-layout";

import { FourStepsToNewHomeComponent } from "./new-home";
import { WhyChooseUsComponent} from "./new-home";
import { PriceListComponent} from "./new-home";

import { AboutTheCompanyComponent } from "./about";


const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'new-home',
    component: MainComponent,
    children: [
      { path: 'four-steps-to-new-home', component: FourStepsToNewHomeComponent },
      { path: 'why-choose-us', component: WhyChooseUsComponent },
      { path: 'price-list', component: PriceListComponent }
    ]
  },
  {
    path: 'about',
    component: MainComponent,
    children: [
      { path: 'about-the-company', component: AboutTheCompanyComponent },
      { path: 'services', component: PageNotFoundComponent },
      { path: 'financing', component: PageNotFoundComponent }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(ROUTES);

export const routingComponents = [
  HomeComponent,
  FourStepsToNewHomeComponent,
  WhyChooseUsComponent,
  PriceListComponent
];

