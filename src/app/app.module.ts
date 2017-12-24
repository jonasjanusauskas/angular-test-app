import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { CommonModule } from "../common/common.module";
import { AppRoutingModule } from "./app-routing/app-routing.module";

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
    CommonModule,
    AppRoutingModule
  ],
  providers: []
})
export class AppModule { }
