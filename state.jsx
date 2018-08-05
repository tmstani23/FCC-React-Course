//Example 1: Basic stateful component
//Stateful components must extend React.Component
class StatefulComponent extends React.Component {
    //State is an object that is declared within a constructor
    constructor(props) {
      super(props);
      // State initialized here 
      this.state = {
        name: "Timothy"
      }
    }
    render() {
      return (
        <div>
            {/* State  is called here and rendered as JSX h1 */}
            <h3>{this.state.name}</h3>
        </div>
      );
    }
};
//Example 2: Using Javascript Within a Stateful Component's Render Method
class NameComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "I'm a working variable"
      }
    }
    render() {
      // JS code can be executed before the return statement in the render method
        //Curly braces are not needed as this section is not viewed as JSX by react.
      const name = this.state.name;  
      return (
        <div>
          { /* Here the name variable is returned as an h1 */ }
            <h3>{name}</h3>
        </div>
      );
    }
};
//Example 3: Updating state using setState
class UpdateComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Initial State'
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      // Here the name attribute of state  is updated using setState:
      this.setState({name: "Updated State!"});
    }
    render() {
      return (
        <div>
          {/* The name variable is rendered. When the button is clicked the state is updated */}
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
};
//Example 4: Using State to Toggle an Element:
class ToggleComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
      // Here the method is bound so this will always reference it
      this.toggleVisibility = this.toggleVisibility.bind(this);
    }
    // This method toggles state's visibility attribute between false/true
    toggleVisibility() {
      this.state.visibility === false
      ? this.setState({visibility: true})
      : this.setState({visibility: false})
    }
    // Here the toggle method is called when the button is clicked.
    //Depending on the value of visibility a different message is shown.
    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>You don't see me!</h1>
          </div>
        );
      }
    }
};




ReactDOM.render(
    //<StatefulComponent />,
    //<NameComponent />,
    //<UpdateComponent />,
    <ToggleComponent />, 
    document.getElementById("state-div")
);