import { useEffect, useState } from "react";
import Amount from "../Amount/Amount";
import Extra from "../Extra/Extra";
import NumberPersons from "../NumberPersons/NumberPersons";

const TipsCalcul = () => {
	const [tips, setTips] = useState({
		amount: 0,
		numberPersons: 1,
		extra: 0,
	});
	const [tipTotal, setTiptotal] = useState(0);

	useEffect(() => {
		console.log(calcul(tips.amount, tips.numberPersons, tips.extra));
		setTiptotal(calcul(tips.amount, tips.numberPersons, tips.extra));
		console.log("bien");
	}, [tips]);

	const calcul = (a, b, c) => {
		const result = ((a / b) * (c + 100)) / 100;
		return result.toFixed(2);
	};

	return (
		<div>
			<Amount tips={tips} setTips={setTips} />
			<NumberPersons tips={tips} setTips={setTips} />
			<Extra tips={tips} setTips={setTips} />
			<h3>Total per person : {tipTotal}</h3>
		</div>
	);
};

export default TipsCalcul;
