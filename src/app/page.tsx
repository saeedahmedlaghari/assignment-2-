import Header from "./components/Header/pages"
import Footer from "./components/Footer/page";
import Hero from "../app/components/hero-section/page"
import Image from "next/image";
import cover from "../app/public/murk-cover.jpg"
const HomePage = () => {
  return(
    <div>
        <Header/>
        <br/><br/>
        <br/> 
        <Image src={cover} alt="It's a Murk Kitab Ghar Cover" width={1550} height={300}/> 
        <br/>
        <br/>
        <Hero/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <Footer/>
    </div>
  );
}; 
export default HomePage; 
