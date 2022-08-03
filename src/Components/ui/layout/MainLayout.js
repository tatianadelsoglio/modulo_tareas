import Menu from "../menu/Menu";
import Nav from "../navBar/Nav";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="vista_home_wrapper">
        <div className="vista_home_content1" />
        <div className="vista_home_content">
          <div className="home_nav">
            <Nav />
          </div>
          <div className="home_contenido">
            {children}
          </div>
          <div className="home_menuInf">
            <Menu />
          </div>
        </div>
        <div className="vista_home_content1" />
      </div>
    </>
  );
};

export default MainLayout;
