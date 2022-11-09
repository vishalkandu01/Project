function computeLoan() {

    const amount = document.getElementById('amount').value;
    const interest_rate = document.getElementById('interest_rate').value;
    const months = document.getElementById('months').value;
    var interest = (amount * (interest_rate * .01)) / months; 
    var payment = ((amount / months) + interest).toFixed(2);
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('payment').innerHTML = "Monthly Payment = $" + payment;
}