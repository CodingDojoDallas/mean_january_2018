export class User {
  constructor(
    public id: number = null,
    public first_name: string = "",
    public last_name: string = "",
    public email: string = "",
    public password: string = "",
    public pass_confirm: string = "",
    public street: string = "",
    public unit: string = "",
    public city: string = "",
    public state: string = "",
    public lucky: boolean = false,
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ){}
}