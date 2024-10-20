import Header from "../components/Header/pages"
import Footer from "../components/Footer/page";
import catalogue from "../catalogue/module/catalogue.module.css"
import Image from "next/image";
import book1 from "../public/book-1.png"
import book2 from "../public/book-2.jpg"
import book3 from "../public/book-3.jpg"
import book4 from "../public/book-4.png"
import book5 from "../public/book-5.jpg"
import book6 from "../public/book-6.png"
import book7 from "../public/book-7.jpg"
import book8 from "../public/book-8.jpg"
import book9 from "../public/book-9.9.png"
import book10 from "../public/book-9.jpg"
import book11 from "../public/book-10.png"
import book12 from "../public/book-11.png"
import book13 from "../public/book-12.png"
import book14 from "../public/book-13.png"
import book15 from "../public/book-14.jpg"
import book16 from "../public/book-15.5.png"
import book17 from "../public/book-16.png"
import book18 from "../public/book-17.jpg"
import book19 from "../public/Book.png"
import book20 from "../public/book19.png"
import book26 from "../public/book26.jpg"
import book28 from "../public/book28.jpg"
import book22 from "../public/book-21.png"
import book23 from "../public/book25.jpg"
import book24 from "../public/book-23.jpg"
import book25 from "../public/book-24.jpg"

const Catalogue =() => {
    return (
        <div className={catalogue.catalogue}>
            <Header/>
            <br/>
            <h2> <strong> Welcome to Catalogue </strong> </h2>
            {/* <br/>
            <br/> */}
            <br/>
            <Image src={book1} alt="This is a book title" width={200} height={280}/>
            <Image src={book2} alt="This is a book title" width={200} height={280}/>
            <Image src={book3} alt="This is a book title" width={200} height={280}/>
            <Image src={book4} alt="This is a book title" width={200} height={280}/>
            <Image src={book5} alt="This is a book title" width={200} height={280}/>
            <Image src={book6} alt="This is a book title" width={200} height={280}/>
            <Image src={book7} alt="This is a book title" width={200} height={280}/>
            <Image src={book8} alt="This is a book title" width={200} height={280}/>
            <Image src={book9} alt="This is a book title" width={200} height={280}/>
            <Image src={book10} alt="This is a book title" width={200} height={280}/>
            <Image src={book11} alt="This is a book title" width={200} height={280}/>
            <Image src={book12} alt="This is a book title" width={200} height={280}/>
            <Image src={book13} alt="This is a book title" width={200} height={280}/>
            <Image src={book14} alt="This is a book title" width={200} height={280}/>
            <Image src={book15} alt="This is a book title" width={200} height={280}/>
            <Image src={book16} alt="This is a book title" width={200} height={280}/>
            <Image src={book17} alt="This is a book title" width={200} height={280}/>
            <Image src={book18} alt="This is a book title" width={200} height={280}/>
            <Image src={book19} alt="This is a book title" width={200} height={280}/>
            <Image src={book20} alt="This is a book title" width={200} height={280}/>
            <Image src={book28} alt="This is a book title" width={200} height={280}/>
            <Image src={book22} alt="This is a book title" width={200} height={280}/>
            <Image src={book23} alt="This is a book title" width={200} height={280}/>
            <Image src={book24} alt="This is a book title" width={200} height={280}/>
            <Image src={book25} alt="This is a book title" width={200} height={280}/>
            <Image src={book26} alt="This is a book title" width={200} height={280}/>
      
            <br/>
            <br/>
            <br/>
            <br/>
      
                    <Footer/>
        </div>
    )
};
export default Catalogue; 
