import React from 'react';
import './Profile.css';

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showEdit:false,
            email : "",
            numero : "",
            user:props.user
        }

    }
    onEmailChange =(event) =>{
        this.setState({email : event.target.value})
    }
    onNumeroChange =(event) =>{
        this.setState({numero : event.target.value})
    }



    onEditClick= ()=>{
        this.setState({showEdit:true})  
    }

    submitChangeProfile=()=>{
        fetch('http://localhost:3030/updateProfile',{
            method :'PUT',
            headers:{'Content-Type':'application/json'},
            body :JSON.stringify({
                id:this.props.user.id,
                email:this.state.email,
                numero:this.state.numero
            })
        })
        .then(response => response.json())
        .then(user=>{
            if(user){
                this.props.loadUser(user);     
            }
        })

    }







    render(){
        const {showEdit}=this.state;
        const user = this.state.user; 
      return (
        <div className="usero pa4 black-80" >  
    
    
            <div className="measure center" >
            <p>Hey houssam</p>
            <div className='editZone'>
            <button  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" onClick={this.onEditClick} >Edit</button>
            </div>
                <form className="forms"  >
        
                      
                        <label className="label-profile" htmlFor="nom"> <strong>Nom : </strong></label>
                        <input className="b pa2 input-reset ba bg-transparent  hover-black w-100" name="nom" type="text" disabled="false" placeholder={user.name} />
                       
    
    
    
            
                        <label className="label-profile" htmlFor="Prenom"><strong>Prenom :</strong> </label>
                        <input className="b pa2 input-reset ba bg-transparent  hover-black w-100" name="Prenom" type="text" disabled="false" placeholder={user.prenom} />
            
    
    
            
                        <label className="label-profile" htmlFor="Matricule"> <strong>Maticule</strong> </label>
                        <input className="b pa2 input-reset ba bg-transparent  hover-black w-100" name="Matricule" type="text" disabled="false" placeholder={user.matricule}/> 
                
    
    
            
                        <label className="label-profile" htmlFor="Email"> <strong>Email : </strong> </label>
                            <input className="b pa2 input-reset ba bg-transparent  hover-black w-100" 
                            name="Email" 
                            type="email"
                            placeholder={user.email} 
                            disabled={!showEdit}
                            onChange={this.onEmailChange}/>
            
    
    
                
                        <label className="label-profile" htmlFor="Tel"> <strong>Tel</strong> </label>
                        <input 
                            className="b pa2 input-reset ba bg-transparent  hover-black w-100" 
                            name="Tel"
                             type="text" 
                             placeholder={user.numero}
                            disabled={!showEdit} 
                            onChange={this.onNumeroChange} /> 
        
    
    
                
                        <label className="label-profile" htmlFor="Promotion"> <strong>Promotion : </strong> </label>
                        <input className="b pa2 input-reset ba bg-transparent  hover-black w-100" name="Promotion" type="text"   placeholder={user.Promo} disabled="false"/>
                
    
    
                
                        <label className="label-profile" htmlFor="Filiere"><strong>Filiere : </strong> </label>
                        <input className="b pa2 input-reset ba bg-transparent  hover-black w-100" name="Filiere" type="text" placeholder={user.filier} disabled="false"/> 
            
    
    
            
                        <label className="label-profile" htmlFor="Sexe"> <strong>Sexe :</strong> </label>
                        <input className="b pa2 input-reset ba bg-transparent  hover-black w-100" name="Sexe" type="text" placeholder={user.gender} disabled="false"/>
                
    
    
                
                        {
                            // <label className="label-profile" htmlFor="Motdepasse"> <strong>Mot de Passe </strong> </label>
                            // <input className="b pa2 input-reset ba bg-transparent  hover-black w-100" name="Motdepasse" type="password" placeholder={user.password} disabled='false' />
                        }
                
    
    
                
                        <label className="label-profile" htmlFor="batiment"> <strong> Batiment :</strong> </label>
                        <input className="b pa2 input-reset ba bg-transparent  hover-black w-100" name="Batiment" type="text" placeholder={user.departement} disabled="false"/>
                
    
    
                
                        <label className="label-profile" htmlFor="Etage"> <strong> Etage :  </strong> </label>
                        <input className="b pa2 input-reset ba bg-transparent  hover-black w-100" name="Etage" type="text" placeholder={user.Etage}  disabled="false"/>
                
    
    
                
                        <label className="label-profile" htmlFor="chambre"> <strong>Chambre : </strong> </label>
                        <input  className="b pa2 input-reset ba bg-transparent  hover-black w-100" name="Chambre" type="text" placeholder={user.chambre} disabled="false" />
            
                    <button  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib bgcolor"
                    onClick={this.submitChangeProfile}
                    style={{marginTop:'20px',display: showEdit ? 'block' : 'none'}}
                    type="submit"  >
                        Enrgitrer
                    </button>
                </form>  
            </div>
        </div>
           
      );
    }
   
}

export default Profile;
