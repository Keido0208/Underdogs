import "./navbar.css";
export default function NavBar() {
  return (
    <div className="NavBar">
      <body>
        <div name="navbar">
          <ul>
            <li>
              <a class="active" href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#drills">Drills</a>
            </li>
            <li>
              <a href="#members">Members</a>
            </li>
          </ul>
        </div>
        <h1>Welcome to Underdog Basketball</h1>
      </body>
    </div>
  );
}
