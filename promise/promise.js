const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

// 手寫 Promise
class MyPromise {
  // 私有屬性，強約束外面不能用
  #state = PENDING;
  #result = undefined;
  constructor(executor) {
    // 透過命名規範做輕量級約束，不希望外部直接存取
    // this._state = PENDING;
    // this._result = undefined;

    const resolve = (data) => {
      // if(this.#state !== PENDING) return;
      // this.#state = FULFILLED;
      // this.#result = data;
      this.#changeState(FULFILLED, data)
    }
    const reject = (reason) => {
      // if(this.#state !== PENDING) return;
      // this.#state = REJECTED;
      // this.#result = reason;
      this.#changeState(REJECTED, reason)
    }

    try {
      executor(resolve, reject)
    } catch (err) { 
      reject(err)
    }
  }

  #changeState(state, result) {
    if(this.#state !== PENDING) return;
    this.#state = state;
    this.#result = result;
    console.log(this.#state, this.#result)
  }
}


const p = new MyPromise((resolve, reject) => {
  // resolve('success')
  // reject('error')
})

console.log(p)

p.then(
  (res) => {
  console.log(res)
}, (reason) => { 
  console.log(reason)
})