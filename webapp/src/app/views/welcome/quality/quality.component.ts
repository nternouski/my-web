import { Component, Input } from "@angular/core";

@Component({
	selector: "app-quality",
	templateUrl: "./quality.component.html",
	styleUrls: ["./quality.component.scss"]
})
export class QualityComponent {
	public multimedia = {
		name: "Multimedia",
		elements: [
			{ name: "Adobe After Effect", stars: ["star", "star", "star", "star", "star_border"] },
			{ name: "Adobe Illustrator", stars: ["star", "star", "star", "star", "star_border"] },
			{ name: "Adobe Photoshop", stars: ["star", "star", "star", "star_border", "star_border"] },
			{ name: "Adobe InDesign", stars: ["star", "star", "star", "star_border", "star_border"] },
			{
				name: "Adobe Audition",
				stars: ["star", "star", "star_border", "star_border", "star_border"]
			}
		]
	};

	public language = {
		name: "welcome.knowledge.language.title",
		elements: [
			{
				name: "welcome.knowledge.language.spanish",
				stars: ["star", "star", "star", "star", "star_border"]
			},
			{
				name: "welcome.knowledge.language.english",
				stars: ["star", "star", "star", "star_border", "star_border"]
			},
			{
				name: "welcome.knowledge.language.portugues",
				stars: ["star", "star", "star_border", "star_border", "star_border"]
			}
		]
	};

	public languagePrograming: {
		name: string;
		elements: { name: string; img: string; url: string }[][];
	} = {
		name: "welcome.knowledge.language_programing",
		elements: [
			[
				{ name: "Node", img: "node.svg", url: "https://nodejs.org/" },
				{ name: "Firebase", img: "firebase.svg", url: "https://firebase.google.com/" },
				{ name: "Angular", img: "angular.svg", url: "https://angular.io/" },
				{ name: "RxJs", img: "rxjs.svg", url: "https://rxjs.dev/" }
			],
			[
				{
					name: "Google Cloud Platform",
					img: "google-cloud.svg",
					url: "https://cloud.google.com/"
				},
				{ name: "GitLab CI/CD", img: "gitlab-cicd.svg", url: "https://docs.gitlab.com/ee/ci/" },
				{ name: "Docker", img: "docker.svg", url: "https://www.docker.com/" },
				{ name: "Flutter", img: "flutter.svg", url: "https://flutter.dev/" }
			],
			[
				{ name: "Python", img: "python.svg", url: "https://www.python.org/" },
				{ name: "MongoDB", img: "mongodb.svg", url: "https://www.mongodb.com/" },
				{ name: "Graphql", img: "graphql.svg", url: "https://graphql.org/" },
				{ name: "PostgreSQL", img: "postgresql.svg", url: "https://www.postgresql.org/" }
			],
			[
				{ name: "Jira", img: "jira.svg", url: "https://www.atlassian.com/software/jira" },
				{ name: "Typescript", img: "typescript.svg", url: "https://www.typescriptlang.org/" },
				{ name: "CSS", img: "css.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
				{ name: "HTML", img: "html.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" }
			]
			// [
			// 	{ name: "React", img: "react.svg", url: "https://reactjs.org/" },
			// ]
		]
	};

	constructor() {}
}
