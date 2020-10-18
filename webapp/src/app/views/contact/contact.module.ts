import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FlexLayoutModule } from "@angular/flex-layout";

import { ContactComponent } from "./contact.component";

import { ContactRoutingModule } from "./contact-routing.module";
import { MatCardModule } from "@angular/material/card";
import { TranslateModule } from "@ngx-translate/core";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
	declarations: [ContactComponent],
	imports: [
		CommonModule,
		ContactRoutingModule,
		MatIconModule,
		FlexLayoutModule,
		MatCardModule,
		TranslateModule
	]
})
export class ContactModule {}
