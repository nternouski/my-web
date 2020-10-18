import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar.component";

import { TranslateModule } from "@ngx-translate/core";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
	declarations: [NavbarComponent],
	exports: [NavbarComponent],
	imports: [
		CommonModule,
		RouterModule,
		FlexLayoutModule,
		TranslateModule,
		MatToolbarModule,
		MatMenuModule,
		MatButtonModule,
		MatIconModule
	]
})
export class NavbarModule {}
