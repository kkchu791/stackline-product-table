import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import styles from './ProductDashboard.module.scss';
import ProductPanel from './ProductPanel';
import ProductChart from './ProductChart';
import ProductTable from './ProductTable';

const ProductDashboard = () => {
  const product = useSelector((state: RootState) => state.products.products[0]);
  
  if (!product) return <p>No product available.</p>;

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