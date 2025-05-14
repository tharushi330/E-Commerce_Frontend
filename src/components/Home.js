import MyNavbar from './MyNavbar'; 
import CarouselComponent from './CarouselComponent'; 
import PromoBanner from './PromoBanner';
import PopularCategories from './PopularCategories';

function Home() {
    return (
        <div>
            <MyNavbar/>
            <CarouselComponent /> 
            <PromoBanner/>
            <PopularCategories />
        </div>
    );
}

export default Home;