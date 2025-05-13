import MyNavbar from './MyNavbar'; 
import CarouselComponent from './CarouselComponent'; 
import PromoBanner from './PromoBanner';

function Home() {
    return (
        <div>
            <MyNavbar/>
            <CarouselComponent /> 
            <PromoBanner/>
        </div>
    );
}

export default Home;
