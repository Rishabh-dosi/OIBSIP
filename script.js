var result;
var n1, n2, operator;
var x;
function BtnNum(e) {
    document.getElementById("display").innerHTML += document.getElementById(e).textContent;
    result = document.getElementById("display").innerHTML;
}

const back = () => {
    result = result.substring(0, result.length - 1);
    document.getElementById("display").innerHTML = result;
}
const allClear = () => {
    result = "";
    document.getElementById("display").innerHTML = "";
    document.getElementById("exp_display").innerHTML = "";
}
const operation = (e) => {
    if (e === "divide") {
        n1 = document.getElementById("display").innerHTML;
        document.getElementById("display").innerHTML = "";
        operator = "/";
    }
    if (e === "multiply") {
        n1 = document.getElementById("display").innerHTML;
        document.getElementById("display").innerHTML = "";
        operator = "*";
    }
    if (e === "subtract") {
        n1 = document.getElementById("display").innerHTML;
        document.getElementById("display").innerHTML = "";
        operator = "-";
    }
    if (e === "add") {
        n1 = document.getElementById("display").innerHTML;
        document.getElementById("display").innerHTML = "";
        operator = "+";
    }
    var x = n1 + " " + operator
    document.getElementById("exp_display").innerHTML = x;
}
const calculate = () => {
    n2 = document.getElementById("display").innerHTML;
    var exp = n1 + " " + operator + " " + n2;
    var numExp = eval(exp);
    document.getElementById("display").innerHTML = numExp;
    document.getElementById("exp_display").innerHTML = n1 + " " + operator + " " + n2;
}