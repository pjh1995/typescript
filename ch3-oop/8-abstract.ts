{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    sugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level :: object마다 생성되지 않고, 클래스 자체에 존재함.
    private coffeeBeans: number = 0;

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    private grindBeans(shots: number) {
      this.useCoffeeBean(shots);
    }

    private preheat() {
      console.log('heating up...');
    }

    protected abstract extract(shots: number): CoffeeCup;

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

  class CaffeLatteMachine extends CoffeeMachine {
    private stramMilk(): void {
      console.log('Steaming milk...');
    }
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMachine extends CoffeeMachine {
    constructor(beans: number) {
      super(beans);
    }
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        sugar: true,
      };
    }
  }

  const latteMachine = new CaffeLatteMachine(23);
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);

  const sweetCoffeeMachine = new SweetCoffeeMachine(23);
  const coffeeWithSugar = sweetCoffeeMachine.makeCoffee(1);
  console.log(coffeeWithSugar);

  const machines: CoffeeMachine[] = [
    new CaffeLatteMachine(16),
    new SweetCoffeeMachine(16),
    new CaffeLatteMachine(16),
    new SweetCoffeeMachine(16),
  ];

  machines.forEach((machine) => {
    console.log('--------------------------');
    machine.makeCoffee(1);
  });
}
