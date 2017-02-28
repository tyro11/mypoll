class Options extends React.Component {
	constructor(props){
		super(props);
		this.state = {options:["new"],};
	}
	handleChange(index,event){
		this.setState({
			options:this.state.options.map((opt,idx) =>{
				if (index!=idx) return opt;
				return event.target.value;
			})
		});
	}
	handleSubmit(){
		$.ajax({
			url: '/questions',
			type: 'POST',
			data: {item: {question:this.props.question,
							options:this.state.options}},
			success: (response)=>{
				console.log('it worked!', response);
			}
		});
	}
	handleAddOption(){
		this.setState({
			options:this.state.options.concat([" "])
		})
	}
	handleRemoveOption(index){
		this.setState({
			options:this.state.options.filter((opt,idx)=> idx!=index),
		});
	}
	render() {
		return (<form className='options' onSubmit={this.handleSubmit.bind(this)}>
				{this.state.options.map((opt,index)=>(
					<div className='option' key={index}>
						<input value={opt}
								onChange={this.handleChange.bind(this,index)}/>
						<button onClick={this.handleRemoveOption.bind(this,index)}>-</button>
					</div>
				))}
				<button type='button' onClick={this.handleAddOption.bind(this)}>Add a new option</button>
				<button type='submit'>Submit</button>
			</form>
			)
	}
}