import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
	{ path: "", pathMatch: "full", redirectTo: "welcome" },
	{
		path: "welcome",
		loadChildren: () => import("./views/welcome/welcome.module").then(i => i.WelcomeModule)
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			preloadingStrategy: PreloadAllModules,
			relativeLinkResolution: "legacy"
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
