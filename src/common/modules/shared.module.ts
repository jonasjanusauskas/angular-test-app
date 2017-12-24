import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModule } from "./material.module";

@NgModule({
    exports: [
      BrowserAnimationsModule,
      FlexLayoutModule,

      MaterialModule
    ]
})
export class SharedModule {}