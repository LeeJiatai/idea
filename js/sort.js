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

//希尔排序（缩小增量排序
let shellSort = array => {
    let len = array.length
    let index = Math.floor(len / 2) //比较步长
    let j, temp
    console.log(56, array, index)
    if(len <= 1) {
        return array
    }

    while (index > 0){
        for (var i = index; i < len; i++){//遍历起点后移，保证每个数在该步长下参与且只参与1此排序
          temp = array[i];
          for (j = i; j >= index && array[j - index] > temp;){//等步长数列执行插入排序
            array[j] = array[j - index];
            j -= index;
            array[j] = temp;
          }
        }
        index = Math.floor(index / 2);//步长减半
      }
    return array
}