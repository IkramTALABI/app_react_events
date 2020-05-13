import React from 'react' ;

export default class City extends React.Component {
    state={
        city : ''
    }

    handleChange = event => { 
        this.setState({
            city : event.target.value
        })
    }
    render(){
        return(
            
            <div >
                <input type="text" ref="city" placeholder="Saisir la ville" className="formField"  value={this.state.city}
                onChange={this.handleChange}  />
           
                 <button className="myButton" onClick={()=>{this.props.getTemperature(this.state.city)}}>Get Temperature</button>
            </div>
        );
    }
}