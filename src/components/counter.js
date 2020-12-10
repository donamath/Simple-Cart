import React, {Component} from 'react';

class Counter extends Component{
	state={
		// value:this.props.counter.value,
		tags : [],
		imageUrl :"https://picsum.photos/200"
	};

	styles = {
		fontSize:10,
		fontWeight:'bold'
	};

	renderTags(){
		if(this.state.tags.length === 0) return <p>No tags!</p>;
		return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;

	}
	// handleIncrement = () => {
	// 	this.setState({  value: this.state.value + 1 });
	// };
	// console.log(this.props);
	// React.createElement('div')
	
	render(){
		return (
		<React.Fragment>
			// {this.props.children}
			{this.renderTags()}
			{this.state.tags.length === 0 && 'Add tags'}
			<img src={this.state.imageUrl} alt="hai" />
			<span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
			<button 
			onClick ={() => this.props.onIncrement(this.props.counter)}
			style={{fontSize:15}}
			className="btn btn-secondary btn-sm"
			>
				Increment
			</button>
			<button onClick={ this.handleDelete } 
			 className="btn btn-danger btn-sm m-2">Delete
			</button>
		</React.Fragment>
			);
	}
	getBadgeClasses(){
		let classes="badge m-2 badge-";
		classes +=(this.props.counter.value ===0) ? "warning" : "primary" ;
		return classes;
	}
	formatCount(){
		const{ value }=this.props.counter;
		return value ===0 ? "Zero" : value;
	}
}

export default Counter;
