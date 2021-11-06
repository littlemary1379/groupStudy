function targetNumber(numbers, target) {
    // 런타임 에러 남..  아마 배열이 커져서 그런가봄.... 깊이탐색으로 풀어야 하는듯.. 8  8
    // var visit = [];
    // var needVisit = [0];

    // numbers.forEach(element => {
    //     visit.splice(0, visit.length);
    //     visit.push(...needVisit);

    //     console.log("visit: " +visit)
        
    //     visit.forEach(node => {
    //         needVisit.push(parseInt(node) - parseInt(element));
    //         needVisit.push(parseInt(node) + parseInt(element));
    //     });

    //     needVisit.splice(0, visit.length);
    //     console.log("needVisit: " + needVisit);
    // });

    // let result = needVisit.filter(element => element === target).length;
    // console.log(result)

    // dfs 예시 코드
        // function dfsFunction (x){
        //     if(check[x]){ // 모든 정점을 체크하면 리턴
        //         return;
        //     }
        //     check[x] = true; // 방문 표시
        //     console.log(x); 
          
        //     for(let i=0; i<stack[x].length; i++){
        //       let y = stack[x][i]; // 인접 정점
        //       dfsFunction(y); // 재귀 구조로 순회
        //     }
        //   }


    result = 0;

    function findTarget(index, sum) {
        
        if(index === numbers.length) {

            console.log(index+" : "+sum);
            console.log("target : " + target);

            if(sum == target) {
                console.log("?????");
                result = result + 1;
            }

            return;
        }

        //웨.. 아래 +함수 연산이 느리게 되지...?
        //nextIndex = index + 1;

        findTarget(index + 1, sum - numbers[index]);
        findTarget(index + 1, sum + numbers[index]);

    }

    findTarget(0,0);

    return result;
}

targetNumber([1, 1, 1, 1, 1], 3);