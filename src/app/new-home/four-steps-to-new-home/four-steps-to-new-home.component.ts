import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService, LangChangeEvent} from 'ng2-translate';
import { TranslationHelpersInterface } from "../../common/contracts/translation-helpers.interface";

@Component({
  selector: 'app-four-steps-to-new-home',
  templateUrl: './four-steps-to-new-home.component.html',
  styleUrls: ['./four-steps-to-new-home.component.css']
})
export class FourStepsToNewHomeComponent implements OnInit, AfterViewInit, TranslationHelpersInterface {

  public isLoggedIn: boolean;
  public fourStepsToNewHomeComponent: any;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.isLoggedIn = true;

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.fourStepsToNewHomeComponent = event.translations;

      // TODO refactor here this is called 4 times ?
      console.log(this.fourStepsToNewHomeComponent);
    });
  }

  ngAfterViewInit(): void {
    console.log('now loaded NewHomePages.FourStepsToNewHomePage');
    this.getObjectForTranslation('NewHomePages.FourStepsToNewHomePage');
  }

  getObjectForTranslation(objectName:string): any {
    this.translate
      .get(objectName)
      .subscribe((res: string) => {
        //console.log(res);
        var objToReturn: any = res;
        this.fourStepsToNewHomeComponent = objToReturn;
      });
  }
}
