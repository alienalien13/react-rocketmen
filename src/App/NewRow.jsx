import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class NewRow extends Component{

	constructor(props){
		super(props);
		this.state = {
			dataShow: props.data
		}

		this.handleClickEdit = this.handleClickEdit.bind(this)
		this.handleClickRemove = this.handleClickRemove.bind(this)
		this.handleClickOk = this.handleClickOk.bind(this)
		this.handleChangeName = this.handleChangeName.bind(this)
		this.handleChangeSurname = this.handleChangeSurname.bind(this)
		this.handleChangeDate = this.handleChangeDate.bind(this)
		this.handleChangeSuperpower = this.handleChangeSuperpower.bind(this)
		this.handleSearch = this.handleSearch.bind(this)
		this.handlerOnClickSortName = this.handlerOnClickSortName.bind(this)
	}

	handleClickEdit(ev){
		var elemetsShow = document.getElementsByClassName('input row' + ev.target.id),
			elementsHide = document.getElementsByClassName('edit-remove row' + ev.target.id);
		for (let i in elemetsShow){
			if (typeof(elemetsShow[i]) === 'object'){
				elemetsShow[i].style.display = 'block'
			}
		}
		for (let i in elementsHide){
			if(typeof(elementsHide[i]) === 'object'){
				elementsHide[i].style.display = 'none'
			}
		}
	}

	handleClickRemove(ev){
		delete this.props.data[ev.target.id]
		this.setState({
			dataShow: this.props.data
		})
	}

	handleClickOk(ev){
		var elemetsShow = document.getElementsByClassName('input row' + ev.target.id),
			elementsHide = document.getElementsByClassName('edit-remove row' + ev.target.id);
		for (let i in elemetsShow){
			if (typeof(elemetsShow[i]) === 'object'){
				elemetsShow[i].style.display = 'none'
			}
		}
		for (let i in elementsHide){
			if(typeof(elementsHide[i]) === 'object'){
				elementsHide[i].style.display = 'block'
			}
		}
		console.log(elementsHide)
	}

	handleChangeName(ev){
		this.props.data[ev.target.id].name = ev.target.value
		this.setState({
			dataShow: this.props.data
		})
	}
	handleChangeSurname(ev){
		this.props.data[ev.target.id].surname = ev.target.value
		this.setState({
			dataShow: this.props.data
		})
	}
	handleChangeDate(ev){
		this.props.data[ev.target.id].date = ev.target.value
		this.setState({
			dataShow: this.props.data
		})
	}
	handleChangeSuperpower(ev){
		this.props.data[ev.target.id].superpower = ev.target.value
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
	handlerOnClickSortName(){
		this.setState({
			dataShow: this.state.dataShow.sort(function(el1, el2){
				if (el1.name.toLowerCase() > el2.name.toLowerCase()) return 1;
				if (el1.name.toLowerCase() < el2.name.toLowerCase()) return -1;
			})
		})
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			dataShow: nextProps.data
		})
	}

 	shouldComponentUpdate(nextProps, nextState){
		return true
	}

	render(){
		
		var rocketmanTemplate = this.state.dataShow.map((item, index)=>{
			var ipnutsTable = 'input row' + index,
				editAndRemove = 'edit-remove row' + index;
			return (
				<tr key={item.id}>
					<td>{item.name}
						<input id={index} className={ipnutsTable} type='text' defaultValue={item.name} onChange={this.handleChangeName}/>
					</td>
					<td>{item.surname}
						<input id={index} className={ipnutsTable} type='text' defaultValue={item.surname} onChange={this.handleChangeSurname}/>
					</td>
					<td>{item.date}
						<input id={index} className={ipnutsTable} type='date' defaultValue={item.date} onChange={this.handleChangeDate}/>
					</td>
					<td>{item.superpower}
						<input id={index} className={ipnutsTable} type='text' defaultValue={item.superpower} onChange={this.handleChangeSuperpower}/>
					</td>
					<td className={editAndRemove}>
						<input id={index} type='button' value='Edit' onClick={this.handleClickEdit}/>
						<input id={index} type='button' value='Remove' onClick={this.handleClickRemove}/>
					</td>
					<td className={ipnutsTable}>
						<input id={index} type='button' value='Ok' onClick={this.handleClickOk}/>
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