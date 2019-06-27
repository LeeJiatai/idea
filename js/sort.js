let checkLength = arr => {
    if(arr.length == 0) {
        return arr
    }
}

//冒泡排序
let bubbleSort = array => {
    checkLength(array)

    for ( let i = 0; i < array.length; i++ ) {
        for ( let j = 0; j < array.length - 1 - i; j++ ) {
            if (array[j + 1] < array[j]) {
                let temp = array[j + 1];
                array[j + 1] = array[j]
                array[j] = temp 
            }
        }
    }

    return array
}

//选择排序
let selectionSort = array => {
    checkLength(array)

    for(let i = 0; i < array.length; i++) {
        let minIndex = i
        for (let j = i; j < array.length; j++) {
            if(array[j] < array[minIndex]) {
                minIndex = j
            } 
            let temp = array[minIndex]
            array[minIndex] = array[i]
            array[i] = temp
            console.log(37, array)
        }
    }

    return array
}