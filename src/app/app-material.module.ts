import { NgModule } from "@angular/core";

import {
	MatMenuModule,
	MatToolbarModule,
	MatButtonModule,
	MatIconModule,
	MatFormFieldModule,
	MatInputModule,
	MatCardModule,
	MatTooltipModule
} from "@angular/material";

import { MatTabsModule } from "@angular/material/tabs";

import { MatSnackBarModule } from "@angular/material/snack-bar";

const materiaImports = [
	MatMenuModule,
	MatToolbarModule,
	MatButtonModule,
	MatIconModule,
	MatFormFieldModule,
	MatInputModule,
	MatCardModule,
	MatTabsModule,
	MatSnackBarModule,
	MatTooltipModule
];

@NgModule({
	imports: materiaImports,
	exports: materiaImports,
	providers: []
})
export class AppMaterialModule { }

