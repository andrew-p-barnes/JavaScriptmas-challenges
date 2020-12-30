/* Given an array of int arrays, return an array containing the elements at the index specified by the column parameter. */

function extractMatrixColumn(matrix, column) {
    columnValsArr = [];
    matrix.forEach(arr => {
        columnValsArr.push(arr[column]);
    });
    return columnValsArr;
}

console.log(extractMatrixColumn([[1,1,1,2],[0,5,0,4],[2,1,3,6]], 2));