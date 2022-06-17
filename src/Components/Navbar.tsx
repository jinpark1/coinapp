import { useContext } from 'react';
import logo from '../Media/doge.png';
import userIcon from '../Media/user.png';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../Store';
import { refreshSignedIn } from '../Store/actions';
import lodashGet from 'lodash.get';

const Navbar = () => {
	const [globalState, dispatch] = useContext(GlobalContext);
  	const signedIn: boolean = lodashGet(globalState, 'signedIn');
	const history = useHistory();

	const handleSignOutButtonClick = () => {
		dispatch(refreshSignedIn(false));
		history.push('/');
	};

	return (
		signedIn ? 
			<nav className="navbar navbar-light bg-light">
				<div className="container-fluid">
					<div className="navbar-brand">
						<img src={logo} alt="logo" width="30" height="30" className="d-inline-block align-text-top" />
						<span>Jobcoin Sender</span>
					</div>
					<ul className="nav justify-content-end">
						<div className="navbar-user">
							<img src={userIcon} alt="" width="30" height="30" className="d-inline-block align-text-top" />
							<span>Signed in</span>
						</div>
						<li className="nav-item">
							<button className="nav-link" onClick={ handleSignOutButtonClick }>Sign Out</button>
						</li>
					</ul>
				</div>
			</nav>
		: null
    )
};

export default Navbar;