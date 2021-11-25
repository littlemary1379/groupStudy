function solution(n,a,b) {

//     통과 (4.27ms, 30.5MB)
// 테스트 2 〉	통과 (3.91ms, 30.5MB)
// 테스트 3 〉	통과 (3.92ms, 30.6MB)
// 테스트 4 〉	통과 (3.89ms, 30.6MB)
// 테스트 5 〉	통과 (3.91ms, 30.1MB)
// 테스트 6 〉	통과 (3.85ms, 30.1MB)
// 테스트 7 〉	통과 (3.91ms, 30.4MB)
// 테스트 8 〉	통과 (4.09ms, 30.4MB)
// 테스트 9 〉	통과 (3.93ms, 30.4MB)
// 테스트 10 〉	통과 (3.90ms, 30.4MB)
// 테스트 11 〉	통과 (3.88ms, 30.6MB)
// 테스트 12 〉	통과 (4.09ms, 30.5MB)
// 테스트 13 〉	통과 (3.89ms, 30.4MB)
// 테스트 14 〉	통과 (3.92ms, 30.2MB)
// 테스트 15 〉	통과 (3.92ms, 30.5MB)
// 테스트 16 〉	통과 (4.35ms, 30.3MB)
// 테스트 17 〉	통과 (3.92ms, 30.4MB)
// 테스트 18 〉	통과 (3.91ms, 30.5MB)
// 테스트 19 〉	통과 (3.88ms, 30.4MB)
// 테스트 20 〉	통과 (4.08ms, 30.4MB)
// 테스트 21 〉	통과 (3.89ms, 30.4MB)
// 테스트 22 〉	통과 (3.90ms, 30.4MB)
// 테스트 23 〉	통과 (3.90ms, 30.4MB)
// 테스트 24 〉	통과 (4.18ms, 30.4MB)
// 테스트 25 〉	통과 (3.97ms, 30.5MB)
// 테스트 26 〉	통과 (3.87ms, 30.3MB)
// 테스트 27 〉	통과 (3.92ms, 30.1MB)
// 테스트 28 〉	통과 (4.11ms, 30.4MB)
// 테스트 29 〉	통과 (3.92ms, 30.4MB)
// 테스트 30 〉	통과 (3.94ms, 30.2MB)
// 테스트 31 〉	통과 (3.94ms, 30.4MB)
// 테스트 32 〉	통과 (4.46ms, 30.4MB)
// 테스트 33 〉	통과 (3.90ms, 30.5MB)
// 테스트 34 〉	통과 (3.94ms, 30.3MB)

    var answer = 1;

    var first;
    var second;

    if(a < b) {
        first = a;
        second = b;
    } else {
        first = b;
        second = a;
    }

    while(true) {

        if(first % 2 == 1) {
            if(second == first + 1) {
                break;
            }
        }

        if(first % 2 == 0) {
            first = parseInt(first / 2);
        } else {
            first = parseInt(first / 2) + 1;
        }

        if(second % 2 == 0) {
            second = parseInt(second / 2);
        } else {
            second = parseInt(second / 2) + 1;
        }

        answer += 1;

    }
    
    console.log(answer);
    return answer;
}

//solution(8, 4, 7); //3
//solution(8, 4, 5); //3
//solution(8, 2, 3); //2
//solution(8, 1, 2); //1
