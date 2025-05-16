import React from 'react';
import { Carousel, Button, Tag } from 'antd';
import { motion } from 'framer-motion';
import { slides } from '../utils/constants';
const HeroCarousel = () => {
  return (
    <div className="bg-gray-900">
      <div className="container mx-auto px-4 py-6">
        <Carousel 
          autoplay 
          effect="fade" 
          className="rounded-lg overflow-hidden shadow-xl border border-gray-700 hover:border-gray-600 transition-colors duration-300"
          autoplaySpeed={3000}
          dots={{ 
            className: "!bottom-4 [&>li>button]:!bg-gray-300 [&>li>.slick-active>button]:!bg-white",
          }}
          dotPosition="bottom"
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative h-[350px] md:h-[400px]">
              <div className={`absolute inset-0 ${slide.background} opacity-80`} />
              <img 
                src={slide.image} 
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-103"
                loading="lazy"
              />
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute top-4 right-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Tag
                    icon={slide.topRight.icon}
                    color="rgba(255,255,255,0.2)"
                    className="text-white border-0 text-sm md:text-base py-1.5 px-3 backdrop-blur-md shadow-lg"
                  >
                    {slide.topRight.text}
                  </Tag>
                </motion.div>
              </motion.div>

              <div className="relative h-full flex flex-col justify-center items-start px-6 md:px-10 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4 max-w-lg"
                >
                  <motion.span
                    whileHover={{ scale: 1.03 }}
                    className={`inline-block ${slide.badgeColor} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm`}
                  >
                    {slide.badgeText}
                  </motion.span>
                  
                  <h2 className="text-2xl md:text-4xl font-bold leading-tight drop-shadow">
                    {slide.title}
                  </h2>
                  
                  <p className="text-base md:text-lg text-gray-200">
                    {slide.subtitle}
                  </p>
                  
                  <Button 
                    type="primary" 
                    size="middle"
                    className="h-10 px-6 bg-gradient-to-r from-white to-gray-200 text-gray-900 hover:from-gray-100 hover:to-gray-300 border-0 font-semibold flex items-center text-base shadow-md hover:shadow-lg transition-all duration-200 group"
                  >
                    <span className="flex items-center">
                      {slide.buttonText}
                    </span>
                    <span className="ml-2">
                      {slide.icon}
                    </span>
                  </Button>
                </motion.div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HeroCarousel;