class MyPromise {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";
  //new Promise((resolve,reject)=>{}),这里executor就是传递的函数
  constructor(executor) {
    this.status = MyPromise.PENDING;
    this.value = null;
    this.callbacks = [];
    try {
      //new promise的时候获取参数函数的内部错误
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  resolve(value) {
    if (this.status === MyPromise.PENDING) {
      //pending 状态才可以修改
      this.status = MyPromise.FULFILLED;
      this.value = value;
      setTimeout(() => {
        this.callbacks.map((val) => {
          val.onFulfilled(this.value);
        });
      });
    }
  }
  reject(reason) {
    if (this.status === MyPromise.PENDING) {
      //pending 状态才可以修改
      this.status = MyPromise.REJECTED;
      this.value = reason;
      setTimeout(() => {
        this.callbacks.map((val) => {
          val.onRejected(this.value);
        });
      });
    }
  }
  then(onFulfilled, onRejected) {
    //如果onRejected没有传，reject的时候不能报错，
    if (typeof onFulfilled != "function") {
      onFulfilled = () => {};
    }
    if (typeof onRejected != "function") {
      onRejected = () => {};
    }
    return new MyPromise((resolve, reject) => {
      if (this.status === MyPromise.PENDING) {
        //如果执行then里面的方法时，resolve还没有被调用说明时异步调用的，那么先把这两个方法保存，resolve执行的时候在来执行
        this.callbacks.push({
          //如果在执行then里面的方法时发生错误，也要把错误捕获给onRejected处理
          onFulfilled: (value) => {
            try {
              onFulfilled(value);
            } catch (error) {
              onRejected(error);
            }
          },
          onRejected: (value) => {
            try {
              onRejected(value);
            } catch (error) {
              onRejected(error);
            }
          },
        });
      }
      if (this.status === MyPromise.FULFILLED) {
        setTimeout(() => {
          //放入下一次轮询队列执行
          try {
            onFulfilled(this.value);
          } catch (error) {
            onRejected(error);
          }
        });
      }
      if (this.status === MyPromise.REJECTED) {
        setTimeout(() => {
          //放入下一次轮询队列执行
          try {
            onRejected(this.value);
          } catch (error) {
            onRejected(error);
          }
        });
      }
    });
  }
}

export default MyPromise;
