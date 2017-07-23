import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import NewRow from './NewRow.jsx'
/* import RocketmenArr from './rocketmen.js'
 */

var rocketmenArr = [
	{
		id: '1',
		name: 'Yura',
		surname: 'Gagarin',
		date: '1934-11-11',
		superpower: 'First'
	},
	{
		id: '2',
		name: 'Momo',
		surname: 'OmOm',
		date: '1906-06-06',
		superpower: 'Second'
	},
	{
		id: '3',
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
			rocketmenDisplay: rocketmenArr(),
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
		this.remove = this.remove.bind(this);
		this.handlerOnClickSortName = this.handlerOnClickSortName.bind(this);
		this.handlerOnClickSortSurname = this.handlerOnClickSortSurname.bind(this);
		this.handlerOnClickSortDate = this.handlerOnClickSortDate.bind(this);
		this.handlerOnClickSortSuperpower = this.handlerOnClickSortSuperpower.bind(this);
		this.handlerOnChangeSearch = this.handlerOnChangeSearch.bind(this);
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

		rocketmenArr().push({
			id: (rocketmenArr().length + 1),
			name: this.state.inputName,
			surname: this.state.inputSurname,
			date: this.state.inputDate,
			superpower: this.state.inputSuperpower
		})

		this.setState({
			rocketmenDisplay: this.state.rocketmenDisplay.sort(function(el1, el2){
				if (el1.id > el2.id) return 1;
				if (el1.id < el2.id) return -1;
			})
		})

		//console.log({NewRow: this.state})
		//console.log(rocketmenArr())
		
	}

	remove(index){

		//rocketmenArr.splice(index,1)

		delete rocketmenArr()[index]

		this.setState({
			rocketmenDisplay: rocketmenArr()
		})

		console.log(index)
	}

	handlerOnClickSortName(){
		this.state.switchName++

		var nameSorted
		
		switch (this.state.switchName){
			case 1:
				nameSorted = rocketmenArr().sort(function(el1, el2){
					if (el1.name.toLowerCase() > el2.name.toLowerCase()) return 1;
					if (el1.name.toLowerCase() < el2.name.toLowerCase()) return -1;
				})
			break
			case 2:
				nameSorted = rocketmenArr().sort(function(el1, el2){
					if (el1.name.toLowerCase() < el2.name.toLowerCase()) return 1;
					if (el1.name.toLowerCase() > el2.name.toLowerCase()) return -1;
				})
			break
			case 3:
				nameSorted = rocketmenArr().sort(function(el1, el2){
					if (el1.id > el2.id) return 1;
					if (el1.id < el2.id) return -1;
				})
			break
		}

		this.setState({
			rocketmenDisplay: nameSorted
		})
	}

	handlerOnClickSortSurname(){
		this.state.switchSurname++

		var surnameSorted
		
		switch (this.state.switchSurname){
			case 1:
				surnameSorted = rocketmenArr().sort(function(el1, el2){
					if (el1.surname.toLowerCase() > el2.surname.toLowerCase()) return 1;
					if (el1.surname.toLowerCase() < el2.surname.toLowerCase()) return -1;
				})
			break
			case 2:
				surnameSorted = rocketmenArr().sort(function(el1, el2){
					if (el1.surname.toLowerCase() < el2.surname.toLowerCase()) return 1;
					if (el1.surname.toLowerCase() > el2.surname.toLowerCase()) return -1;
				})
			break
			case 3:
				surnameSorted = rocketmenArr().sort(function(el1, el2){
					if (el1.id > el2.id) return 1;
					if (el1.id < el2.id) return -1;
				})
			break
		}

		this.setState({
			rocketmenDisplay: surnameSorted
		})	
	}

	handlerOnClickSortDate(){

	}

	handlerOnClickSortSuperpower(){

	}

	handlerOnChangeSearch(){

	}

	render(){

		/* const tableRowRocketmenData = this.state.rocketmenDisplay.map((item, index)=>{
			return (
				<tr key={item.id}>
					<td>{item.name}</td>
					<td>{item.surname}</td>
					<td>{item.date}</td>
					<td>{item.superpower}</td>
					<EditRemoveButtons data={item} />
				</tr>
			)
		}) */
		
		/* const tableRowRocketmenData = rocketmenArr.map((item, index)=>{
			return (
				<NewRow key={item.id} data={item} rmRocketman={this.remove}/>
			)
		}) */
		const tableRowRocketmenData = rocketmenArr().map((item, index)=>{
			return (
				<NewRow key={item.id} data={item} rmRocketman={this.remove}/>
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
							<th onClick={this.handlerOnClickSortName}>Name</th>
							<th onClick={this.handlerOnClickSortSurname}>Surname</th>
							<th onClick={this.handlerOnClickSortDate}>Birthday</th>
							<th onClick={this.handlerOnClickSortSuperpower}>Superpower</th>
							<th></th>
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