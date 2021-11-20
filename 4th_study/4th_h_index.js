function hIndex(citations) {
    const arr = citations;
    let result = 0;

    arr.sort(function(a, b) {
        return b-a;
    });

    console.log(arr);

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        
        console.log("element : " + element + " size : " + (index+1));

        // 최댓값 찾는 문제였음 ㅠ 수를 세야하는거였네...
        // hIndex([20,19,18,1]);
        // if((index+1) >= element) {
        //     result = (index+1);
        //     break;
            
        // }

        // if(index == arr.length -1) {
        //     result = arr.length;
        //     break;
        // }

        if(result < element) {
            result += 1;
        }
        
    }

    console.log(result);
    return result;

}

hIndex([3, 0, 6, 1, 5]);
//hIndex([10, 100]);
//hIndex([6, 6, 6, 6, 6, 6]);
//hIndex([2, 2, 2]);
//hIndex([20,19,18,1]);
//hIndex([22,42]);