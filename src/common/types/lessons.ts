declare interface Lesson extends Entity {
  date: Date | number
  subject: Omit<Subject, keyof Entity>
}