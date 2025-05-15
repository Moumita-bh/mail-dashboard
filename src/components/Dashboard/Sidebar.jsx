const Sidebar = () => {
  const folders = ['Inbox', 'Sent', 'Drafts', 'Trash'];
  return (
    <div className="w-1/4 p-4">
      <ul>
        {folders.map((folder) => (
          <li key={folder} className="mb-2">
            {folder}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
