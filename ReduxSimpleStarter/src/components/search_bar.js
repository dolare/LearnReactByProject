// equals to const Component = React.component
import React, {Component} from 'react';


//function component
/*const SearchBar = () =>{
	return <input />;//React.createElement
};*/

//class component
class SearchBar extends Component{
	constructor(props){
		super(props);

		this.state = { term: '' };
	}

	onInputChange(term){
		this.setState(term);
		this.props.onSearchTermChange(term);
	}

	render(){
		/* <input onChange={this.onInputChange} />;*/
		//return <input onChange={event => console.log(event.target.value)} />;
		return (
			<div className="search-bar"> 
				<input 
					value={this.state.term}
					onChange = {event => this.onInputChange({term:event.target.value})} />
				{/*Value of the input : {this.state.term}*/}
			</div>
		);
	}

	/*onInputChange(event){
		console.log(event.target.value);
	}*/
}

export default SearchBar;