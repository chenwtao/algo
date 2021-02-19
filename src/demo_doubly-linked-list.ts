import {
  getDataExtractorApi,
  createGraphFromPointers,
} from "@hediet/debug-visualizer-data-extraction";

getDataExtractorApi().registerDefaultExtractors();

export class DoublyLinkedListTest {
  static run() {
    const head = new DoublyLinkedListNode("1");
    head.setNext(new DoublyLinkedListNode("2"));
    head.next!.setNext(new DoublyLinkedListNode("3"));
    const tail = new DoublyLinkedListNode("4");
    head.next!.next!.setNext(tail);
    reverse(new DoublyLinkedList(head, tail));
    console.log("finished");
  }
}

function reverse(list: DoublyLinkedList) {
  // Open a new Debug Visualizer
  // and enter `visualize()`!
  const visualize = () => {
    let data = createGraphFromPointers(
      {
        last,
        "list.head": list.head,
        "list.tail": list.tail,
      },
      (i) => ({
        id: i.id,
        label: i.name,
        edges: [
          { to: i.next!, label: "next" },
          { to: i.prev!, label: "prev" },
        ].filter((r) => !!r.to),
      })
    );
    console.log("data====>", data);
  };
  // Finished nodes have correct pointers,
  // their next node is also finished.
  const finished = new Set();
  var last: DoublyLinkedListNode | null = null;
  list.tail = list.head;
  while (list.head) {
    list.head.prev = list.head.next;
    list.head.next = last;
    finished.add(list.head);
    last = list.head;
    list.head = list.head.prev;
  }

  list.head = last;
}

class DoublyLinkedList {
  constructor(
    public head: DoublyLinkedListNode | null,
    public tail: DoublyLinkedListNode | null
  ) {}
}

let id = 0;
class DoublyLinkedListNode {
  public readonly id = (id++).toString();
  constructor(public name: string) {}

  next: DoublyLinkedListNode | null = null;
  prev: DoublyLinkedListNode | null = null;

  public setNext(val: DoublyLinkedListNode): void {
    val.prev = this;
    this.next = val;
  }
}
