// const set = new Set()
// function isomorphic(str1, str2) {
//     const map = {}
//     if (str1.length !== str2.length) return undefined
//     for (let i = 0; i < str1.length; i++) {
//         let char1 = str1.charAt(i)
//         let char2 = str2.charAt(i)
//         if (typeof map[char1] === 'undefined') {
//             map[char1] = char2
//             console.log(map[char1])
//         } else if (map[char1] !== char2) {
//             return false
//         }

//         for (var key in map) {
//             if (key !== char1 && char2 === map[key]) {
//                 return false
//             }
//         }
//     }
//     return true
// }

// function isIsomorphic(str1, str2) {
//     var obj = {}
//     for (let i = 0; i < str1.length; i++) {
//         if (!obj[str1[i]]) {
//             obj[str1[i]] = str2[i]
//         } else {
//             if (obj[str1[i]] !== str2[i]) {
//                 return false
//             }
//         }
//     }
//     return true
// }
// console.log(isIsomorphic('abc', 'xyz'))
// let map = {}
// for (let i = 0; i < t.length; i++) {
//     let char1 = t.charAt(i)
//     let char2 = s.charAt(i)

//     if (!map[char1]) {
//         map[char1] = char2
//     } else {
//         if (map[char1] !== char2) {
//             console.log(false)
//         } else {
//             console.log(true)
//         }
//     }
// }
// console.log(map)

// function isIsomorphic(str1, str2) {
//     for (let i = 0; i < str1.length; i++) {
//         let a = str1.charAt(i)
//         b = str1.indexOf(str1[i])
//         return a
//     }
// }
// console.log(isIsomorphic(t, s))

// let t = 'ads'
// let s = 'egg'
// var isIsomorphic1 = function(s, t) {
//     let str1 = s
//     let str2 = t
//     if (str1.length !== str2.length) {
//         return false
//     }
//     for (let i = 0; i < str1.length; i++) {
//         const a = str1.indexOf(str1[i])
//         console.log('a', a)

//         const b = str2.indexOf(str2[i])
//         console.log('b', b)
//         if (str2[a] !== str2[i] || str1[b] !== str1[i]) {
//             return false
//         }
//     }
//     return true
// }
// var isIsomorphic2 = function(s, t) {
//     if (s.length !== t.length) {
//         return false
//     }

//     let sMap = {}
//     let tMap = {}
//     for (let i = 0; i < s.length; i++) {
//         let sChar = s[i]
//         let tChar = t[i]

//         if (sMap[sChar] == undefined) {
//             sMap[sChar] = tChar
//         }
//         if (tMap[tChar] == undefined) {
//             tMap[tMap] = sChar
//         }

//         if (sMap[sChar] !== tChar || tMap[tChar] !== sChar) {
//             return false
//         }
//     }
//     return true
// }

// console.log(isIsomorphic1('dds', 'egg'))

function reassignFail() {
    let test = 'world'
    console.log(test)
}

let test = 'hello'
reassignFail(test)
console.log(test)

let x = 'sheta'

let o = x
console.log(o)
x = 'mahoud'
console.log(x)
console.log(o)

function pureCheckoutBook(book) {
    book.isCheckedOut = true
}

let book = {
    title: 'Tiny Habits',
    author: 'BJ Fogg',
    isCheckedOut: false
}
pureCheckoutBook(book)
console.log(book.isCheckedOut)