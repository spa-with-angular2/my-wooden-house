import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService, LangChangeEvent} from 'ng2-translate';
import { TranslationHelpersInterface } from "../../common/contracts/translation-helpers.interface";

@Component({
  selector: 'app-about-the-company',
  templateUrl: './about-the-company.component.html',
  styleUrls: ['./about-the-company.component.css']
})
export class AboutTheCompanyComponent implements OnInit, AfterViewInit, TranslationHelpersInterface {

  public isLoggedIn: boolean;
  public aboutTheCompanyTexts: any;

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    this.isLoggedIn = true;

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.aboutTheCompanyTexts = event.translations;

      // TODO refactor here this is called 4 times ?
      console.log(this.aboutTheCompanyTexts);
    });
  }

  ngAfterViewInit(): void {
    console.log('now loaded AboutPages.AboutTheCompany');
    this.getObjectForTranslation('AboutPages.AboutTheCompany');
  }

  getObjectForTranslation(objectName:string): any {
    this.translate
      .get(objectName)
      .subscribe((res: string) => {
        //console.log(res);
        var objToReturn: any = res;
        this.aboutTheCompanyTexts = objToReturn;
      });
  }

}
