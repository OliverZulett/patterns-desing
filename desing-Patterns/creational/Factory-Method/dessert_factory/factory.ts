abstract class DessertFactory {
    // factory method
    abstract createDessert(): Dessert;

    public generator(): Dessert {
        return this.createDessert();
    }

}

class CakeFactory extends DessertFactory {
    public createDessert(): Dessert {
        return new Cake();
    }
}

class CupcakeFactory extends DessertFactory {
    public createDessert(): Dessert {
        return new Cupcake();
    }
}

interface Dessert {
    name: string;
    price: number;
    preparationDate: string;
    setDessert(name: string, price: number, preparationDate: string, slices: number): void;
    getDessert(): Dessert;
}

class Cake implements Dessert {
    name: string;
    price: number;
    preparationDate: string;
    slices: number;

    public setDessert(name: string, price: number, preparationDate: string, slices: number): void {
        this.name = name;
        this.price = price;
        this.preparationDate = preparationDate;
        this.slices = slices;
    }

    public getDessert(): Dessert {
        return this;
    }
}

class Cupcake implements Dessert {
    name: string;
    price: number;
    preparationDate: string;

    setDessert(name: string, price: number, preparationDate: string) {
        this.name = name;
        this.price = price;
        this.preparationDate = preparationDate;
    }

    public getDessert(): Dessert {
        return this;
    }
}

// codigo MAIN

function dessertGenerator(factory:DessertFactory) {
    return factory.generator();
}

function generateCake(name: string, price: number, preparationDate: string, slices: number) {
    const cake = dessertGenerator(new CakeFactory());
    cake.setDessert(name, price, preparationDate, slices);
    return cake.getDessert();
}

function generateCupcake(name: string, price: number, preparationDate: string) {
    const cupcake = dessertGenerator(new CupcakeFactory());
    cupcake.setDessert(name, price, preparationDate, 1);
    return cupcake.getDessert();
}

console.log('voy a generar un pastel');
console.table(generateCake('Red Velvet', 78, new Date().toDateString(), 12));

console.log('voy a generar un cupcake');
console.table(generateCupcake('Red Velvet', 7, new Date().toDateString()));
