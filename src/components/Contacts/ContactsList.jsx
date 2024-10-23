import { ContactsElement } from './ContactsElement';
import styles from './contacts.module.css';
export const Contacts = ({ contacts, onDeleteContact}) => {
  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <ContactsElement
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        ></ContactsElement>
      ))}
    </ul>
  );
};
