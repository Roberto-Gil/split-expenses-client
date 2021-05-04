export class Payment {
	name: string;
	amount: number;
	description: string;
	paymentDate?: Date;
	
	constructor() {
        this.name = '';
		this.amount = 0;
		this.description = '';
    }
}
