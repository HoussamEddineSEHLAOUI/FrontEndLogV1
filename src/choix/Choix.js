import React from 'react';
import './Choix.css';

class Choix extends React.Component {

    constructor(props){
        super(props);
        this.state={
            choix1 : '',
            choix2 : '',
            choix3 : '',
            choix4 : '',
            choix5 : ''
            
        }

    }

    onChoixChange1 =(event) =>{
        this.setState({choix1 : event.target.value})
    }
    onChoixChange2 =(event) =>{
        this.setState({choix2 : event.target.value})
    }
    onChoixChange3 =(event) =>{
        this.setState({choix3 : event.target.value})
    }
    onChoixChange4 =(event) =>{
        this.setState({choix4 : event.target.value})
    }
    onChoixChange5 =(event) =>{
        this.setState({choix5 : event.target.value})
    }
  
    onSubmitChoix =() =>{
        console.log(this.state);
        fetch('http://localhost:3030/Choix',{
            method :'POST',
            headers:{'Content-Type':'application/json'},
            body :JSON.stringify({
                id:this.props.user.id,
                choix:this.state
            })
        })
        .then(response => response.json())
        .then(data=>{
            
            if(data==="succés"){
                document.getElementById('outChoix').textContent="Votre choix a été enrigistrer avec succes";
            }else{
                document.getElementById('outChoix').textContent="Merci de rechoisir";
            }
        })
        
    }



    render(){
        const user = this.props.user;
        return (
            <main className="pa4 black-80">
                <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">
                           Vous avez été affectés au batiment  {user.departement} :
                        </legend>
                        <div className="mt3">
                        
                            <p className="pa2  bg-transparent  hover-white" 
                             id="outChoix"  ></p>
                        </div>
                        <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Choix 1 :</label>
                        <input onChange={this.onChoixChange1} className="pa2 input-reset ba bg-transparent  hover-white w-100" 
                                type="number" placeholder="votre reponse .."
                                name="choix1"  min="1" max="5" />
                        </div>
                        <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Choix 2 :</label>
                        <input onChange={this.onChoixChange2} className="pa2 input-reset ba bg-transparent  hover-white w-100" 
                                type="number" placeholder="votre reponse .."
                                name="choix2"  min="1" max="5" />
                        </div>
                        <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Choix 3 :</label>
                        <input onChange={this.onChoixChange3} className="pa2 input-reset ba bg-transparent  hover-white w-100" 
                                type="number" placeholder="votre reponse .."
                                name="choix3"  min="1" max="5" />
                        </div>
                        <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Choix 4 :</label>
                        <input onChange={this.onChoixChange4} className="pa2 input-reset ba bg-transparent  hover-white w-100" 
                                type="number" placeholder="votre reponse .."
                                name="choix4"  min="1" max="5" />
                        </div>
                        <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Choix 5 :</label>
                        <input onChange={this.onChoixChange5} className="pa2 input-reset ba bg-transparent  hover-white w-100" 
                                type="number" placeholder="votre reponse .."
                                name="choix5"  min="1" max="5" />
                        </div>
                    </fieldset> 
                    <div className="">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        onClick={this.onSubmitChoix}
                        value="Choisir"/>
                    </div>
                </div>
            </main>
        
        );
    }
  
}

export default Choix;
