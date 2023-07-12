import { useState } from "react";

const Tab = ({ children, activeTab }) => {
  const [active, setActive] = useState(activeTab);
  return (
    <div>
        <nav>
            {children.map((tab, index) => (
                <button
                    onClick={() => setActive(index)}
                    className={active === index ? 'bgsuccess' : 'bgdanger'}
                    key={index}
                >
                    {tab.props.title}
                </button>
            ))}
        </nav>
        {children[active]}
    </div>
  )
};

Tab.Panel = ({children}) => {
   return (
    <div>{children}</div>
   ) 
}

export default Tab