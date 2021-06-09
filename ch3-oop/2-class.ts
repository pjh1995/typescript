{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMachine {
        static BEANS_GRAMM_PER_SHOT: number = 7; // class level :: object마다 생성되지 않고, 클래스 자체에 존재함.
        coffeeBeans:number = 0;

        constructor(coffeeBeans:number) {
            this.coffeeBeans = coffeeBeans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }

        makeCoffee(shots:number):CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans');
            }
    
            this.useCoffeeBean(shots);
    
            return {
                shots,
                hasMilk: false
            }
        }

        useCoffeeBean(shots:number) {
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        fillCoffeeBean(beans:number) {
            this.coffeeBeans += beans;
        }
    }

    const coffeeMachine = new CoffeeMachine(30);
    console.log(coffeeMachine);
    const coffee = coffeeMachine.makeCoffee(3);
    console.log(coffee);
    const coffeeMachine2 = CoffeeMachine.makeMachine(30);
    console.log(coffeeMachine2);
}