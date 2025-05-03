import React from 'react';
import HomeBanner from '../../../Componenets/Navbar/HomeBanner/HomeBanner';
import OurServices from './OurServices/OurServices';
import ContactCard from './ConactCards/ContactCard';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
           <HomeBanner></HomeBanner>
           <OurServices></OurServices>
           <ContactCard></ContactCard>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;