/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

note: 600851475143 is too big for my code! Pick a smaller number
*/

//
function go(){

    var findLargestPrimeFactorOf = function(bigNumber){
        var largestPrimeFactorSoFar = 1;
        for (i = 1; i <= bigNumber; i++){
            if(isPrime(i) && isFactor(i, bigNumber)){
                largestPrimeFactorSoFar = i;
            }
        }
        return largestPrimeFactorSoFar;
    }

    // function that checks if number is prime
    var isPrime = function(aNumber){
        if (aNumber > 1){
                for (var i = 2; i < aNumber; i++){
                     if (aNumber % i === 0){
                        return false;
                     }
                }
                return true;
        }
        else{
            return false;
        }
    }

    // function that checks if number is a factor of another number
    var isFactor = function(isThisAFactor, ofThisNumber){
        if (ofThisNumber % isThisAFactor === 0){
            return true;
        }
        else{
            return false;
        }
    }

   var yourNumber = prompt("Enter a number to find its largest prime factor");
   var theAnswer = findLargestPrimeFactorOf(yourNumber);
   document.write(theAnswer);
}

