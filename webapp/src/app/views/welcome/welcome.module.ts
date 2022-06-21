import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FlexLayoutModule } from "@angular/flex-layout";
import { TranslateModule } from "@ngx-translate/core";

import { WelcomeComponent } from "./welcome.component";
import { WelcomeRoutingModule } from "./welcome-routing.module";
import { QualityComponent } from "./quality/quality.component";
import { ProjectsComponent } from "./projects/projects.component";

import { MatTooltipModule } from "@angular/material/tooltip";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { ScrollButtonModule } from "@components/scroll-button/scroll-button.module";
@NgModule({
	declarations: [WelcomeComponent, QualityComponent, ProjectsComponent],
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
		ScrollButtonModule
	]
})
export class WelcomeModule {}
