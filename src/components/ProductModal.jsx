import React from 'react';
import { Modal, Button, Rate, Tag } from 'antd';
import { ShoppingCartOutlined, DollarOutlined } from '@ant-design/icons';

const ProductModal = ({ visible, onCancel, product, discountPercentage, discountedPrice }) => {
  if (!product) return null;

  return (
    <Modal
      title={product.title}
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button 
          key="cart"
          type="primary"
          className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-purple-500 hover:to-blue-600 text-white"
          icon={<ShoppingCartOutlined />}
        >
          Add to Cart
        </Button>,
        <Button 
          key="buy"
          type="primary"
          className="bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white"
          icon={<DollarOutlined />}
        >
          Buy Now
        </Button>
      ]}
      width={800}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <img 
              src={product.thumbnail} 
              alt={product.title}
              className="w-full h-64 object-contain mix-blend-multiply"
            />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {product.images?.slice(0, 4).map((img, index) => (
              <div key={index} className="border rounded p-1 cursor-pointer hover:border-purple-400">
                <img 
                  src={img} 
                  alt={`${product.title} ${index + 1}`}
                  className="w-full h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex items-center mb-4">
            <Rate disabled defaultValue={product.rating} allowHalf />
            <span className="text-gray-500 ml-2">({product.rating} ratings)</span>
          </div>

          <div className="mb-4">
            <span className="text-2xl font-bold text-purple-600">
              ${discountedPrice}
            </span>
            {discountPercentage > 0 && (
              <>
                <span className="text-gray-500 line-through ml-2">${product.price}</span>
                <span className="ml-2 text-green-600">{Math.round(discountPercentage)}% OFF</span>
              </>
            )}
          </div>

          <div className="mb-4">
            <Tag color={product.stock > 0 ? "green" : "red"}>
              {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
            </Tag>
            {product.price > 50 && (
              <Tag color="green" className="ml-2">
                Free Shipping
              </Tag>
            )}
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Description</h4>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Details</h4>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Brand: {product.brand || 'Unknown'}</li>
              <li>Category: {product.category || 'General'}</li>
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
