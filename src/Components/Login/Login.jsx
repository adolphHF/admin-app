import React, {useState} from "react";
import axios from "axios";
import './Login.css'
const FormData = require('form-data');

const Login = () =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async() =>{
        try{
            console.log("Logging in...");
            /*
            const response = await axios.post('http://localhost:5000/user/validate',{
                email: email,
                password: password
            });
            console.log(response.data);*/
            let data = new FormData();
            data.append('email', email);
            data.append('password', password);

            let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://127.0.0.1:5000/user/validate',
            data : data
            };

            axios.request(config)
            .then((response) => {
            console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
            console.log(error);
            });
        } catch (error){
            console.error("Error: ",error);
        }
    }


    return(
        <div className='container'>
            <div className='header'>
                <div className="text">La Taberna de Los Mininos</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type="text" placeholder="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} /> 
                </div>
                <div className="input">
                    <input type="text" placeholder="password" value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <div className="submit-container">
                <div className="submit" onClick={handleLogin}>Log In</div>
            </div>
        </div>
    )
}

//capaz cambiamos el imput type a email y a password respectivamente
export default Login