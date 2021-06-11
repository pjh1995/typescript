{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }
  // public
  // private
  // protected

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level :: object마다 생성되지 않고, 클래스 자체에 존재함.
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    private grindBeans(shots: number) {
      this.useCoffeeBean(shots);
    }

    private preheat() {
      console.log("heating up...");
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
        throw new Error("Not enough coffee beans");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    fillCoffeeBean(beans: number) {
      if (beans < 0)
        throw new Error("value for beans should be greater than 0");
      this.coffeeBeans += beans;
    }
  }

  // const maker = new CoffeeMachine(30);
  const maker: CoffeeMachine = CoffeeMachine.makeMachine(30);
  // maker.coffeBeans = 4; private
  maker.fillCoffeeBean(32);
  const coffee = maker.makeCoffee(5);
  console.log(coffee);
}
