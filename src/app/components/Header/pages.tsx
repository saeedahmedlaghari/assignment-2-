import header from "../Header/module/header.module.css";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
const Header = () => {
  return (
    <header className={header.header}>
      <div>
        <h1>
          <Image
            src={logo}
            alt="Murk Kitab Ghar Karachi's logo"
            width={100}
            height={100}
          />
          Murk Kitab Ghar Karachi
        </h1>
        <nav>
          <Link href="http://localhost:3000/">
            <strong> Home </strong>{" "}
          </Link>

          <Link href="about">
          <strong> About </strong>{" "}
          </Link>

          <Link href="catalogue">
          <strong> Catalogue </strong>{" "}
          </Link>
          
          <Link href="services">
          <strong> Services </strong>{" "}
          </Link>

          <Link href="contact">
          <strong> Contact</strong>{" "}
          </Link>          

          <Link href="gratitude">
          <strong> Gratitude </strong>{" "}
          </Link>
          
        </nav>
      </div>
    </header>
  );
};
export default Header;
