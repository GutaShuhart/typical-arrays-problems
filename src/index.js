
exports.min = function min (array) {
    if (array === undefined || array.length === 0 )  return 0;
    const minNumber = Math.min(...array);
    return minNumber;
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0 )  return 0;
    const maxNumber = Math.max(...array);
    return maxNumber;
}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0 )  return 0;
    let sum = 0;
    let count = array.length;
    for (let i = 0; i < count; i++) {
        sum += array[i];
    };
    return sum/count;
}
