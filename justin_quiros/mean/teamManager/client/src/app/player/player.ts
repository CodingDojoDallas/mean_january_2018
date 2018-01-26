export class Player {
	constructor(
		public name: string = "",
		public position: string = "",
		public game1: string[] = ['', '', 'yellow'],
		public game2: string[] = ['', '', 'yellow'],
		public game3: string[] = ['', '', 'yellow'],
		public createdAt: Date = new Date(),
		public updatedAt: Date = new Date()
	){}

}
