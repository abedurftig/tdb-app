
// numColumns = 3
// numItems = 5

// [
//   [ 
//     { item: itemOne, index: "0/0" }, 
//     { item: itemTwo, index: "0/1" }, 
//     { item: itemThree, index: "0/2" } 
//   ], 
//   [ 
//     { item: itemFour, index: "1/0"}, 
//     { item: itemFive, index: "1/1"} 
//   ]
// ]

export const makeGridItems = (items, numOfColumns) => {
  let rows = [], grab = 0
  for (var i = 0; i < items.length / numOfColumns; i++) {
    let row = []
    for (var y = 0; y < numOfColumns; y++) {
      let next = items[grab]
      if (next) {
        row.push(next)
        grab++
      }
    }
    rows.push(row) 
  }
  return rows
}