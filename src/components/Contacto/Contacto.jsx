import './Contacto.css'

const Contacto = () => {
    return (
        <div className="contacto">
            <div ClassName="mb-3">
                <label for="exampleFormControlInput1" ClassName="form-label">Email </label>
                <input type="email" ClassName="form-control" id="exampleFormControlInput1" placeholder="nombre@mail.com"/>
            </div>
            <div ClassName="mb-3">
                <label for="exampleFormControlTextarea1" ClassName="form-label">Mensaje</label>
                <textarea ClassName="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </div>
    )
}

export default Contacto;