import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { FourStepsToNewHomeComponent } from './four-steps-to-new-home/four-steps-to-new-home.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { PriceListComponent } from './price-list/price-list.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        FourStepsToNewHomeComponent,
        WhyChooseUsComponent,
        PriceListComponent
    ],
    exports: [
        // WhyChooseUsComponent,
        // FourStepsToNewHomeComponent,
        // PriceListComponent
    ]
})
export class NewHomeModule { }
