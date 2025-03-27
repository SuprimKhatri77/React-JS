import { useState } from 'react'
import avatar from './assets/user.png'
import Star from './components/Star';
import starEmpty from './assets/star-empty.png'
import starFilled from './assets/star-filled.png'

function App() {
  const [contact, setContact] = useState({
    firstName: "Suprim",
    lastName: "Khatri",
    phone: "+1 (212) 555-1212",
    email: "suprimkhatri@example.com",
    isFavorite: false
})
/**
 * Challenge: Fill in the values in the markup
 * using the properties of our state object above
 * (Ignore `isFavorite` for now)
 */

let starIcon = contact.isFavorite ? starFilled : starEmpty;
function toggleFavorite() {
  setContact(prevContact => {
    return {
      ...prevContact,
      isFavorite: !prevContact.isFavorite
    }
  })
}

  return (
    <main>
    <article className="card">
        <img
            src={avatar}
            className="avatar"
            alt="User profile picture of John Doe"
        />
        <div className="info">
            
                
            <Star 
            src={starIcon}
            isFavorite={contact.isFavorite}
            toggleFavorite={toggleFavorite}
            />
            <h2 className="name">
                {contact.firstName} {contact.lastName}
            </h2>
            <p className="contact"> {contact.phone} </p>
            <p className="contact"> {contact.email} </p>
        </div>

    </article>
</main>
  )
}

export default App
