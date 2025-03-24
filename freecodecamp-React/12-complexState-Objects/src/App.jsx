import { useState } from 'react'
import starEmpty from './assets/star-empty.png'
import starFilled from './assets/star-filled.png'
import avatar from './assets/user.png'

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
            <button
                onClick={toggleFavorite}
                aria-pressed={contact.isFavorite}
                className="favorite-button"
                aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
                <img
                    src={starIcon}
                    alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
                    className="favorite"
                />
            </button>
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
