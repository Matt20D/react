const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

// the spread operator will make all of the fields from that object props to be passed in
const CardList = (props) => (
	<div>
  	{props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
	</div>
);

// the reactive nature of this component allows us to track each character that gets passed into the text box
// for instance : abcdef, React trackss a, ab, abc, ...
// This is nice for autocomplete, and is stored in React's memory. We are forcing state through react.
class Form extends React.Component {
	state = {userName: ''};
  handleSubmit = async (event) => { // fetch or any http call returns a promise. thus, we need to await, and label the method async
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`); // could also use the fetch command, source here: https://rapidapi.com/guides/fetch-api-react
    this.props.onSubmit(resp.data); // here we are passed a function reference that we used to actually update the state of the App component.
    this.setState({userName: ''});
  };

  render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
    	  <input 
          type="text" 
          value={this.state.userName}
          onChange={event => this.setState({userName: event.target.value})}
          placeholder="GitHub username"  
          required />
        <button>Add card</button>
    	</form>
    );
  }
}

// This way of parsing the data via the on-submit, we are just getting the final value passed in.
// React is not aware of the state of this component as it is being written in. The other Form component
// handles that much cleaner
// class FormUsingRefObject extends React.Component {
// 	userNameInput = React.createRef();
//   handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(this.userNameInput.current.value)
//   };

//   render() {
//   	return (
//     	<form onSubmit={this.handleSubmit}>
//     	  <input type="text" placeholder="GitHub username" ref={this.userNameInput} required />
//         <button>Add card</button>
//     	</form>
//     );
//   }
// }

// using the generic props we are able to do re-use this component in a much neater fashion
class Card extends React.Component {
	render() {
  	
    // inline use of styling is actually easier to do conditionals instead
    // of having so many different conditional class names in the global .css file

    // <div className="github-profile" style={{ margin: '1rem'}}> 
    // <div className="info" style={{display: 'inline-block', marginLeft: 10}}>

    // this returns to the instance of the Card invocation
    const profile = this.props;

  	return (
    	<div className="github-profile">
    	  <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    	</div>
    );
  }
}

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: testData
  //   };
  // }

  // this is an alternative to the constructor call
  state = {
    // profiles: testData, // eventually this will become an empty array
    profiles: []
  };
  
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };

	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles} />
    	</div>
    );
  }	
}

ReactDOM.render(
	<App title="The GitHub Cards App" />,
  mountNode,
);

// *** The React 18 way:
// root.render(
//   <App title="The GitHub Cards App" />,
// );