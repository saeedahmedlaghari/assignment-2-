import Header from "../components/Header/pages"
import Footer from "../components/Footer/page";
import About from "../about/module/about.module.css"
function AboutPage() {
  return (
    <div className={About.about}>
      <Header/>
      <br/>
      <br/>

      <h2>Hello Everyone.......!!!! </h2>
      <br />
      <br />
      <br />
      <p>
        I am Saeed Ahmed student of B.com part two at Government College Of
        Commerce & Economics Karachi sindh, <br />
        Artificial Intelligence web 3.0. at Governor House Sindh karachi as well
        as I am dowing work at Karachi Kitab Ghar Karachi. <br />
        as a books seller.Today I am going to attempt my class assessment. If I
        makes mistake or if you something funny so please ignore.
      </p>
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
}
export default AboutPage;
