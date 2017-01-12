import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService, LangChangeEvent} from 'ng2-translate';
import { TranslationHelpersInterface } from "../../common/contracts/translation-helpers.interface";

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.css']
})
export class WhyChooseUsComponent implements OnInit, AfterViewInit, TranslationHelpersInterface {

  public isLoggedIn: boolean;
  public whyChooseUsComponentTexts: any;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.isLoggedIn = true;

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.whyChooseUsComponentTexts = event.translations;

      // TODO refactor here this is called 4 times ?
      console.log(this.whyChooseUsComponentTexts);
    });
  }

  ngAfterViewInit(): void {
    console.log('now loaded NewHomePages.WhyChooseUsPage');
    this.getObjectForTranslation('NewHomePages.WhyChooseUsPage');
  }

  getObjectForTranslation(objectName:string): any {
    this.translate
      .get(objectName)
      .subscribe((res: string) => {
        //console.log(res);
        var objToReturn: any = res;
        this.whyChooseUsComponentTexts = objToReturn;
      });
  }
}
