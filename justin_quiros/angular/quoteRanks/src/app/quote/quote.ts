export class Quote {
	constructor(
		public content: string = "",
		public author: string = "",
		public rank: number = null,
		public created_at: Date = new Date(),
		public updated_at: Date = new Date()
	){}
}
