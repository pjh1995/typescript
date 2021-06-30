{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    sugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level :: object마다 생성되지 않고, 클래스 자체에 존재함.
    private coffeeBeans: number = 0;

    public constructor(coffeeBeans: number, private milk: MilkFother, private sugar: SugarProvider) {
      this.coffeeBeans = coffeeBeans;
    }

    private grindBeans(shots: number) {
      this.useCoffeeBean(shots);
    }

    private preheat() {
      console.log('heating up...');
    }

    private extract(shots: number) {
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots);
      const Latte = this.milk.makeMilk(coffee);
      return this.sugar.addSugar(Latte);
    }

    // makeCoffee(shots: number): CoffeeCup {
    //   this.grindBeans(shots);
    //   this.preheat();
    //   return this.extract(shots);
    // }

    // makeLatte(shot: number): CoffeeCup {
    //   const coffee = this.makeCoffee(shot);
    //   return this.milk.makeMilk(coffee);
    // }

    // makeSweetCoffee(shot: number): CoffeeCup {
    //   const coffee = this.makeCoffee(shot);
    //   return this.sugar.addSugar(coffee);
    // }

    // makeSweetLatte(shot: number): CoffeeCup {
    //   const Latte = this.makeLatte(shot);
    //   return this.sugar.addSugar(Latte);
    // }

    private useCoffeeBean(shots: number) {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    fillCoffeeBean(beans: number) {
      if (beans < 0) throw new Error('value for beans should be greater than 0');
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning...');
    }
  }

  interface MilkFother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  class CheapMilkSteamer implements MilkFother {
    private stramMilk(): void {
      console.log('Steaming milk...');
    }
    makeMilk(cup: CoffeeCup) {
      this.stramMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteamer implements MilkFother {
    private stramMilk(): void {
      console.log('Fancy Steaming milk...');
    }
    makeMilk(cup: CoffeeCup) {
      this.stramMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class ColdMilkSteamer implements MilkFother {
    private stramMilk(): void {
      console.log('Cold Steaming milk...');
    }
    makeMilk(cup: CoffeeCup) {
      this.stramMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class NoMilkSteamer implements MilkFother {
    makeMilk(cup: CoffeeCup) {
      return cup;
    }
  }

  class CandySugarMixer implements SugarProvider {
    private getSugar(): boolean {
      console.log('Getting some sufar from candy...');
      return true;
    }

    addSugar(cup: CoffeeCup) {
      const sugar = this.getSugar();
      return {
        ...cup,
        sugar,
      };
    }
  }

  class SugarMixer implements SugarProvider {
    private getSugar(): boolean {
      console.log('Getting some sufar from jar...');
      return true;
    }

    addSugar(cup: CoffeeCup) {
      const sugar = this.getSugar();
      return {
        ...cup,
        sugar,
      };
    }
  }

  class NoSugarMixer implements SugarProvider {
    addSugar(cup: CoffeeCup) {
      return cup;
    }
  }

  // Milk
  const cheapMilkSteamer = new CheapMilkSteamer();
  const fancyMilkSteamer = new FancyMilkSteamer();
  const coldMilkSteamer = new ColdMilkSteamer();
  const noMilkSteamer = new NoMilkSteamer();

  // Sugar
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugarMixer = new NoSugarMixer();

  // SweetMachine
  const sweetCandyMachine = new CoffeeMachine(12, noMilkSteamer, candySugar);
  const sweetMachine = new CoffeeMachine(12, noMilkSteamer, sugar);

  // LatteMachine
  const cheapLatteMachine = new CoffeeMachine(12, cheapMilkSteamer, noSugarMixer);
  const fancyLatteMachine = new CoffeeMachine(12, fancyMilkSteamer, noSugarMixer);
  const coldLatteMachine = new CoffeeMachine(12, coldMilkSteamer, noSugarMixer);

  const sweetCaffeLatteMachine = new CoffeeMachine(16, cheapMilkSteamer, candySugar);
  console.log(sweetCaffeLatteMachine.makeCoffee(2));
}
