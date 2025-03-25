import { useState } from "react";

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
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const email = formData.get("email");
    const password = formData.get("password");
    // console.log(email);
    // console.log(password);

    formElement.reset();
  };
  // const signUp = (formData) => {
  //   const email = formData.get("email");
  //   const password = formData.get("password");
  //   const description = formData.get("description")
  //   const employmentStatus = formData.get("employmentStatus")
  //   const dietaryRestrictions = formData.getAll("dietaryRestrictions")
  //   const favColor = formData.get("favColor")
    // console.log(email);
    // console.log(password);
    
    // console.log(description);
    // console.log(employmentStatus ? employmentStatus : "employment status not selected");
    // console.log(dietaryRestrictions ? dietaryRestrictions : "no checkbox selected.");
    // console.log(favColor); 
  // };

  function signUp(formData){
    const data = Object.fromEntries(formData)
    const dietaryData = formData.getAll('dietaryRestrictions')
    // console.log(dietaryData);
    const allData = {
      ...data,
      dietaryRestrictions: dietaryData,
    }
    console.log(allData);
    
    
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
            <input type="email" defaultValue="slash@gmail.com" name="email" placeholder="email" id="email" />
          </label>
          <br /> <br />
          <label htmlFor="password">
            Password:
            <input
              id="password"
              type="password"
              name="password"
              placeholder="password"
              defaultValue="password123"
            />
          </label>
          <br />
          <br />
            <label htmlFor="description">
              Description:
              <textarea id="description" defaultValue="This is a description" name="description"></textarea>
            </label>
            <br />
            <br />
          <fieldset>
            <legend>Employment Status</legend>
            <label>
              <input type="radio" name="employmentStatus" value="Unemployed" />
              Unemployed
            </label>
            <label>
              <input type="radio" name="employmentStatus" value="Full time" />
              Full time
            </label>
            <label>
              <input type="radio" name="employmentStatus" defaultChecked={true} vlaue="Part time" />
              Part time
            </label>
          </fieldset>
          <br />
          <br />
          <fieldset>
            <legend>Dietary Resitrictions:</legend>
            <label>
              <input type="checkbox" name="dietaryRestrictions" value="kosher" />
              kosher
            </label>
            <label>
              <input type="checkbox" name="dietaryRestrictions" value="vegan" />
              Vegan
            </label>
            <label>
              <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
              Gluten-free
            </label>
          </fieldset>
          <br /><br />
          <label htmlFor="favColor">What's your favorite color?</label>
          <select  id="favColor" name="favColor">
            <option value="" disabled>Choose your favorite color</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
          <br /><br />
          <button>Submit</button>
        </form>
      </section>
    </>
  );
}

export default App;
