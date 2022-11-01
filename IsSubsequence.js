var isSubsequence = function(s, t) {
    let index = 0
    if (s == '') {
        return true
    }

    if (s.length > 0 && t.length > 0) {
        for (let i = 0; i < t.length; i++) {
            if (t.charAt(i) == s.charAt(index)) {
                index++
            }
            if (index >= s.length && s.length > 0) {
                return true
            }
        }
    }

    return false
}