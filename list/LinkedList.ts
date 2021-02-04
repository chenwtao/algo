import { List, Node } from "./List";
class Linkedist<T> implements List<T> {
  private readonly head: SingleNode<T> = null;
  constructor() {
    this.head = new SingleNode<T>(null);
  }
    reverse(): void {
        throw new Error("Method not implemented.");
    }
    hasCircle(): boolean {
        throw new Error("Method not implemented.");
    }
    merge(a: Node<T>, b: Node<T>): Node<T> {
        throw new Error("Method not implemented.");
    }
    findByValue(value: T) {
        throw new Error("Method not implemented.");
    }
    findByIndex(index: number) {
        throw new Error("Method not implemented.");
    }
    insertToIndex(value: T, index: number): void {
        throw new Error("Method not implemented.");
    }
    insertAfter(value: T, node: Node<T>): void {
        throw new Error("Method not implemented.");
    }
    insertBefore(value: T, node: Node<T>): void {
        throw new Error("Method not implemented.");
    }
    removeByValue(value: T): boolean {
        throw new Error("Method not implemented.");
    }
    removeByNode(node: Node<T>): boolean {
        throw new Error("Method not implemented.");
    }
    insertToHead(value: T): void {
        throw new Error("Method not implemented.");
    }
    insertToTail(value: T): Node<T> {
        throw new Error("Method not implemented.");
    }
    toString(): string {
        throw new Error("Method not implemented.");
    }

    
}

class SingleNode<T> implements Node<T> {
  value: T;
  next: SingleNode<T>;
  prev: SingleNode<T>;
  constructor(
    value: T,
    next: SingleNode<T> = null,
    prev: SingleNode<T> = null
  ) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}
