import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FlexLayoutModule } from "@angular/flex-layout";
import { TranslateModule } from "@ngx-translate/core";

import { WelcomeRoutingModule } from "./apps-routing.module";
import { AppsComponent } from "./apps.component";
import { BudgetPrivacyPolicyComponent } from "./budget-privacy-policy/budget-privacy-policy.component";

import { MatTooltipModule } from "@angular/material/tooltip";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { ScrollButtonModule } from "@components/scroll-button/scroll-button.module";
import { FooterModule } from "@components/footer/footer.module";

@NgModule({
	declarations: [BudgetPrivacyPolicyComponent, AppsComponent],
	imports: [
		CommonModule,
		WelcomeRoutingModule,
		FlexLayoutModule,
		TranslateModule,
		MatTooltipModule,
		MatIconModule,
		MatButtonModule,
		MatToolbarModule,
		MatMenuModule,
		ScrollButtonModule,
		FooterModule
	]
})
export class AppsModule {}
