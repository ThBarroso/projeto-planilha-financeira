import logo from '../../img/logo.jpeg';
function Logo(){
    return(
                <div className="Sidebar-logo">
                  <img src={logo} alt="Logo"></img>
                  <p>Wallet Mate</p>
                </div>
    );
}

export default Logo;