import React from 'react';
import './Navigation.css';
import logo from './logo.png';


const Navigation =({onRouteChange , isSignedIn}) =>{
    if(isSignedIn){
        return (
            <nav style={{display:'flex'}}>
                <div >
                    <img className="logo" 
                        src={logo} alt="dwyl logo"/>
                    
                     
                </div>
                <div style={{display:'flex' ,
                            justifyContent:'flex-end' ,
                            marginRight:'0.1%',
                            marginLeft:'75%'
                        }}>
                            
                    <p onClick={()=>onRouteChange('scane')} className='f3 link dim white underline pa3 pointer'style={{marginRight:'20px'}}> 
                         Scan&choix</p>
                    <p onClick={()=>onRouteChange('profile')} className='f3 link dim white underline pa3 pointer'style={{marginRight:'20px'}}>
                         Profile
                    </p>
                    <p onClick={()=>onRouteChange('signin')} className='f3 link dim  white underline  pa3 pointer'style={{marginRight:'2px'}}>
                        Sign Out
                    </p>
                </div>
            </nav>
        );
    } else {
        return (
            <nav style={{display:'flex'}}>
                <div >
                    <img className="logo" 
                        src={logo} alt="dwyl logo"/>
                    
                     
                </div>
                <div style={{display:'flex' ,
                            justifyContent:'flex-end' ,
                            marginRight:'20px',
                            marginLeft:'75%'
                        }}>
                <p onClick={()=>onRouteChange('signin')} className='f3 link dim white underline pa3 pointer' style={{marginRight:'20px'}}>Sign In</p>
                </div>
            </nav>
        );
        
    }

}
export default Navigation;