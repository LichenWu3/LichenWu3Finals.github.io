function calculateFutureValue() {
    const principal = parseFloat(document.getElementById('principal').value);
    const monthlyInvestment = parseFloat(document.getElementById('monthlyInvestment').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const years = parseInt(document.getElementById('years').value);

    if (isNaN(principal) || isNaN(monthlyInvestment) || isNaN(rate) || isNaN(years) || 
        principal <= 0 || monthlyInvestment < 0 || rate < 0 || years <= 0) {
        document.getElementById('result').textContent = "Please enter valid input values.";
        return;
    }

    const months = years * 12;

    const monthlyRate = rate / 12;

    const futureValuePrincipal = principal * Math.pow(1 + monthlyRate, months);

    const futureValueMonthlyInvestments = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);

    const futureValue = futureValuePrincipal + futureValueMonthlyInvestments;

    document.getElementById('result').textContent = `Future Value: $${futureValue.toFixed(2)}`;
}
