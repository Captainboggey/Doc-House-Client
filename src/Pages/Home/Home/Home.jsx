import React from 'react';
import HomeBanner from '../../../Componenets/Navbar/HomeBanner/HomeBanner';
import OurServices from './OurServices/OurServices';
import ContactCard from './ConactCards/ContactCard';

const Home = () => {
    return (
        <div>
           <HomeBanner></HomeBanner>
           <OurServices></OurServices>
           <ContactCard></ContactCard>
        </div>
    );
};

export default Home;