function myFirstApp(name, age) {
	alert("Привет меня зовут " + name + " и это моя первая программа");

	function showSkills() {
		let skill = ["html", "css", "bootstrap", "jquery", "sass", "less", "photoshop"];

		for (let i = 0; i < skill.length; i++) {
			document.write("Я владею " + skill[i] + "<br>")
		}
	}
	showSkills();

	function checkAge() {
		if (age > 18) {
			console.log("Вам 18");
		}
		else {
			console.log("Вам не 18");
		}
	}
	checkAge();
	function calcPow(num) {
		console.log(num * num);
	}
	calcPow(4);
}

myFirstApp("Javidan", 18);