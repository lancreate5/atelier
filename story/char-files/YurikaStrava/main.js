// Change color on hover
topNavMenus = document.querySelector("nav").querySelector("ul").childNodes;
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
