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
			OkOnOff: 'buttons-off'
		}

		this.handleClickEdit = this.handleClickEdit.bind(this)
		this.handleClickRemove = this.handleClickRemove.bind(this)
		this.handleClickOk = this.handleClickOk.bind(this)
	}

	handleClickEdit(){
		this.setState({
			name: <input type='text' defaultValue={this.state.name}/>,
			surname: <input type='text' defaultValue={this.state.surname}/>,
			date: <input type='date' defaultValue={this.state.date}/>,
			superpower: <input type='text' defaultValue={this.state.superpower}/>,
			EditAndRemoveOnOff: 'buttons-off',
			OkOnOff: 'buttons-on'
		})
	}

	handleClickRemove(){
		
	}

	handleClickOk(){

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
					<input type='button' value='Remove' onClick={this.handleClickRemove}/>
				</td>
				<td className={this.state.OkOnOff}>
					<input type='button' value='Ok' onClick={this.handleClickOk}/>
				</td>
			</tr>
		)
	}
}