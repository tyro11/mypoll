class Option extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (<div className='Option'>
			<input placeholder='NewOption'
					onChange={this.props.onChange}/>
			</div>
			)
	}
}