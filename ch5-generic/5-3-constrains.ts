{
  interface Employee {
    pay: () => void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log('FullTime Employee pay');
    }
    workFullTimer() {
      console.log('workFullTimer');
    }
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log('PartTime Employee pay');
    }
    workPartTimer() {
      console.log('workFullTimer');
    }
  }

  // 세부적인 타입을 인자로 받아서 추상적인 타입으로 return 을 하는 경우는 좋지 않음.
  //   function pay(employee: Employee): Employee {
  //     employee.pay();
  //     return employee;
  //   }

  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const user1 = new FullTimeEmployee();
  const user2 = new PartTimeEmployee();
  user1.workFullTimer();
  user2.workPartTimer();
  const user1AfterPay = pay(user1);
  const user2AfterPay = pay(user2);

  const obj = {
    name: 'jhpark',
    age: 28,
  };

  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  const value = getValue(obj, 'name');
  console.log(value);
}
