import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppsComponent } from "./apps.component";
import { BudgetPrivacyPolicyComponent } from "./budget-privacy-policy/budget-privacy-policy.component";
import { BudgetTermsComponent } from "./budget-terms/budget-terms.component";
import { BudgetComponent } from "./budget/budget.component";

export const appRoutes: Routes = [
	{
		path: "",
		component: AppsComponent,
		children: [
			{ path: "budget/privacy-policy", component: BudgetPrivacyPolicyComponent },
			{ path: "budget/terms", component: BudgetTermsComponent },
			{ path: "budget", component: BudgetComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(appRoutes)],
	exports: [RouterModule]
})
export class AppsRoutingModule {}
