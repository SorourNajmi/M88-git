function is_prime(number) {
    if (isNaN(number)) {
        console.log("Not a number!");
        return;
    }
    let isPrime = true;
    if (number < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i <= number/2 ; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    console.log(isPrime);
}
is_prime(num);