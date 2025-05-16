import React from 'react';
import { Spin, Alert, Tabs } from 'antd';
import ProductCard from './ProductCard';

const { TabPane } = Tabs;

const ProductsGrid = ({ products, loading, error }) => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <Tabs defaultActiveKey="1" className="mb-6">
          <TabPane tab="Smartphones" key="1">
            {error ? (
              <Alert message={error} type="error" showIcon />
            ) : loading ? (
              <div className="text-center py-8">
                <Spin size="large" />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </TabPane>
          <TabPane tab="Tablets" key="2">
            <div className="text-center py-8 text-gray-500">
              Coming soon...
            </div>
          </TabPane>
          <TabPane tab="Accessories" key="3">
            <div className="text-center py-8 text-gray-500">
              Coming soon...
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductsGrid;