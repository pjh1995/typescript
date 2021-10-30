{
  //   function checkNotNull(arg: number | null): number {
  //     if (arg == null) {
  //       throw new Error('not valid number');
  //     }
  //     return arg;
  //   }

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid number');
    }
    return arg;
  }
  const result = checkNotNull(11);
  console.log(result);
  const result1 = checkNotNull('String');
  console.log(result1);
  const result2 = checkNotNull(true);
  console.log(result2);
}
