function listing(listlength, number) {
    var testList = [];
    var answerList = [];
    var testK = number;
    
    for (let index = 1; index < listlength+1; index++) {
        testList.push(index);
    }

    var position = 0

    while (testList.length >= 1) {

        position = position+(testK-1);
        
        while (position > testList.length-1) {
            position = position - testList.length;
        }

        answerList.push(testList[position]);
        testList.splice(position, 1);
        console.log(testList);
    }

    console.log(answerList);
    
}

listing(9,4);