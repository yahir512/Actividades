function preorder(n) {
  if (n) {
    console.log(n.d)
    preorder(n.l)
    preorder(n.r)
  }
}