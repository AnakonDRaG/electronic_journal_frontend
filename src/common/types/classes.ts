declare interface Class extends Entity {
  classroomTeacher: Teacher | undefined
  headman: Student | undefined
  currentJournal: Journal | undefined
  name: string
  students: { $values: Student[] }
}
