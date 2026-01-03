import Banner from '../component/Banner/Banner';
import Features from '../component/features/Features';
import Gallery from '../component/Gallery/Gallery';
import NewsletterSection from '../component/Newletter/NewsletterSection';
import Services from '../component/services/Services';

const galleryPromise = fetch('./galleryImage.json').then(res => res.json())
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Services></Services>
            <Gallery galleryPromise={galleryPromise}></Gallery>
            <NewsletterSection></NewsletterSection>
        </div>
    );
};

export default Home;