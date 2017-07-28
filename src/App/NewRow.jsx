import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class NewRow extends Component{

	constructor(props){
		super(props);
		this.state = {
			dataShow: props.data,
			switchSortName: props.restart, 
			switchSortSurname: props.restart,
			switchSortDate: props.restart,
			switchSortSuperpower: props.restart
		}

		//Click handlers
		this.handleClickEdit = this.handleClickEdit.bind(this)
		this.handleClickRemove = this.handleClickRemove.bind(this)
		this.handleClickOk = this.handleClickOk.bind(this)

		//Change handlers
		this.handleChangeName = this.handleChangeName.bind(this)
		this.handleChangeSurname = this.handleChangeSurname.bind(this)
		this.handleChangeDate = this.handleChangeDate.bind(this)
		this.handleChangeSuperpower = this.handleChangeSuperpower.bind(this)

		//Serach handler
		this.handleSearch = this.handleSearch.bind(this)

		//Sort handlers
		this.handlerOnClickSortName = this.handlerOnClickSortName.bind(this)
		this.handlerOnClickSortSurname = this.handlerOnClickSortSurname.bind(this)
		this.handlerOnClickSortDate = this.handlerOnClickSortDate.bind(this)
		this.handlerOnClickSortSuperpower = this.handlerOnClickSortSuperpower.bind(this)
		this.auxiliartMethod = this.auxiliartMethod.bind(this)

		//Sort methods
		this.idSorting = this.idSorting.bind(this)
		this.nameSorting = this.nameSorting.bind(this)
		this.surnameSorting = this.surnameSorting.bind(this)
		this.dateSorting = this.dateSorting.bind(this)
		this.superpowerSorting = this.superpowerSorting.bind(this)

		//Edit display row elements while edit method
		this.editationDisplayElements = this.editationDisplayElements.bind(this)
	}


	/* ===  ===  ===  ===  ===  === Click handlers ===  ===  ===  ===  ===  === */


	editationDisplayElements(ev, elS, elH){ //Show or Hide table row elements while edit
		var elemetsShow = document.getElementsByClassName('input row' + ev.target.id),
			elementsHide = document.getElementsByClassName('edit-remove row' + ev.target.id);
		for (let i in elemetsShow){
			if (typeof(elemetsShow[i]) === 'object'){
				elemetsShow[i].style.display = elS
			}
		}
		for (let i in elementsHide){
			if(typeof(elementsHide[i]) === 'object'){
				elementsHide[i].style.display = elH
			}
		}
	}
	handleClickEdit(ev){
		this.editationDisplayElements(ev, 'block', 'none') //Show text inputs and Hide datas
	}
	handleClickOk(ev){
		this.editationDisplayElements(ev, 'none', 'block') //Hide text inputs and Show datas
	}
	handleClickRemove(ev){
		delete this.props.data[ev.target.id]
		this.setState({
			dataShow: this.props.data
		})
	}

	/* ===  ===  ===  ===  ===  === Changing datas ===  ===  ===  ===  ===  === */


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


	/* ===  ===  === ===  ===  ===  Search ===  ===  ===  ===  ===  === */


	handleSearch(ev){
		
		this.setState({
			dataShow: this.props.data.filter((el)=>{
				return el.name.toLowerCase().indexOf(ev.target.value.toLowerCase()) !== -1 ||
				el.surname.toLowerCase().indexOf(ev.target.value.toLowerCase()) !== -1 ||
				el.date.toLowerCase().indexOf(ev.target.value.toLowerCase()) !== -1 ||
				el.superpower.toLowerCase().indexOf(ev.target.value.toLowerCase()) !== -1
			})
		})
		
	}


	/* === ===  === === === ===  Sort === ===  === ===  === === */

	//if (1,-1) - sortind to increase ; if (-1,1) - sorting to reduce
	idSorting(more, less){
		console.log(this.props.data)
		return this.state.dataShow.sort(function(el1, el2){
			if (el1.id > el2.id) return more;
			if (el1.id < el2.id) return less;
		})
	}
	nameSorting(more, less){
		return this.state.dataShow.sort(function(el1, el2){
			if (el1.name.toLowerCase() > el2.name.toLowerCase()) return more;
			if (el1.name.toLowerCase() < el2.name.toLowerCase()) return less;
		})
	}
	surnameSorting(more, less){
		return this.state.dataShow.sort(function(el1, el2){
			if (el1.surname.toLowerCase() > el2.surname.toLowerCase()) return more;
			if (el1.surname.toLowerCase() < el2.surname.toLowerCase()) return less;
		})
	}
	dateSorting(more, less){
		return this.state.dataShow.sort(function(el1, el2){
			if (el1.date.toLowerCase() > el2.date.toLowerCase()) return more;
			if (el1.date.toLowerCase() < el2.date.toLowerCase()) return less;
		})
	}
	superpowerSorting(more, less){
		return this.state.dataShow.sort(function(el1, el2){
			if (el1.superpower.toLowerCase() > el2.superpower.toLowerCase()) return more;
			if (el1.superpower.toLowerCase() < el2.superpower.toLowerCase()) return less;
		})
	}
	auxiliartMethod(){//Reset render method
		this.setState({
			dataShow: this.idSorting(1,-1),
			switchSortName: 0,
			switchSortSurname: 0,
			switchSortDate: 0,
			switchSortSuperpower: 0,
			n: '', //name table head className
			s: '', //surname table head className
			d: '', //date table head className
			sp: '' //superpower table head className
		})
	}
	
	handlerOnClickSortName(ev){
		this.state.switchSortName++

		switch (this.state.switchSortName){
			case 1:
				this.setState({
					dataShow: this.nameSorting(1,-1),
					n: 'fa fa-angle-double-down',
					s: '',
					d: '',
					sp: '',
					switchSortSurname: 0,
					switchSortDate: 0,
					switchSortSuperpower: 0
				});
				break;
			case 2:
				this.setState({
					dataShow: this.nameSorting(-1,1),
					n: 'fa fa-angle-double-up',
					s: '',
					d: '',
					sp: '',
					switchSortSurname: 0,
					switchSortDate: 0,
					switchSortSuperpower: 0
				});
				break;
			case 3:
				this.auxiliartMethod();
				break;
		}
	}

	handlerOnClickSortSurname(ev){
		this.state.switchSortSurname++

		switch (this.state.switchSortSurname){
			case 1:
				this.setState({
					dataShow: this.surnameSorting(1,-1),
					n: '',
					s: 'fa fa-angle-double-down',
					d: '',
					sp: '',
					switchSortName: 0,
					switchSortDate: 0,
					switchSortSuperpower: 0
				});
				break;
			case 2:
				this.setState({
					dataShow: this.surnameSorting(-1,1),
					n: '',
					s: 'fa fa-angle-double-up',
					d: '',
					sp: '',
					switchSortName: 0,
					switchSortDate: 0,
					switchSortSuperpower: 0
				});
				break;
			case 3:
				this.auxiliartMethod();
				break;
		}
	}

	handlerOnClickSortDate(ev){
		this.state.switchSortDate++

		switch (this.state.switchSortDate){
			case 1:
				this.setState({
					dataShow: this.dateSorting(1,-1),
					n: '',
					s: '',
					d: 'fa fa-angle-double-down',
					sp: '',
					switchSortName: 0,
					switchSortSurname: 0,
					switchSortSuperpower: 0
				});
				break;
			case 2:
				this.setState({
					dataShow: this.dateSorting(-1,1),
					n: '',
					s: '',
					d: 'fa fa-angle-double-up',
					sp: '',
					switchSortName: 0,
					switchSortSurname: 0,
					switchSortSuperpower: 0
				});
				break;
			case 3:
				this.auxiliartMethod();
				break;
		}
	}

	handlerOnClickSortSuperpower(ev){
		this.state.switchSortSuperpower++
		
		switch (this.state.switchSortSuperpower){
			case 1:
				this.setState({
					dataShow: this.superpowerSorting(1,-1),
					n: '',
					s: '',
					d: '',
					sp: 'fa fa-angle-double-down',
					switchSortName: 0,
					switchSortSurname: 0,
					switchSortDate: 0
				});
				break;
			case 2:
				this.setState({
					dataShow: this.superpowerSorting(-1,1),
					n: '',
					s: '',
					d: '',
					sp: 'fa fa-angle-double-up',
					switchSortName: 0,
					switchSortSurname: 0,
					switchSortDate: 0
				});
				break;
			case 3:
				this.auxiliartMethod();
				break;
		}
	}


	/*  === ===  === ===  === === React necessary methods  === ===  === ===  === ===  */


	componentWillReceiveProps(nextProps) {
		this.setState({
			dataShow: nextProps.data,
			switchSortName: nextProps.restart,
			switchSortSurname: nextProps.restart,
			switchSortDate: nextProps.restart,
			switchSortSuperpower: nextProps.restart
		})
	}

 	shouldComponentUpdate(nextProps, nextState){
		return true
	}


	/*  === ===  === ===  === === Render  === ===  === ===  === ===  === ===  */

	
	render(){
		
		var rocketmanTemplate = this.state.dataShow.map((item, index)=>{
			var ipnutsTable = 'input row' + index,
				editAndRemove = 'edit-remove row' + index;
			return (
				<tr key={item.id}>

					<td>
						<div className={editAndRemove}>{item.name}</div>
						<div className={ipnutsTable}><input id={index} type='text' defaultValue={item.name} onChange={this.handleChangeName}/></div>
					</td>

					<td>
						<div className={editAndRemove}>{item.surname}</div>
						<div className={ipnutsTable}><input id={index}  type='text' defaultValue={item.surname} onChange={this.handleChangeSurname}/></div>
					</td>

					<td>
						<div className={editAndRemove}>{item.date}</div>
						<div className={ipnutsTable}><input id={index}  type='date' defaultValue={item.date} onChange={this.handleChangeDate}/></div>
					</td>

					<td>
						<div className={editAndRemove}>{item.superpower}</div>
						<div className={ipnutsTable}><input id={index}  type='text' defaultValue={item.superpower} onChange={this.handleChangeSuperpower}/></div>
					</td>

					<td>
						<div className={editAndRemove}>
							<input id={index} type='button' value='Edit' onClick={this.handleClickEdit}/>
							<input id={index} type='button' value='Remove' onClick={this.handleClickRemove}/>
						</div>
						<div className={ipnutsTable}>
							<input id={index} type='button' value='Ok' onClick={this.handleClickOk}/>
						</div>
					</td>

				</tr>
			)
		})
		return <section className='col-md-8'>

			<input type='text' placeholder='Search' onChange={this.handleSearch}/>

			<table>

				<thead>
					<tr>
						<th className={this.state.n} onClick={this.handlerOnClickSortName}>Name</th>
						<th className={this.state.s} onClick={this.handlerOnClickSortSurname}>Surname</th>
						<th className={this.state.d} onClick={this.handlerOnClickSortDate}>Birthday</th>
						<th className={this.state.sp} onClick={this.handlerOnClickSortSuperpower}>Superpower</th>
						<th></th>
					</tr>
				</thead>

				<tbody>{rocketmanTemplate}</tbody>

			</table>

		</section>
	}
}