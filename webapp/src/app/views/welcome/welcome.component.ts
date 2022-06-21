import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

interface Lang {
	name: string;
	img: string;
	key: "es" | "en";
}

@Component({
	selector: "app-welcome",
	templateUrl: "./welcome.component.html",
	styleUrls: ["./welcome.component.scss"]
})
export class WelcomeComponent {
	public readonly name = "Sebastian N. Ternouski";
	private readonly ageDate = new Date(Date.now() - new Date("1993-09-14").getTime());
	public readonly age = Math.abs(this.ageDate.getUTCFullYear() - 1970);

	public links = [
		{ name: "navbar.links.home", link: "home" },
		{ name: "navbar.links.projects", link: "projects" },
		{ name: "navbar.links.technologies", link: "tech" },
		{ name: "navbar.links.contact", link: "contact" }
	];

	public langs: Lang[] = [
		{ name: "navbar.langs.spanish", img: "spain.png", key: "es" },
		{ name: "navbar.langs.english", img: "UK.png", key: "en" }
	];

	constructor(private translate: TranslateService) {}

	public changeLang({ key }: Lang) {
		this.translate.use(key);
	}

	public scroll(id: string) {
		setTimeout(() => {
			const element = document.getElementById(id);
			if (!!element)
				element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
		}, 0);
	}
}
