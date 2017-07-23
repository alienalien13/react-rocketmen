import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class NewRow extends Component{

	constructor(props){
		super(props);
		this.state = {
			name: this.props.data.name,
			surname: this.props.data.surname,
			date: this.props.data.date,
			superpower: this.props.data.superpower,
			EditAndRemoveOnOff: 'buttons-on',
			OkOnOff: 'buttons-off',
		}

		this.handleClickEdit = this.handleClickEdit.bind(this)
		this.handleClickRemove = this.handleClickRemove.bind(this)
		this.handleClickOk = this.handleClickOk.bind(this)
		this.handleChangeName = this.handleChangeName.bind(this)
		this.handleChangeSurname = this.handleChangeSurname.bind(this)
		this.handleChangeDate = this.handleChangeDate.bind(this)
		this.handleChangeSuperpower = this.handleChangeSuperpower.bind(this)
	}

	handleClickEdit(){
		this.setState({
			name: <input type='text' defaultValue={this.state.name} onChange={this.handleChangeName}/>,
			surname: <input type='text' defaultValue={this.state.surname} onChange={this.handleChangeSurname}/>,
			date: <input type='date' defaultValue={this.state.date} onChange={this.handleChangeDate}/>,
			superpower: <input type='text' defaultValue={this.state.superpower} onChange={this.handleChangeSuperpower}/>,
			EditAndRemoveOnOff: 'buttons-off',
			OkOnOff: 'buttons-on'
		})
	}

	handleClickRemove(){
		this.props.rmRocketman(this.props.data.id - 1)
	}

	handleClickOk(){

		var nameValue,
			surnameValue,
			dateValue,
			superpowerValue;

		for (let i in this.state){
			console.log(this.state[i])
			if (i !== 'EditAndRemoveOnOff' && i !== 'OkOnOff'){
				if(typeof this.state[i] === 'object'){
					
					if(i === 'name'){
						nameValue = this.state[i].props.defaultValue
					}else if(i === 'surname'){
						surnameValue = this.state[i].props.defaultValue
					}else if(i === 'date'){
						dateValue = this.state[i].props.defaultValue
					}else if(i === 'superpower'){
						superpowerValue = this.state[i].props.defaultValue
					}


				}else if(typeof this.state[i] === 'string'){
					
					if(i === 'name'){
						nameValue = this.state[i]
					}else if(i === 'surname'){
						surnameValue = this.state[i]
					}else if(i === 'date'){
						dateValue = this.state[i]
					}else if(i === 'superpower'){
						superpowerValue = this.state[i]
					}

				}
			}
		}

		this.setState({
			name: nameValue,
			surname: surnameValue,
			date: dateValue,
			superpower: superpowerValue,
			EditAndRemoveOnOff: 'buttons-on',
			OkOnOff: 'buttons-off',	
		})

		console.log(this.state)

	}

	handleChangeName(ev){
		this.state.name = ev.target.value;
	}
	handleChangeSurname(ev){
		this.state.surname = ev.target.value;
	}
	handleChangeDate(ev){
		this.state.date = ev.target.value;
	}
	handleChangeSuperpower(ev){
		this.state.superpower = ev.target.value;
	}

	render(){
		
		return (
 			<tr>
				<td>{this.state.name}</td>
				<td>{this.state.surname}</td>
				<td>{this.state.date}</td>
				<td>{this.state.superpower}</td>
				<td className={this.state.EditAndRemoveOnOff}>
					<input type='button' value='Edit' onClick={this.handleClickEdit}/>
					<input type='button' value={this.props.data.id} onClick={this.handleClickRemove}/>
				</td>
				<td className={this.state.OkOnOff}>
					<input type='button' value='Ok' onClick={this.handleClickOk}/>
				</td>
			</tr>
		)
	}
}