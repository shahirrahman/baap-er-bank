// Function for sum
function sumInnertextandValue  (innerText, value){
    const sumOfThem = parseFloat(innerText.innerText) + parseFloat(value.value);
    return sumOfThem;
}


// Deposits

document.getElementById('deposit-btn').addEventListener('click', function (){

    // Get the ammount deposited
    const depositAmount = document.getElementById('deposit-amount');
    const netBalance = document.getElementById('net-balance');
    if (depositAmount.value > 0){
        const netDeposit = document.getElementById('net-deposit');
    
        netDeposit.innerText =  sumInnertextandValue(netDeposit, depositAmount);

        // Update the net balance
        

        netBalance.innerText = sumInnertextandValue(netBalance, depositAmount);
        document.getElementById('warning-text').innerText = ''
    }
    else{
        document.getElementById('warning-text').innerText = 'Your input is not valid.'
    }
    // clear the input field
    depositAmount.value = '';
})


// Withdraws

document.getElementById('withdraw-btn').addEventListener('click', function (){

    // Get the ammount withdrawed
    const withdrawAmount = document.getElementById('withdraw-amount');
    const netBalance = document.getElementById('net-balance');

    if (withdrawAmount.value > 0 && parseFloat(withdrawAmount.value) <= parseFloat(netBalance.innerText)){
        const netWithdraw = document.getElementById('net-withdraw');
    
        netWithdraw.innerText =  sumInnertextandValue(netWithdraw, withdrawAmount);


        // Update the net balance
        const netBalanceAfterWithdraw = document.getElementById('net-balance');
        const updatedBalanceAfterWithdraw = parseFloat(netBalanceAfterWithdraw.innerText) - parseFloat(withdrawAmount.value);
        netBalanceAfterWithdraw.innerText = updatedBalanceAfterWithdraw;
        document.getElementById('warning-text').innerText = ''
    }
    else{
        document.getElementById('warning-text').innerText = 'Your input is not valid.'
    }

    // clear the input field
    withdrawAmount.value = '';
})