"use strict"

function checkNumber() {
    let numberField = document.getElementById("numberToCheck");
    let number = numberField.value;
    if(isNaN(number)) {
        alert("bruh");
        return;
    }

    let answer = "";

    if(isPrime(number)) {
        answer = number + " is prime";
    }
    else {
        answer = number + " nope";
    }

    alert(answer);
}

function isPrime(num) {
    if (num <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        return false;
      }
    }
  
    return true;
  }
  


function getListOfPrimes() {
    let i = prompt("How many primes");
    let check = 1;
    let found = 0;
    let answer = "";
    while (found < i) {
        if (isPrime(check)) {
          answer += check + "<br>";
          found++;
        }
        check++;
    } 
    console.log(answer);
    document.getElementById("primeList").innerHTML = answer;
}