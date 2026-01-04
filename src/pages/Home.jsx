import Banner from '../component/Banner/Banner';
import Blog from '../component/blogs/Blog';
import Categories from '../component/categories/Categories';
import CTA from '../component/CTA/CTA';
import FAQ from '../component/FAQ/FAQ';
import Features from '../component/features/Features';
import Gallery from '../component/Gallery/Gallery';
import NewsletterSection from '../component/Newletter/NewsletterSection';
import Services from '../component/services/Services';
import Testimonial from '../component/testimonial/Testimonial';

const galleryPromise = fetch('./galleryImage.json').then(res => res.json())
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Services></Services>
            <Categories></Categories>
            <Gallery galleryPromise={galleryPromise}></Gallery>
            <Blog></Blog>
            <Testimonial></Testimonial>
            <NewsletterSection></NewsletterSection>
            <FAQ></FAQ>
            <CTA></CTA>
        </div>
    );
};

export default Home;