import React from "react";
import Input from "../Input/Input";
import Output from "../Output/Output";
import { useState } from "react";
import { translateBraille } from "../../services/translateBraille";

const TextBraille = () => {
	const [text, setText] = useState("");
	const handleInput = (value) => {
		setText(translateBraille(value));
	};

	return (
		<div>
			<Input handleInput={handleInput} />
			<Output textSaisir={text} />
		</div>
	);
};

export default TextBraille;
