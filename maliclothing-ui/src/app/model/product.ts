import { CartItem } from 'ng-shopping-cart';

export class Product extends CartItem {

	constructor(itemData: any) {
		super();
		this.uuid = itemData.upcCode;
		this.description = itemData.description;
		this.image = itemData.image;
		this.upcCode = itemData.upcCode;
		this.name = itemData.name;
		this._size = itemData._size;
		this.price = itemData.price;
		this.quantity = itemData.quantity;
		// this.cost = itemData.price;
	}

	public uuid: string;
	public description: string;
	// public cost: number;

	public image: string;
	public upcCode: string;
	public name: string;
	public _size: string;
	public price: number;
	public quantity: number;

	public getId(): any { // <-- implement all abstract methods to interop with the library
		return this.uuid;
	}

	getName(): string {
		return this.name;
	}
	getPrice(): number {
		return this.price;
	}
	setQuantity(quantity: number): void {
		this.quantity = quantity;
	}
	getQuantity(): number {
		return this.quantity;
	}
	setImage(image: string): void {
		this.image = image;
	}
	getImage(): string {
		return this.image;
	}

	total(): number {
		return this.quantity * this.price;
	}
}