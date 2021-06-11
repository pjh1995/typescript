{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public
  // private
  // protected

  class CoffeeMachine {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level :: object마다 생성되지 않고, 클래스 자체에 존재함.
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans");
      }

      this.useCoffeeBean(shots);

      return {
        shots,
        hasMilk: false,
      };
    }

    useCoffeeBean(shots: number) {
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    fillCoffeeBean(beans: number) {
      if (beans < 0)
        throw new Error("value for beans should be greater than 0");
      this.coffeeBeans += beans;
    }
  }

  // const maker = new CoffeeMachine(30);
  const maker = CoffeeMachine.makeMachine(30);
  // maker.coffeBeans = 4; private

  class User {
    private firstName: string;
    private lastName: string;
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  const user = new User("jihyun", "park");
  console.log(user.fullName);

  class User2 {
    private internalAge: number = 0;
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {}
  }
  const user2 = new User2("jihyun2", "park2");
  console.log(user2.fullName);
  user2.age = 3;
  console.log(user2.age);
}
