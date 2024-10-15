import React, { FunctionComponent, useEffect, useTransition } from 'react';
import './App.css';
import { useState } from 'react';
import { setConstantValue } from 'typescript';
import { count } from 'console';


type User = {
  firstName?: string;
  lastName?: string;
  birthYear?: number;
};
export const App: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  const users: User[] = [
    { firstName: "Ante", lastName: "Milos", birthYear: 2004 },
    { firstName: "Stipe", lastName: "Ljubas", birthYear: 2004 },
    { firstName: "Toni", lastName: "Kovacevic", birthYear: 2012 },
  ];
  const [count, setCount] = useState(0);
  console.log("count",count)
  const [message, setMessage] = useState("EA SPORTS!")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [birthYear, setBirthYear] = useState("")
  const [theme, setTheme] = useState(true)
  console.log("theme",theme)









  return (
    <div>
        <button onClick={() => setTheme(!theme)}>
        Resetiraj Count theme
      </button>
      <button onClick={() => setCount(count + 1)} className="button">
      Count: {count}
      </button>
      <button onClick={() => setCount(0)} className="button1">
        Resetiraj Count
      </button>
      <br></br>
      <button onClick={() => setMessage("It's in the game!")} className="button2">
       {message}
      </button>
      <br></br>
      <br></br>
      <input className="input-style" type='text' value={name} onChange={(e) => setName(e.target.value)}placeholder="Unesi svoje ime"></input>
      <input className="input-style" type='text' value={name} onChange={(e) => setSurname(e.target.value)}placeholder="Unesi svoje prezime"></input>
      <input className="input-style" type='text' value={name} onChange={(e) => setBirthYear(e.target.value)}placeholder="Unesi svoju godinu rođenja"></input>
      
      <button onClick={() => setName(name)}>Zapisi me</button>
      <br></br>
      <br></br>      
      <p>{theme? "neka por true": "neka por false"}</p>
      
      <h2>Lista Korisnika</h2>
      {users.map((user, index) => {
        const age = currentYear - (user.birthYear || 0);
        return (
          <p key={index}>
            {user.firstName} {user.lastName}, rođen/a {user.birthYear}.{" "}
            {age < 18 ? "Mlađi od 18." : `Starost: ${age} godina.`}
          </p>
        );
      })}
    </div>
  );
};
