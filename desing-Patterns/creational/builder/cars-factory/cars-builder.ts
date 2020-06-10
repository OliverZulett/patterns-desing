interface ICarbuilder{
    buildWheels(): void;
    buildChassis(): void;
    buildEngine(): void;
    buildPowerSource(): void;
}

//  --------------------------------------------- SPORT CAR

class SportCarBuilder implements ICarbuilder {
    private car: SportCar;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.car = new SportCar();
    }

    buildWheels(): void {
        this.car.parts.push('4 ruedas');
    };
    buildChassis(): void {
        this.car.parts.push('chasis de aluminio');
    };
    buildEngine(): void {
        this.car.parts.push('motor de 4 tiempos');
    };
    buildPowerSource(): void {
        this.car.parts.push('combustible a gasolina')
    }

    public getCar(): SportCar {
        const result = this.car;
        this.reset();
        return result;
    }
}

class SportCar {
    public parts: string[] = [];
    
    public listParts(): void {
        console.log('Partes de un coche deportivo');
        console.table(this.parts);
    }
}

//  --------------------------------------------- ELECTRIC CAR

class ElectricCarBuilder implements ICarbuilder {
    private car: ElectricCar;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.car = new ElectricCar();
    }

    buildWheels(): void {
        this.car.parts.push('4 ruedas');
    };
    buildChassis(): void {
        this.car.parts.push('chasis de fibra de carbono');
    };
    buildEngine(): void {
        this.car.parts.push('motor electrico');
    };
    buildPowerSource(): void {
        this.car.parts.push('Baterias de litio');
    }

    public getCar(): ElectricCar {
        const result = this.car;
        this.reset();
        return result;
    }
}

class ElectricCar {
    public parts: string[] = [];
    
    public listParts(): void {
        console.log('Partes de un coche electrico');
        console.table(this.parts);
    }
}

//  --------------------------------------------- DIRECTOR

class CarBuildDirector {

    private carBuilder: ICarbuilder;

    public setCarBuilder(carBuilder: ICarbuilder): void {
        this.carBuilder = carBuilder;
    }

    public buildCarWithoutEngine(): void {
        this.carBuilder.buildChassis();
        this.carBuilder.buildWheels();
        this.carBuilder.buildPowerSource();
    }

    public buildCarWithoutWheels(): void {
        this.carBuilder.buildChassis();
        this.carBuilder.buildEngine();
        this.carBuilder.buildPowerSource();
    }

    public buildCarComplete(): void {
        this.carBuilder.buildChassis();
        this.carBuilder.buildWheels();
        this.carBuilder.buildEngine();
        this.carBuilder.buildPowerSource();
    }

}

// ---------------------------------------------------

class main {
    carBuilderDirector: CarBuildDirector;
    constructor() {
        this.carBuilderDirector = new CarBuildDirector();
    }

    BuildSportCars(carBuilder) {
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
    }

    BuildElectricCars(carBuilder) {
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
    }
}

const cars =  new main();
cars.BuildSportCars( new SportCarBuilder );
cars.BuildSportCars( new ElectricCarBuilder );