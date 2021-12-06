declare interface Human extends Entity {
  firstName: string
  lastName: string
  birthDate: string
  user: User | undefined
  role: string
}
