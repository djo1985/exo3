const Amount = ({ tips, setTips }) => {
	const handleChange = (e) => {
		let amount = e.target.value;

		amount = amount === "" ? 0 : parseFloat(amount);
		setTips({ ...tips, amount: amount });
		console.log(amount);
	};

	return (
		<div>
			<h3>Amount</h3>
			<input type="number" onChange={handleChange} value={tips.amount} />
		</div>
	);
};

export default Amount;
