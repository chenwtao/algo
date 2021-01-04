import List from "./List";

class ArrayList<T> implements List<T> {
  array: T[];
  cap: number;
  constructor(cap: number, array: T[]) {
    this.cap = cap;
    this.array = array;
  }

  length(): number {
    throw new Error("Method not implemented.");
  }
  insertToHead(value: any) {
    throw new Error("Method not implemented.");
  }
  findByValue(value: T): number {
    for (let index = 0; index < this.array.length; index++) {
      const element = this.array[index];
      if (value === element) {
        return index;
      }
    }
    return -1;
  }
  findByIndex(index: number) {
    return this.array[index];
  }
  insertToIndex(value: T, index: number): void {
    for (let i = this.array.length; i >= index; i--) {
      if (index === i) {
        this.array[i] = value;
      } else {
        this.array[i] = this.array[i - 1];
      }
    }
    console.log(this.array);
  }
  remove(value: T): boolean {
    throw new Error("Method not implemented.");
  }
  insertToTail(value: T): void {
    this.array.push(value);
  }
  isEmpty(): boolean {
    throw new Error("Method not implemented.");
  }
  clear(): void {
    throw new Error("Method not implemented.");
  }
  toString(): string {
    throw new Error("Method not implemented.");
  }
}

const arrayList = new ArrayList<number>(5, [1, 2, 3, 4, 5]);
arrayList.insertToIndex(6, 2);
console.log(arrayList.array);
