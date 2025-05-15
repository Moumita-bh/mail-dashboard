const MailDetail = ({ mail }) => {
  if (!mail) return <div>Select an email to view details.</div>;

  return (
    <div className="p-4">
      <h2>{mail.subject}</h2>
      <p>From: {mail.sender}</p>
      <p>{mail.content}</p>
    </div>
  );
};

export default MailDetail;
