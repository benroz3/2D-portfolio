import kaboom from "kaboom";

export const kbm = kaboom({
	global: false,
	touchToMouse:true,
    canvas: document.getElementById("game") as HTMLCanvasElement,
    debug: true, // set to false for production
});