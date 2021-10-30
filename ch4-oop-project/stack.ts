{
  type StackNode = {
    next?: StackNode;
    value: string;
  };
  interface Stack {
    readonly size: number;
    pop: () => string;
    push: (value: string) => void;
  }

  class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;

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

    push(value: string) {
      if (this.capacity === this.size) {
        throw new Error('Stack is Full');
      }

      const node: StackNode = { next: this.head, value };
      this.head = node;
      this._size++;
    }
  }

  const stack = new StackImpl(3);
  stack.push('jhpark');
  stack.push('jhpark2');
  stack.push('jhpark3');

  while (stack.size !== 0) {
    console.log(stack.pop());
  }
  console.log(stack.pop());
}
