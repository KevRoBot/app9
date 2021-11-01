import React ,{useState}from "react";
import firebase from 'firebase/app';
import 'firebase/auth';
import{useFirebaseApp}from 'reactfire';

const Login = () => {
    
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const firebase = useFirebaseApp();
    const submit= async()=>{
        await firebase.auth().createUserWithEmailAndPassword(email,password);
    }
   
    
        return (
        <div className="mt-5">
            <h3 className="text-center">Acceso o Registro de usuarios</h3>
            <hr/>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form>
                        <input 
                            type="email"  id="email" onChange={(e)=>setEmail(ev.target)}
                            className="form-control mb-2"
                            placeholder="Ingrese Email"
                        />
                        <input 
                            type="password" id="password" onChange={(e)=>setPassword(ev.value)} 
                            className="form-control mb-2"
                            placeholder="Ingrese Contraseña"
                        />
                        <button onClick={submit} 
                            className="btn btn-lg btn-dark btn-block"
                            type="submit"
                        >
                            Ingresar
                        </button>
                        <button 
                            className="btn btn-sm btn-info btn-block"
                            type="button"
                        >
                            ¿No tienes cuenta?
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login