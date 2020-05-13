import React, { Component } from 'react';
import './App.css';
import City from './City' ;

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      title: 'List des événements',
      act: 0,
      index: '',
      lists: [],
      temperature : '',
      error : '' ,
      isBusy : false
    }
  } 

  getTemperature = (city)=> {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=d885aa1d783fd13a55050afeef620fcb';
    this.setState({
      isBusy : true 
    })
    fetch(url).then(response=>{
      return response.json();
    }).then(data=>{
      const kelvin = data.main.temp ;
      const celcius = kelvin - 273.15 ;
      this.setState({
        temperature : celcius ,
        isBusy : false 
      })
    })
    
  }

  componentDidMount(){
    this.refs.titre.focus();
    this.refs.description.focus();
    this.refs.date.focus();
  }

  fSubmit= (e) =>{
    e.preventDefault();

    let datas=this.state.lists;
    let titre=this.refs.titre.value;
    let description=this.refs.description.value;
    let date=this.refs.date.value;

    if(this.state.act===0)
    {
      let data={
        titre, description,date
      }
      datas.push(data);
    }
    else {
      let index= this.state.index;
      datas[index].titre=titre;
      datas[index].description=description;
      datas[index].date=date;
    }

    this.setState({
      lists: datas,
      act: 0
    })

    this.refs.myForm.reset();
    this.refs.titre.focus();

  }

  fEdit= (i) =>{
   
    let data= this.state.lists[i];
    this.refs.titre.value= data.titre;
    this.refs.description.value= data.description;
    this.refs.date.value=data.date;
    
    this.setState({
      act: 1,
      index: i
    })

    this.refs.titre.focus();

  }

  fRemove= (i) =>{
   
    let datas= this.state.lists;
    //eliminer la data d'indice i
    datas.splice(i,1);
    this.setState({
      lists: datas
    })

    this.refs.myForm.reset();
    this.refs.titre.focus();

  }



  render() {
    let data = null ;
    if(this.state.isBusy && !this.state.error){
      data = <p  style={{textAlign : 'center'}}> Loading ... </p>
    } else if (this.state.error) {
      data =  <p  style={{textAlign : 'center'}}>Something Went Wrong : {this.state.error}</p>
    } else if(this.state.temperature !== '') {
      data = <p  style={{textAlign : 'center'}}>Temperature is : {this.state.temperature} degree celcius.</p>
    }

    let datas = this.state.lists;
    return (
      <div className="App">
         <br></br>
         <h2 className="center"> Afficher la temperature</h2>
        <br></br>
        <hr></hr>
     <div className="myForm">
     <City  getTemperature={this.getTemperature}/> <br/>
        {data}
     </div>
      
      

      <h2 className="center"> {this.state.title}</h2>
        <br></br>
        <hr></hr>
        <form ref="myForm" className="myForm">
          
          <input type="text" ref="titre" placeholder="Titre de l'evenement" className="formField" />
          <input type="text" ref="description" placeholder="Courte description" className="formField" />
          <input type="date" ref="date" placeholder="Date de l'événement" className="formField" />   
          <button  onClick={(e)=>this.fSubmit(e)} className="myButton">Ajouter à la liste  </button>
        </form>

        <pre>

  <table>
    <tr>
      <th><b>Titre</b></th>
      <th><b>Description</b></th>
      <th><b>Date de l'événement</b></th>
      <th> <b>Options</b> </th>
     
    </tr>
    {datas.map((data, i) =>
    <tr  key={i} className="myList">
    <td>{data.titre}</td>
      <td>{data.description}</td>
      <td>{data.date}</td>
      <td> <button onClick={()=>this.fRemove(i)} className="myListButton">Supprimer </button>
      <button onClick={()=>this.fEdit(i)} className="myListButton">Modifier </button></td>
    </tr>
    
    )}    
  </table>

        </pre>
        
      </div>
);

    
  }
}

export default App; 
