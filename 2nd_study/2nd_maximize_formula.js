function maximize(formula) {
    let expression = [['*','+','-'], ['*','-','+'], ['+','*','-'], ['+','-','*'], ['-','*','+'], ['-','+','*']];
    let formulaArray = formula.split(/[+|*|-]/);
    let regex = /[0-9]/;
    const expressionFilter = formula.split(regex).filter((element)=> element !== '');
    let result = 0;

    console.log(expressionFilter);
    console.log(formulaArray)

    for (var index in expression) {
        console.log(calculation(formulaArray, expressionFilter, expression[index]));
        let calResult = Math.abs(calculation(formulaArray, expressionFilter, expression[index]));
        if(result < calResult) {
            result = calResult;
           
        }
        
    };

    return result;
}

function calculation(formulas, expression, primaryExpression) {
        
        let calFormula = [];
        let calExpression = [];
        
        calFormula.push(...formulas)
        calExpression.push(...expression)
        
        primaryExpression.forEach(sign => {

            console.log("????" + sign)

            //문제점 : index가 하나씩 줄어드니까.. 하나가 사라지면 나머지 하나의 index가 비틀림...
            calExpression.forEach((value, index) => {
                let count = 0;
                if(value == sign) {
                    console.log(sign, " : ", index)
                    let realIndex = index;
                    let cal;
                    switch(value) {
                        case "-" : {
                            cal = parseInt(calFormula[realIndex]) - parseInt(calFormula[realIndex+1]);
                            break;
                        }
                        case "+" : {
                            cal = parseInt(calFormula[realIndex]) + parseInt(calFormula[realIndex+1]);
                            break;
                        }
                        case "*" : {
                            cal = parseInt(calFormula[realIndex]) * parseInt(calFormula[realIndex+1]);
                            break;
                        }

                    }

                    // calFormula.splice(realIndex, 2, cal)
                    // calExpression.splice(realIndex, 1)
                    
                    delete calExpression[index];
                    delete calFormula[index];
                    delete calFormula[index+1];
                    calFormula[index+1] = cal

                    console.log(calFormula);
                    console.log(calExpression);    

                    count += 1;
                }

    
            }); 
            
            
            calFormula = calFormula.filter(Boolean);
            calExpression = calExpression.filter(Boolean);

            console.log(calFormula);
            console.log(calExpression);    
            
        });

    return calFormula[0];
}


maximize("100-200*300-500+20");