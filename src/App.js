import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import FooterMenu from "./components/FooterMenu/FooterMenu";
import Footer from "./components/Footer/Footer";
import Decorations from "./components/Decorations/Decorations";

function App() {
    return (
        <div className='container'>
            <div className='wrapper'>
                <Header/>
                <Main/>
                <Decorations/>
                <FooterMenu/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
