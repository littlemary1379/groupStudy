function leastMultiple(arr) {

    //logic
    //1. 배열 sorting
    //2. 해당 배열의 최솟값을 이용하여 2부터 올라가며 나눌것임
    //3. 해당 인덱스와 최솟갑의 나머지가 0이 아니라면 해당 인덱스를 넘김 (이렇게 배수를 구함)
    //4. 만약 배열 내의 모든 값을 나누어 나머지마 0이라면, 배열에 해당 인덱스를 넣고, 그 몫으로 만든 배열을 새로운 배열을 만들어 전역변수에 저장
    //5. 만약 최소값들로 인해 나온 모든 배수가 배열과 나누었을때, 나머지가 0이 되지 않는다면 해당 배열을 중지한다.
    //6. 인덱스를 저장했던 배열과 새로이 만들어졌던 배열의 모든 값을 곱하면 최소공배수를 구할 수 있다.

    var newArray = arr;

    newArray.sort((a, b) => {
        return a-b;
    });

    var returnArray = [];
    var returnIndex = [];

    var result = 1;
    
    function findIndex(array) {
        for (let i = 1; i <= array[0]; i++) {

            //더이상 배수를 만들 수 없음
            if(array[0] == 1) {
                returnArray = array;
                return;
            }

            //굳이 계산할 필요가 없음. 그냥 앞 리턴 로직을 위해서 1을 받는겨
            if(i == 1) {
                continue;
            }
    
            //현재 인덱스와 가장 최소값이 0이 아닐 경우 현재 인덱스를 넘김
            if(!(array[0] % i == 0)) {
                console.log("i : " + i);
                continue;
            }

            let multipleArray = [];
            multipleArray.push(...array);

            for (let j = 0; j < array.length; j++) {
                const element = array[j];

                console.log(multipleArray);

                if(!(array[j] % i == 0)) {
                    console.log("공배수가 안됨..");
                    break;
                    
                }

                multipleArray[j] = parseInt(multipleArray[j]/i);
                console.log(multipleArray);

                if(j == array.length -1) {
                    console.log("공배수 됨.");
                    returnIndex.push(i);
                    console.log(returnIndex);
                    findIndex(multipleArray);
                    
                    return;
                }
            }

            //만약 인덱스가 최종적으로 다다랐음에도 공배수를 구하지 못한다면, 이는 더이상 실행되지 않음을 의미함.
            if(i = array[0]) {
                returnArray = array;
                return;
            }
            
        }
    }

    findIndex(newArray);

    console.log(returnArray);
    console.log(returnIndex);

    for (let index = 0; index < returnArray.length; index++) {
        const element = returnArray[index];
        result *= element;
    }

    for (let index = 0; index < returnIndex.length; index++) {
        const element = returnIndex[index];
        result *= element;
    }
    
    console.log(result);
    
}

//leastMultiple([2, 6, 8, 14]); //result 168
//leastMultiple([1, 2, 3]); //result 168
leastMultiple([25,50,75]);