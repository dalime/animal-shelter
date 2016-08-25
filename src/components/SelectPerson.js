import React, { Component } from 'react';
import { Link } from 'react-router';
import AnimalStore from '../stores/AnimalStore';
import PersonStore from '../stores/PersonStore';
import PersonActions from '../actions/PersonActions';
import { browserHistory } from 'react-router';

export default class SelectPerson extends Component {
  constructor(props) {
    super(props);

    // this._onChange = this._onChange.bind(this);
    this.setPerson = this.setPerson.bind(this);
  }

  // componentDidMount() {
  //   // PersonActions.getPeople();
  //   // PersonStore.on('CHANGE', this._onChange);
  //   // PersonStore.startListening(this._onChange);
  //   AnimalStore.startListening(this._onChange);
  // }
  //
  // componentWillUnmount() {
  //   // PersonStore.stopListening(this._onChange);
  //   AnimalStore.stopListening(this._onChange);
  // }
  //
  // _onChange() {
  //   console.log ('PersonStore.getPeople():', PersonStore.getPeople())
  //   this.setState({people: PersonStore.getPeople()});
  // }

  setPerson(e) {
    e.preventDefault();
    let personId = e.target.getAttribute('data-id');
    this.props.setPerson(personId);
  }

  render() {
    if (this.props.people) {
      const Persons = this.props.people.map(person => {
        return (
          <li key={person._id} onClick={this.setPerson}><a data-id={person._id} href="#">{person.name}</a></li>
        )
      })
      let Person;
      if (this.props.person) {
        Person = <h5>{this.props.person.name}</h5>
      } else {
        Person = <h5>Select Adopter</h5>
      }
      return (
        <div>
          {Person}
          <div className="dropdown">
            <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Select Adopter
            <span className="caret"></span></button>
            <ul className="dropdown-menu">
              {Persons}
            </ul>
          </div>
        </div>
      )
    } else {
      return (
        <h1>Loading...</h1>
      )
    }
  }
}
