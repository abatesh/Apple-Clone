import { Link } from "react-router-dom";

function HeaderList({ LinkName, LinkUrl }) {
  return (
    <li className="nav-item">
      <Link className="nav-link js-scroll-trigger" to={LinkUrl}>
        {LinkName}
      </Link>
    </li>
  );
}

export default HeaderList;
