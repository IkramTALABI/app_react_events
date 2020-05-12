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
      lists: datas
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
        <h2>{this.state.title}</h2>

        <form ref="myForm" className="myForm">
          <input type="text" ref="titre" placeholder="titre de l'evenement" className="formField" />
          <input type="text" ref="description" placeholder="courte description" className="formField" />
          <input type="text" ref="date" placeholder="date de l'evenement" className="formField" />
         
          <button type="button" class="btn btn-dnager"  onClick={(e)=>this.fSubmit(e)} className="myButton">submit </button>
        </form>

        <pre>
        {datas.map((data, i) =>
            <li key={i} className="myList">
              {i+1}. {data.titre}, {data.description}, {data.date}
              <button onClick={()=>this.fRemove(i)} className="myListButton">remove </button>
              <button onClick={()=>this.fEdit(i)} className="myListButton">edit </button>
            </li>
          )}

        </pre>
      </div>
    );
  }
}

export default App;
