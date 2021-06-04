var s = document.getElementById("but");
s.addEventListener('click',alertMe);

function alertMe(){
    window.alert("WILL YOU PASS? WILL YOU FAIL? FIND OUT YOUR FATE USING THE GRADE CALCULATOR!");
}

function roundTwoDecimal(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

function displayPercentA1(){
    var top_A1 = document.getElementById('topA1').value;
    var bottom_A1 = document.getElementById('bottomA1').value;
    var finalA1 = top_A1/bottom_A1;
    percentA1.textContent = roundTwoDecimal(finalA1 * 100) + "%";
    if (!isFinite(finalA1)){
        percentA1.textContent = "Enter Your Scores";
    }
}

function displayPercentA2(){
    var top_A2 = document.getElementById('topA2').value;
    var bottom_A2 = document.getElementById('bottomA2').value;
    var finalA2 = top_A2/bottom_A2;
    percentA2.textContent = roundTwoDecimal(finalA2 * 100) + "%";
    if (!isFinite(finalA2)){
        percentA2.textContent = "Enter Your Scores";
    }
}

function displayPercentA3(){
    var top_A3 = document.getElementById('topA3').value;
    var bottom_A3 = document.getElementById('bottomA3').value;
    var finalA3 = top_A3/bottom_A3;
    percentA3.textContent = roundTwoDecimal(finalA3 * 100) + "%";
    if (!isFinite(finalA3)){
        percentA3.textContent = "Enter Your Scores";
    }
}

function displayPercentA4(){
    var top_A4 = document.getElementById('topA4').value;
    var bottom_A4 = document.getElementById('bottomA4').value;
    var finalA4 = top_A4/bottom_A4;
    percentA4.textContent = roundTwoDecimal(finalA4 * 100) + "%";
    if (!isFinite(finalA4)){
        percentA4.textContent = "Enter Your Scores";
    }
}

var w = document.getElementById("Weighted");
w.addEventListener('click', Weighted);

function Weighted(){
    var weight_A1 = document.getElementById("weightA1").value;
    var weight_A2 = document.getElementById("weightA2").value;
    var weight_A3 = document.getElementById("weightA3").value;
    var weight_A4 = document.getElementById("weightA4").value;

    if (isNaN(weight_A1)){
        weight_A1 = 0;
    }
    else{
        weight_A1 = weight_A1*1;
    }

    if (isNaN(weight_A2)){
        weight_A2 = 0;
    }
    else{
        weight_A2 = weight_A2*1;
    }

    if (isNaN(weight_A3)){
        weight_A3 = 0;
    }
    else{
        weight_A3 = weight_A3*1;
    }

    if (isNaN(weight_A4)){
        weight_A4 = 0;
    }
    else{
        weight_A4 = weight_A4*1;
    }

    var gradeA1 = document.getElementById('topA1').value / document.getElementById('bottomA1').value;
    var gradeA2 = document.getElementById('topA2').value / document.getElementById('bottomA2').value;
    var gradeA3 = document.getElementById('topA3').value / document.getElementById('bottomA3').value;
    var gradeA4 = document.getElementById('topA4').value / document.getElementById('bottomA4').value;
    if (isNaN(gradeA1) ) {
        gradeA1 = 0;
    }
     if (isNaN(gradeA2) ) {
        gradeA2 = 0;
    }
    if (isNaN(gradeA3) ) {
        gradeA3 = 0;
    }
    if (isNaN(gradeA4) ) {
        gradeA4 = 0;
    }

    var weightPart1 = ((gradeA1 * weight_A1)+(gradeA2 * weight_A2)+(gradeA3 * weight_A3)+(gradeA4 * weight_A4));
    var weightPArt2 = weight_A1 + weight_A2 + weight_A3 + weight_A4;
    var finalWeight = weightPart1/weightPArt2;
    resultPercentage.textContent = "Weighted result is " + roundTwoDecimal((finalWeight * 100)) + "%";
}

var m = document.getElementById("Mean");
m.addEventListener('click', Mean);

function Mean(){
    var totalGrades = 4;
    var gradeA1 = document.getElementById('topA1').value / document.getElementById('bottomA1').value;
    var gradeA2 = document.getElementById('topA2').value / document.getElementById('bottomA2').value;
    var gradeA3 = document.getElementById('topA3').value / document.getElementById('bottomA3').value;
    var gradeA4 = document.getElementById('topA4').value / document.getElementById('bottomA4').value;

    if (isNaN(gradeA1)){
        gradeA1 = 0;
        totalGrades = totalGrades - 1;
    }
    if (isNaN(gradeA2)){
        gradeA2 = 0;
        totalGrades = totalGrades - 1;
    }
    if (isNaN(gradeA3)){
        gradeA3 = 0;
        totalGrades = totalGrades - 1;
    }
    if (isNaN(gradeA4)){
        gradeA4 = 0;
        totalGrades = totalGrades - 1;
    }

    var finalMean = (gradeA1 + gradeA2 + gradeA3 + gradeA4) / totalGrades;
    resultPercentage.textContent = "Mean result is " + roundTwoDecimal((finalMean * 100)) + "%";

}