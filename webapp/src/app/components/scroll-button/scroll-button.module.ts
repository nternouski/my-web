import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { ScrollButtonComponent } from "./scroll-button.component";

@NgModule({
	imports: [CommonModule, MatButtonModule, MatIconModule],
	declarations: [ScrollButtonComponent],
	exports: [ScrollButtonComponent]
})
export class ScrollButtonModule {}
