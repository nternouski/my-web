import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireStorageModule } from "angularfire2/storage";

import { AppMaterialModule } from "./app-material.module";

/* components imports */
import { FooterComponent } from "app/components/footer/footer.component";
import { NavbarComponent } from "app/components/navbar/navbar.component";
import { QualityComponent } from "app/components/quality/quality.component";
import { ProjectsComponent } from "app/components/projects/projects.component";

/* views imports */
import { AppRoutingModule, routingComponents } from "./app-routing.module";

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}

@NgModule({
	declarations: [
		AppComponent,
		routingComponents,
		FooterComponent,
		NavbarComponent,
		QualityComponent,
		ProjectsComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		AppMaterialModule,
		FlexLayoutModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader: { provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient] }
		}),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
