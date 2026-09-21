const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.units}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Total units: {props.part1.units + props.part2.units + props.part3.units}
    </p>
  )
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
  const part1 = {
    name: 'Data Structures',
    units: 3,
  }
  const part2 = {
    name: 'Discrete Mathematics',
    units: 3,
  }
  const part3 = {
    name: 'Physical Education',
    units: 2,
  }

  const name = 'Ingrid Mae Ontario'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
      <Footer name={name} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App