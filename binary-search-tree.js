class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    //If the tree is empty, put the new node as the root
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    //Keep track of where we are
    let current = this.root;
    while (true) {
      //If the value is less than currentNode, check to see if it is empty, if it is create a new node.
      if (val < current.val) {
        if (current.left === null) {
          current.left = new Node(val);
          return this;
        }
        //If the value is not empty, move to the next left node
        current = current.left;
      }
      //If the value is greater then the node, check to see if it is empty, if it is, create a new node
      else if (val > current.val) {
        if (current.right === null) {
          current.right = new Node(val);
          return this;
        }
        //If the node is not empty, move to the right
        current = current.right;
      } else {
        break;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    if (node === null) {
      return new Node(val);
    }
    if (val < node.val) {
      node.left = this.insertRecursively(val, node.left);
    } else if (val > node.val) {
      node.right = this.insertRecursively(val, node.right);
    }
    return node;
  }

  insertRecursively(val) {
    this.root = this.insertRecursively(val, this.root);
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    //While there is a node in the tree
    while (current !== null) {
      //If the node is equal to the value, return it
      if (current.val === val) {
        return current;
      }
      //If the node is less then value, move left,
      if (val < current.val) {
        current = current.left;
      }
      //Else move right
      else {
        current = current.right;
      }
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (node === null) {
      return undefined;
    }
    if (node.val === val) return node;

    if (val < node.val) {
      return this.findRecursively(val, node.left);
    } else {
      return this.findRecursively(val, node.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const visited = [];

    function traverse(node) {
      if (node === null) return;

      visited.push(node.val);
      traverse(node.left);
      traverse(node.right);
    }

    traverse(this.root);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const visited = [];

    function traverse(node) {
      if (node === null) return;

      traverse(node.left);
      visited.push(node.val);
      traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const visited = [];

    function traverse(node) {
      if (node === null) return;

      traverse(node.left);
      traverse(node.right);
      visited.push(node.val);
    }
    traverse(this.root);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const queue = [];
    const visited = [];
    let node;

    if (this.root) {
      queue.push(this.root);
    }

    while (queue.length) {
      let node = queue.shift();
      visited.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
