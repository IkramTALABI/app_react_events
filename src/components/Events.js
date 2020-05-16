import React, { Component } from 'react';

import Countries  from 'react-select-country';
import { Button } from 'react-bootstrap'; 


class Events extends React.Component {

  constructor(props){
    super(props);
    this.state={
      title: 'List des événements',
      act: 0,
      index: '',
      lists: [],
    }
  } 



  render() { 
    let datas = this.state.lists; 
    return (
    
<div>
      <h2 className="center"> {this.state.title}</h2>
        <br></br>
        <hr></hr>
        <form ref="myForm" className="myForm">
          
          <input type="text" ref="titre" placeholder="Titre de l'evenement" className="formField" />
          <input type="text" ref="description" placeholder="Courte description" className="formField" />
          <input type="date" ref="date" placeholder="Date de l'événement" className="formField" />   
    
          <Button variant="outline-primary" onClick={(e)=>this.props.fSubmit(e)}   size="10" block> Ajouter à la liste </Button>{' '}
      
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
      <td> 
      <Button variant="outline-info" nClick={()=>this.props.fEdit(i)}>Modifier</Button>
      <Button variant="outline-danger" onClick={()=>this.props.fRemove(i)}>Supprimer</Button>
</td>
    </tr>
    
    )}    
  </table>

        </pre>
        
      </div>
);

    
  }
}

export default Events; 
