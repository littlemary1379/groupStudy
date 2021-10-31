// function goal(participant, completion) {
//     var participant = participant
//     var completion = completion

//     for (let index = 0; index < completion.length; index++) {
//         const completionIndex = completion[index];

//         for (let indexs = 0; indexs < participant.length; indexs++) {
//             const participantIndex = participant[indexs];

//             if(participantIndex == completionIndex) {
//                 participant.splice(indexs, 1);
//                 break;
//             }

//         }
//     }

//     console.log(participant);
// }

function goal(participant, completion) {
    var participant = participant
    var completion = completion

    var participantSort = participant.sort();
    var completionSort = completion.sort();

    var length = participantSort.length;

    for (let index = 0; index < length; index++) {
        if (participantSort[index] != completionSort[index]) {
            return participantSort[index];
        };
        
    }
}

console.log(goal(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(goal(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));