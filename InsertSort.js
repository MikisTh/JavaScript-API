function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

// Example usage:
let array = [5, 3, 6, 1, 4];
console.log(insertionSort(array)); // Output: [1, 3, 4, 5, 6]
Código gerado por IA. Examine e use com cuidado. Mais informações em perguntas frequentes.
This function sorts an array by iterating through it and inserting each element into its correct position in the sorted portion of the array. It’s a straightforward and intuitive algorithm, especially useful for small datasets12.
