{
  type Video = {
    title: string;
    author: string;
  };

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for..in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]; // for..in
  };

  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: 'ss',
  };

  type Animal = {
    name: string;
    age: number;
  };

  type animalOptional = Optional<Animal>;
  const animalOp: animalOptional = {};

  type AnimalReadOnly = ReadOnly<Animal>;
  const animalRe: AnimalReadOnly = {
    name: 'a',
    age: 3,
  };
  //   animalRe.name = 'bb';
  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };
  const obj2: Nullable<Video> = {
    title: null,
    author: 'ss',
  };
  const obj3: VideoOptional = {
    title: null,
    author: 'vv',
  };
}
