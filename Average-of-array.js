function average(array) {
  var total = 0;
  if (array.length === 0) {
    return total;
  }
  for (var i = 0; i < array.lenght; i++) {
    total += array[i];
  }
  return total / array.length;
}