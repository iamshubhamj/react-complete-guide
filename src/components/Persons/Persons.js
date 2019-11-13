import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props){
    super(props);
    console.log(`[Persons] inside constructer`);
    this.state = {
      persons: [
        { id: "jhbhjbew", name: "shubham", age: "26" },
        { id: "dsda", name: "zaid", age: "27" },
        { id: "dafaa", name: "kalia", age: "22" }
      ],
      otherState: "someState",
      showPersons: false
    }
    
    }
     
    componentWillMount() {
      console.log( `[Persons] inside componentWillMount()`)
    }
    
    componentDidMount() {
      console.log(`[Persons] inside componentDidMount()`)
    }

    componentWillReceiveProps(nextProps) {
      console.log('update [person.js] and component is componentWillReceiveProps() ')
    }

    // shouldComponentUpdate(nextProps,nextState) {
    //   console.log(`update [person.js] and component is shouldComponentUpdate : `,nextProps,nextState);
    //   return nextProps.persons !== this.props.persons ||
    //    nextProps.clicked != this.props.clicked ||
    //    nextProps.changed != this.props.changed
    //    ;
    //  //return true;
    // }
    componentWillUpdate(nextProps,nextState) {
      console.log(`update [person.js] and component in componentWillUpdate() :`,nextProps,nextState)
    }

    componentDidUpdate() {
      console.log(`Update [person.js] and component in componentDidUpdate()`);
    }

  render() {
    console.log(`[Persons] inside render() `);
    return (this.props.persons.map((person, index) => {
      return <Person
        click={() => {
          this.props.clicked(index);
        }}
        name={person.name}
        age={person.age}
        key={person.id}
        position={index}
        changed={(event) => {
          this.props.changed(event, person.id)
        }} />
    }))
    
  }
}



export default Persons;