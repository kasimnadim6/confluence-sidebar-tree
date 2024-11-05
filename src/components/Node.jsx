import { useState } from 'react';

const Node = ({ label, link, children }) => {
  const [isFolder, setIsFolder] = useState(!!children);
  const [collapsed, setCollapsed] = useState(false);

  const clickHandler = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <>
      <div className="container">
        <span
          onClick={clickHandler}
          className={[
            'indicator',
            isFolder ? 'folder-icon' : 'file-icon',
            !collapsed && 'opened-folder-icon',
          ].join(' ')}
        ></span>
        <a href={link} className="label">
          {label}
        </a>
      </div>

      {!collapsed &&
        children &&
        children.length > 0 &&
        children.map((node) => (
          <div className="child" key={node.id}>
            <Node {...node} />
          </div>
        ))}
    </>
  );
};

export default Node;
