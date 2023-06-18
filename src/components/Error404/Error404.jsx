
const Error404 = () => {
    return (
        <div className="container text-center ">
            <div className="row align-middle text-center">
                    <div className="col">
                        <img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg" alt=""
                            className="img-fluid"/>
                    </div>
                    <div className="align-middle text-center">
                        <p className="fs-3"> <span className="text-danger fs-2">Opps!</span> Página no econtrada</p>
                        <p className="lead">
                            La página que estás buscando no existe
                        </p>
                    </div>
            </div>
        </div>
    )
}

export default Error404