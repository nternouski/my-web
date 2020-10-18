import { Component, Input } from "@angular/core";

@Component({
	selector: "app-projects",
	templateUrl: "./projects.component.html",
	styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent {
	title = "projects.title";
	projects = [
		{ link: "https://github.com/nternouski/my-web", title: "my-web", img: "pag-web.png" },
		{
			link: "https://nosrobaronelnombre.herokuapp.com/",
			title: "gauchada",
			img: "gauchada.png"
		},
		{
			link: "https://www.youtube.com/watch?v=cNLXL_kVEpY",
			title: "design3d",
			img: "agua-3d.png"
		},
		{ link: "https://goo.gl/xHKhVe", title: "fix_felix", img: "fix-felix.png" },
		{ link: "https://goo.gl/Kzbyry", title: "banner", img: "Ps-HM.png" },
		{
			link: "https://www.youtube.com/watch?v=KX1nlDv9_-0",
			title: "espirales",
			img: "espirales.png"
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
