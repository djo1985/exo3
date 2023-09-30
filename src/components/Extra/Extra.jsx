const Extra = ({ tips, setTips }) => {
	const handleChange = (e) => {
		let extra = e.target.value;

		extra = extra === "" ? 0 : parseFloat(extra);
		setTips({ ...tips, extra: extra });
		console.log(extra);
	};

	return (
		<div>
			<h3>Extra %</h3>
			<input type="number" onChange={handleChange} value={tips.extra} />
		</div>
	);
};

export default Extra;
