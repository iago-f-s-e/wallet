export type WalletTransaction = {
  date: string;
  type: 'inbound' | 'outbound';
  amount: number;
  title: string;
  description: string;
};

export type MonitorinWalletTransactions = {
  date: Date;
  amount: number;
  revenue: number;
  spending: number;
};
