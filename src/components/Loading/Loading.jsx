const Loading = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col p-5 text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Ingresando...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;