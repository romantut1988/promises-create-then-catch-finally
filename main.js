// promise
// const fetch = (url, callback) => {
//     callback(err, data)
// }

// fetch('https://books.com/authors', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         fetch('https://books.com/authors/75', (err, data) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 fetch('https://books.com/authors/75/books', (err, data) => {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         fetch('https://books.com/authors/75/books/102', (err, data) => {
//                             if (err) {
//                                 console.log(err);
//                             } else {
//                                 fetch('https://books.com/authors/75/books/102/page', (err, data) => {
//                                     if (err) {
//                                         console.log(err);
//                                     } else {
//                                     }
//                                 });
//                             }
//                         });
//                     }
//                 });
//             }
//         });
//     }
// });

// fetch('https://books.com/authors')
//     .then((data) => {
//         return fetch('https://books.com/authors/75');
//     })
//     .then((data) => {
//         return fetch('https://books.com/authors/75/books');
//     })
//     .then((data) => {
//         return fetch('https://books.com/authors/75/books/102');
//     })
//     .then((data) => {
//         return fetch('https://books.com/authors/75/books/102/page')
//     })
//     .catch((err) => {
//         console.log(err)
//     })

//pending
// const server = {
//     getData() {
//         return new Promise((res, rej) => {
//             setTimeout(() => {
//                 // res("some data")
//                 rej("some error")
//             }, 2000);
//         })
//     }
// }
// const promise = server.getData();
// console.log(promise);

// function NewPromise(cb) {
//     const resolve = (result) => {
//         return {
//             state: 'fulfiled',
//             result: result
//         }
//     }
//     const reject = (err) => {
//         return {
//             state: 'rejected',
//             result: err
//         }
//     }
//     cb(resolve, reject)
// }

// const fs = require('fs')
// const readFile = (path) => {
//     return new Promise((res, rej) => {
//         fs.readFile(path, (err, file) => {
//             if (err) {
//                 rej(err)
//             } else {
//                 res(file)
//             }
//         })
//     })
// }
// const pr = readFile('./index.js')

// const server = {
//     getData() {
//         return new Promise((res, rej) => {
//             setTimeout(() => {
//                 res("some data")
//                 // rej("some error")
//             }, 1000)
//         })
//     }
// }
// const promise = server.getData();

// promise.then((data) => {
//     console.log('Then', data);
// }, (err) => {
//     console.log('Catch from then ', err);
// });

// promise.catch((err) => {
//     console.log('Catch', err);
// });

// promise.finally(() => {
//     console.log('Finaly ');
// })

// const promise = server.getData();

// promise
//     .then((data) => {
//         console.log("Then1", data);
//         return 10;
//     })
//     .then((data) => {
//         console.log("Then2", data);
//         throw new Eror("ERROR");
//     })
//     .then((data) => {
//         console.log("Then3");
//     })
//     .catch((err) => {
//         console.log("Catch1", err);
//         return 20;
//     })
//     .then((data) => {
//         console.log("Then4", data);
//     })
//     .catch((err) => {
//         console.log("Catch2", err);
//     })
//     .finally((data) => {
//         console.log("Finally", data);
//         return 30;
//     })

// Напишите функию delay(ms), которая будет фозвращать промис, 
// переходящий в состоянии "resolved" через ms миллисекунд.
// Пример использования:

const delay = (ms) => {
    return new Promise((res) => {
        setTimeout(res, ms);
    })
}

delay(2000).then(() => {
    console.log("Hello")
})