import { useState } from 'react';
import Sidebar from '../components/Dashboard/Sidebar';
import MailList from '../components/Dashboard/MailList';
import MailDetail from '../components/Dashboard/MailDetail';

const Dashboard = () => {
  const [selectedMail, setSelectedMail] = useState(null);

  return (
    <div className="flex">
      <Sidebar />
      <MailList onSelect={setSelectedMail} />
      <MailDetail mail={selectedMail} />
    </div>
  );
};

export default Dashboard;
