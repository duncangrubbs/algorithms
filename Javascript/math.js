// Recursive Computation of the Determinant

/**
 * Returns adjacent matrix of B
 * with respect to i and j
 * @param {Array} B Original Matrix
 * @param {Number} i Row index
 * @param {Number} j Column index
 */
function adjacent(B, i, j) {
  B.splice(i, 1);
  for(let row = 0; row < B.length; row++)
  { B[row].splice(j,1); }
  return B;
}

/**
 * Returns the determinant of an nxn matrix A
 * @param {Array} A nxn matrix
 */
function determinant(A) {
  // base case
  if (A.length === 2) {
    return (A[0][0] * A[1][1]) - (A[1][0] * A[0][1]);
  }
  let det = 0;
  for (let j = 0; j < A.length; j++) {
    // deep copy of A
    const cpy = JSON.parse(JSON.stringify(A));
    det += ((-1)**j) * A[0][j] * determinant(adjacent(cpy, 0, j));
  }
  return det;
}

// testing matrices
const A = [[1, 0],
           [0, 1]];

const B = [[1, 5, 3],
           [4, 1, 4],
           [3, 3, 2]];

console.log(determinant(A));
console.log(determinant(B));
