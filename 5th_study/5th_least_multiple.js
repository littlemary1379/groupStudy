function leastMultiple(arr) {

    var newArray = arr;

    newArray.sort((a, b) => {
        return a-b;
    });

    var result = 1;
    var resultMultiple = 1;
    
    for (let i = 1; i <= newArray[0]; i++) {
    
        //현재 인덱스와 가장 최소값이 0이 아닐 경우 현재 인덱스를 넘김
        if(!(newArray[0] % i == 0)) {
            console.log("i : " + i);
            continue;
        }

        for (let j = 0; j < newArray.length; j++) {
            const element = newArray[j];

            if(!(element % i == 0)) {
                console.log("공배수가 안됨..");
                break;
            }

            if(j == newArray.length -1) {
                resultMultiple = i;
            }

        }
        
    }

    console.log(resultMultiple);
    result *= resultMultiple;

    for (let index = 0; index < newArray.length; index++) {
        const element = parseInt(newArray[index]/resultMultiple);
        //console.log(element);
        result *= element;
    }

    
    console.log(result);
    return result;
    
}

leastMultiple([2, 6, 8, 14]); //result 168
//leastMultiple([1, 2, 3]); //result 168
//leastMultiple([25,50,75]);
//leastMultiple([2,3,4]);
//leastMultiple([14, 2, 7]);
leastMultiple([3,4,9,16]); //144