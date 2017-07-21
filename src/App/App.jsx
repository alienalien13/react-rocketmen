import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import EditRemoveButtons from './EditRemoveButtons.jsx'

var rocketmenArr = [
	{
		id: '1',
		name: 'Yura',
		surname: 'Gagarin',
		date: '11-11-1934',
		superpower: 'First'
	},
	{
		id: '2',
		name: 'Momo',
		surname: 'OmOm',
		date: '06-06-1906',
		superpower: 'Second'
	},
	{
		id: '3',
		name: 'Papa',
		surname: 'ApAp',
		date: '03-03-1903',
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
			inputSuperpower: ''
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

		/* rocketmenArr.push({
			id: (rocketmenArr.length + 1),
			name: this.state.inputName,
			surname: this.state.inputSurname,
			date: this.state.inputDate,
			superpower: this.state.inputSuperpower
		}) */

		this.state.rocketmenDisplay.push({
			id: (rocketmenArr.length + 1),
			name: this.state.inputName,
			surname: this.state.inputSurname,
			date: this.state.inputDate,
			superpower: this.state.inputSuperpower
		})

		const newOne = this.state.rocketmenDisplay;

		this.setState({
			rocketmenDisplay: newOne
		})

		console.log(this.state.rocketmenDisplay)
	}

	render(){

		const tableRowRocketmenData = this.state.rocketmenDisplay.map((item, index)=>{
			return (
				<tr key={item.id}>
					<td>{item.name}</td>
					<td>{item.surname}</td>
					<td>{item.date}</td>
					<td>{item.superpower}</td>
					<EditRemoveButtons data={item} />
				</tr>
			)
		})

		return (
			<section>
				
				<form>
					<input type='text' className='input-form input-name input-ok' onChange={this.handleOnchangeName}/>
					<input type='text' className='input-form input-surname input-ok' onChange={this.handleOnchangeSurname}/>
					<input type='date' className='input-form input-date input-ok' onChange={this.handleOnchangeDate}/>
					<input type='text' className='input-form input-superpower input-ok' onChange={this.handleOnchangeSuperpower}/>
					<input type='button' value='Add Rocketman' className='input-form input-name input-ok' onClick={this.handleClickAddRocketman}/>
				</form>

				<table>
					<thead>
						<tr>
							<th className=''>Name</th>
							<th className=''>Surname</th>
							<th className=''>Birthday</th>
							<th className=''>Superpower</th>
							<th className=''></th>
						</tr>
					</thead>

					<tbody id='tableContent'>
						{tableRowRocketmenData}
					</tbody>
				</table>
				
			</section>
		)
	}
}