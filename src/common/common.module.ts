import { NgModule } from "@angular/core";

import { SharedModule } from "./modules/shared.module";

// views
import { Error404Component } from "./views/error-404/error-404.component";
import { ErrorComponent } from "./views/error/error.component";

@NgModule({
  declarations: [
    Error404Component,
    ErrorComponent
  ],
  exports: [
    SharedModule,

    Error404Component,
    ErrorComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class CommonModule {}