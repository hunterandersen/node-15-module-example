export default class Bug {
    constructor(name, energy = 100, apparel = []){
        this.name = name;
        this.energy = energy;
        this.apparel = apparel;
    }

    rest(time = 1){
        this.energy += 2 * time;
    }
}