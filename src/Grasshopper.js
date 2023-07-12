import Bug from "./Bug.js";

export default class Grasshopper extends Bug {
    constructor(name, energy, apparel){
        super(name, energy, apparel);
    }

    jump() {
        this.energy -= 10;
        console.log(`${this.name} chirped happily while jumping`);
    }
}