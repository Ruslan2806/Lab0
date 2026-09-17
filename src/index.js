function integrate_trapezoidal(func, a, b, n = 1000) {
    if (a === b) return 0;
    const h = (b - a) / n;
    let sum = (func(a) + func(b)) / 2;
    for (let i = 1; i < n; i++) {
        const x = a + i * h;
        sum += func(x);
    }
    return sum * h;
}

function f(x) {
    return x / 16 + 4 * Math.sin(x) - 3;
}

const inputA = prompt("Введите начало интервала интегрирования (a):", "0");
const inputB = prompt("Введите конец интервала интегрирования (b):", "3.14159");

const a = parseFloat(inputA);
const b = parseFloat(inputB);

const result = integrate_trapezoidal(f, a, b, 10000);        
alert(`Результат:\n${result.toFixed(6)}`);