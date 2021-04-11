import React from 'react';
import useApi from './useApi';
import Button from './Button';

export default function Home() {
	const { data: posts, loading, error } =useApi(`users`);
	if (loading) return <h1>Loading...</h1>;
	if (error) throw error;

	return (
		<div className="home-card">
			{posts.length > 0 &&
				posts.map((post) => (
					<div className="card" style={{ width: '20rem', height: '24rem' }}>
						<div className="home-items">
							<p className="shift-letter">
								<h1>{post.name[0]}</h1>
							</p>
							<p>
								<h3>{post.name}</h3>
							</p>
							<p> @{post.username}</p>
							<p className="website_link">
								http://{post.website}
							</p>

							<p>
								<Button id={post.id} />
							</p>
						</div>
					</div>
				))}
		</div>
	);
}
