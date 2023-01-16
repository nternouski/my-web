import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FlexLayoutModule } from "@angular/flex-layout";
import { TranslateModule } from "@ngx-translate/core";

import { AppsRoutingModule } from "./apps-routing.module";
import { AppsComponent } from "./apps.component";
import { BudgetPrivacyPolicyComponent } from "./budget-privacy-policy/budget-privacy-policy.component";
import { BudgetTermsComponent } from "./budget-terms/budget-terms.component";

import { MatTooltipModule } from "@angular/material/tooltip";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { ScrollButtonModule } from "@components/scroll-button/scroll-button.module";
import { FooterModule } from "@components/footer/footer.module";
import { BudgetComponent } from "./budget/budget.component";

@NgModule({
	declarations: [
		BudgetPrivacyPolicyComponent,
		BudgetTermsComponent,
		BudgetComponent,
		AppsComponent
	],
	imports: [
		CommonModule,
		AppsRoutingModule,
		FlexLayoutModule,
		TranslateModule,
		MatTooltipModule,
		MatButtonModule,
		MatToolbarModule,
		MatMenuModule,
		MatIconModule,
		ScrollButtonModule,
		FooterModule
	]
})
export class AppsModule {}
