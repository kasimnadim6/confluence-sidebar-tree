import DATA from './data.js';
import Node from './Node.jsx';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {DATA.map((node) => (
        <Node key={node.id} {...node} />
      ))}
    </div>
  );
};

export default Sidebar;
