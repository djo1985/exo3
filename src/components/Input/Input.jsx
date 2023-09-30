const Input = ({ handleInput }) => {
	const handleInputChange = (e) => {
		handleInput(e.target.value);
	};
	return (
		<div>
			<h3>Input</h3>
			<input type="text" onKeyUp={handleInputChange} />
		</div>
	);
};

export default Input;
