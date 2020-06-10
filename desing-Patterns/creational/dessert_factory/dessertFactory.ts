interface IAbstractFactory {
    createCakes(): ICake;
    createCupcakes(): ICupcake;
}

// --------------------------------------------- FACTORIES

class WeddingDessertFactory implements IAbstractFactory {
    createCakes(): ICake {
        return new WeddingCake();
    }

    createCupcakes(): ICupcake {
        return new WeddingCupcake();
    }
}

class BirthdayDessertFactory implements IAbstractFactory {
    createCakes(): ICake {
        return new BirthdayCake();
    }

    createCupcakes(name?: string, price?: number): ICupcake {
        return new BirthdayCupcake(name, price);
    }
}
 
// --------------------------------------------- CAKES

interface ICake {
    type: string;
    name: string;
    price: number;
    slices: number;

    getCake(): ICake;
}

class WeddingCake implements ICake {
    type = 'wedding dessert';
    name = 'red Velvet';
    price = 67;
    slices = 12;

    getCake():ICake {
        return this;
    }
}

class BirthdayCake implements ICake {
    type = 'birthday dessert';
    name = 'vainilla';
    price = 102;
    slices = 18;

    getCake():ICake {
        return this;
    }
}

// --------------------------------------------- CUPCAKES

interface ICupcake {
    type: string;
    name: string;
    price: number;

    getCupcake(): ICupcake;
}

class WeddingCupcake implements ICupcake {
    type: 'wedding dessert';
    name: 'chocolate';
    price: 9;

    getCupcake(): ICupcake {
        return this
    }
}

class BirthdayCupcake implements ICupcake {
    type: string;
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.type = 'birthday dessert';
        this.name = name;
        this.price = price;
    }

    getCupcake(): ICupcake {
        return this
    }
}

// --------------------------------------------- IMPLEMENTACION

class main {
    public createWeddingCake() {
        const factory = new WeddingDessertFactory();
        console.log('creemos un pastel de bodas');
        return factory.createCakes();
    }
    public createBirthdayCupcake(name: string, price: number) {
        const factory = new BirthdayDessertFactory();
        console.log('creemos un cupcake de cumpleaños');
        return factory.createCupcakes(name, price);
    }
}

const catalog = new main();

console.table(catalog.createBirthdayCupcake('chocolate', 8));
console.table(catalog.createWeddingCake());