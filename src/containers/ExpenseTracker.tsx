import React from 'react';

const ExpenseTracker = () => {
	return (
		<div>
			<>
				<h1>Expense Tracker Application</h1>
				<h5>Application Under Development</h5>
				<div className="feature-box">
					<h4>Application Features Checklist</h4>
					<div className="features-list">
						<h5>Mandatory Features</h5>
						<ul>
							<li>Implemented in TypeScript</li>
							<li>Must be PWA</li>
							<li>Should have Firebase Cloud Messaging Implemented</li>
						</ul>
						<h5>Nice to have</h5>
						<ul>
							<li>PWA Implemented with Workbox</li>
							<li>Different caching strategies than the default ones</li>
						</ul>
					</div>
				</div>
			</>
		</div>
	);
};

export default ExpenseTracker;
