
module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) return [];
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 1) matrix[i] = matrix[i].reverse();
    for (let k = 0; k < matrix[i].length; k++){
      result.push(matrix[i][k]);
    }
  }
  return result;
}
