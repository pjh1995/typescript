{
  const obj = {
    name: 'jihyun',
  };
  obj.name;
  obj['name'];

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name'];
  const text: Name = '3';

  type Gender = Animal['gender'];
  const g: Gender = 'female';

  type Keys = keyof Animal;
  const key: Keys = 'age';

  type Person = {
    name: string;
    gender: Animal['gender'];
  };
}
