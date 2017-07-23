import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import NewRow from './NewRow.jsx'

var rocketmenArr = [
	{
		id: 0,
		name: 'Yura',
		surname: 'Gagarin',
		date: '1934-11-11',
		superpower: 'First'
	},
	{
		id: 1,
		name: 'Momo',
		surname: 'OmOm',
		date: '1906-06-06',
		superpower: 'Second'
	},
	{
		id: 2,
		name: 'Papa',
		surname: 'ApAp',
		date: '1903-03-03',
		superpower: 'Third'
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
			switchName: 0,
			switchSurname: 0,
			switchDate: 0,
			switchSuperpower: 0
		}

		this.handleOnchangeName = this.handleOnchangeName.bind(this);
		this.handleOnchangeSurname = this.handleOnchangeSurname.bind(this);
		this.handleOnchangeDate = this.handleOnchangeDate.bind(this);
		this.handleOnchangeSuperpower = this.handleOnchangeSuperpower.bind(this);
		this.handleClickAddRocketman = this.handleClickAddRocketman.bind(this);
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

		rocketmenArr.push({
			id: (rocketmenArr.length),
			name: this.state.inputName,
			surname: this.state.inputSurname,
			date: this.state.inputDate,
			superpower: this.state.inputSuperpower
		})

		console.log(rocketmenArr)

		this.setState({
			rocketmenDisplay: rocketmenArr.sort(function(el1, el2){
				if (el1.id > el2.id) return 1;
				if (el1.id < el2.id) return -1;
			})
		})
	}

	render(){

		return (
			<section>
				
				<form>
					<input type='text' className='input-form input-name input-ok' onChange={this.handleOnchangeName}/>
					<input type='text' className='input-form input-surname input-ok' onChange={this.handleOnchangeSurname}/>
					<input type='date' className='input-form input-date input-ok' onChange={this.handleOnchangeDate}/>
					<input type='text' className='input-form input-superpower input-ok' onChange={this.handleOnchangeSuperpower}/>
					<input type='button' value='Add Rocketman' className='input-form input-name input-ok' onClick={this.handleClickAddRocketman}/>
				</form>

				<NewRow data={rocketmenArr}/>
				
			</section>
		)
	}
}