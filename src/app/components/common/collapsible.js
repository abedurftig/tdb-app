const style = {
  color: '#4183c4',
  textDecoration: 'underline',
  cursor: 'pointer',
  userSelect: 'none'
}

class Collapsible extends React.Component {

  constructor(props) {
    super(props)
    this.state = { childrenVisible: false }
  }

  getLabel() {
    return this.state.childrenVisible ?
      "Hide" :
      this.props.triggerLabel
  }

  handleToggle = () => {
    this.setState({ childrenVisible: !this.state.childrenVisible })
  }

  render() {
    return (
      <div>
        <p><span style={style} onClick={this.handleToggle}>{this.getLabel()}</span></p>
        {this.state.childrenVisible && this.props.children}
      </div>
    )
  } 

}

export default Collapsible