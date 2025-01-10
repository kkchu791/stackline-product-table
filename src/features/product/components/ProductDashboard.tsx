import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import styles from './ProductDashboard.module.scss';
import ProductPanel from './ProductPanel';
import ProductChart from './ProductChart';
import ProductTable from './ProductTable';

const ProductDashboard = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const product = products && products[0];

  if (!product) {
    return <p>No product available.</p>;
  }

  return (
    <div className={styles.container}>
      <ProductPanel product={product} />
      <ProductChart />
      <ProductTable />
    </div>
  );
};

export default ProductDashboard;
