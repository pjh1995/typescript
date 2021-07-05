{
  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  };

  class StackNodeImpl implements StackNode {
    private _value: string;
    private _next?: StackNode;
    get value(): string {
      return this._value;
    }
    get next(): StackNode {
      return this._next;
    }
    set next(item: StackNode) {
      this._next = item;
    }
    constructor(value: string) {
      this._value = value;
    }
  }

  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string | undefined;
  }

  class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;

    get size() {
      return this._size;
    }

    push(value: string) {
      const node: StackNode = {
        value,
        next: this.head,
      };
      this.head = node;
      this._size++;
    }

    pop(): string {
      if (this.head == null) {
        throw new Error('Stack is empty!');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;

      return '';
    }
  }
  const stack = new StackImpl();
  console.log(stack);
  stack.push('Elle 1');
  console.log(stack);
  stack.push('Elle 2');
  console.log(stack);
  stack.pop();
  console.log(stack);
}
