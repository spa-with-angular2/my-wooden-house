import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateService } from 'ng2-translate';
import { NavTexts, TranslationInterface, AuthenticationInterface } from "../contracts/nav-texts.interface";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css' ]
})
export class NavComponent implements OnInit, TranslationInterface, AuthenticationInterface {
  public isLoggedIn: boolean;
  public navTexts: NavTexts;

  constructor(private router: Router, private translate: TranslateService) {
    translate.addLangs(['en', 'bg']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  getObjectForTranslation(objectName:string): any {
    this.translate
        .get(objectName)
        .subscribe((res: string) => {
            //console.log(res);
            var objToReturn: any = res;
            this.navTexts = objToReturn;
        });
  }

  changeLang(lang: string) {
    this.translate.use(lang);
    // console.log(lang);

    this.getObjectForTranslation('Nav');
  }

  ngOnInit(): void {
    this.isLoggedIn = true;
    this.getObjectForTranslation('Nav');
  }

}


