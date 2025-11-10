import Banner from '../component/Banner/Banner';
import Features from '../component/features/Features';
import Gallery from '../component/Gallery/Gallery';

const galleryPromise = fetch('./galleryImage.json').then(res => res.json())
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Gallery galleryPromise={galleryPromise}></Gallery>
        </div>
    );
};

export default Home;