class App extends React.Component {

    constructor() {
        super();
        this.state = {
            projects:[],
            user: {
                firstName: "Max",
                lastName: "Admin",
                accountId: 1
            }
        };
    }

    componentDidMount() {
        console.log(process.env);
        fetch("http://localhost:8080/api/account/1/projects").then(result => {
            return result.json();
        }).then(projects => {

            let projectsEl = projects.map(pr => {
                return <li key={pr.id}>{pr.name}</li>
            })    

            this.setState({projects: projectsEl});
        }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ', error.message);
        });
    }

    render() {
        return (
            <div>
                {this.props.message}
                <ul>
                    {this.state.projects}
                </ul>
            </div>
        )
    }

}    

export default App;