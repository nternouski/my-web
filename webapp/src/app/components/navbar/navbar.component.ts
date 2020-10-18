import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent {
	links = [
		{ name: "navbar.links.home", link: "/" },
		{ name: "navbar.links.contact", link: "/contact" }
	];

	langs = [
		{ name: "navbar.langs.spanish", img: "spain.png" },
		{ name: "navbar.langs.english", img: "UK.png" }
	];

	constructor(private translate: TranslateService) {}

	changeLang(str: string) {
		switch (str) {
			case this.langs[0].name:
				this.translate.use("es");
				break;
			case this.langs[1].name:
				this.translate.use("en");
				break;
		}
	}
}
