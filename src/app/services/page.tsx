import Header from "../components/Header/pages"
import Footer from "../components/Footer/page"
import Services from "../services/module/services.module.css"
export default function ServicesPage () {
    return(
    <div className={Services.services}>
        <Header/>
        <br/>
        <h3> <strong> Murk Kitab Ghar Karachi </strong> provides two types of services.</h3>
        <br/>
        <li> <strong> Online Services </strong> </li>
        <li> <strong> Offline Services </strong> </li>
        <br/>
        <h4>
            <b> Online Services </b>
        </h4>
        <p> In online services we get amount of book/books in advance with pakistan
        post charges and then we send out their product by Pakistan post.</p>
        <br/>
        <h4>
            <b>
                Offline Services
            </b>
        </h4>
        <br/>
        <p>
        In Offline service we have kitab Ghar at Sabir Manizal Behind Gul Plaza
        Marstorn road Karachi, come here and choose your favorite book and give
        money in hand.
        </p>
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