var obj = {}

Object.defineProperty(obj, 'a', {
  get: function () {
    return 1321
  },  // getter
  set: function (value) {
    console.log('set')
  },  // setter
})

console.log(obj.a) // 相當於 get()

obj.a = 3 + 2  // set(3+2)

