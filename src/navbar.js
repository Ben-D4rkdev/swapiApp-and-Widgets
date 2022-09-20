import { NavLink } from "react-router-dom";

export default function NavBar(props) {
  console.log("NAVBAR PROPS", props);
  return (
    
    <div className="home-wrapper">
      <h1>Welcome to my Project</h1>
      <p>Below are links that you can explore</p>
      <p>to see some fun projects/widgets I have worked on</p>
      <div className="nav-elements">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/font-sizer">FontSizer </NavLink>
        <NavLink to="/calculator">CalcApp </NavLink>
        <NavLink to="/clock">Clock </NavLink>
        <NavLink to="/text-align">TextAlign </NavLink>
        <NavLink to="/color-change">Comp One </NavLink>
      </div>
      <p>I understand that there aren't a lot of styles here....</p>
      <p>BUT... Enjoy clicking the buttons above.</p>
    </div>
  );
}
