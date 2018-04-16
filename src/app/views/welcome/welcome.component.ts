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
		const timeDiff = Math.abs(Date.now() - this.birthDate.getMilliseconds());
		this.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
	}
}
