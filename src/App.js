import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import FooterMenu from "./components/FooterMenu/FooterMenu";
import Footer from "./components/Footer/Footer";


function App() {
    return (
        <div className='container__box'>
        <div className='container'>
            <div className='wrapper__container'>
            <div className='wrapper'>
                <Header/>
                <Main/>
                <FooterMenu/>
                <Footer/>
            </div>
        </div>
        </div>
        </div>
    );
}

export default App;
