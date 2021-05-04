import React from 'react';
import Choix from '../choix/Choix';
import './Scanezone.css';



class Scanzone extends React.Component{

    constructor(props){
        super(props);
        this.state={
            isVerificated:true
        }

    }

    onSubmitRecus=(event)=>{ 
        let fd = new FormData();
        let myFile =document.getElementById('avatar_img').files[0];
        fd.append('myFile', myFile);
        let req = new Request('http://localhost:3030/recus',{
            method : 'POST',
            enctype :'multipart/form-data',
            mode:'cors',
            redirect:'follow',
            referrerPolicy:'no-referrer',
            body:fd
        });
        fetch(req)
        .then(response => response.json())
        .then(data=>{
            document.getElementById('output').textContent="Bien ! maintenant à vous de choisir";
            document.getElementById('output').style.backgroundColor="rgb(95, 211, 201)";

            this.setState({isVerificated:true})
            
        })
        .then(()=>{
            this.props.onRouteChange('scane');
            
        })
        








       
    }
    render(){
        return (
            <div>
                <h1 className="name">Bonjour , {this.props.user.name}</h1>
                <div className="downold-zone">
                    <h4 className="titre-note">
                        <br/>
                    Les chambres seront distribuées par ordre de mérite tenant compte des classements au CNC et au concours DEUG <br/>pour les nouveaux étudiants et des résultats de l’année académique 2021-2022 pour les anciens étudiants. <br/>Les étudiants les mieux classés auront la possibilité de choisir leurs colocataires. 
                    </h4>
                    <hr/>
                    <div className="download">
                        <a href="http://localhost:3030/download">Downold Note </a>
                    </div>
                </div>



                <form  >
                    
                   <div className="file-zone">
                        <input  className="inputFile" type="file" name="file" 
                            multiple
                            id="avatar_img"  />
                            <div className="upload">
                                    <input className="btn-submit" 
                                    type="submit" 
                                    onClick={this.onSubmitRecus}
                                    value="Verifier"/>
                            </div>
                   </div>
                    <div id="output" className="out">
                    </div>
                </form>

                {this.state.isVerificated
                ?<Choix  user={this.props.user}/>
                :<div></div>
                }
        
            </div>
          
          );
    }
  
}

export default Scanzone;
