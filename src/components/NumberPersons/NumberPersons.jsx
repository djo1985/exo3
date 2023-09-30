const NumberPersons = ({ tips, setTips }) => {
	const handleChange = (e) => {
		let num = e.target.value;

		num = num === "" ? 0 : parseFloat(num);
		setTips({ ...tips, numberPersons: num });
		console.log(num);
	};

	return (
		<div>
			<h3>Number of persons</h3>
			<input type="number" onChange={handleChange} value={tips.numberPersons} />
		</div>
	);
};

export default NumberPersons;
