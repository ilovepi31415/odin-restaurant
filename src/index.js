import "./style.css";
import createHomePage from "./home.js";
import createMenu from "./menu.js";

const activeColor = "#fefae0";

const container = document.querySelector("#content");
const home = document.querySelector("#btn-home");
const menu = document.querySelector("#btn-menu");

home.addEventListener("click", () => {
	container.replaceChildren();
	createHomePage();
	home.style.backgroundColor = activeColor;
	menu.style.backgroundColor = "";
});

menu.addEventListener("click", () => {
	container.replaceChildren();
	createMenu();
	menu.style.backgroundColor = activeColor;
	home.style.backgroundColor = "";
});

createHomePage();
home.style.backgroundColor = activeColor;
