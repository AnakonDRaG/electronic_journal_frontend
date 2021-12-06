import React, { useEffect } from 'react'
import { Avatar, Heading, Pane, Table, Text } from 'evergreen-ui'
import { Col, Row } from 'react-bootstrap'
import { useLocalStorage } from 'react-use-storage'
import { useApplicationStorage } from 'storage/useApplicationStorage'
import { useTheme } from 'styled-components'
import { Card } from 'uikit/molecules/Components'
import { Page } from 'uikit/organism'
import { StorageKeys } from '../../../common/storage/constants'

import StudentCard from './components/StudentCard'
import {
  HomeWorkComponent,
  LessonContainer,
  LessonHeader,
  LessonHeaderContainer,
  LessonListContainer,
  LessonTableRow,
  SubjectIndexBox,
} from './styles'

const STUDENT_DATA: Student = {
  id: 0,
  firstName: 'Jaims',
  user: undefined,
  lastName: 'Holly',
  birthDate: Date.now().toString(),
  class: {
    id: 0,
    classroomTeacher: undefined,
    headman: undefined,
    currentJournal: undefined,
    name: '',
  },
  role: '',
}

const LESSONS: Lesson[] = [
  { id: 0, date: 0, subject: { name: 'History' } },
  { id: 1, date: 0, subject: { name: 'Geography' } },
  { id: 2, date: 0, subject: { name: 'Mathematics' } },
  { id: 3, date: 0, subject: { name: 'Paints' } },
  { id: 4, date: 0, subject: { name: 'Informatics' } },
]
type DayOfWeekType =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday'

const DAYS_OF_WEEK = [
  {
    name: 'Monday',
    color: 'blue',
    lessons: [
      { id: 0, date: 0, subject: { name: 'History' } },
      { id: 1, date: 0, subject: { name: 'Geography' } },
      { id: 2, date: 0, subject: { name: 'Mathematics' } },
      { id: 3, date: 0, subject: { name: 'Paints' } },
      { id: 4, date: 0, subject: { name: 'Informatics' } },
    ],
  },
  {
    name: 'Tuesday',
    color: 'green',
    lessons: [
      { id: 0, date: 0, subject: { name: 'History' } },
      { id: 1, date: 0, subject: { name: 'Geography' } },
      { id: 2, date: 0, subject: { name: 'Mathematics' } },
      { id: 3, date: 0, subject: { name: 'Paints' } },
      { id: 4, date: 0, subject: { name: 'Informatics' } },
    ],
  },
  {
    name: 'Wednesday',
    color: 'purple',
    lessons: [
      { id: 0, date: 0, subject: { name: 'History' } },
      { id: 1, date: 0, subject: { name: 'Geography' } },
      { id: 2, date: 0, subject: { name: 'Mathematics' } },
      { id: 3, date: 0, subject: { name: 'Paints' } },
      { id: 4, date: 0, subject: { name: 'Informatics' } },
    ],
  },
  {
    name: 'Thursday',
    color: 'orange',
    lessons: [
      { id: 0, date: 0, subject: { name: 'History' } },
      { id: 1, date: 0, subject: { name: 'Geography' } },
      { id: 2, date: 0, subject: { name: 'Mathematics' } },
      { id: 3, date: 0, subject: { name: 'Paints' } },
      { id: 4, date: 0, subject: { name: 'Informatics' } },
    ],
  },
  {
    name: 'Friday',
    color: 'purple',
    lessons: [
      { id: 0, date: 0, subject: { name: 'History' } },
      { id: 1, date: 0, subject: { name: 'Geography' } },
      { id: 2, date: 0, subject: { name: 'Mathematics' } },
    ],
  },
  {
    name: 'Saturday',
    color: 'red',
    lessons: [
      { id: 0, date: 0, subject: { name: 'History' } },
      { id: 1, date: 0, subject: { name: 'Geography' } },
      { id: 2, date: 0, subject: { name: 'Mathematics' } },
      { id: 3, date: 0, subject: { name: 'Paints' } },
      { id: 4, date: 0, subject: { name: 'Informatics' } },
    ],
  },
  {
    name: 'Sunday',
    color: 'red',
    lessons: [],
  },
]

const StudentProfile = () => {
  const theme = useTheme()

  const { userData } = useApplicationStorage()
  const student = userData

  const renderMasonry = (rowCount: number) => {
    let result = []
    let _temp: any[] = []

    for (let i = 0; i < Math.round(DAYS_OF_WEEK.length / rowCount); i++) {
      result.push(React.createElement(Col, {}, _temp))

      for (let j = 0; j < rowCount; j++) {
        const _i = j + i * rowCount

        if (_i >= DAYS_OF_WEEK.length) break

        const dayOfWeek = DAYS_OF_WEEK[_i]

        if (!dayOfWeek.lessons.length) break

        _temp.push(
          <LessonContainer>
            <LessonHeaderContainer>
              <LessonHeader
                background={theme.palette[dayOfWeek.color].lightest}
              >
                <Heading size={600} color={theme.palette[dayOfWeek.color].base}>
                  {dayOfWeek.name}
                </Heading>
                <Heading size={100}>{new Date().toDateString()}</Heading>
              </LessonHeader>
            </LessonHeaderContainer>
            <LessonListContainer>
              <Table.Body>
                <Table.Head
                  backgroundColor={'transparent'}
                  borderBottom={false}
                >
                  <Table.TextHeaderCell maxWidth={64} textAlign="center">
                    №
                  </Table.TextHeaderCell>
                  <Table.TextHeaderCell>Subject</Table.TextHeaderCell>
                  <Table.TextHeaderCell flex={4}>Homework</Table.TextHeaderCell>
                  <Table.TextHeaderCell>Score</Table.TextHeaderCell>
                </Table.Head>
                <Table.Body>
                  {dayOfWeek.lessons.map((lesson, index) => {
                    return (
                      <LessonTableRow>
                        <Table.TextCell maxWidth={64} textAlign="center">
                          <SubjectIndexBox>{index + 1}</SubjectIndexBox>
                        </Table.TextCell>
                        <Table.TextCell>{lesson.subject.name}</Table.TextCell>
                        <Table.TextCell flex={4}>
                          <HomeWorkComponent>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Id, possimus.
                          </HomeWorkComponent>
                        </Table.TextCell>
                        <Table.TextCell>2</Table.TextCell>
                      </LessonTableRow>
                    )
                  })}
                </Table.Body>
              </Table.Body>
            </LessonListContainer>
          </LessonContainer>,
        )
      }
      _temp = []
    }
    return <Row className="g-3">{result}</Row>
  }

  return (
    <Page title="Schedule">
      <Pane>{renderMasonry(3)}</Pane>
    </Page>
  )
}

export default StudentProfile
