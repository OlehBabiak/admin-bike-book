import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import BikeContextprovider from "./components/context/BikeContextProvider";

function App() {
    return (
        <div className='app'>
            <BikeContextprovider>
                <Header/>
                <Main/>
                <Footer/>
            </BikeContextprovider>
        </div>

    );
}

export default App;
