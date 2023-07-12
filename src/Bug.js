export default class Bug {
    constructor(name, energy = 100, apparel = []){
        this.name = name;
        this.energy = energy;
        this.apparel = apparel;
    }

    rest(time = 1){
        this.energy += 2 * time;
    }

    getDescription(){
        let clothingStr = "";
        this.apparel.forEach((article, index) =>{
            if (index != this.apparel.length - 1){
                clothingStr += `${article}, `;
            } else {
                clothingStr += `and ${article}.`;
            }
        });
        return `${this.name} is wearing ${clothingStr}`;
    }
}