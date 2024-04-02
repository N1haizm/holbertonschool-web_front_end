function countPrimeNumbers(lowerLimit, upperLimit) {
    if (lowerLimit < 0 || upperLimit <= lowerLimit) {
      return 0;
    }
  
    let count = 0;
  
    for (let num = lowerLimit; num <= upperLimit; num++) {
      if (isPrime(num)) {
        count++;
      }
    }

    return count;
}
  
function isPrime(num) {
    if (num <= 1) {
      return false;
    }

    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
}

const begin = performance.now()
for(let i = 0; i < 100; i++) {
    setTimeout(countPrimeNumbers(2,100), 0)
}
const finish = performance.now()
const NUMBER_OF_MILLISECONDS = finish - begin

console.log(`Execution time of calculating prime numbers 100 times was ${NUMBER_OF_MILLISECONDS} milliseconds.`)