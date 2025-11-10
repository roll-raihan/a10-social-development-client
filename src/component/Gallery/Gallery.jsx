import React, { use } from 'react';
import { motion } from 'framer-motion';

const Gallery = ({ galleryPromise }) => {

    const galleryImage = use(galleryPromise);
    // console.log(galleryImage)

    return (
        <section className="py-12 bg-gradient-to-b from-[#F1F8E9] to-white  transition-colors duration-300">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-10 text-primary dark:text-secondary">
                     GreenRoot Gallery: Moments of Growth
                </h2>

                <div className="gallery-grid grid grid-cols-2  md:grid-cols-3  lg:grid-cols-4 gap-4 md:gap-6">
                    {galleryImage.map((image) => (
                        <motion.div
                            key={image.id}
                            className="relative overflow-hidden rounded-lg shadow-lg aspect-square cursor-pointer"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <img
                                src={image.url}
                                alt={image.caption}
                                className="w-full h-full object-cover transition-opacity duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-3 opacity-0 hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                                <p className="text-white text-sm font-medium leading-tight">
                                    {image.caption}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;