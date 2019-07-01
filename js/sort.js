//冒泡排序
let bubbleSort = array => {
    let len = array.length;
    if (len <= 1) {
        return array
    }
    for (let i = 0; i < len; i++) {
        for(let j = 0; j < len - 1 - i; j++) {
            if(array[j] > array[j+1]) {
                [array[j+1], array[j]] = [array[j], array[j+1]]
            }
        }
    }
    return array
}

//选择排序
let selectionSort = array => {
    console.log(19, array)
    let len = array.length
    let min, minIndex;
    if(len <= 1) {
        return array
    }
    for (let i = 0; i < len - 1; i++) {
        min = array[i]
        for (let j = i + 1; j < len; j++) {
            if(array[j] < min) {
                min = array[j]
                minIndex = j
            }
        }
        if (min != array[i]) {
            [array[minIndex], array[i]] = [array[i], array[minIndex]]
        }
        console.log(35, array)
    }
    return array
}

//插入排序
let insertSort = array => {
    var len = array.length
    if(len <= 1) {
        return array
    }
	for (let i = 1; i < len; i++) {
        let key = array[i]
        let j = i - 1
        while(j >= 0 && array[j] > key) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = key
    }
    return array
}

//希尔排序（缩小增量排序)
let shellSort = array => {
    console.log(61, array);
    var len = array.length, gap = parseInt(len / 2), j, temp;
    while(gap > 0){
        for(let i = gap; i < len; i++){
            temp = array[i];
            j = i - gap;
            console.log(64, gap, i, j)
            while(j >= 0 && temp < array[j]){
                array[j + gap] = array[j];
                j = j - gap;
            }
            array[j + gap] = temp;
            console.log(72, array)
        }
        gap = parseInt(gap / 2);
    }
    return array;
}