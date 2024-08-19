function cycleSort(array) {
 
  for (let currentIndex = 0; currentIndex < array.length - 1; currentIndex++) {
    
    let item = array[currentIndex]

    let currentIndexCopy = currentIndex
   
    for (let i = currentIndex + 1; i < array.length; i++)
      if (array[i] < item)
        currentIndexCopy++
    
    if (currentIndexCopy == currentIndex)
      continue

    while (item == array[currentIndexCopy])
      currentIndexCopy++
   
    let temp = array[currentIndexCopy]
    array[currentIndexCopy] = item
    item = temp
   
    while (currentIndexCopy != currentIndex) {
      currentIndexCopy = currentIndex
    
      for (let i = currentIndex + 1; i < array.length; i++)
        if (array[i] < item)
          currentIndexCopy++

      while (item == array[currentIndexCopy])
        currentIndexCopy++

      temp = array[currentIndexCopy]
      array[currentIndexCopy] = item
      item = temp
    }
  }
}

let array = [12, 11, 15, 10, 9, 1, 2, 3, 13, 14, 4, 5, 6, 7, 8]
cycleSort(array)
alert(array)
