import { transformDate } from '@/core/lib/date.ts';

import {
  MonitorinWalletTransactions,
  WalletTransaction,
} from '@/features/wallet-monitoring/types/wallet-transaction.ts';
import { useMemo } from 'react';
import { transactions } from '../../../../mock/transactions.ts';

function groupByDate(transactions: WalletTransaction[]) {
  return transactions.reduce<Record<string, WalletTransaction[]>>(
    (obj, curr) => {
      if (obj[curr.date]) {
        obj[curr.date].push(curr);
      } else {
        obj[curr.date] = [curr];
      }

      return obj;
    },
    {},
  );
}

function parseData(transactions: WalletTransaction[]) {
  const group = groupByDate(transactions);
  const data: MonitorinWalletTransactions[] = [];

  let amount = 0;
  for (const date of Object.keys(group)) {
    const transactions = group[date];

    let revenue = 0;
    let spending = 0;
    for (const transaction of transactions) {
      if (transaction.type === 'inbound') {
        amount += transaction.amount;
        revenue += transaction.amount;
      } else {
        amount -= transaction.amount;
        spending += transaction.amount;
      }
    }

    data.push({ amount, date: transformDate(date), spending, revenue });
  }

  return data;
}

export function useWallet() {
  const monitoringData = useMemo(
    () =>
      parseData(transactions)
        .sort((a, b) => a.date.getTime() - b.date.getTime())
        .map((d) => ({
          ...d,
          date: d.date.toLocaleDateString('pt-BR', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
          }),
        })),
    [],
  );
  return { monitoringData };
}
