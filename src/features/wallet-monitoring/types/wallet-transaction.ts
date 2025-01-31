export type WalletTransaction = {
  date: string;
  type: 'inbound' | 'outbound';
  amount: number;
  title: string;
  description: string;
};

export type MonitoringWalletTransactions = {
  date: Date;
  amount: number;
  revenue: number;
  spending: number;
  diff: number;
};
