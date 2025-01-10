import styles from './ProductPanel.module.scss';

interface Product {
  image: string;
  title: string;
  subtitle: string;
  tags: string[];
}

interface ProductPanelProps {
  product: Product;
}

const ProductPanel = ({ product }: ProductPanelProps) => {
  const renderTag = (tag: string) => {
    return (
      <div className={styles.tag} key={"tag"}>
        {tag}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <img
        src={product.image}
        className={styles.productImage}
        alt="product-image"
      />

      <div className={styles.productName}>
        {product.title}
      </div>

      <div className={styles.subtitle}>
        {product.subtitle}
      </div>

      <div className={styles.productTags}>
        {product.tags.map(renderTag)}
      </div>
    </div>
  );
};

export default ProductPanel;
