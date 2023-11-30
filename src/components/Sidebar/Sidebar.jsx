import './Sidebar.css';
import Searchbar from '../Searchbar/Searchbar';

const Sidebar = ({links}) => {
  return (
      <menu>
        {links.map(({text, href}, i) =>
            <li key = {`links${i}`}>
                <a href={href}>{text}</a>
            </li>
        )}
        <li>
          <Searchbar />
        </li>
      </menu>
  );
};

export default Sidebar;
