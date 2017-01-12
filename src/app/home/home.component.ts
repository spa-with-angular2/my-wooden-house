import { Component, OnInit, AfterViewInit} from '@angular/core';
import { TranslateService, LangChangeEvent } from "ng2-translate";

import { HomePageTexts } from "./contracts/home-page-texts.interface";
import { TranslationHelpersInterface } from "../common/contracts/translation-helpers.interface";
import { AuthenticationInterface } from "../common/contracts/authentication-interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, TranslationHelpersInterface, AuthenticationInterface {
  public isLoggedIn: boolean;
  public homePageTexts: HomePageTexts;

  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = true;

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.homePageTexts = event.translations.HomePage;

      // TODO refactor here this is called 4 times ?
      console.log(event.translations.HomePage);
    });
  }

  ngAfterViewInit(): void {
    console.log('now loaded HomePage');
    this.getObjectForTranslation('HomePage');
  }

  getObjectForTranslation(objectName:string): any {
    this.translate
        .get(objectName)
        .subscribe((res: string) => {
          console.log(res);

          var objToReturn: any = res;
          this.homePageTexts = objToReturn;
        });
  }

}
