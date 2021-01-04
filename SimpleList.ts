import List from "./List";

class SindleNode<T> {
  public value: T;
  public next: SindleNode<T> | null;
  constructor(value: T, next: SindleNode<T> = null) {
    this.value = value;
    this.next = next;
  }
}

class SimpleList<T> implements List<T> {
  private readonly head: SindleNode<T>;
  constructor() {
    this.head = new SindleNode<any>(null);
  }
  length(): number {
    throw new Error("Method not implemented.");
  }
  isEmpty(): boolean {
    throw new Error("Method not implemented.");
  }
  clear(): void {
    throw new Error("Method not implemented.");
  }

  insertToHead(value: any) {
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

  remove(value: T): boolean {
    throw new Error("Method not implemented.");
  }

  insertToTail(value: T): void {
    const newNode = new SindleNode(value, null);
    this.insertNodeToTail(newNode);
  }

  private insertNodeToTail(newNode: SindleNode<T>) {
    let p = this.head;
    while (p.next != null) {
      p = p.next;
    }
    p.next = newNode;
  }

  toString(): string {
    throw new Error("Method not implemented.");
  }
}
