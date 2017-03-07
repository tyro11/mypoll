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
	handleSubmit(e){
		$.ajax({
			url: '/questions',
			type: 'POST',
			data: {item: {title:this.props.question,
							options:this.state.options}},
			success: (response)=>{
				alert('it worked!', response);
				return false;
			}
		});
		e.preventDefault();
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
		return (<form className='options' >
				{this.state.options.map((opt,index)=>(
					<div className='option' key={index}>
						<input value={opt}
								onChange={this.handleChange.bind(this,index)}/>
						<button onClick={this.handleRemoveOption.bind(this,index)}>-</button>
					</div>
				))}
				<button type='button' onClick={this.handleAddOption.bind(this)}>Add a new option</button>
				<button type='submit' onClick={this.handleSubmit.bind(this)}>Submit</button>
			</form>
			)
	}
}