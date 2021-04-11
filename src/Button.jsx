import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ id }) => {
	return (
		<div>
			<Link to={`/users/${id}`}>
				<button className="btn btn-primary"> More Details </button>{' '}
			</Link>
		</div>
	);
};

export default Button;
