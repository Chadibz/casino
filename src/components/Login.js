import styled from "styled-components";
import {Link} from "react-router"
import "./styles.css"

let time=new Date().toLocaleTimeString();

 const Login = (props)=> {
    return(
<div>

<div className="navlola">

              <img className="Logo" src="https://cdn-plat.apidigi.com/plat/prd/Img/partners/1129/logo.svg" />
              <div className="flexx">

<p className="time">{time}{ }</p>

<p className="time">GMT+1</p>
</div>
<div className="flexx">
              <a href="/Promotions" class="promotion">
                <i class="tl_ico-promotions tl_ico"></i>
                Promotions
            </a>
            <a href="http://www.fertoonacards.com/" class="main_titles" target="_blank" rel="noopener">GRATAGE</a>
            <a href="http://fertoonanews.com/" class="main_titles" target="_blank" rel="noopener">News</a>
            <a href="/Rules/fr" class="main_titles">Mentions Légales</a>

            </div>
           <div className="flexx">
            <a href="https://www.facebook.com/Fertoona-100553162132053" class="facebook" target="_blank"></a>
            <a href="https://www.instagram.com/fertoonabet/?hl=tr" class="insta" target="_blank"></a>
            <a href="https://www.youtube.com/channel/UC_mjClBD9Wwf-LPLx5NhTlQ" class="youtube" target="_blank"></a>
       

            </div>
<div className="flexx">
            <button className="buton" >SE CONNECTER</button>

            </div>
            
            </div>
<div className="navtheniya" >
<div className="flexx">
    <a href="/Skillgame" className="primary">Sport</a>
    <a href="/Sport" className="primary">PARIS DIRECT</a>
    <a href="/Sport" className="primary"> e-sport</a>
    <a href="/Sport" className="primary">jeux</a>
    <a href="/Sport" className="primary">cashshow</a>
    <a href="/Sport" className="primary">livecasino</a>
    <a href="/Sport" className="primary"> TV GAMES</a>
    <a href="/Sport" className="primary">SPORT VIRTUELS</a>
    <a href="/Sport" className="primary">FERTOONA</a>
    <a href="/Sport" className="primary">MORE</a>
    </div>
</div>

</div>


);
 };











 export default Login;