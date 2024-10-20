import Header from "../components/Header/pages"
import Footer from "../components/Footer/page"
import style from "../contact/module/contact.module.css"
export default function ContactUs () {
    const Contact:string = "021-32774324 03003424324"
    return(
    <div className={style.number}>
        <Header/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <h3>If you have any sort of problem so cuntact us.</h3>
        <h3>Contact: {Contact} </h3>
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
    )
};