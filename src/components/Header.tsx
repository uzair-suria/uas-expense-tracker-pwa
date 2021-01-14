import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		marginBottom: '20px',
	},
});

const Header = () => {
	const styles = useStyles();
	return (
		<>
			<Typography
				variant="h4"
				component="h2"
				align="center"
				className={styles.root}
			>
				Expense Tracker
			</Typography>
		</>
	);
};

export default Header;
