{
  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  // object
  const obj1: PositionType = {
    x: 1,
    y: 2,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 2,
    z: 3,
  };

  // class
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }

  class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
  }

  //Extends
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }

  type ZPositionType = PositionType & { z: number };

  //only interfaces can be merged
  interface PositionInterface {
    z: number;
  }

  //   type PositionType = {
  //     z: number;
  //   };

  // Type aliases can use computed properties
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person['name'];

  type NumberType = number;
  type Direction = 'right' | 'left'; // union
}
