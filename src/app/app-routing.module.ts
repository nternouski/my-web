import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

/* view */
/* / */
import { WelcomeComponent } from "./views/welcome/welcome.component";
import { ContactComponent } from "./views/contact/contact.component";

/* services */

export const appRoutes: Routes = [
	{
		path: "",
		component: WelcomeComponent
	},
	{
		path: "contact",
		component: ContactComponent
	},
	{
		path: "**",
		component: WelcomeComponent
	},
];

export const routingComponents = [
	WelcomeComponent,
	ContactComponent
];


@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	],
	entryComponents: []
})
export class AppRoutingModule { }
