declare interface SubjectInJournal extends Entity {
  teacher: Teacher | undefined
  subject: Subject | undefined
  journal: Journal | undefined
}