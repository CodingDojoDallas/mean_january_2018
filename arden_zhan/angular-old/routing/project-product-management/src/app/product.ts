export class Product {
    constructor(
        public id: number = Date.now(),
        public title: string = '',
        public price: number = null,
        public imageURL: string = null
    ) {}
}
