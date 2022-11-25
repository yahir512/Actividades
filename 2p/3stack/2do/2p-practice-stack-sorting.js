function stack(top) {
  this.data = []
  this.top = top
  this.full = full
  this.empty = empty
  this.push = push
  this.pop = pop
  this.show = show
  this.peek = peek

  function push(element) {
    if (this.full()) {
      console.log("pila llena")
    } else {
      this.data.unshift(element)
    }
  }

  function pop() {
    if (this.empty()) {
      console.log("pila vacia")
    }
    else {
      return this.data.shift()
    }
  }

  function full() {
    if (this.data.length === this.top)
      return true
    else
      return false
  }

  function empty() {
    if (this.data.length === 0)
      return true
    else
      return false
  }

  function show() {
    let show = ""
    for (let i = 0; i < this.data.length; ++i) {
      show += this.data[i] + "\n"
    }
    return show
  }

  function peek() {
    return this.data[0]
  }
}

var pasos = [0,0,0,0,0]
var tiempo = [0,0,0,0,0]

function ordenamiento_pila(x) {
  for (let i = 1; i <= 5; i++) {
    var start = Date.now()
    let pila = new stack(x);
    let pila2 = new stack(x);
    let r,j = 1;
    pila.push(Math.floor(Math.random() * (x - 1) + 1))
    
    while (j < x) {
      while (!pila2.empty()) {
        pila.push(pila2.pop())
        pasos[i-1]++
      }
      r = Math.floor(Math.random() * (x - 1) + 1)
      while (r <= pila.peek() && !pila.empty()) {
        pila2.push(pila.pop())
        pasos[i-1]++
      }
      if (r >= pila.peek() || pila.empty()) {
        pila.push(r)
        pasos[i-1]++
      }
      j++
    }
    while (!pila2.empty()) {
      pila.push(pila2.pop())
    }
    var end = Date.now()
    console.log(pila.show())
    console.log("pasos: " + pasos[i-1])
    tiempo[i - 1] = end - start
    console.log("tiempo:"+ tiempo[i - 1] + "ms")
  }
}
ordenamiento_pila(10)
pasos[5] = (pasos[0] + pasos[1] + pasos[2] + pasos[3] + pasos[4])
tiempo[5] = (tiempo[0] + tiempo[1] + tiempo[2] + tiempo[3] + tiempo[4])
console.log("total de tiempo: " + tiempo[5] + "ms")
console.log("total de pasos: " + pasos[5])
console.log("promedio tiempo: " + tiempo[5]/5 + "ms")
console.log("promedio pasos: " + pasos[5]/5)
ordenamiento_pila(100)
pasos[5] = (pasos[0] + pasos[1] + pasos[2] + pasos[3] + pasos[4])
tiempo[5] = (tiempo[0] + tiempo[1] + tiempo[2] + tiempo[3] + tiempo[4])
console.log("total de tiempo: " + tiempo[5] + "ms")
console.log("total de pasos: " + pasos[5])
console.log("promedio tiempo: " + tiempo[5]/5 + "ms")
console.log("promedio pasos: " + pasos[5]/5)
ordenamiento_pila(1000)
pasos[5] = (pasos[0] + pasos[1] + pasos[2] + pasos[3] + pasos[4])
tiempo[5] = (tiempo[0] + tiempo[1] + tiempo[2] + tiempo[3] + tiempo[4])
console.log("total de tiempo: " + tiempo[5] + "ms")
console.log("total de pasos: " + pasos[5])
console.log("promedio tiempo: " + tiempo[5]/5 + "ms")
console.log("promedio pasos: " + pasos[5]/5)