
const Header = (prop) => {
  return (
    <>
      <h1>{prop.course}</h1>
    </>
  )
}
const Part = (prop) => {
  console.log(prop)
  return (
    <p>
      {prop.part} {prop.exercise}
    </p>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.parts[0]} exercise={props.excercises[0]}/>
      <Part part={props.parts[1]} exercise={props.excercises[1]}/>
      <Part part={props.parts[2]} exercise={props.excercises[2]}/>
    </div>
  )
}

const Total = (prop) => {
  return (
    <div>
      <p>Number of excercises {prop.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1.name, part2.name, part3.name]} excercises={[part1.exercises, part2.exercises, part3.exercises]} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App