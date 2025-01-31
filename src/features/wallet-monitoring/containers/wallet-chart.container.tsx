import { useWallet } from '@/features/wallet-monitoring/hooks/use-wallet.ts';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export function WalletChartContainer() {
  const { monitoringData } = useWallet();

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={monitoringData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="spending"
          stroke="red"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="green"
          strokeWidth={2}
        />
        <Line type="monotone" dataKey="amount" stroke="blue" strokeWidth={2} />
        <Line type="monotone" dataKey="diff" stroke="grey" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
