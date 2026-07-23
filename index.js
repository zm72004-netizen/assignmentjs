// console.log("ziad")
// console.log("amir")
// console.log(7 + 22)
// console.log(7 + 22)
// console.log(7 + 10)
// console.log(7 + 10)
// let m = 7
// console.log(m)
// var z = 7
// console.log(typeof z)
// var x = BigInt(9007199254740991)
// console.log(x)
// console.log(x + BigInt(1))
// console.log(x + BigInt(3))
// console.log(x + BigInt(2))
// console.log(typeof x)
// var c = {
//     name: "ziad",
//     age: 25
// }
// console.log(c)
// console.log(typeof c)
// var f = [1, 2, 3, 4]
// console.log(f)
// // console.log(f[0])
// // console.log(f[1])
// // console.log(f[2])
// // console.log(f[3])
// // console.log(f.at(1))
// // console.log(f.)
// // console.log(f.)
// console.log(typeof f)
// let x = {
//     name: "ziad",
//     age: 22,
//     gender: "male"
// }
// if (x.age > 25) {
//     console.log("welcome")
// } else {
//     console.log("not allowed")
// }
// switch (x.age) {
//     case 10:
//         console.log("ok")
//     case 15:
//         console.log("ok")
//     case 22:
//         console.log("ok")
//     case 25:
//         console.log("ok")
//     case 30:
//         console.log("ok")
//         break;
//     default:
//         console.log("default")
// }

// function ta2reeb(num1, num2) {
//     console.log(Math.round(num1 + num2))
// }

// let ta2reeb2 = function (num1, num2) {
//     console.log(Math.round(num1 + num2))
// }
// ta2reeb2(6, 5)
// let ta2reeb3 = num1 => {
//     console.log(Math.round(num1))
// }
// ta2reeb3(4.5)
// function welcoming(name, age) {
//     return "name is " + name + " your age is " + age
// }
// console.log(welcoming("ziad", 18))

// function welcoming2({ name, age }) {
//     return "walcome " + name + " your age is " + age
// }
// console.log(welcoming2({ age: 18, name: "ziad" }))
// let obj = {
//     name: "ziad",
//     age: 18,
//     isGrad: true,
//     gender: "male",
//     address: {
//         home: "alex",
//         work: "cairo",
//         test: function (name) {
//             console.log(this)
//         }
//     },
//     test2: function () {
//         console.log(this)
//     },
//     test: () => {
//         console.log(this)
//     }
// }
// obj.address.test("ziad")
// obj.test2()
// obj.test()
// function parent(zn) {
//     console.log("parent")
//     zn()
//     console.log("parent")
// }
// function child() {
//     console.log("iam a child")
// }
// parent(child)
// let x = ["omar", "ali", "osama", "ziad", "oosha", "loka"]
// let result = x.findLastIndex((ele) => {
//     return true
// })
// console.log(result)
let user = {
    name: "ziad",
    age: 18,
    isGrad: true,
    scores: {
        math: 10
    },
    welcoming() {
        let that = this
        let adult = function () {
            console.log(that)
            return that.age > 24
        }
        console.log("welcome " + this.name)
    }
}
user.welcoming()