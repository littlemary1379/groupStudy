function fatigue(k, dungeons) {
    var answer = 0;
    
    function findTarget(fatigue, visit, innerDepth) {
        var needVisit = [];
        var canStart = false;

        needVisit.push(...dungeons);
        console.log(innerDepth);
        console.log(fatigue);
        visit.forEach(element => {
            var arrayIndex = needVisit.indexOf(element);
            if(arrayIndex !== -1) {
                needVisit.splice(arrayIndex, 1);
            }
        });

        for (let index = 0; index < needVisit.length; index++) {
            const element = needVisit[index];
            if(element[0] < fatigue) {
                canStart = true;
            }
            
        }

        if(!canStart) {
            if(answer < innerDepth) {
                answer = innerDepth;
                return;
            }
        }


        for (let index = 0; index < needVisit.length; index++) {
            const element = needVisit[index];
            if(fatigue < element[0]) {
                continue;
            }
            var visited = []
            visited.push(...visit);
            visited.push(element);
            var innderFatigue = fatigue - element[1];
            var forInnerDepth = innerDepth + 1;
            findTarget(innderFatigue, visited, forInnerDepth);
        }
    }

    findTarget(k, [], 0);

    console.log("depth : "+answer);
}

fatigue(80, [[80,20],[50,40],[30,10]]);