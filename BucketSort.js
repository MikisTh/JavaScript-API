function bucketSort(arr) {
    let n = arr.length;
    let buckets = Array.from({length: n}, () => []);

    // Put array elements in different buckets
    for (let i = 0; i < n; i++) {
        let bi = Math.floor(n * arr[i]);
        buckets[bi].push(arr[i]);
    }

    // Sort individual buckets using insertion sort
    for (let i = 0; i < n; i++) {
        insertionSort(buckets[i]);
    }

    // Concatenate all buckets into arr[]
    let index = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < buckets[i].length; j++) {
            arr[index++] = buckets[i][j];
        }
    }
}

let arr = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434];
bucketSort(arr);
console.log("Sorted array is:");
console.log(arr.join(" "));
