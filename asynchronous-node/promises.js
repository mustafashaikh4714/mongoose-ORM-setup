var asyncAdd = (a, b) => {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (typeof a === 'number' && typeof b ==='number' ) {
      resolve(a + b);
    } else {
        reject('Arguments must be a number..')
    }
  }, 1500)
 })
}

asyncAdd(5, 4).then((result) => {
    console.log('Result:', result);  
}, (errorMessage) => {
    console.log(errorMessage);
})




// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hey it worked..');
//         reject('Unable to fulfill the promise');
//     }, 2000)
// })


// somePromise.then((message) => {
//  console.log(message);
// }, (err) => {
//     console.log(err); 
// })