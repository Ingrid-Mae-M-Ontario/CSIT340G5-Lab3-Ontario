const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.units}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} units={props.units1} />
      <Part part={props.part2} units={props.units2} />
      <Part part={props.part3} units={props.units3} />
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