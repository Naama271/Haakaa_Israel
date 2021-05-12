
import { Link } from 'react-router-dom';
import React,{useState} from 'react';
// import {login} from '../../services/auth.service'
import authService from '../../services/auth.service'
import Admin from './Admin'

function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isadmin, setAdmin]= useState(false)

    const onSubmit = async (e) => {
        e.preventDefault();
    
        console.log(email, password);

        try{
          const admin = await authService.login(email,password);
          admin ? setAdmin(true): console.log(false)
        
          console.log(admin)
          console.log(isadmin)
        }catch{
         console.error();
        }
      };
    


  return (
    <div className="section">
      <h3>התחברות </h3>
      <div>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="שם משתמש" name="user" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="סיסמא" name="password" />

        <Link to="/admin">
        <button type="submit" onClick={onSubmit} > התחברות</button>
        </Link>
      </div>
      {isadmin && <Admin />}
    </div>
  
  );
}

export default Login;
