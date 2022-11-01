var reverse = function(x) {
    let num = x
    let str = num.toString()

    for (let i = str.length - 1; i >= 0; i--) {
        var revers = str[i]
        return revers
    }
}

console.log(reverse(123))