import styles from './ProductChart.module.scss';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Sale {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

interface Product {
  sales: Sale[];
}

interface ProductChartProps {
  product: Product;
}

const aggregateDataByMonth = (data: Sale[]) => {
  const monthlySales: Record<string, { retailSales: number; wholesaleSales: number }> = {};

  data.forEach(({ weekEnding, retailSales, wholesaleSales }) => {
    const month = new Date(weekEnding).toLocaleString('default', { month: 'short' });

    if (!monthlySales[month]) {
      monthlySales[month] = { retailSales: 0, wholesaleSales: 0 };
    }

    monthlySales[month].retailSales += retailSales;
    monthlySales[month].wholesaleSales += wholesaleSales;
  });

  const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  return Object.entries(monthlySales)
    .sort(([monthA], [monthB]) => monthOrder.indexOf(monthA) - monthOrder.indexOf(monthB))
    .map(([name, { retailSales, wholesaleSales }]) => ({ name, retailSales, wholesaleSales }));
};

const ProductChart = ({ product }: ProductChartProps) => {
  const chartData = aggregateDataByMonth(product.sales);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Retail Sales
      </div>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart data={chartData}>
          <CartesianGrid stroke="none" />
          <XAxis dataKey="name" />
          <YAxis hide />
          <Tooltip />
          <Line type="monotone" dataKey="retailSales" stroke="#8884d8" />
          <Line type="monotone" dataKey="wholesaleSales" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductChart;