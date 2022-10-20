// Promise Practice

function checkIsSuccess(data) {
    return new Promise(function (resolve, reject) {
        if (data === "success") {
            return resolve("successfully executed")
        } else {
            return reject("unsuccessfully executed")
        }
    })
}


// whenever a method is coming from a promise, use then method
// if returning something from then, i'll need another then
checkIsSuccess('sccess').then(function (result) {
    console.log(result)
}).catch(function(error) {
    console.error(error)
})

// console.log(checkIsSuccess('success'));