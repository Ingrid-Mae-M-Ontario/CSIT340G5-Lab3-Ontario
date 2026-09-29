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
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Total units:{' '}
      {props.parts[0].units + props.parts[1].units + props.parts[2].units}
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
  const parts = [
    {
      name: 'Data Structures',
      units: 3,
    },
    {
      name: 'Discrete Mathematics',
      units: 3,
    },
    {
      name: 'Physical Education',
      units: 2,
    },
  ]

  const name = 'Ingrid Mae Ontario'
  const courseCode = 'CSIT340'
  const section = 'G5'

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer name={name} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App