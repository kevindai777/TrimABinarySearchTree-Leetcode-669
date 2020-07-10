//Objective is to 'trim' a binary tree such that we only have nodes of values from
//L to R.

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(3)
tree.addLeftNode(tree.root, 9)
tree.addRightNode(tree.root, 20)
tree.addRightNode(tree.root.right, 7)
tree.addLeftNode(tree.root.right, 15)

let L = 7, R = 15


//O(n) solution that recursively builds a new tree

function trim(root, L, R) {
    if (!root) {
        return null
    }

    root.left = trim(root.left, L, R)
    root.right = trim(root.right, L, R)

    if (root.val < L) {
        return trim(root.right, L, R)
    }

    if (root.val > R) {
        return trim(root.left, L, R)
    }

    return root
}
return trim(tree.root, L, R)