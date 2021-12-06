import { getClassById, getClasses } from 'api/class'
import { getTeacherData } from 'api/teacher'
import { Heading, Pane, Text } from 'evergreen-ui'
import React, { useEffect, useState } from 'react'
import { useApplicationStorage } from 'storage/useApplicationStorage'
import { useTheme } from 'styled-components'
import { Card } from 'uikit/molecules'
import { Page } from 'uikit/organism'
import MenuItem from 'uikit/organism/SideBar/components/Menu/components/MenuItem'
import Link from 'next/link'

const MyClass = () => {
  const theme = useTheme()

  const {
    page: { setIsLoaderShown },
  } = useApplicationStorage()

  const [teacherData, setTeacherData] = useState<Teacher>()
  const [myClass, setMyClassData] = useState<Class>([])
  const [students, setStudent] = useState<Student[]>([])

  useEffect(() => {
    ;(async () => {
      setIsLoaderShown(true)

      const responseTeacher = await getTeacherData()
      if (responseTeacher.success) {
        setTeacherData(responseTeacher.data)

        const responseClass = await getClassById(
          responseTeacher.data.currentClass.id,
        )

        if (responseClass.success) {
          setMyClassData(responseClass.data)
          setStudent(responseClass.data.students.$values)
        }
      }

      setIsLoaderShown(false)
    })()
  }, [])

  return (
    <Page>
      <Pane display="flex" flexDirection="column" gap={24}>
        <Pane display="flex" flexDirection="row" gap={24} alignItems="center">
          <Card padding={12}>
            <Link
              href={{
                pathname: '/profile/teacher/myClass/addStudent',
                query: { classId: teacherData?.currentClass?.id },
              }}
            >
              <MenuItem
                text="Add student"
                icon={{ name: 'new-person' }}
                color={theme.palette.neutral.base}
                background={theme.palette.blue.lightest}
              />
            </Link>
          </Card>
          {!myClass.headman && (
            <Link
              href={{
                pathname: '/profile/teacher/myClass/addHeadman',
                query: { classId: teacherData?.currentClass?.id },
              }}
            >
              <Card padding={12}>
                <MenuItem
                  text="Add headman"
                  icon={{ name: 'clipboard' }}
                  color={theme.palette.neutral.base}
                  background={theme.palette.blue.lightest}
                />
              </Card>
            </Link>
          )}
        </Pane>
        <Card padding={24} width="100%">
          <Pane display="flex" flexDirection="row">
            <Heading size={800} marginBottom={12} width="100%">
              It`s my class:{' '}
              <Text size={900} color={theme.palette.blue.base}>
                {teacherData?.currentClass?.name}
              </Text>
            </Heading>
            <Heading
              size={800}
              marginBottom={12}
              color={theme.palette.blue.base}
            >
              {students.length}
            </Heading>
          </Pane>
          <Card>
            <Heading marginBottom={8}>Headman:</Heading>
            <Pane
              display="flex"
              flexDirection="row"
              gap={8}
              alignItems="center"
            >
              <Card
                background={theme.palette.teal.base}
                width={28}
                height={28}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Heading color="#fff" size={400}>
                  {myClass.headman?.id}
                </Heading>
              </Card>
              <Card background={theme.palette.blue.lightest} width="100%">
                <Text
                  size={600}
                >{`${myClass.headman?.firstName} ${myClass.headman?.lastName}`}</Text>
              </Card>
            </Pane>
          </Card>
          <Card>
            <Heading marginBottom={8}>Students:</Heading>
            <Pane display="flex" flexDirection="column" gap={24}>
              {students.map(student => {
                return (
                  <Pane
                    display="flex"
                    flexDirection="row"
                    gap={8}
                    alignItems="center"
                  >
                    <Card
                      background={theme.palette.blue.base}
                      width={28}
                      height={28}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Heading color="#fff" size={400}>
                        {student.id}
                      </Heading>
                    </Card>
                    <Card background={theme.palette.blue.lightest} width="100%">
                      <Text>{`${student.firstName} ${student.lastName}`}</Text>
                    </Card>
                  </Pane>
                )
              })}
            </Pane>
          </Card>
        </Card>
      </Pane>
    </Page>
  )
}

export default MyClass
