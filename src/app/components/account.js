class AccountScreen extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div>Hello <b>{this.props.user.name}</b>!</div>
  }

}

export default AccountScreen