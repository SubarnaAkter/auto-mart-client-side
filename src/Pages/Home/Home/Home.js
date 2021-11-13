import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Allreview from '../ReviewsCollection/Allreviews/Allreview';
import Navigation from '../Shared/Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Allreview></Allreview>
            <Footer></Footer>
        </div>
    );
};

export default Home;