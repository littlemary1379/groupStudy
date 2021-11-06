function maximize(formula) {
    let expression = [['*','+','-'], ['*','-','+'], ['+','*','-'], ['+','-','*'], ['-','*','+'], ['-','+','*']];
    let formulaArray = formula.split(/[+|*|-]/);
    let regex = /[0-9]/;
    const expressionFilter = formula.split(regex).filter((element)=> element !== '');

    console.log(expressionFilter);
    console.log(formulaArray)

    for (var index in expression) {
        console.log(calculation(formulaArray, expressionFilter, expression[index]));
    };
}

function calculation(formulas, expression, primaryExpression) {
        
        let calFormula = formulas;
        let calExpression = expression;  
        
        primaryExpression.forEach(sign => {

            console.log("????" + sign)

            calExpression.find((value, index) => {
                let count = 0;
                if(value == sign) {
                    console.log(sign, " : ", index)
                    let realIndex = index - count;
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

                    calFormula.splice(realIndex, 2, cal)
                    calExpression.splice(realIndex, 1)
                    console.log(calFormula);
                    console.log(calExpression);    

                    count += 1;
                }
    
            });        
            
        });

    return calFormula[0];
}


maximize("100-200*300+500+20");