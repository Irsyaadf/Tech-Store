import React from 'react';
import { Card, Spin, Alert } from 'antd';
import { FireOutlined } from '@ant-design/icons';
import ProductCard from './ProductCard';

const HotDeals = ({ products, loading, error }) => {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-6">
          <FireOutlined className="text-2xl text-red-500 mr-2" />
          <h2 className="text-2xl font-bold">Hot Deals</h2>
          <div className="ml-auto text-blue-600 font-medium">View All</div>
        </div>
        
        {error ? (
          <Alert message={error} type="error" showIcon />
        ) : loading ? (
          <div className="text-center py-8">
            <Spin size="large" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} hotDeal={true} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HotDeals;