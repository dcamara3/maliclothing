import { CartItem } from 'ng-shopping-cart';

export class Product extends CartItem {

	public uuid: string;
	public description: string;
	public cost: number;

	// ... add your own properties and methods
	public upcCode: string;
	public name: string;
	// public  description : string;
	public _size: string;
	public price: number;
	public quantity: number;

	constructor(itemData: any) {
		super();
		this.uuid = itemData.upcCode;
		this.description = itemData.description;
		this.cost = itemData.price;
		this.upcCode = itemData.upcCode;
		this.name = itemData.name;
		this._size = itemData._size;
		this.price = itemData.price;
		this.quantity = itemData.quantity;
	}

	public getId(): any { // <-- implement all abstract methods to interop with the library
		return this.uuid;
	}

	// ... also add getName, getPrice, getImage, getQuantity and setQuantity 
	getName(): string {
		return this.name;
	}
	getPrice(): number {
		return this.price;
	}
	getImage(): string {
		return "assets/images/" + this.upcCode + ".jpg";
		// return this.getImage();
	}
	getQuantity(): number {
		return this.quantity;
	}
	setQuantity(quantity: number): void {
		this.quantity = quantity;
	}
}