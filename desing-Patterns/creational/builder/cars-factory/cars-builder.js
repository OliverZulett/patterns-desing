//  --------------------------------------------- SPORT CAR
var SportCarBuilder = /** @class */ (function () {
    function SportCarBuilder() {
        this.reset();
    }
    SportCarBuilder.prototype.reset = function () {
        this.car = new SportCar();
    };
    SportCarBuilder.prototype.buildWheels = function () {
        this.car.parts.push('4 ruedas');
    };
    ;
    SportCarBuilder.prototype.buildChassis = function () {
        this.car.parts.push('chasis de aluminio');
    };
    ;
    SportCarBuilder.prototype.buildEngine = function () {
        this.car.parts.push('motor de 4 tiempos');
    };
    ;
    SportCarBuilder.prototype.buildPowerSource = function () {
        this.car.parts.push('combustible a gasolina');
    };
    SportCarBuilder.prototype.getCar = function () {
        var result = this.car;
        this.reset();
        return result;
    };
    return SportCarBuilder;
}());
var SportCar = /** @class */ (function () {
    function SportCar() {
        this.parts = [];
    }
    SportCar.prototype.listParts = function () {
        console.log('Partes de un coche deportivo');
        console.table(this.parts);
    };
    return SportCar;
}());
//  --------------------------------------------- ELECTRIC CAR
var ElectricCarBuilder = /** @class */ (function () {
    function ElectricCarBuilder() {
        this.reset();
    }
    ElectricCarBuilder.prototype.reset = function () {
        this.car = new ElectricCar();
    };
    ElectricCarBuilder.prototype.buildWheels = function () {
        this.car.parts.push('4 ruedas');
    };
    ;
    ElectricCarBuilder.prototype.buildChassis = function () {
        this.car.parts.push('chasis de fibra de carbono');
    };
    ;
    ElectricCarBuilder.prototype.buildEngine = function () {
        this.car.parts.push('motor electrico');
    };
    ;
    ElectricCarBuilder.prototype.buildPowerSource = function () {
        this.car.parts.push('Baterias de litio');
    };
    ElectricCarBuilder.prototype.getCar = function () {
        var result = this.car;
        this.reset();
        return result;
    };
    return ElectricCarBuilder;
}());
var ElectricCar = /** @class */ (function () {
    function ElectricCar() {
        this.parts = [];
    }
    ElectricCar.prototype.listParts = function () {
        console.log('Partes de un coche electrico');
        console.table(this.parts);
    };
    return ElectricCar;
}());
//  --------------------------------------------- DIRECTOR
var CarBuildDirector = /** @class */ (function () {
    function CarBuildDirector() {
    }
    CarBuildDirector.prototype.setCarBuilder = function (carBuilder) {
        this.carBuilder = carBuilder;
    };
    CarBuildDirector.prototype.buildCarWithoutEngine = function () {
        this.carBuilder.buildChassis();
        this.carBuilder.buildWheels();
        this.carBuilder.buildPowerSource();
    };
    CarBuildDirector.prototype.buildCarWithoutWheels = function () {
        this.carBuilder.buildChassis();
        this.carBuilder.buildEngine();
        this.carBuilder.buildPowerSource();
    };
    CarBuildDirector.prototype.buildCarComplete = function () {
        this.carBuilder.buildChassis();
        this.carBuilder.buildWheels();
        this.carBuilder.buildEngine();
        this.carBuilder.buildPowerSource();
    };
    return CarBuildDirector;
}());
// ---------------------------------------------------
var main = /** @class */ (function () {
    function main() {
        this.carBuilderDirector = new CarBuildDirector();
    }
    main.prototype.BuildSportCars = function (carBuilder) {
        this.carBuilderDirector.setCarBuilder(carBuilder);
        console.log('coche sin motor');
        this.carBuilderDirector.buildCarWithoutEngine();
        carBuilder.getCar().listParts();
        console.log('coche sin ruedas');
        this.carBuilderDirector.buildCarWithoutWheels();
        carBuilder.getCar().listParts();
        console.log('coche completo');
        this.carBuilderDirector.buildCarComplete();
        carBuilder.getCar().listParts();
    };
    main.prototype.BuildElectricCars = function (carBuilder) {
        this.carBuilderDirector.setCarBuilder(carBuilder);
        console.log('coche sin motor');
        this.carBuilderDirector.buildCarWithoutEngine();
        carBuilder.getCar().listParts();
        console.log('coche sin ruedas');
        this.carBuilderDirector.buildCarWithoutWheels();
        carBuilder.getCar().listParts();
        console.log('coche completo');
        this.carBuilderDirector.buildCarComplete();
        carBuilder.getCar().listParts();
    };
    return main;
}());
var cars = new main();
cars.BuildSportCars(new SportCarBuilder);
cars.BuildSportCars(new ElectricCarBuilder);
