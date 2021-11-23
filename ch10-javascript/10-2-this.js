{
  console.log(this);

  function simpleFunc() {
    console.log(this);
  }

  simpleFunc();

  class Counter {
    count = 0;
    increase = function () {
      console.log(this); // 부르는 객체가 this // 변경 o
    };
    increase2 = () => {
      console.log(this); // 선언될 당시의 this를 기억하고 있음. // 변경x
    };
  }

  const counter = new Counter();
  counter.increase();

  const caller = counter.increase;
  const caller1 = counter.increase2;
  const caller2 = counter.increase.bind(counter);
  caller();
  caller1();
  caller2();

  class Bob {}
  const bob = new Bob();
  bob.run = counter.increase;
  bob.run();
}
