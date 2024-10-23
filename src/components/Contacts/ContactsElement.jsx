import styles from './contacts.module.css';
export const ContactsElement = ({ contact, onDeleteContact }) => {
  return (
    <li key={contact.id}>
      {contact.name} : {contact.number}
      <button className={styles.deletebutn} onClick={() => onDeleteContact(contact.id)}>Delete</button>
    </li>
  );
};
