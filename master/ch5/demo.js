var aGoods = {
  pic: "",
  title: "",
  desc: "",
  sellNumber: 1,
  favorRate: 2,
  price: 3
}

// 舊寫法
// function UIGoods(g) {
//   this.data = g
//   this.choose = 0
// }

// ES6 寫法
class UIGoods {
  constructor(g) {
    // this.data = g
    // this.choose = 0
    Object.defineProperty(this, 'data', { 
      value: g, 
      // writable: true,
      // configurable: false 
    })
  }
}

var g = new UIGoods(aGoods)
g.data = 'asa'
console.log(g.data)