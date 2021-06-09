{
  // Javascript 기본 타입 복습
  // Primitive(원시타입): number, string, boolean, bigint, symbol, null, undefined;
  // Object: function, array ...

  // number
  const num: number = 3;

  // string
  const str: string = 'hello';

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // undefined만 선언 가능
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // null만 선언 가능
  let person2: string | null;

  // unknown : 최대한 쓰지 않는것이 좋음!!
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any : 최대한 쓰지 않는것이 좋음!!
  let anything: any = 0;
  anything = 'hello';

  ///// 함수 리턴값 ////
  // void
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // ????

  //never : 절대 리턴을 하지 않음!
  function throwError(message: string): never {
    // message => server(log);
    throw new Error(message);
    // while(true){}
  }
  let neverEnding: never; // ????

  // object;
  let obj: object; // 모든 object가 다 사용 가능..ㅜ 사용하지 않는 것이 좋음.
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'jihyun' });
  acceptSomeObject({ animal: 'dog' });
}
