import logoOhana from "../assets/logo-ohana.jpg";

function LogoOhana({ className = "" }) {
  return (
    <img src={logoOhana} alt="OHANA" className={`ohana-logo ${className}`} />
  );
}

export default LogoOhana;
