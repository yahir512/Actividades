//
// imports
// Tree
//
import {root,n1,n2} from './tree-object.js'
function traverse(n) {
  if (n !== null) {//else //base case
    console.log(n.d)//traverse, analize, explore, search, TASK (console)
    traverse(n.l)
    traverse(n.r)
  }//else
}



traverse(root)
console.log()