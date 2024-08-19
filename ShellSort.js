function shellSort(array) {
 
  for (let gapSize = Math.floor(array.length / 2); gapSize > 0; gapSize = Math.floor(gapSize / 2)) {
    for (let currentIndex = gapSize; currentIndex < array.length; currentIndex++) {

      // save the currentIndex
      let currentIndexCopy = currentIndex
      // save the value of the currentIndex
      let itemValue = array[currentIndex]

      while (currentIndexCopy >= gapSize && array[currentIndexCopy - gapSize] > itemValue) {
        array[currentIndexCopy] = array[currentIndexCopy - gapSize]
        currentIndexCopy -= gapSize
      }

      array[currentIndexCopy] = itemValue
    }
  }
}

let array = [12, 11, 15, 10, 9, 1, 2, 3, 13, 14, 4, 5, 6, 7, 8]
shellSort(array)
alert(array)
