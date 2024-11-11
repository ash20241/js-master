class MyPromise {
  constructor(callback) {
    this.data = null;
    this.catchData = null;
    callback(this.resolve, this.reject);
    this.thenCases = [];
    this.catchCase = [];
  }

  resolve = (a) => {
    this.data = a;
    this.thenCases.forEach((item) => item(this.data));
    this.thenCases = [];
  };

  reject = (b) => {
    this.catchData = b;
    this.catchCase.forEach((item) => item(this.catchData));
    this.catchCase = [];
  };

  then(callback) {
    if (this.data) callback(this.data);
    else {
      this.thenCases.push(callback);
    }
  }

  catch(callback) {
    if (this.catchData) callback(this.catchData);
    else {
      this.catchCase.push(callback);
    }
  }
}

const prom = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Done");
  }, 5000);
});

prom.then(function (data) {
  console.log("1" + data); // Prints "1 Done" after 1 second
});

prom.then(function (data) {
  console.log("2" + data); // Prints "2 Done" after 1 second
});

setTimeout(function () {
  prom.then(function (data) {
    console.log("3" + data); // Prints "3 Done" after 2 seconds
  });
}, 5000);
