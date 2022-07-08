import React from 'react'
import { ContactItemBody, ContactItemImage, DeleteButton } from "./";

const ContactItem = ({imageUrl, name, tag, id, onDelete}) => {
  return (
    <div className="contact-item">
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  )
}

export default ContactItem