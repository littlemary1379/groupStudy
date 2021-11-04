function ijk(array, commend) {
    var array = array;
    var commend = commend;
    var resultList = [];

    for (let index = 0; index < commend.length; index++) {
        const element = commend[index];        
        var sliceList = array.slice(element[0]-1, element[1]);
        console.log(sliceList);

        var sortArray = sliceList.sort(function (a, b) {
            return a-b;
        })

        console.log(sortArray);
        
        resultList.push(sortArray[element[2]-1]);
    }

    console.log(resultList);
}

ijk([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]);