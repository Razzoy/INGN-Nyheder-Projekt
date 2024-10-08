import React from 'react'

export function Signin({setUser, user}) {
    

    const submitForm = (e) => {
        e.preventDefault();
        console.log('Din value er: ', e.target.email.value);
        let email = e.target.email.value;
        let password = e.target.password.value;

        let body = JSON.stringify({email: email, password: password})

        if (email && password){

            fetch('http://localhost:3000/signin', {
                method: 'POST',
                body: body,
                headers: { "Content-type": "application/json" },
            })
            .then((res) => res.json())
            .then((data) => 
                data?.token
                    ? setUser(data)
                    : console.log('Forkert Password')
                    
            );
        }
    }

  return (
    <div>
        <h1>Sign In</h1>
        <form >
            <label>Email</label>
            <input type="email" name='email'></input>
            
            <label>Password</label>
            <input type="password" name='password'></input>
            
            <input type="submit" value='Submit'>Submit</input>
        </form>
    </div>
  )
}
