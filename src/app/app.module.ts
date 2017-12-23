import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { CommonModule } from "../common/modules/common.modules";

import { AppContainerComponent } from "./app-container/app-container.component";
import { AppHeaderComponent } from "./app-header/app-header.component";

@NgModule({
  bootstrap: [AppContainerComponent],
  declarations: [
    AppContainerComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: []
})
export class AppModule { }
