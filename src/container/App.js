import React, { PureComponent } from 'react';
import classes from './App.css';
import WithClass from '../hoc/WithClass';
import Persons from '../components/Persons/Persons';
import Cockpit from  '../components/Cockpit/Cockpit';


class App extends PureComponent {
constructor(props){
super(props);
console.log(`[APP] inside constructer`);
this.state = {
  persons: [
    { id: "jhbhjbew", name: "shubham", age: 26 },
    { id: "dsda", name: "zaid", age: 27 },
    { id: "dafaa", name: "kalia", age: 22 }
  ],
  otherState: "someState",
  showPersons: false,
  toggleclicked : 0
}

}
 
componentWillMount() {
  console.log( `[APP] inside componentWillMount()`)
}

componentDidMount() {
  console.log(`[App] inside componentDidMount()`)
}
/**
 *  @description : we used should component to improve performance. 
 */
// shouldComponentUpdate(nextProps,nextState) {
//   console.log(`update [App.js] and component is shouldComponentUpdate : `,nextProps,nextState);
// return nextState.persons !== this.state.persons ||
// nextState.showPersons !== this.state.showPersons
//  // return true;
// }
componentWillUpdate(nextProps,nextState) {
  console.log(`update [App.js] and component in componentWillUpdate() :`,nextProps,nextState)
}

componentDidUpdate() {
  console.log(`Update [App.js] and component in componentDidUpdate()`);
}


  // switchHandler = (newName) => {
  //   //console.log('was clicked !!!!!');
  //   // DON'T DO THIS :   this.state.persons[0].name = "jaiswal";
  //   this.setState({
  //     persons: [
  //       { name: newName, age: "26" },
  //       { name: "zaid", age: "25" },
  //       { name: "kalia", age: "22" }
  //     ]
  //   })
  // }

  nameChangeHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    }
    // const person = Object.assign({}, this.state.persons[personIndex])
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person
    this.setState({ persons: persons })

  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState,props) => {
return  { showPersons: !doesShow ,
toggleclicked : prevState.toggleclicked + 1
}
    }
     
      );
  }
  /**
   * @description splice method use to delete the array properties.
   * for example below persons.splice(personIndex, 1); , personIndex is the index value and 1 is the length.
   */
  deletePersonalHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  render() {
console.log(`[App] inside render()`)
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer'
    // };

    let PersonIs = null;
    
    if (this.state.showPersons) {
      PersonIs = (
        <Persons 
        persons = {this.state.persons}
        clicked = {this.deletePersonalHandler}
        changed = {this.nameChangeHandler}/>

      );

    //  btnClass = classes.Red;
     // style.backgroundColor = 'red';

    }
 

    return (
      <div className={classes.App}>
        <button onClick = {() => {this.setState({showPersons : true})}}>show paerson</button>
       <Cockpit 
       showPersons = {this.state.showPersons}
       clicked = {this.togglePersonHandler}
       appTitle = {this.props.title}
       persons = {this.state.persons}
       />
        {PersonIs}
      </div>
    );
    /**
     * @description
     * React.createElement is used to call jsx internally.
     * example below
     return React.createElement('div',{className : 'App'},React.createElement('h1',null,'does works ?'))
   */
  }
}

export default App;
