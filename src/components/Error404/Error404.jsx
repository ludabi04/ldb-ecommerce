import { NavLink } from "react-router-dom"

const Error404 = () => {
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center col">
                    <div className=" col-md-6">
                        <img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg" alt=""
                            className="img-fluid"/>
                    </div>
                    <div className=" col-md-6 mt-5">
                        <p className="fs-3"> <span className="text-danger">Opps!</span> Página no econtrada</p>
                        <p className="lead">
                            La página que estás buscando no existe
                        </p>
                        <NavLink to='/' className="btn btn-primary">Ir a Inicio</NavLink>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Error404