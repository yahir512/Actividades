//
// your solution here
//
// pick one:
// binary search tree
//

import { Arbol, Hoja } from '../../../lahv/linked/Trees/clase2.js'

let tree = new Arbol();
let sheet = new Hoja(10);

tree.Insert(sheet, 10, new Hoja(5));
tree.Insert(sheet, 10, new Hoja(15));
tree.Insert(sheet, 5, new Hoja(9));
tree.Insert(sheet, 5, new Hoja(4));
tree.traverse(sheet)