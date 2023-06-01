import { NavLink } from "react-router-dom"

const Error404 = () => {
    return (
        <div>
            <div class="d-flex align-items-center justify-content-center vh-100">
                <div class="text-center col">
                    <div class=" col-md-6">
                        <img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg" alt=""
                            class="img-fluid"/>
                    </div>
                    <div class=" col-md-6 mt-5">
                        <p class="fs-3"> <span class="text-danger">Opps!</span> Página no econtrada</p>
                        <p class="lead">
                            La página que estás buscando no existe
                        </p>
                        <NavLink to='/' class="btn btn-primary">Ir a Inicio</NavLink>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Error404