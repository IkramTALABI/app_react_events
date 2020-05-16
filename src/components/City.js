import React from 'react' ;
import Countries  from 'react-select-country';
import { Button } from 'react-bootstrap'; 

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
           
                 <Button variant="outline-dark"onClick={()=>{this.props.getTemperature(this.state.city)}}>Get Temperature </Button>{' '}
            </div>
        );
    }
}