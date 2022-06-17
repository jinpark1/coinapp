import { useContext, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../Store';
import { refreshBalance, refreshTransactions } from '../Store/actions';

interface TransactionModel {
	fromAddress: string;
	toAddress: string;
	amount: string;
};

interface PostTransactionAtResponse {
	status?: string;
	error?: string;
}

const TransferModule = () => {
	const [amount, setAmount] = useState('');
	const [destinationAddress, setDestinationAddress] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const params: { id: string } = useParams();
	const [, dispatch] = useContext(GlobalContext);

	const getAddressAt = (): void => {
    setIsLoading(true);
		const getAddressAtUrl = `http://jobcoin.gemini.com/freeway-ranked/api/addresses/${params.id}`;
		axios.get<GetAddressAtModel>(getAddressAtUrl)
			.then(response => {
        const addressModel: GetAddressAtModel = response.data;
        updateWalletInfo(addressModel);
			})
			.catch(error => {
				console.log(error, "please enter a address name");
        setIsLoading(false);
			})
	};

	const postTransactionAt = (transactionModel: TransactionModel) => {
		setIsLoading(true);
		const postTransactionAtUrl = 'https://jobcoin.gemini.com/freeway-ranked/api/transactions';
		axios.post<PostTransactionAtResponse>(postTransactionAtUrl, transactionModel)
			.then(response => {
				console.log("success...", response);
				getAddressAt();
			})
			.catch(error => {
				console.log("error....", error.toJSON());
			})
			.then(() => {
				setIsLoading(false);
			});
	};

	const updateWalletInfo = (addressModel: GetAddressAtModel) => {
    const transactions: Transactions = addressModel.transactions;
    dispatch(refreshTransactions(transactions));
    dispatch(refreshBalance(addressModel.balance));
  };

	const handleTransferButtonClick = () => {
		const fromAddress = params.id;
		const transactionModel: TransactionModel = {
			fromAddress: fromAddress,
			toAddress: destinationAddress,
			amount: amount,
		};
		postTransactionAt(transactionModel);
	};

	return (
  	<div className="container-md TransferModule">
			<div className="card">
				<div className="card-header">
					<span>Send Jobcoin</span>
				</div>
				<div className="card-body">
					<div className="mb-3">
						<label className="form-label">Destination Address</label>
						<input type="text" className="form-control" value={destinationAddress} onChange={event => setDestinationAddress(event.target.value)} />
					</div>
					<div className="mb-3">
						<label className="form-label">Amount to Send</label>
						<input type="number" className="form-control" value={amount} onChange={event => setAmount(event.target.value)} />
					</div>
					<button className="btn btn-primary" onClick={ handleTransferButtonClick }>
						{!isLoading ? "Send Jobcoins" :
							<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
						}
					</button>
				</div>
			</div>
		</div>
	)
};

export default TransferModule;