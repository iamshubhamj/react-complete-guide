import React,{Component} from 'react';
import classes from './Person.css';
import propTypes from 'prop-types';
class Person extends Component {
    constructor(props){
        super(props);
        console.log(`[Person] inside constructer`);
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
          console.log( `[Person] inside componentWillMount()`)
        }
        
        componentDidMount() {
          
          console.log(`[Person] inside componentDidMount()`)
          if(this.props.position === 0) {
            this.inputElement.focus();
          }
         
        }
    render() {
        console.log(`[Person] inside render()`);
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I am {this.props.name} and my age is {this.props.age}</p>
              <p>{this.props.children}</p>
                <input
                ref={(inp) => {this.inputElement = inp}}
                 type="text" 
                 onChange={this.props.changed} />
            </div>
        )
    }
}
Person.propTypes = {
  click : propTypes.func,
  name:propTypes.string,
  age:propTypes.number,
  changed:propTypes.func
}
export default Person;