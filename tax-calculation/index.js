const taxTable = [
    { min: 0, max: 18200, rate: 0, base: 0 },
    { min: 18201, max: 45000, rate: 0.19, base: 0 },
    { min: 45001, max: 120000, rate: 0.325, base: 5092 },
    { min: 80001, max: 180000, rate: 0.37, base: 29467 },
    { min: 180001, max: Infinity, rate: 0.45, base: 51667 }
];

function caculateTax(income) {
    let tax = 0;
    const range = taxTable.find(t => income >= t.min && income <= t.max);
    const { min, rate, base } = range;
    return tax = base + (income - min) * rate;
}

console.log(caculateTax(60000)); 