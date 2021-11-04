function cloth(clothes) {

    var map = new Map(clothes);
    var clothesMap = new Map();
    var result = 1;

    console.log(map);
    map.forEach((value, key) => {
        console.log(key+ " : "+ value);
        console.log(clothesMap.get(value));
        if(clothesMap.get(value) === undefined) {
            console.log("이 값 있나?");
            clothesMap.set(value, 1);
        } else {
            clothesMap.set(value, clothesMap.get(value)+1);
        }
        
    })
    
    clothesMap.forEach((value) => {
        result = result * (value + 1);
    })

    console.log(result);
    return result - 1;

}

console.log(cloth([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]));