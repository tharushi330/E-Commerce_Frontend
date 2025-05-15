import MyNavbar from './MyNavbar'; 
import CarouselComponent from './CarouselComponent'; 
import PromoBanner from './PromoBanner';
import PopularCategories from './PopularCategories';
import OrderOptions from './OrderOptions';
import Footer from './Footer';

function Home() {
    return (
        <div>
            <MyNavbar/>
            <CarouselComponent /> 
            <PromoBanner/>
            <PopularCategories />
            <OrderOptions />
            <Footer />
        </div>
    );
}

export default Home;