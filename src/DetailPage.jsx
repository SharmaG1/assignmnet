import React from 'react';
import useApi from './useApi';
import { useParams, useNavigate } from 'react-router-dom';

export default function DetailPage() {
	const { id } = useParams();
	const navigate = useNavigate();

	const { data: detail, loading, error } = useApi('users/' + id);
	if (error) throw error;
	if (loading) return <h1> Loading...</h1>;

	return (
		<React.Fragment>
			<div className="mid_section">
				<p> - name: {detail.name}</p>
				<p> - username: @{detail.username}</p>
				<p> - mail: {detail.email}</p>
				<p> - phone: {detail.phone}</p>
				<p> - company: {detail.company.name}</p>
				<p> - website: {detail.website}</p>
				<p> - address:</p>
				<ul>
					<li> street: {detail.address.street}</li>
					<li> suite: {detail.address.suite}</li>
					<li> city: {detail.address.city}</li>
					<li> zipcode: {detail.address.zipcode}</li>
				</ul>

				<div className="mid_section_buttons">
					<button
						className="btn btn-primary"
						onClick={() => {
							navigate(`/`);
						}}
					>
						Home
					</button>
				</div>
			</div>
		</React.Fragment>
	);
}
