function sing(x) {
    let be = ''
    for (let i = 0; i < x; i++) {
        be += 'let it be, '
    }
    return be
}
//Your code above ^^^

console.log(sing(4) + 'words of wisdom, ' + sing(5) + 'there will be an answer' + ', let it be');