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

//希尔排序（缩小增量排序=>插入排序)
let shellSort = array => {
    var len = array.length, gap = parseInt(len / 2), j, temp;
    while(gap > 0){
        for(let i = gap; i < len; i++){
            temp = array[i];
            j = i - gap;
            while(j >= 0 && temp < array[j]){
                array[j + gap] = array[j];
                j = j - gap;
            }
            array[j + gap] = temp;
        }
        gap = parseInt(gap / 2);
    }
    return array;
}

//快速排序
let quickSort = array => {
    var a = new Date();
    console.log(79, array)
    let len = array.length

    if (len <= 1 ) {
        return array
    }

    let pointIndex = Math.floor(len / 2);
    let point = array.splice(pointIndex, 1)[0];
    console.log(87, pointIndex, point, array);
    let left = [];
    let right = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] < point) {
            left.push(array[i]) 
        } else {
            right.push(array[i])
        }
    }
    console.log(98, left, right)
    return quickSort(left).concat([point], quickSort(right));
    var b = new Date()
    console.log(b -a);
}