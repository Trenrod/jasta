import "./styles/Icon.scss";


interface IICon {
	icon: string;
	rotation?: boolean;
}

function Icon(props: IICon) {

	const rotateClassName = props.rotation ? "Rotate" : ""

	return (
		<div className={`IconRoot ${rotateClassName}`} >
			<span className={`IconText ${props.icon}`} ></span>
		</ div >
	);
}

export default Icon;