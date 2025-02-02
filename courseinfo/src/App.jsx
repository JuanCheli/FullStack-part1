
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} excercises={[exercises1, exercises2, exercises3]} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App