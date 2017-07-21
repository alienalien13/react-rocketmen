import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class EditRemoveButtons extends Component{
	render(){
		return (
			<td>
				<input type='button' value='Edit'/>
				<input type='button' value='Remove'/>
			</td>
		)
	}
}