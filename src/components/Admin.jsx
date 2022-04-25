import { useState } from "react";
import axios from "axios";
export const Admin = () => {
  const [user, setUser] = useState({
		employee_name: '',
		employee_id: '',
		title: '',
		salary: '',
		image: '',
		username: '',
		password: '',
		tasks: '',
		status: '',
		team:'',
  });
  
  const handelchange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
  };

  const handleSubmit = (e) => {
		e.preventDefault();
		console.log(user);
		axios.post('http://localhost:8080/employee', user)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
  };
 
  return (
		<form className="createEmployee" onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Employee Name"
				name="employee_name"
				onChange={handelchange}
			/>
			<input
				type="text"
				placeholder="Employee id"
				name="employee_id"
				onChange={handelchange}
			/>
			<select name="title" onChange={handelchange}>
				<option value="intern">Intern</option>
				<option value="Jr Software Developer">Jr Software Developer</option>
				<option value="Sr Software Developer">Sr Software Developer</option>
				<option value="Team Lead">Team Lead</option>
			</select>
			<input
				type="number"
				placeholder="Salary"
				name="salary"
				onChange={handelchange}
			/>
			<input
				type="text"
				placeholder="Image"
				name="image"
				onChange={handelchange}
			/>
			<input
				type="text"
				placeholder="User Name"
				name="username"
				onChange={handelchange}
			/>
			<input
				type="password"
				placeholder="Password"
				name="password"
				onChange={handelchange}
			/>
			<input
				type="text"
				placeholder="Enter tasks separated by commas"
				name="tasks"
				onChange={handelchange}
			/>
			<select name="status" id="status" onChange={handelchange}>
				<option value="">Select Status</option>
				<option value="terminated">Terminated</option>
				<option value="working">Working</option>
			</select>
			<select name="team" id="team" onChange={handelchange}>
				<option value="">Select team</option>
				<option value="frontend">Frontend</option>
				<option value="backend">Backend</option>
				<option value="qa">QA</option>
			</select>
			<input className="createUser" type="submit" value={'submit'} />
		</form>
  );
};
