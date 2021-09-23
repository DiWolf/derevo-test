import { store } from "./store/store";
import { Provider } from "react-redux";
import User from "./pages/User";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
function App() {
  return (
    <>
      <Provider store={store}>
        <div className="main_container">
          <div id="wrapper" className="animate">
            <nav className="navbar header-top fixed-top navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="#">
                Derevo Prueba Técnica
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav animate side-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#" title="Dashboard">
                      <i className="fas fa-cube"></i> Inicio{" "}
                      <i className="fas fa-cube shortmenu animate"></i>
                    </a>
                  </li>
                </ul>
                <ul className="navbar-nav ml-md-auto d-md-flex">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fas fa-user"></i> Mi Perfil
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="fas fa-key"></i> Salir
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="container-fluid">
              <User />
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
