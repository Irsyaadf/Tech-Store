import React from 'react';
import { Card, Rate, Button, Tag, Modal } from 'antd';
import { ShoppingCartOutlined, DollarOutlined, HeartOutlined, HeartFilled, EyeOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import ProductModal from './ProductModal';

const { Meta } = Card;

const ProductCard = ({ product, hotDeal = false }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  
  const discountPercentage = hotDeal 
    ? Math.floor(Math.random() * 11) + 30
    : product.discountPercentage;
  
  const discountedPrice = Math.round(product.price * (1 - discountPercentage / 100));
  
  const cardVariants = {
    initial: { y: 0 },
    hover: { y: -5 }
  };
  
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.03 }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <motion.div 
        className="relative"
        initial="initial"
        whileHover="hover"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Discount badge */}
        {discountPercentage > 0 && (
          <motion.div 
            className="absolute -right-2 -top-2 z-10"
            animate={{
              rotate: isHovered ? [0, 10, -10, 0] : 0,
              scale: isHovered ? [1, 1.1, 1] : 1
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
              {Math.round(discountPercentage)}% OFF
            </div>
          </motion.div>
        )}
        
        {/* Like button */}
        <button 
          className="absolute left-2 top-2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
        >
          {isLiked ? (
            <HeartFilled className="text-red-500" />
          ) : (
            <HeartOutlined className="text-gray-400 hover:text-red-500" />
          )}
        </button>
        
        <motion.div
          variants={cardVariants}
          transition={{ duration: 0.3 }}
          onClick={showModal}
          className="cursor-pointer"
        >
          <Card
            hoverable
            className="h-full flex flex-col border border-gray-100 hover:border-purple-200 transition-colors duration-300"
            cover={
              <div className="h-48 overflow-hidden flex items-center justify-center bg-white p-4 relative">
                <img 
                  alt={product.title} 
                  src={product.thumbnail} 
                  className="object-contain h-full w-full transition-transform duration-500"
                  style={{ 
                    mixBlendMode: 'multiply',
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                
                {/* Quick view overlay */}
                {isHovered && (
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-opacity duration-300">
                    <button 
                      className="bg-white text-purple-600 px-3 py-1 rounded-full text-sm font-medium flex items-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        showModal();
                      }}
                    >
                      <EyeOutlined className="mr-1" /> Quick View
                    </button>
                  </div>
                )}
              </div>
            }
            actions={[
              <div className="grid grid-cols-2 gap-2 p-2">
                <motion.div
                  variants={buttonVariants}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    type="primary" 
                    icon={<ShoppingCartOutlined />} 
                    className="flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500 hover:from-purple-500 hover:to-blue-600 text-white w-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Add to Cart
                  </Button>
                </motion.div>
                <motion.div
                  variants={buttonVariants}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    icon={<DollarOutlined />} 
                    className="flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white w-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Buy Now
                  </Button>
                </motion.div>
              </div>
            ]}
          >
            <Meta
              title={
                <div className="flex justify-between items-start">
                  <span className="line-clamp-2">{product.title}</span>
                  {product.brand && (
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded ml-2">
                      {product.brand}
                    </span>
                  )}
                </div>
              }
              description={
                <div>
                  <div className="flex items-center mb-2">
                    <Rate 
                      disabled 
                      defaultValue={product.rating} 
                      className="text-sm" 
                      allowHalf 
                    />
                    <span className="text-gray-500 ml-2 text-xs">({product.rating})</span>
                  </div>
                  
                  <div className="flex items-end">
                    <span className="text-lg font-bold text-purple-600">
                      ${discountedPrice}
                    </span>
                    {discountPercentage > 0 && (
                      <span className="text-gray-500 line-through ml-2 text-sm">${product.price}</span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center mt-1">
                    <div className="text-gray-500 text-xs">
                      {product.stock > 0 ? (
                        <span className="text-green-600">{product.stock} in stock</span>
                      ) : (
                        <span className="text-red-600">Out of stock</span>
                      )}
                    </div>
                    
                    {product.price > 50 && (
                      <Tag color="green" className="text-xs">
                        Free Shipping
                      </Tag>
                    )}
                  </div>
                  
                  <div className="mt-2 flex flex-wrap items-center gap-1">
                    {hotDeal && (
                      <motion.span 
                        className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded"
                        animate={{
                          scale: [1, 1.05, 1],
                          backgroundColor: ['#fee2e2', '#ffd1d1', '#fee2e2']
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity 
                        }}
                      >
                        HOT DEAL!
                      </motion.span>
                    )}
                    
                    {product.price > 100 && (
                      <Tag color="gold" className="text-xs">
                        Premium
                      </Tag>
                    )}
                    {product.rating > 4.5 && (
                      <Tag color="magenta" className="text-xs">
                        Top Rated
                      </Tag>
                    )}
                  </div>
                  
                  {product.stock > 0 && product.stock < 10 && (
                    <div className="mt-2">
                      <div className="text-xs text-gray-500 mb-1">
                        Only {product.stock} left!
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div 
                          className="bg-purple-600 h-1.5 rounded-full" 
                          style={{ width: `${(product.stock / 10) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              }
            />
          </Card>
        </motion.div>
      </motion.div>

      <ProductModal
        visible={isModalVisible}
        onCancel={handleCancel}
        product={product}
        discountPercentage={discountPercentage}
        discountedPrice={discountedPrice}
      />

    </>
  );
};

export default ProductCard;