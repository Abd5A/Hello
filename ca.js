

document.getElementById("calculate").addEventListener("click", function() {
    var firstNum = parseFloat(document.getElementById("firstNum").value);
    var secondNum = parseFloat(document.getElementById("secondNum").value);
    var operator = document.getElementById("operator").value;
    var result;

    if (operator === "+") {
        result = firstNum + secondNum;
    }
    else if (operator === "*") {
        result = firstNum * secondNum;
    } 
    else if (operator === "/") {
        result = firstNum / secondNum;
    }
    else if (operator === "-") {
        result = firstNum - secondNum;
    }
    
    if (secondNum === 0) {
    var result = "r u stupid"
    }
    document.getElementById("eq").textContent = result;

    
});