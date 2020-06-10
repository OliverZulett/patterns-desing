// class Cake {
//     name: string;
//     price: number;
//     preparationDate: string;
//     slices: number;

//     constructor( name: string, price: number, preparationDate: string, slices: number) {
//         this.name = name;
//         this.price = price;
//         this.preparationDate = preparationDate;
//         this.slices = slices;
//     }

//     public getData() {
//         return this;
//     }
// }

class Caupcake {
    name: string;
    price: number;
    preparationDate: string;

    constructor( name: string, price: number, preparationDate: string) {
        this.name = name;
        this.price = price;
        this.preparationDate = preparationDate;
    }

    public getData() {
        return this;
    }
}

// function createCake(name: string,price: number,preparationDate: string,slices: number) {
//     const newCake = new Cake(name,price,preparationDate,slices);
//     return console.table(newCake);
// }

function createCupcake(name: string,price: number,preparationDate: string) {
    const newCupcake = new Caupcake(name,price,preparationDate);
    return console.table(newCupcake);
}

console.log('Voy a crear un pastel');
// createCake('tres leches', 78, new Date().toDateString(), 12);
console.log('Voy a crear un cupcake');
createCupcake('frutilla', 7, new Date().toDateString());
