import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import styles from './ProductDashboard.module.scss';
import ProductPanel from './ProductPanel';
import ProductChart from './ProductChart';
import ProductTable from './ProductTable';
import { fetchProductsAsync } from '../productSlice';

const ProductDashboard = () => {
  const dispatch = useAppDispatch();
  const { products, status, error } = useAppSelector((state: RootState) => state.products);
  const product = products && products[0];
  
  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  if (status === 'idle' || status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <ProductPanel product={product} />
      </div>
      <div className={styles.right}>
        <ProductChart product={product} />
        <ProductTable sales={product.sales} />
      </div>
    </div>
  );
};

export default ProductDashboard;