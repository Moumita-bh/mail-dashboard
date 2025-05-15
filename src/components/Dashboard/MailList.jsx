import { useState, useEffect } from 'react';
import axios from 'axios';

const MailList = ({ onSelect }) => {
  const [mails, setMails] = useState([]);

  useEffect(() => {
    const fetchMails = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/mails', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMails(res.data);
    };
    fetchMails();
  }, []);

  return (
    <div className="w-3/4 p-4">
      <ul>
        {mails.map((mail) => (
          <li key={mail.id} onClick={() => onSelect(mail)} className="mb-2 cursor-pointer">
            <h3>{mail.subject}</h3>
            <p>{mail.sender}</p>
            <p>{mail.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MailList;
