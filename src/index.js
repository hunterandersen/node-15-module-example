import Grasshopper from "./Grasshopper.js";

const jiminy = new Grasshopper("Jiminy", 45, [
    "a top hat",
    "penny loafers",
    "a bow-tie",
    "a tuxedo"
]);

jiminy.jump();
jiminy.jump();
jiminy.jump();

console.log(jiminy.energy);

console.log(jiminy.getDescription());