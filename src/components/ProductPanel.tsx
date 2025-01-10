import React from 'react';

const ProductPanel = () => {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <div className="space-y-4">
        {/* Product Name */}
        <h3 className="text-lg font-semibold">Sample Product</h3>
        
        {/* Price */}
        <div className="text-gray-700">
          $19.99
        </div>
        
        {/* Product Description */}
        <p className="text-sm text-gray-600">
          This is a sample product description. The product details would go here.
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={() => console.log('Add to cart clicked')}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPanel;