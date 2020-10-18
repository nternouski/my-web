import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FlexLayoutModule } from "@angular/flex-layout";

import { FooterComponent } from "./footer.component";

@NgModule({
	declarations: [FooterComponent],
	exports: [FooterComponent],
	imports: [BrowserModule, FlexLayoutModule]
})
export class FooterModule {}
