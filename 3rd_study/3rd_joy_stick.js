function joyStick(name) {
    let nameArray = name.split("");
    console.log(nameArray);

    let result = 0

    nameArray.forEach(element => {
        let charAscii = element.charCodeAt([0]);
        console.log("element : " + charAscii);

        //n보다 작으면 앞에서 시작
        //N 아스키 코드 : 78
        //A 아스키 코드 : 65
        //Z 아스키 코드 : 90

        //error : 뒤로 가는 옵션 생각하기
        if(charAscii < 78) {
            console.log("gap ? : " + (charAscii - 65));
            result = result + (charAscii - 65)
        } else {
            console.log("gap ?? : " + (90 - charAscii + 1));
            result = result + (90 - charAscii + 1)
        }

        console.log("foreach result : " + result);

    });

    //error : A가 연결된 구간까지는 세면 안됨.
    if(nameArray[1] === 'A') {
        result = result + (nameArray.length - 2);
        console.log("result : " + result);
        
    } else {
        result = result + (nameArray.length - 1);
        console.log("result : " + result-1);
    }
    return result;
}

joyStick("JAN")
//joyStick("JEROEN")