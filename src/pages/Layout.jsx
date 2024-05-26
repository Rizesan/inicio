import {Outlet,Link} from "react-router-dom";

                    //Contenedor de rutas a las paginas
const Layout = () => {
    return <div>
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Inicio</Link>
                </li>
                <li>
                    <Link to={"/content"}>Contendo</Link>
                </li>
                <li>
                    <Link to={"/comunity"}>Comunidad</Link>
                </li>
                <li>
                    <Link to={"/forum"}>Foro</Link>
                </li>
                <li>
                    <Link to={"/about"}>Nosotros</Link>
                </li>
            </ul>
        </nav>
        <hr />
        <Outlet />
    </div>;
}

export default Layout;