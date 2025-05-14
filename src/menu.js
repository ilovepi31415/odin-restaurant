function createMenu() {
	const container = document.querySelector("#content");
	const title = document.createElement("h1");
	title.innerText = "Menu";
	const menu = document.createElement("div");
	menu.id = "menu-container";
	const foods = [
		["Spaghetti", "5.5"],
		["Alfredo", "6"],
		["Pizza", "7.25"],
	];
	foods.forEach((meal) => {
		const item = document.createElement("div");
		item.classList.add("menu-item");
		const food = document.createElement("div");
		food.innerText = meal[0];
		const price = document.createElement("div");
		price.style.fontStyle = "italic";
		price.innerText = meal[1];
		item.appendChild(food);
		item.appendChild(price);
		menu.appendChild(item);
	});

	container.appendChild(title);
	container.appendChild(menu);
}

export default createMenu;
