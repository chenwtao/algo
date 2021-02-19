import {
  getDataExtractorApi,
  createGraphFromPointers,
  tryEval,
} from "@hediet/debug-visualizer-data-extraction";

getDataExtractorApi().registerDefaultExtractors();

export class SingleNode<T> {
  public left?: SingleNode<T>;
  public right?: SingleNode<T>;
  public data: number;
  public value: number;
  public label: string;
  public name: string;
  constructor(data: number, left?: SingleNode<T>, right?: SingleNode<T>) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.value = data;
    this.label = data.toString();
    this.name = data.toString();
  }
}

//前中后序遍历指的是当前节点和左右节点的关系
export class BinarySearchTree {
  public node: SingleNode<number>;

  insert(data: number) {
    if (!this.node) {
      this.node = new SingleNode(data);
      return this.node;
    }
    let p = this.node;
    while (p) {
      if (p.data < data) {
        if (!p.right) {
          p.right = new SingleNode(data);
          return;
        }
        p = p.right;
      } else {
        if (!p.left) {
          p.left = new SingleNode(data);
          return;
        }
        p = p.left;
      }
    }
  }

  binarySearch(data: number) {
    let p = this.node;

    while (p) {
      if (p.data > data) {
        p = p.left;
      } else if (p.data < data) {
        p = p.right;
      } else {
        return p;
      }
    }

    return null;
  }

  delete(data: number) {
    
  }

  preOrder(root: SingleNode<number>): any {
    if (!root) return null;
    console.log(root.data);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }

  inOrder(root: SingleNode<number>): any {
    if (!root) return null;
    this.inOrder(root.left);
    console.log(root.data);
    this.inOrder(root.right);
  }

  postOrder(root: SingleNode<number>): any {
    if (!root) return null;
    this.postOrder(root.left);
    this.postOrder(root.right);
    console.log(root.data);
  }
}

export class BinarySearchTreeTest {
  static run() {
    const searchTree = new BinarySearchTree();
    searchTree.insert(10);
    searchTree.insert(4);
    searchTree.insert(17);
    searchTree.insert(12);
    searchTree.insert(7);
    searchTree.insert(9);
    searchTree.insert(1);
    searchTree.insert(14);
    // console.log(11);
    searchTree.preOrder(searchTree.node);
    console.log(searchTree.binarySearch(2));
    console.log(searchTree.binarySearch(12));
  }
}
