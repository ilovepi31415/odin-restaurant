import "./style.css";
import createHomePage from "./home.js";
import createMenu from "./menu.js";
import createAbout from "./about.js";

const activeColor = "#fefae0";

const container = document.querySelector("#content");
const home = document.querySelector("#btn-home");
const menu = document.querySelector("#btn-menu");
const about = document.querySelector("#btn-about");

home.addEventListener("click", () => {
	container.replaceChildren();
	createHomePage();
	home.style.backgroundColor = activeColor;
	menu.style.backgroundColor = "";
	about.style.backgroundColor = "";
});

menu.addEventListener("click", () => {
	container.replaceChildren();
	createMenu();
	menu.style.backgroundColor = activeColor;
	home.style.backgroundColor = "";
	about.style.backgroundColor = "";
});

about.addEventListener("click", () => {
	container.replaceChildren();
	createAbout();
	about.style.backgroundColor = activeColor;
	home.style.backgroundColor = "";
	menu.style.backgroundColor = "";
});

createHomePage();
home.style.backgroundColor = activeColor;
