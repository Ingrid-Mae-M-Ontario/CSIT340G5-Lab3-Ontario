const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.units1}
      </p>
      <p>
        {props.part2} {props.units2}
      </p>
      <p>
        {props.part3} {props.units3}
      </p>
    </div>
  )
}

const Total = (props) => {
  return <p>Total units: {props.total}</p>
}

const Footer = (props) => {
  return (
    <footer>
      <p>
        {props.name} - {props.courseCode} - {props.section}
      </p>
    </footer>
  )
}

const App = () => {
  const course = 'Web Systems and Technologies'
  const part1 = 'Data Structures'
  const units1 = 3
  const part2 = 'Discrete Mathematics'
  const units2 = 3
  const part3 = 'Physical Education'
  const units3 = 2

  const name = 'Ingrid Mae Ontario'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        units1={units1}
        part2={part2}
        units2={units2}
        part3={part3}
        units3={units3}
      />
      <Total total={units1 + units2 + units3} />
      <Footer name={name} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App