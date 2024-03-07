import logo from './logo.svg';
import './App.css';

import Header from './constants/header/Header';
import Scroller from './components/scroller/Scroller';
import Vage from './constants/vage/Vage';
import Selection from './constants/selection/Selection'
import PopularItem from './constants/popular items/Popular'
import Featured from './constants/featured restaurants/Featured';
import Foodmanu from './constants/food manu/Food'
import MobilePic from './components/mobile img/Imgs'
import SpecialDishes from './constants/special dishes/Special';
import ProceedOrder from './components/proceed order/Proceed';
import Footer from './constants/footer/Footer'

function App() {
    return (
        <div>
            <Header />
            <Scroller />
            <Vage />
            <Selection />
            <PopularItem />
            <Featured />
            <Foodmanu />
            <MobilePic />
            <SpecialDishes />
            <ProceedOrder />
            <Footer />
        </div>
    );
}

export default App;
