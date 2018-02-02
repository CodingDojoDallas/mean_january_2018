export class Product {
	constructor(
		public id: number = null,
		public title: string = "",
		public price: number = "",
		public img: string = "",
		public created_at: Date = new Date(),
		public updated_at: Date = new Date()
	){}
}
