import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule, HttpClient } from "@angular/common/http";

import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { FooterModule } from "@components/footer/footer.module";

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		FlexLayoutModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader: { provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient] }
		}),
		FooterModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
