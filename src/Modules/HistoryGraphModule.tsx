import { useContext } from 'react';
import LineChart from '../Components/LineChart';
import { GlobalContext } from '../Store';
import lodashGet from 'lodash.get';

const HistoryGraphModule = () => {
	const [globalState] = useContext(GlobalContext);
  	const transactions = lodashGet(globalState, 'transactions');

  return (
  	<div className="container-lg HistoryGraphModule">
			<div className="card">
				<div className="card-header">
					<span>Jobcoin History Graph</span>
				</div>
				<div className="card-body">
					<LineChart transactions={transactions} />
				</div>
			</div>
		</div>
	)
};

export default HistoryGraphModule;