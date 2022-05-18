// import package for property types
import propType from 'prop-types'

// create component here
export default function DetailAbout(props) {
  return(
    <>
    <h1>title:{props.title}</h1>
    </>
  )
  
}

// define property type for this component here
DetailAbout.propType={
  title:propType.string
}