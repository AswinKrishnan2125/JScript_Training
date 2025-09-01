let promise = new Promise(function(resolve, reject) {
  resolve(1);
  resolve(2);
  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);//1