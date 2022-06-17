import { useContext, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Image from '../Components/Image';
import logo from '../Media/doge.png';
import { GlobalContext } from '../Store';
import { refreshBalance, refreshSignedIn, refreshTransactions } from '../Store/actions';

interface GetAddressAtModel {
	balance: string;
	transactions: {
		amount: string;
		timestamp: string;
		toAddress: string;
	}[];
}

const SignInModule = () => {
  const [, dispatch] = useContext(GlobalContext);
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const checkAddressModel = (addressModel: GetAddressAtModel): void => {
    if (addressModel.balance !== "0" || addressModel.transactions.length > 0) {
      updateWalletInfo(addressModel);
      routeUser(addressModel);
    } else {
      setIsLoading(false);
      console.log("please create a new address");
    }
  };

	const getAddressAt = (): void => {
    setIsLoading(true);
		const getAddressAtUrl = `http://jobcoin.gemini.com/freeway-ranked/api/addresses/${address}`;
		axios.get<GetAddressAtModel>(getAddressAtUrl)
			.then(response => {
        const addressModel: GetAddressAtModel = response.data;
        checkAddressModel(addressModel);
			})
			.catch(error => {
				console.log(error, "please enter a address name");
        setIsLoading(false);
			})
	};

  const routeUser = (addressModel: GetAddressAtModel): void => {
    history.push(`/accounts/${address}`, addressModel);
  };

  const updateWalletInfo = (addressModel: GetAddressAtModel) => {
    const transactions: Transactions = addressModel.transactions;
    dispatch(refreshBalance(addressModel.balance));
    dispatch(refreshSignedIn(true));
    dispatch(refreshTransactions(transactions));
  };

  const handleSignInButtonClick = (): void => {
    getAddressAt();
  };

  return (
    <div className="container-md SignInModule">
      <div className="card">
        <Image source={logo} className="card-img-top" height="200px" alt="logo image" />
      </div>
      <div className="card">
        <div className="card-header">
          <span>Welcome! Sign In With Your Jobcoin Address</span>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label  className="form-label">Jobcoin Address</label>
            <input type="text" className="form-control" value={address} onChange={event => setAddress(event.target.value)} />
          </div>
          <button className="btn btn-primary" onClick={ handleSignInButtonClick }>
            {!isLoading ? "Sign In" :
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            }
          </button>
        </div>
      </div>
    </div>
  )
};

export default SignInModule;