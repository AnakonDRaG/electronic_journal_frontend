declare interface Journal extends Entity{
  dateStart: Date | number
  dateEnd: Date | number
  class: Class | undefined
}