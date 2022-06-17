import { useContext } from 'react';
import { GlobalContext } from '../Store';
import lodashGet from 'lodash.get';

interface BalanceModuleProps {
	balance: string;
}

const BalanceModule = (props: BalanceModuleProps) => {
	const initialLoadingMessage = "Loading...";
	const [globalState] = useContext(GlobalContext);
  	const balance = lodashGet(globalState, 'balance');

	return (
  	<div className="container-md BalanceModule">
			<div className="card">
				<div className="card-header">
					<span>Jobcoin Balance</span>
				</div>
				<div className="card-body">
					<p className="card-text">{balance ? balance: initialLoadingMessage}</p>
				</div>
			</div>
		</div>
	)
};

export default BalanceModule;