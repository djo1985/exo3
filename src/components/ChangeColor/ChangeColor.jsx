import React, { useState } from "react";

const ChangeColor = () => {
	const [color, setColor] = useState("");

	const ChangeColorText = (e) => {
		const colorValue = e.target.value;
		setColor(colorValue);
	};
	return (
		<>
			<div>
				<h2 style={{ color: color }}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas,
					impedit aspernatur eveniet eaque odit voluptatum eius fugit cum
					voluptate incidunt quae earum, quasi non nam esse corporis eum
					molestiae totam?
				</h2>
				<input type="color" style={{ width: 100 }} onInput={ChangeColorText} />
			</div>
		</>
	);
};

export default ChangeColor;
