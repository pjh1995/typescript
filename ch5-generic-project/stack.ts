{
  type StackNode<T> = {
    next?: StackNode<T>;
    value: T;
  };
  interface Stack<T> {
    readonly size: number;
    pop: () => T;
    push: (value: T) => void;
  }

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;

    constructor(private capacity: number) {}

    get size() {
      return this._size;
    }

    pop() {
      if (this.head == null) {
        throw new Error('Stack is Empty');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }

    push(value: T) {
      if (this.capacity === this.size) {
        throw new Error('Stack is Full');
      }

      const node = { next: this.head, value };
      this.head = node;
      this._size++;
    }
  }

  const stack = new StackImpl<String>(3);
  stack.push('jhpark');
  stack.push('jhpark2');
  stack.push('jhpark3');

  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  const stack2 = new StackImpl<number>(3);
  stack2.push(1);
  stack2.push(2);
  stack2.push(3);

  while (stack2.size !== 0) {
    console.log(stack2.pop());
  }
}
