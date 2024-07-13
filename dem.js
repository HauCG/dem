function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function giai() {
    const sol = parseInt(document.getElementById("soLuong").value);
    let dem = 0;
    let N = 2;
    let result = '';

    while (dem < sol) {
        if (isPrime(N)) { //check xem phai so nguyen to ko
            result += N + ' ';
            dem++;
        }
        N++;
    }

    document.getElementById("result").textContent = `Các số nguyên tố theo yêu cầu là: ${result}`;
}