export class Shipping{

	constructor(){
		
	}

	static checkdigit7DR(no12){
		let no11 = String(no12).substr(0,11);
		let calcNo12 = String(no11) + String(no11%7);
		console.log(no12);	
		console.log(calcNo12);
		if(calcNo12==no12){
			return true;
		}else{
			return false;
		}
	}

	static checkdigitYamato(no){
		return this.checkdigit7DR(no);
	}
	static checkdigitSagawa(no){
		return this.checkdigit7DR(no);
	}
	static checkdigitYubin(no){
		return this.checkdigit7DR(no);
	}


}