function minimum(A, B) {
    
    var aArray = A
    var bArray = B

    var length = 0;

    var result = 0;

    aArray.sort(function(a, b) {
        return a-b;
    });

    bArray.sort(function(a, b) {
        return b-a;
    });

    if(aArray.length > bArray.length) {
        length = bArray.length
    } else {
        length = aArray.length
    }

    for (let index = 0; index < length; index++) {
        const aElement = aArray[index];
        const bElement = bArray[index];

        result = result + (aElement * bElement);
        
    }

    console.log(result);
    return result;
}

minimum([1, 4, 2], [5, 4, 4]);
minimum([1, 2], [3, 4]);