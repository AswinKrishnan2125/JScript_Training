function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let resultsCount = 0;
    let hasError = false; // we'll set it to true upon first error

    promises.forEach((promise, index) => {
      promise
        .then(result => {
          if (hasError) return; // ignore the promise if already errored
          results[index] = result;
          resultsCount++;
          if (resultsCount === promises.length) {
            resolve(results); // when all results are ready - successs
          }
        })
        .catch(error => {
          if (hasError) return; // ignore the promise if already errored
          hasError = true; // wops, error!
          reject(error); // fail with rejection
        });
    });
  });
}