function reverse(array) {
    var reversed = [];
    for (var i = array.length - 1; i > -1; i--) {
        reversed.push(array[i]);
    }
    return (reversed);
}