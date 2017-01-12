import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { APP_ROUTES, routingComponents } from './app.routes'

import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

import { HtmlLayoutModule } from './html-layout';
import { HomeModule } from './home';
import { NewHomeModule } from './new-home';
import { AboutModule } from './about';

import { AppComponent } from './app.component';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, '../../assets/i18n', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        //routingComponents,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        APP_ROUTES,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
        HtmlLayoutModule,
        HomeModule,
        NewHomeModule,
        AboutModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
