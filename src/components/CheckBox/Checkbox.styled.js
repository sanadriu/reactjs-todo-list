import styled from "styled-components";

const Checkbox = styled.input.attrs({ type: "checkbox" })`
	appearance: none;
	display: flex;
	align-items: center;
	justify-content: center;
	
	width: 2rem;
	height: 2rem;
	min-width: 2rem;
	
	cursor: pointer;
	user-select: none;

	background: white;
	border-radius: 50%;
	box-shadow: 0 0 4px rgba(0,0,0,0.25);

	&::after {
		content: '\u{2713}';
		font-size: 1.5rem;
		color: white;
		display: none;
	}

	&:hover {
		background: linear-gradient(135deg, rgba(62,141,180,0.25) 0%, rgba(236,41,251,0.25) 100%);
	}

	&:checked {
		background: linear-gradient(135deg, rgba(62,141,180,1) 0%, rgba(236,41,251,1) 100%);
	}

	&:checked::after {
		display: block;
	}
`;

export { Checkbox };

