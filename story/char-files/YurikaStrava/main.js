// Change color on hover
let topNavMenus = document.getElementsByClassName("right-nav")[0].childNodes;
for (let ptr = 0; ptr < topNavMenus.length; ptr++) {
	if(topNavMenus[ptr].nodeName == "LI") {
		let menu = topNavMenus[ptr].querySelector("a");
		
		if(menu != null) {
			// Shows underline on hover
			menu.addEventListener("mouseover", () => {
				menu.style.textDecoration = "underline";
			});
		
			// Removes underline when unhovered
			menu.addEventListener("mouseout", () => {
				menu.style.textDecoration = "none";
			});
		}
	}
}

let secondNavMenus = document.getElementsByClassName("content-nav")[0];
let secondNavMenusName = [];
let selected = secondNavMenus.getElementsByClassName("default")[0].textContent;

for (let ptr = 0; ptr < secondNavMenus.childNodes.length; ptr++) {
	let menu = secondNavMenus.childNodes[ptr];
	if(menu.nodeName == "LI") {
		secondNavMenusName[menu.textContent] = menu;

		if(menu != null) {
			menu.addEventListener("click", () => {
				secondNavMenusName[selected].style.background = "#EEEEEE"
				selected = menu.textContent;
				secondNavMenusName[selected].style.background = "#FFFFFF"
			});

			// Shows underline on hover
			menu.addEventListener("mouseover", () => {
				if(menu.textContent != selected) {
					menu.style.background = "#DDDDFF"
				}
			});
		
			// Removes underline when unhovered
			menu.addEventListener("mouseout", () => {
				if(menu.textContent != selected) {
					menu.style.background = "#EEEEEE"
				}
			});
		}
	}
}

