import { Component } from "@angular/core";

@Component({
	selector: "app-welcome",
	templateUrl: "./welcome.component.html",
	styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent {

	name = "Sebastian Nahuel Ternouski";
	birthDate = new Date("1993-09-14");
	age: number;

	constructor() {
		const ageDate = new Date(Date.now() - this.birthDate.getTime()); // miliseconds from epoch
		this.age = Math.abs(ageDate.getUTCFullYear() - 1970);
	}
}
