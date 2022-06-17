import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

interface LineChartProps {
  transactions: Array<Transaction>;
}

interface Transaction {
  amount: string;
  fromAddress: string;
  timeStamp: string;
  toAddress: string;
}

const LineChart = (props: LineChartProps) => {
  const [transfersIn, setTransfersIn] = useState(Array());
  const [transfersOut, setTransfersOut] = useState(Array());
  const [transfersLabel, setTransfersLabel] = useState(Array());

  useEffect(() => {
    updateChart(props.transactions);
  }, [props.transactions]);

  const updateChart = (transactions: Array<Transaction>) => {
    const TransfersInAmount = transactions.filter((item: Transaction) => item.toAddress === "2")
      .map(item => item.amount);

    const TransfersOutAmount = transactions.filter((item: Transaction) => item.toAddress !== "2")
      .map(item => item.amount);

    let transfersLabel: Array<string>;
    if (TransfersInAmount.length > TransfersOutAmount.length) {
      transfersLabel = TransfersInAmount.map((e, i) => i.toString());
    } else {
      transfersLabel = TransfersOutAmount.map((e, i) => i.toString());
    }
    
    setTransfersIn(TransfersInAmount);
    setTransfersOut(TransfersOutAmount);
    setTransfersLabel(transfersLabel);
  };

  const data = {
    labels: transfersLabel,
    datasets: [
      {
        label: 'Transfers In',
        data: transfersIn,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Transfers Out',
        data: transfersOut,
        fill: false,
        backgroundColor: 'rgb(107, 255, 99)',
        borderColor: 'rgb(107, 255, 99, 0.5)',
      },
    ],
  };
  
  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  
  return (
  	<div className="lineChart">
      <div className='header'>
        <h1 className='title'>Transactions History</h1>
      </div>
      <Line data={data} options={options} />
		</div>
	)
};

export default LineChart;