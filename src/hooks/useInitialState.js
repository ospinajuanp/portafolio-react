import { useState } from "react";

const initialState = {
	Greetings:'Hello', // variable name with state initialization
	IAm:"I'm",
	Name:'Juan Pablo',
	LastName:'Ospina Restrepo',
	Profession:'Front-end web developer',
	Download:'Download CV',
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

    // example addState
	const spanish = () => {
		setState({
			...state,
			saludo:'Hola'
		});
	};
	


	return {
		state, // always return the state
		spanish
	}
}

export default useInitialState;