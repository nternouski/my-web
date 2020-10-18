import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { WelcomeComponent } from "./welcome.component";

export const appRoutes: Routes = [{ path: "", component: WelcomeComponent }];

@NgModule({
	imports: [RouterModule.forChild(appRoutes)],
	exports: [RouterModule]
})
export class WelcomeRoutingModule {}
