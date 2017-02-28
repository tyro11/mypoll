class Container extends React.Component{
	constructor(props){
		super(props);
		this.state = {question:'',};
		this.handleChange = this.handleChange.bind(this);

	}
	handleChange(event){
		this.setState({question:event.target.value});
	}
	render() {
		return (
			<div className='container'>
			<input id='question'
					placeholder='Question'
					value = {this.state.question}
					onChange = {this.handleChange}/>
			<Options question = {this.state.question}/>
			</div>
			)
	}
}