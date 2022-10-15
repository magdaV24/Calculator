var newCalculation = document.querySelector("#AC");

var numbers = document.querySelectorAll(".number");
let result = document.querySelector(".result");
let history = document.querySelector(".history");
let operator = document.querySelectorAll(".operator");
var index = [];
var op = "";

newCalculation.addEventListener("click", function(){
    index = [];
    result.innerHTML = index;
    history.innerHTML = index;
})

var sumOp = document.querySelector("#plus");

sumOp.addEventListener("click", function(){
    if(history.innerHTML === ""){
        history.innerHTML = result.innerHTML + "+";
        op = "+";
        index = [];
        result.innerHTML = index;
    } else {
        let search = history.innerHTML;
        let value1 = Number(search.replace(/[^0-9.]/, ''));
        let value2 = Number(result.innerHTML);
        let res; 
        if(op === "+"){
            res = value1 + value2;
        } else if(op === "-"){
            res = value1 - value2;
        } else if(op === "*"){
            res = value1 * value2;
        } else {
            res = value1/value2;
        }
            let res1 = res.toFixed(2);
            history.innerHTML = res1 + "+";
            index = [];
            result.innerHTML = index;
            op = "+";
    }
})

var diffOp = document.querySelector("#minus");

diffOp.addEventListener("click", function(){
    if(history.innerHTML === ""){
        history.innerHTML = result.innerHTML + "-";
        op = "-";
        index = [];
        result.innerHTML = index;
    } else {
        let search = history.innerHTML;
        let value1 = Number(search.replace(/[^0-9.]/, ''));
        let value2 = Number(result.innerHTML);
        let res; 
        if(op === "+"){
            res = value1 + value2;
        } else if(op === "-"){
            res = value1 - value2;
        } else if(op === "*"){
            res = value1 * value2;
        } else {
            res = value1/value2;
        }
            let res1 = res.toFixed(2);
            history.innerHTML = res1 + "-";
            index = [];
            result.innerHTML = index;
            op = "-";
    }
});

var prodOp = document.querySelector("#multiply");

prodOp.addEventListener("click", function(){
    if(history.innerHTML === ""){
        history.innerHTML = result.innerHTML + "*";
        op = "*";
        index = [];
        result.innerHTML = index;
    } else {
        let search = history.innerHTML;
        let value1 = Number(search.replace(/[^0-9.]/, ''));
        let value2 = Number(result.innerHTML);
        let res; 
        if(op === "+"){
            res = value1 + value2;
        } else if(op === "-"){
            res = value1 - value2;
        } else if(op === "*"){
            res = value1 * value2;
        } else {
            res = value1/value2;
        }
        let res1 = res.toFixed(2);
            history.innerHTML = res1 + "*";
            index = [];
            result.innerHTML = index;
            op = "*";
    };
})

var divOp = document.querySelector("#division");

divOp.addEventListener("click", function(){
    if(history.innerHTML === ""){
        history.innerHTML = result.innerHTML + "÷";
        op = "÷";
        index = [];
        result.innerHTML = index;
    } else {
        let search = history.innerHTML;
        let value1 = Number(search.replace(/[^0-9.]/, ''));
        let value2 = Number(result.innerHTML);
        let res; 
        if(op === "+"){
            res = value1 + value2;
        } else if(op === "-"){
            res = value1 - value2;
        } else if(op === "*"){
            res = value1 * value2;
        } else {
            res = value1/value2;
        }
            let res1 = res.toFixed(2);
            history.innerHTML = res1 + "÷";
            index = [];
            result.innerHTML = index;
            op = "÷";
    }
})

function addNumber(x){
    if(x !== 0){
        index.push(x);
        let index1 = index.join("");
        result.innerHTML = index1;
    } else {
        if(result.innerHTML === ""){
            return;
        } else{
            index.push(x);
            let index1 = index.join("");
            result.innerHTML = index1;
        }
    } 
}

function getRoot(){
    if(result.innerHTML == ""){
        return
    }
    let x = result.innerHTML;
    let root = Math.sqrt(x);
    let root1 = root.toFixed(2);
    result.innerHTML = root1;
}

function getPercent(){
    if(result.innerHTML == ""){
        return
    }
    let x = result.innerHTML;
    let percent = x * (1/100);
    result.innerHTML = percent;
}

function getDecimal(){
    if(result.innerHTML == ""){
       result.innerHTML = "0.";
    }
    let x = index.indexOf(".");
    if(x != -1){
        return;
    }
    index.push(".");
    let index1 = index.join("");
    result.innerHTML = index1; 
}

function getResult(){
    let search = history.innerHTML;
    let x = search.length;
    let value1 = Number(search.replace(/[^0-9.]/, ''));
    let value2 = Number(result.innerHTML);
    let res;

    if(search[x-1] === "+"){
        res = value1 + value2;
    } else if(search[x-1] === "-"){
        res = value1 - value2;
    } else if(search[x-1] === "*"){
        res = value1 * value2;
    } else if(search[x-1] === "÷"){
        res = value1 / value2;
    } 
    result.innerHTML = res;
    history.innerHTML = "";
}