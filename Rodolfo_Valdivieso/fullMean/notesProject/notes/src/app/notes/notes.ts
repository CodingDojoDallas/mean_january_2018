export class Note {
  constructor(
    public id: number = null,
    public content: string = "",
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date()
  ){}
}