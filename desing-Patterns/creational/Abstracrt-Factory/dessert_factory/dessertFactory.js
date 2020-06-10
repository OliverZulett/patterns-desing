var WeddingDessertFactory = /** @class */ (function () {
    function WeddingDessertFactory() {
    }
    WeddingDessertFactory.prototype.createCakes = function () {
        return new WeddingCake();
    };
    WeddingDessertFactory.prototype.createCupcakes = function () {
        return new WeddingCupcake();
    };
    return WeddingDessertFactory;
}());
var BirthdayDessertFactory = /** @class */ (function () {
    function BirthdayDessertFactory() {
    }
    BirthdayDessertFactory.prototype.createCakes = function () {
        return new BirthdayCake();
    };
    BirthdayDessertFactory.prototype.createCupcakes = function (name, price) {
        return new BirthdayCupcake(name, price);
    };
    return BirthdayDessertFactory;
}());
var WeddingCake = /** @class */ (function () {
    function WeddingCake() {
        this.type = 'wedding dessert';
        this.name = 'red Velvet';
        this.price = 67;
        this.slices = 12;
    }
    WeddingCake.prototype.getCake = function () {
        return this;
    };
    return WeddingCake;
}());
var BirthdayCake = /** @class */ (function () {
    function BirthdayCake() {
        this.type = 'birthday dessert';
        this.name = 'vainilla';
        this.price = 102;
        this.slices = 18;
    }
    BirthdayCake.prototype.getCake = function () {
        return this;
    };
    return BirthdayCake;
}());
var WeddingCupcake = /** @class */ (function () {
    function WeddingCupcake() {
    }
    WeddingCupcake.prototype.getCupcake = function () {
        return this;
    };
    return WeddingCupcake;
}());
var BirthdayCupcake = /** @class */ (function () {
    function BirthdayCupcake(name, price) {
        this.type = 'birthday dessert';
        this.name = name;
        this.price = price;
    }
    BirthdayCupcake.prototype.getCupcake = function () {
        return this;
    };
    return BirthdayCupcake;
}());
// ---------------------------------------------
// function clientCode(factory:IAbstractFactory) {
//     const cakeA = factory.createCakes();
//     console.table(cakeA.getCake());
// }
// console.log('Vamos a crear un pastel');
// clientCode(new WeddingDessertFactory());
var main = /** @class */ (function () {
    function main() {
    }
    main.prototype.createWeddingCake = function () {
        var factory = new WeddingDessertFactory();
        console.log('creemos un pastel de bodas');
        return factory.createCakes();
    };
    main.prototype.createBirthdayCupcake = function (name, price) {
        var factory = new BirthdayDessertFactory();
        console.log('creemos un cupcake de cumpleaños');
        return factory.createCupcakes(name, price);
    };
    return main;
}());
var catalog = new main();
console.table(catalog.createBirthdayCupcake('chocolate', 8));
console.table(catalog.createWeddingCake());
