import { Component, Input } from "@angular/core";

@Component({
	selector: "app-quality",
	templateUrl: "./quality.component.html",
	styleUrls: ["./quality.component.scss"]
})
export class QualityComponent {
	multimedia = {
		name: "Multimedia",
		elements: [
			{ name: "Adobe After Effect", stars: ["star", "star", "star", "star", "star_border"] },
			{ name: "Adobe Illustrator", stars: ["star", "star", "star", "star", "star_border"] },
			{
				name: "Adobe Photoshop",
				stars: ["star", "star", "star", "star_border", "star_border"]
			},
			{
				name: "Adobe InDesign",
				stars: ["star", "star", "star", "star_border", "star_border"]
			},
			{
				name: "Adobe Audition",
				stars: ["star", "star", "star_border", "star_border", "star_border"]
			},
			{
				name: "Blender (3D)",
				stars: ["star", "star", "star_border", "star_border", "star_border"]
			}
		]
	};

	languagePrograming = {
		name: "welcome.knowledge.language_programing",
		elements: [
			{ name: "Node", stars: ["star", "star", "star", "star", "star"] },
			{ name: "Angular", stars: ["star", "star", "star", "star", "star"] },
			{ name: "Git", stars: ["star", "star", "star", "star", "star"] },
			{ name: "GCP", stars: ["star", "star", "star", "star", "star_border"] },
			{ name: "CSS/HTML/JS", stars: ["star", "star", "star", "star", "star_border"] },
			{ name: "Python", stars: ["star", "star", "star", "star_border", "star_border"] },
			{ name: "Bash ", stars: ["star", "star", "star", "star_border", "star_border"] },
			{ name: "C/C++", stars: ["star", "star", "star_border", "star_border", "star_border"] }
		]
	};

	language = {
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

	constructor() {}
}
