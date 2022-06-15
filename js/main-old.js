// website.com / api / login 5s.then{
//     website.com / api / users 5s
//     website.com / api / books 4s
// }

// function getTodos() {
//     console.log("Todos so'rovi jo'natildi:", Date.now())
//     const resultPromise = fetch("https://jsonplaceholder.typicode.com/posts")
//         .then(response => response.json())
//         .finally(() => {
//             console.log("Todos so'rovi tugadi:", Date.now())
//         })


//     return resultPromise
// }

// function getUsers() {
//     console.log("Users so'rovi jo'natildi:", Date.now())

//     const resultPromise = fetch("https://jsonplaceholder.typicde.com/users")
//         .then(response => response.json())
//         .finally(() => {
//             console.log("Users so'rovi tugadi:", Date.now())
//         })
//     return resultPromise
// }


// function getAllResult() {
//     // return new Promise((resolve, reject) => {
//     //     const arr = []
//     //     getUsers()
//     //         .then(usersResult => {
//     //             getTodos().then(todosResult => {
//     //                 arr.push(usersResult, todosResult)
//     //                 resolve(arr)
//     //             }).catch(err => {
//     //                 reject(err)
//     //             })
//     //         })
//     //         .catch(err => reject(err))
//     // })


//     return Promise.race([getTodos(), getUsers()])
// }

// getAllResult().then(result => {
//     console.log(result)
// }).catch(err => console.log(err))



// function doneSlow() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("Slow function "))

//         }, 800)
//     })
// }

// function doneFast() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("Fast function")
//         }, 300)
//     })
// }

// function waitAndSplit(text) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(text.split(""))
//         }, 400)
//     })
// }





// async function doneAll(number) {

//     if (number % 2 == 1) throw new Error("Toq son kiritish mumkin emas")
//     return number * 2
//     // throw new Error("Xatolik")
//     // const slowResult = await doneSlow();
//     // if (!slowResult) throw new Error("Slow function xatolik")
//     // const fastResult = await doneFast()
//     // if (!fastResult) throw new Error("Fast function xatolik")
//     // console.log(slowResult, fastResult)
// }

// try {
//     doneAll(11)
// } catch (err) {
//     console.log(err)
// }


// // const promise = Promise.race([doneFast(), doneSlow()])
// // promise.then((result) => {
// //     console.log("1-process tugadi")
// //     return waitAndSplit(result)
// // }).then((splittedValue) => {
// //     console.log(splittedValue)

// // })

// //     .catch((err) => {
// //         console.log(err)
// //     })
// //     .finally(() => {
// //         console.log("Umumiy process tugadi")
// //     })

