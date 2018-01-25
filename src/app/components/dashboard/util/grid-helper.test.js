import { makeGridItems } from './grid-helper';

describe('grid helper should create', () => {

    let items = [
      { name: "itemOne", index: 0 },
      { name: "itemTwo", index: 1 },
      { name: "itemThree", index: 2 },
      { name: "itemFour", index: 3 },
      { name: "itemFive", index: 4 },
      { name: "itemSix", index: 5 },
      { name: "itemSeven", index: 6 },
      { name: "itemEight", index: 7 },
    ]

    it('grid items layed out in 3 x 3', () => {

      let expectColumns = 3, expectRows = 3
      let gridItems = makeGridItems(items, expectColumns)

      expect(gridItems).toHaveLength(expectRows)
      expect(gridItems[0]).toHaveLength(expectColumns)
      expect(gridItems[1]).toHaveLength(expectColumns)
      expect(gridItems[2]).toHaveLength(expectColumns - 1)

    })

    it('grid items layed out in 4 x 2', () => {

      let expectColumns = 2, expectRows = 4
      let gridItems = makeGridItems(items, expectColumns)

      expect(gridItems).toHaveLength(expectRows)
      expect(gridItems[0]).toHaveLength(expectColumns)
      expect(gridItems[1]).toHaveLength(expectColumns)
      expect(gridItems[2]).toHaveLength(expectColumns)
      expect(gridItems[3]).toHaveLength(expectColumns)

    })

    it('grid items layed out in 1 x 2', () => {

      let expectColumns = 3, expectRows = 1
      let gridItems = makeGridItems(
        items.filter(item => item.index < 2
      ), expectColumns)

      expect(gridItems).toHaveLength(1)
      expect(gridItems[0]).toHaveLength(2)

    })

})