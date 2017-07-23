import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class NewRow extends Component{

	constructor(props){
		super(props);
		this.state = {
			dataShow: props.data,
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
		this.handleSearch = this.handleSearch.bind(this)
	}

	handleClickEdit(ev){
		var i= ev.target.className
		console.log(this.state.dataShow[i])
		console.log(ev.target.className)
	}

	handleClickRemove(ev){
		delete this.props.data[ev.target.className]
		this.setState({
			dataShow: this.props.data
		})
	}

	handleClickOk(){

	}

	handleChangeName(ev){
		this.props.data[ev.target.className].name = ev.target.value
		this.setState({
			dataShow: this.props.data
		})
	}
	handleChangeSurname(ev){
		this.props.data[ev.target.className].surname = ev.target.value
		this.setState({
			dataShow: this.props.data
		})
	}
	handleChangeDate(ev){
		this.props.data[ev.target.className].date = ev.target.value
		this.setState({
			dataShow: this.props.data
		})
	}
	handleChangeSuperpower(ev){
		this.props.data[ev.target.className].superpower = ev.target.value
		this.setState({
			dataShow: this.props.data
		})
	}
	handleSearch(ev){
		console.log(ev.target.value);
		this.setState({
			dataShow: this.props.data.filter((el)=>{
				return el.name.toLowerCase().indexOf(ev.target.value.toLowerCase()) !== -1 ||
				el.surname.toLowerCase().indexOf(ev.target.value.toLowerCase()) !== -1 ||
				el.date.toLowerCase().indexOf(ev.target.value.toLowerCase()) !== -1 ||
				el.superpower.toLowerCase().indexOf(ev.target.value.toLowerCase()) !== -1
			})
		})
	}

	render(){
		
		var rocketmanTemplate = this.state.dataShow.map((item, index)=>{
			return (
				<tr key={item.id}>
					<td>{item.name}
						<input className={index} type='text' defaultValue={item.name} onChange={this.handleChangeName}/>
					</td>
					<td>{item.surname}
						<input className={index} type='text' defaultValue={item.surname} onChange={this.handleChangeSurname}/>
					</td>
					<td>{item.date}
						<input className={index} type='date' defaultValue={item.date} onChange={this.handleChangeDate}/>
					</td>
					<td>{item.superpower}
						<input className={index} type='text' defaultValue={item.superpower} onChange={this.handleChangeSuperpower}/>
					</td>
					<td className={item.EditAndRemoveOnOff}>
						<input className={index} type='button' value='Edit' onClick={this.handleClickEdit}/>
						<input className={index} type='button' value='Remove' onClick={this.handleClickRemove}/>
					</td>
					<td className={this.state.OkOnOff}>
						<input type='button' value='Ok' onClick={this.handleClickOk}/>
					</td>
				</tr>
			)
		})
		return <section>

			<input type='text' placeholder='Search' onChange={this.handleSearch}/>

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


				<tbody>{rocketmanTemplate}</tbody>

			</table>

		</section>
	}
}