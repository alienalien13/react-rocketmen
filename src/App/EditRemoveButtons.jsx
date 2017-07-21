import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class EditRemoveButtons extends Component{

	constructor(props){
		super(props);
		this.state = {}

		this.handlerEdit = this.handlerEdit.bind(this)
	}

	handlerEdit(){
		
	}

	render(){
		return (
			<td>
				<input type='button' value='Edit' onClick={this.handlerEdit}/>
				<input type='button' value='Remove'/>
			</td>
		)
	}
}