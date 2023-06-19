import React from 'react';

function SupportVersionButton(props) {
	return (
		<div className="support-btn">
			<span className="lang">{props.lang}</span>
			<span className="version" style={{backgroundColor: props.bgcolor}}>{props.version}</span>
		</div>
	);
}

export default SupportVersionButton;
