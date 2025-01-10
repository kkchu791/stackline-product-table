import styles from './ProductTable.module.scss';

interface Sale {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

interface ProductTableProps {
  sales: Sale[];
}

const ProductTable = ({ sales }: ProductTableProps) => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Week Ending</th>
            <th>Retail Sales</th>
            <th>Wholesale Sales</th>
            <th>Units Sold</th>
            <th>Retailer Margin</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale, index) => (
            <tr key={index}>
              <td>{sale.weekEnding}</td>
              <td>{sale.retailSales.toLocaleString()}</td>
              <td>{sale.wholesaleSales.toLocaleString()}</td>
              <td>{sale.unitsSold}</td>
              <td>{sale.retailerMargin.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;