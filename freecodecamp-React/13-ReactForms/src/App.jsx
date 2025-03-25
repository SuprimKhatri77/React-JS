import { useState } from 'react'

function App() {

  // const handleSubmit = (event) => {
  //   event.preventDefault()
    
  //   const formData = new FormData(event.currentTarget)
  //   const firstName = formData.get('firstName')
  //   const lastName = formData.get('lastName')

  //   submitViaAPI({
  //     firstName,
  //     lastName
  //   })
  // }

  // function submitViaAPI(data){
  //   console.log(data);
  //   console.log("submitted");
    
    
  // }

  const handleSubmit = (event) => {
    event.preventDefault()
    const formElement = event.currentTarget
    const formData = new FormData(formElement)
    const email = formData.get('email')
    const password = formData.get('password')
    // console.log(email);
    // console.log(password);

    formElement.reset()
    
    
  }
  const signUp = (formData) => {
    const email = formData.get('email')    
    const password = formData.get('password')    
    // console.log(email);
    // console.log(password);
    
    
  }
  return (
    <>
       {/* <form method="POST" id="my-form" onClick={handleSubmit}>
		<label htmlFor="first-name">First Name: </label>
		<input type="text" id="first-name" name="firstName" className="input" />
		<br />
		<label htmlFor="last-name">Last Name: </label>
		<input type="text" id="last-name" name="lastName" className="input" />
		<br />
		<input type="submit" value="Submit" />
	</form>  */}


  <section>
    <h1>Signup Form</h1>
    <form action={signUp}>
      <label htmlFor="email">
        Email: 
      <input type="email" name="email" placeholder='email' id="email" />
      </label>
      <br /> <br />
      <label htmlFor="password">
        Password:
      <input id="password" type="password" name="password" placeholder='password' />
      </label> 
      <br /><br />
      <button>Submit</button>
    </form>
  </section>
    </>
  )
}

export default App
