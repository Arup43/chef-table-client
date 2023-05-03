import Banner from '../../components/Banner/Banner';
import Chefs from '../../components/Chefs/Chefs';
import Reviews from '../../components/Reviews/Reviews';
import Services from '../../components/Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div className='container'>
            <Banner></Banner>
            <Chefs></Chefs>
            <Services></Services>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;