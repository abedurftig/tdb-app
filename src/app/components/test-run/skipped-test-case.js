const style = {
  backgroundColor: '#F4D742',
  marginBottom: '5px',
  padding: '5px'
}

export default (props) => {

  return (
    <div style={style}>
      <p>Name: {props.testCase.name}, Test-Suite: {props.testCase.testSuiteId}</p>
    </div>
  )

}