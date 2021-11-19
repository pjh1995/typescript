{
  type Check<T> = T extends string ? boolean : number;
  type Type = Check<string>;

  type TypeName<T> = T extends string ? 'string' : T extends number ? 'number' : 'object';
  type CheckObject<T> = T extends object ? never : T;

  const txt = 'text';
  const obj = {
    name: 'jihyun',
  };
  type v = CheckObject<'sss'>;
  type vv = CheckObject<{ a: 'bb' }>;
  const checkText: CheckObject<typeof txt> = txt;
  //   const checkObj: CheckObject<typeof obj> = obj;
  function checkNotObject<T>(arg: T extends object ? null : T): T {
    if (arg == null) {
      throw new Error('not valid');
    }
    return arg;
  }

  function checkNotObject2<T>(arg: Exclude<T, object>): T {
    if (arg == null) {
      throw new Error('not valid');
    }
    return arg;
  }

  //   const b = checkNotObject2(obj);
}
