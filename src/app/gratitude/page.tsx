import Footer from "../components/Footer/page";
import Header from "../components/Header/pages";
import Hero from "../components/hero-section/page";
import Thanks from "../gratitude/module/gratitude.module.css"
const GratitudePage = () => {
    return (
        <div className={Thanks.Color}>
            <Header/>
            <br/>
            <br/><br/>
            <br/><br/>
            <Hero/>
            <br/><br/>
            <br/><br/>
            {/* <br/><br/>
            <br/><br/> */}
            {/* <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/><br/> */}
            
            <h1>
                <strong> <u> Thank You Sir </u> </strong>
            </h1>
            <h3> mr.hamaza alivi sb.</h3>
            <p> for cheaking my second assigment. </p>
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
export default GratitudePage; 