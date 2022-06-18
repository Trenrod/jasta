import "./styles/Button.scss";

interface IButtonIcon extends IButton {
	icon: string;
	text?: never;
}

interface IButtonText extends IButton {
	icon?: never;
	text: string;
}

interface IButton {
	onClick?: () => void;
}

function Button(props: IButtonIcon | IButtonText) {
	let visualInnerButton = null;
	if (props.icon)
		visualInnerButton = <span className={`ButtonText ${props.icon}`} ></span >
	else
		visualInnerButton = < span className={`ButtonText `} >{props.text}</span >

	return (
		<div className="ButtonRoot" onClick={() => props.onClick && props.onClick()}>
			{visualInnerButton}
		</div >
	);
}

export default Button;