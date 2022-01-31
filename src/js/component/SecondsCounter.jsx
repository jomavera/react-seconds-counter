import React from "react";
import { useRef, useState } from "react";

const SecondsCounter = (props) => {
	const intvl = useRef(null);
	const [count, setCount] = useState(props.seconds);

	const inc = () => {
		setCount((preVal) => preVal + 1);
	};

	// Cuando se actualiza el estado count (luego de 1 segundo) hay que borrar el anterior intervalo
	if (intvl?.current) {
		clearInterval(intvl.current);
	}
	// Crear intervalo de que luego de 1 segundo incrementar estado count + 1
	intvl.current = setInterval(inc, 1000);

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-1 m-2 border border-white rounded text-center">
					<div className="number">
						<i class="fas fa-clock"></i>
					</div>
				</div>
				<div className="col-1 m-2 border border-white rounded text-center">
					<div className="number">
						{count.toString().slice(-6, -5) || 0}
					</div>
				</div>
				<div className="col-1 m-2 border border-white rounded text-center">
					<div className="number">
						{count.toString().slice(-5, -4) || 0}
					</div>
				</div>
				<div className="col-1 m-2 border border-white rounded text-center">
					<div className="number">
						{count.toString().slice(-4, -3) || 0}
					</div>
				</div>
				<div className="col-1 m-2 border border-white rounded text-center">
					<div className="number">
						{count.toString().slice(-3, -2) || 0}
					</div>
				</div>
				<div className="col-1 m-2 border border-white rounded text-center">
					<div className="number">
						{count.toString().slice(-2, -1) || 0}
					</div>
				</div>
				<div className="col-1 m-2 border border-white rounded text-center">
					<div className="number">{count.toString().slice(-1)}</div>
				</div>
			</div>
		</div>
	);
};

export default SecondsCounter;
