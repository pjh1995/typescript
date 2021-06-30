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

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
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
      return this.extract(shots);
    }

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

  class CheapMilkSteamer {
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

  class AumaticSugarMixer {
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

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(private beans: number, public readonly serialNumber: string, private milkFother: CheapMilkSteamer) {
      super(beans);
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    constructor(private been: number, private sugar: AumaticSugarMixer) {
      super(been);
    }
    makeCoffeeWithSugar(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(private been: number, private milkFother: CheapMilkSteamer, private sugar: AumaticSugarMixer) {
      super(been);
    }
    makeSweetCaffeLatte(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const Latte = this.milkFother.makeMilk(coffee);
      const SweetLatte = this.sugar.addSugar(Latte);
      return SweetLatte;
    }
  }

  const aumaticSugarMixer = new AumaticSugarMixer();
  const cheapMilkSteamer = new CheapMilkSteamer();
  const sweetCaffeLatteMachine = new SweetCaffeLatteMachine(16, cheapMilkSteamer, aumaticSugarMixer);
  console.log(sweetCaffeLatteMachine.makeSweetCaffeLatte(2));
}
