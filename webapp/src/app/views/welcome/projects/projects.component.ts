import { Component, Input } from "@angular/core";

@Component({
	selector: "app-projects",
	templateUrl: "./projects.component.html",
	styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent {
	title = "projects.title";
	projects = [
		{ link: "https://goo.gl/xHKhVe", title: "fix_felix", img: "fix-felix.png" },
		{ link: "https://goo.gl/Kzbyry", title: "banner", img: "Ps-HM.jpg" },
		{
			link: "https://www.youtube.com/watch?v=KX1nlDv9_-0",
			title: "espirales",
			img: "espirales.png"
		},
		{
			link: "https://drive.google.com/file/d/1GWYDNdnA0nP2F8v1D8bUU4smXH559QaO/view?usp=sharing",
			title: "acordar-branding",
			img: "branding-acordar.jpg"
		},
		{
			link: "https://youtu.be/oVZ2zidVboc",
			title: "acordar-draft",
			img: "draft-acordar.jpg"
		},
		{
			link: "https://www.youtube.com/playlist?list=PLcj82OLSpnaZVzmATfwBmxkpypBk_4o9I",
			title: "mauna-story",
			img: "mauna-story.jpg"
		},
		{
			link: "https://www.youtube.com/watch?v=2CF4WiVOGNs",
			title: "elremanso",
			img: "elremanzo-mauna.jpg"
		},
		{
			link: "https://play.google.com/store/apps/details?id=com.nternouski.budget&pli=1",
			title: "budget_app",
			img: "budget-app.png"
		}
	];

	constructor() {}

	titlePath(title: string) {
		return "projects." + title + ".title";
	}

	descPath(title: string) {
		return "projects." + title + ".desc";
	}
}
