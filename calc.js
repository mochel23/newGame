//show and hide blocks
function showMainCalc() {
    var x = document.getElementById("topBox");
    var y = document.getElementById("otherBox");
    var z = document.getElementById("direction");
    if (x.style.display === "none") {
        y.style.display = "none";
        x.style.display = "block";
        z.style.display = "none";
        clearFunction();
    } else {
        x.style.display = "none";
        // z.style.display = "none";
        clearFunction();
    }

    function newFunction() {
        multVar(first, second, third);
    }
}
function showSecondCalc() {
    var x = document.getElementById("topBox");
    var y = document.getElementById("otherBox");
    var z = document.getElementById("direction");

    if (y.style.display === "none") {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
        clearFunction();
    } else {
        y.style.display = "none";
        // z.style.display = "none";
        clearFunction();
    }
}
//2 functions  validate() is to check if numbers are correct,
// and make() is to establish the grade using a equation
function validate() {
    declareVar();
    //Validate  
    if (first == "" || second == "" || third == "") {
        document.getElementById("demo").innerHTML = ("Please enter numbers in each box.");
        return false;
    } else if (first < 0 || first > 100) {
        document.getElementById("demo").innerHTML = ("The first number needs to be between 0 and 100");
        return false;
    } else if (second < 0 || second > 100) {
        document.getElementById("demo").innerHTML = ("The second number needs to be between 0 and 100");
        return false;
    } else if (third < 0 || third > 100) {
        document.getElementById("demo").innerHTML = ("The third number needs to be between 0 and 100");
        return false;
    }
    //validation correct, then start grading function
    make();
}
//  Equation of grade function
function make() {
    fourth = first + second + third;
    document.getElementById("demo").innerHTML = ("The Total is: " + fourth);

}
//clear function
function clearFunction() {
    document.getElementById("demo").innerHTML = ("");
    first = Number(document.getElementById("first").value = "");
    second = Number(document.getElementById("second").value = "");
    third = Number(document.getElementById("third").value = "");
}

function declareVar() {
    first = Number(document.getElementById("first").value);
    second = Number(document.getElementById("second").value);
    third = Number(document.getElementById("third").value);
}

function valFunction(first, second, third) {
    if (first == "" || second == "" || third == "") {
        document.getElementById("demo").innerHTML = ("Please enter numbers in each box.");
        return false;
    } else if (first < 0 || first > 100) {
        document.getElementById("demo").innerHTML = ("The first number needs to be between 0 and 100");
        return false;
    } else if (second < 0 || second > 100) {
        document.getElementById("demo").innerHTML = ("The second number needs to be between 0 and 100");
        return false;
    } else if (third < 0 || third > 100) {
        document.getElementById("demo").innerHTML = ("The third number needs to be between 0 and 100");
        return false;
    }
}
function multVar(first,second,third) {
    var x = document.getElementById("topBox");
    var y = document.getElementById("otherBox");
    var z = document.getElementById("direction");
}