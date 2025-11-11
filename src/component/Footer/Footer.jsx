import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { GiPlantRoots } from 'react-icons/gi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-r from-[#1B5E20] to-[#2D5016] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">

                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                            <GiPlantRoots className="text-3xl text-[#7CB342]" />
                            <h3 className="text-xl font-bold">GreenRoots</h3>
                        </div>
                        <p className="text-sm text-gray-200 italic">
                            "Plant Today, Breathe Tomorrow"
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-[#7CB342] p-3 rounded-full transition-all duration-300 hover:scale-110"
                            aria-label="Facebook"
                        >
                            <FaFacebookF className="text-lg" />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-[#7CB342] p-3 rounded-full transition-all duration-300 hover:scale-110"
                            aria-label="Twitter"
                        >
                            <FaXTwitter className="text-lg" />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-[#7CB342] p-3 rounded-full transition-all duration-300 hover:scale-110"
                            aria-label="Instagram"
                        >
                            <FaInstagram className="text-lg" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-[#7CB342] p-3 rounded-full transition-all duration-300 hover:scale-110"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn className="text-lg" />
                        </a>
                    </div>

                    <div className="flex gap-6 text-sm">
                        <p className="text-gray-200 hover:text-[#7CB342] transition-colors">
                            Privacy Policy
                        </p>
                        <p className="text-gray-200 hover:text-[#7CB342] transition-colors">
                            Terms & Conditions
                        </p>
                        <p className="text-gray-200 hover:text-[#7CB342] transition-colors">
                            Contact Us
                        </p>
                    </div>
                </div>

                <div className="border-t border-white/20 pt-6 text-center">
                    <p className="text-sm text-gray-300">
                        © {currentYear} GreenRoots. All rights reserved. Built with 💚 for a greener future.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;