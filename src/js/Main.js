import { Shipping } from './Shipping.js';

class Main{
  constructor(){
    
  	var inputElement = document.getElementById('check7dr');
  	var message = document.getElementById('message');
  	inputElement.addEventListener('keyup',(e)=>{
  		if(Shipping.checkdigit7DR(inputElement.value)){
  			message.innerHTML = 'OK';	
  		}else{
  			message.innerHTML = 'NG';	
  		}
  	});
  }

}
new Main();

