import Contact from "../Contact/Contact";

/* eslint-disable react/prop-types */
export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className="flex flex-col gap-3 ">
      {contacts.map((contact) => (
        <li key={contact.id} className="">
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}