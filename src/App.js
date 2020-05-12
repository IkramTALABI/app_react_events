import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      title: 'List des événements',
      act: 0,
      index: '',
      lists: []
    }
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
    let datas = this.state.lists;
    return (
      <div className="App">
        <br></br>
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
