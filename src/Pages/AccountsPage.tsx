import BalanceModule from '../Modules/BalanceModule';
import HistoryGraphModule from '../Modules/HistoryGraphModule';
import TransferModule from '../Modules/TransferModule';

interface GetAddressAtModel {
	balance: string,
	transactions: {
		amount: string,
		timestamp: string,
		toAddress: string,
	}[],
}

interface AccountsPageProps {
  location: {
    state: GetAddressAtModel,
  },
};

const AccountsPage = (props: AccountsPageProps) => {
  console.log("accountspage props", props);
  // console.log("accountspage props balance", props.location.state.balance);
  return (
    <div className="container-fluid AccountsPage">
      <div className="row align-items-start">
        <div className="col">
          <BalanceModule balance={props.location.state.balance} />
          <TransferModule />
        </div>
        <div className="col">
          <HistoryGraphModule />
        </div>
      </div>
    </div> 
  )
};

export default AccountsPage;