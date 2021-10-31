function money(money) {
    
    //남은 돈
    var mMoney = money;
    
    //동전의 카운트
    var coin2 = 0;
    var coin5 = 0;

    if((mMoney%5)%2 == 1) {
        console.log("5 더해줘야함");
        if(mMoney < 5) {
            console.log("불가능");
            console.log("-----------");
            return -1;
        }

        coin5 = parseInt(mMoney/5) - 1;

    } else {
        console.log("그럴 필요 없음");
        coin5 = parseInt(mMoney/5);
    }

    mMoney = mMoney - (coin5 * 5);
    coin2 = parseInt(mMoney/2);

    return coin5+coin2;

}

money(13);
money(5);
money(14);
money(4);
money(3);

