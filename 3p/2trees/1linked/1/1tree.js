function Node(o) {
  this.d = o
  this.l = null
  this.r = null
}
let p = new Node('+')
let o1 = new Node(3)
let o2 = new Node(-1)
p.l = o1;
p.r = o2;

preorder(p)