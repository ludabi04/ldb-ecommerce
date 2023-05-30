import './RedesSociales.css';
import facebook from './Assets/Img/logofacebook.png'
import whatsapp from './Assets/Img/logo_whatsapp.png'
import instagram from './Assets/Img/logoinsta.png'
import { Link } from 'react-router-dom';

const RedesSociales = () => {
    return (
        <div className="redesSociales">
            <Link to="http://www.facebook.com"><img src={facebook} alt="" className='redesSociales face'/></Link>
            <Link to="http://www.facebook.com"><img src={instagram} alt="" className='redesSociales Insta'/></Link>
            <Link to="http://www.instagram.com"><img src={whatsapp} alt="" className='redesSociales Whatsapp'/></Link>
            

        </div>
    )
}

export default RedesSociales;