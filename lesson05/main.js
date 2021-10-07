function banking(){
  let currentbalance = 0;
  let input = prompt('Please enter D for deposit, W for withdraw, B for balance or Q for quit');

  while (input !== 'Q'){
    if(input==='D'){
      let deposit = prompt('Please enter deposit amount.');
      let newdeposit = parseInt(deposit);
      if(newdeposit>50000){
        alert('Error.  Deposit cap is 50,000.');
      }
      else{
        currentbalance = currentbalance + newdeposit;
        alert('Your new balance is '+currentbalance+'.');
      }
    }

    else if(input==='W'){
      let withdraw = prompt('Please enter withdraw amount.');
      let newwithdraw = parseInt(withdraw);
      currentbalance = currentbalance - newwithdraw;
      if(currentbalance<0){
        currentbalance = currentbalance + newwithdraw;
        alert('Error. Withdraw will create negative balance.  Your current balance is '+currentbalance+'.');
      }
      else if(currentbalance<300){
        let answer = prompt('Your new balance will be under 300.  Enter Y to continue or N to cancel withdraw.');
        if(answer==='Y'){
          alert('Your new balance is '+currentbalance+'.');
        }
        else{
          currentbalance = currentbalance + newwithdraw;
          alert('Your current balance is '+currentbalance+'.');
        }
      }
      else{
        alert('Your new balance is '+currentbalance+'.');
      }
      }

    else if(input==='B'){
      alert('Your current balance is '+currentbalance+'.');
    }
    else{
      alert('Invalid entry.  Please try again.');
    }
    input = prompt('Please enter D for deposit, W for withdraw, B for balance or Q for quit');
    if (input === 'Q'){
      break;
    }
  }
}
