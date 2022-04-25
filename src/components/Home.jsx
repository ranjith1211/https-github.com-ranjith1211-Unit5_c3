

import { useState, useEffect } from 'react';
import axios from 'axios';

export const Home = () => {
  // create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // thins to store in context api
  //   total: get from db,
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,// inc when a new user in created
   const [ne, setnew] = useState(0);
	const [ter, setter] = useState(0);
	const [pro, setpro] = useState(0);

	const [users, setUsers] = useState([]);

	function details(users) {
		users.forEach((el, i) => {
			if (el.status === 'terminated') {
				setter((prev) => prev + 1);
			} else if (el.status === 'promoted') {
				setpro((prev) => prev + 1);
			} else {
				setnew((prev) => prev + 1);
			}
		});
	}

	useEffect(() => {
		axios.get('http://localhost:8080/employee').then(({ data }) => {
			setUsers(data);
			details(data);
		});
	}, []);

   return (
		<>
			<h3 className="welcome">Welcome To employee management system</h3>
			<div className="home">
				<span>Stats</span>
				<div>
					Total Employees: <span className="totalemp">{users.length}</span>
				</div>
				<div>
					Total Terminated: <span className="total_terminated">{ter}</span>
				</div>
				<div>
					Total Promoted: <span className="total_promoted">{pro}</span>
				</div>
				<div>
					Total New: <span className="total_new">{ne}</span>
				</div>
			</div>
		</>
	);
};
