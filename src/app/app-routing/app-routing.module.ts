import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppRootRoutes } from "./app-root-routes";

import { Error404Component } from "../../common/views/error-404/error-404.component";
import { ErrorComponent } from "../../common/views/error/error.component";

const appRootRoutes: Routes = [
    // { path: AppRootRoutes.home, component: Error404Component },
    // { path: "", redirectTo: AppRootRoutes.home, pathMatch: "full" },
    { path: AppRootRoutes.error, component: ErrorComponent },
    { path: AppRootRoutes.errorPageNotFound, component: Error404Component },
    { path: "**", redirectTo: AppRootRoutes.errorPageNotFound }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(
            appRootRoutes,
            {
                // debug only
                enableTracing: false,
                onSameUrlNavigation: "reload",
                useHash: false
            })
    ]
})
// Application routing module, exports all base routes
export class AppRoutingModule { }
