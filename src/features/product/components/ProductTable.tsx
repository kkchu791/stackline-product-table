import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import styles from './ProductTable.module.scss';

const ProductTable = () => {
  const firstProduct = useSelector((state: RootState) => state.products.products[0]);
  
  return (
    <div className={styles.container}>
      <p>I am the product table</p>
    </div>
  );
};

export default ProductTable;
