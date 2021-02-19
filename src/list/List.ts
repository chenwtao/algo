export interface List<T> {
  findByValue(value: T): any;

  findByIndex(index: number): any;

  insertToIndex(value: T, index: number): void;

  insertAfter(value: T, node: Node<T>): void;

  insertBefore(value: T, node: Node<T>): void;

  removeByValue(value: T): boolean;

  removeByNode(node: Node<T>): boolean;

  insertToHead(value: T): void;

  insertToTail(value: T): Node<T>;

  reverse(): void;

  hasCircle(): boolean;

  toString(): string;

  // static merge<T>():T
  // static  merge();
}

export interface Node<T> {
  value: T;
  next: Node<T>;
  prev?: Node<T>;
}
