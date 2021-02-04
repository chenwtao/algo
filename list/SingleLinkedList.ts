import { List, Node } from "./List";

class SingleNode<T> implements Node<T> {
  public value: T;
  public next: SingleNode<T> | null;
  constructor(value: T, next: SingleNode<T> = null) {
    this.value = value;
    this.next = next;
  }
}

class SingleLinkedList<T> implements List<T> {
  head: SingleNode<T> = null;
  constructor() {
    this.head = new SingleNode<T>(null);
  }
  static merge<T>(a: Node<T>, b: Node<T>): Node<T> {
    let newList: Node<T> = new SingleNode<T>(null);
    let curNode: Node<T> = newList;
    while (a && b) {
      if (a.value < b.value) {
        curNode.next = a;
        a = a.next;
      } else {
        curNode.next = b;
        b = b.next;
      }
      // console.log(a.value, b.value, curNode.value);
      curNode = curNode.next;
    }

    if (a) {
      curNode.next = a;
    } else {
      curNode.next = b;
    }
    return newList;
  }

  hasCircle(): boolean {
    let slow = this.head.next;
    let fast = this.head.next!.next;
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow!.next;
      if (fast == slow) {
        return true;
      }
    }
    return false;
  }

  insertAfter(value: T, node: Node<T>): void {
    let newNode = new SingleNode<T>(value);
    newNode.next = node.next;
    node.next = newNode;
  }

  insertBefore(value: T, node: Node<T>): void {
    let prevNode = this.head;
    let newNode = new SingleNode<T>(value);
    while (true) {
      if (prevNode.next === null) {
        return;
      }

      if (prevNode.next === node) {
        break;
      }

      prevNode = prevNode.next;
    }
    newNode.next = prevNode.next;
    prevNode.next = newNode;
  }

  removeByValue(value: T): boolean {
    //前趋节点
    let prevNode = this.head;
    while (true) {
      //下一个节点为null时
      if (prevNode.next == null) {
        return false;
      }

      //下一个节点为要删除的节点时，退出循环
      if (prevNode.next.value == value) {
        break;
      }

      prevNode = prevNode.next;
    }

    prevNode.next = prevNode.next.next;
    return true;
  }

  removeByNode(node: Node<T>): boolean {
    throw new Error("Method not implemented.");
  }

  public findByValue(value: T): SingleNode<T> | null {
    let p = this.head;
    while (p.next != null) {
      if (p.next.value === value) return p.next;
      p = p.next;
    }
    return p.next;
  }

  public findByIndex(index: number): SingleNode<T> | null {
    let p = this.head;
    let pos = 0;
    while (p.next != null && pos !== index) {
      p = p.next;
      pos++;
    }
    return p.next;
  }

  insertToIndex(value: T, index: number): void {
    let newNode = new SingleNode<T>(value);
    let i: number = 0;
    let curNode = this.head;
    while (true) {
      if (curNode.next == null) {
        return;
      }
      //寻找到前趋节点
      if (i === index) {
        break;
      }
      curNode = curNode.next;
      i++;
    }
    newNode.next = curNode.next;
    curNode.next = newNode;
  }

  insertToHead(value: T) {
    this.insertNodeToHead(new SingleNode(value));
  }
  insertToTail(value: T): Node<T> {
    let newNode = new SingleNode(value);
    this.insertNodeToTail(newNode);
    return newNode;
  }

  private insertNodeToHead(node: SingleNode<T>) {
    node.next = this.head.next;
    this.head.next = node;
  }
  private insertNodeToTail(node: SingleNode<T>) {
    let curNode = this.head;
    while (curNode.next != null) {
      curNode = curNode.next;
    }
    curNode.next = node;
  }
  public toString(): string {
    let ret: string = "";
    let p = this.head;
    while (p.next != null) {
      ret = `${ret} ${p.next.value} `;
      p = p.next;
    }
    return ret;
  }

  // //链表反转(新建链表)
  // public reverse() {
  //   let curNode = this.head.next;
  //   this.head.next = null;
  //   while (true) {
  //     if (curNode == null) {
  //       break;
  //     }
  //     let newNode = new SingleNode(curNode.value);
  //     newNode.next = this.head.next;
  //     this.head.next = newNode;
  //     curNode = curNode.next;
  //   }
  // }

  //链表反转(原地反转)
  public reverse() {
    let curNode = this.head.next;
    let prevNode: SingleNode<T> = null;
    while (true) {
      if (curNode == null) {
        this.head.next = prevNode;
        break;
      }
      let nextNode: SingleNode<T> = curNode.next;
      curNode.next = prevNode;
      prevNode = curNode;
      curNode = nextNode;
    }
  }
}

const singleLinkedList = new SingleLinkedList<number>();
const singleLinkedList2 = new SingleLinkedList<number>();
// const godNode = singleLinkedList.insertToTail("god");
// const myNode = singleLinkedList.insertToTail("my");
singleLinkedList.insertToTail(1);
singleLinkedList.insertToTail(2);
singleLinkedList.insertToTail(3);
singleLinkedList.insertToTail(4);

singleLinkedList2.insertToTail(10);
singleLinkedList2.insertToTail(11);
singleLinkedList2.insertToTail(12);
singleLinkedList2.insertToTail(13);

// console.log(singleLinkedList.printLinkedList())
// singleLinkedList.insertToIndex("haha", 1);
// singleLinkedList.removeByValue("my");
// singleLinkedList.insertBefore("2222222", godNode);
console.log(singleLinkedList.toString());
console.log(singleLinkedList2.toString());
// singleLinkedList.reverse();
console.log("--------");
let node = SingleLinkedList.merge(
  singleLinkedList.head.next,
  singleLinkedList2.head.next
);

while (node.next !== null) {
  node = node.next;
  console.log(node.value);
}
