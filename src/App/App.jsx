import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import NewRow from './NewRow.jsx'

var rocketmenArr = [
	{
		id: 0,
		name: 'Yuri',
		surname: 'Gagarin',
		date: '1934-03-09',
		superpower: 'He was the first human to journey into outer space'
	},
	{
		id: 1,
		name: 'Alan',
		surname: 'Shepard',
		date: '1923-11-18',
		superpower: 'He became the second person, and the first American, to travel into space, and the first person to manually control the orientation of his spacecraft'
	},
	{
		id: 2,
		name: 'Neil',
		surname: 'Armstrong',
		date: '1930-08-05',
		superpower: "Armstrong's second and last spaceflight was as commander of Apollo 11, the first manned Moon landing mission in July 1969"
	},
	{
		id: 3,
		name: 'Vladimír',
		surname: 'Remek',
		date: '1948-09-26',
		superpower: 'Remek is considered to be the first astronaut from the European Union'
	}
]

export default class App extends Component{

	constructor(props){
		super(props);
		this.state = {
			rocketmenDisplay: rocketmenArr,
			inputName: '',
			inputSurname: '',
			inputDate: '',
			inputSuperpower: '',
			restartSort: 0
		}

		this.handleOnchangeName = this.handleOnchangeName.bind(this);
		this.handleOnchangeSurname = this.handleOnchangeSurname.bind(this);
		this.handleOnchangeDate = this.handleOnchangeDate.bind(this);
		this.handleOnchangeSuperpower = this.handleOnchangeSuperpower.bind(this);
		this.handleClickAddRocketman = this.handleClickAddRocketman.bind(this);
		this.resetArray = this.resetArray.bind(this);
	}

	resetArray(){				
		return rocketmenArr.sort(function(el1, el2){
			if (el1.id > el2.id) return 1;
			if (el1.id < el2.id) return -1;
		})
	}

	handleOnchangeName(ev){
		this.setState({
			inputName: ev.target.value
		})
	}
	
	handleOnchangeSurname(ev){
		this.setState({
			inputSurname: ev.target.value
		})
	}

	handleOnchangeDate(ev){
		this.setState({
			inputDate: ev.target.value
		})
	}

	handleOnchangeSuperpower(ev){
		this.setState({
			inputSuperpower: ev.target.value
		})
	}

	handleClickAddRocketman(){

		if(this.state.inputName !== '' && this.state.inputSurname !== '' && this.state.inputDate !== '' && this.state.inputSuperpower !== ''){

			rocketmenArr.push({
				id: (rocketmenArr.length),
				name: this.state.inputName,
				surname: this.state.inputSurname,
				date: this.state.inputDate,
				superpower: this.state.inputSuperpower
			})

			this.setState({
				rocketmenDisplay: this.resetArray(),
				restartSort: 0,
				inputName: '',
				inputSurname: '',
				inputDate: '',
				inputSuperpower: '',
			})

		}

	}

	render(){

		return (
			<section className='row justify-content-center'>
				
				<form className='col-md-3 form-group'>
					<input type='text' placeholder='Name' value={this.state.inputName} className='input-form input-name form-control' onChange={this.handleOnchangeName} autoFocus/>
					<input type='text' placeholder='Surname' value={this.state.inputSurname} className='input-form input-surname form-control' onChange={this.handleOnchangeSurname}/>
					<input type='date' placeholder='Birthday' value={this.state.inputDate} className='input-form input-date form-control' onChange={this.handleOnchangeDate}/>
					<textarea placeholder='Superpower' value={this.state.inputSuperpower} className='input-form input-superpower form-control' onChange={this.handleOnchangeSuperpower}/>
					<input type='button' value='Add Rocketman' className='input-form input-ok btn btn-success' onClick={this.handleClickAddRocketman}/>
				</form>

				<NewRow data={rocketmenArr} restart={this.state.restartSort}/>
				
			</section>
		)
	}
}