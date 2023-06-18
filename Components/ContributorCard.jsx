import React, { useState } from 'react';
import Image from 'next/image';

function ContributorCard(props) {
	const [showCard, setshowCard] = useState(false);

	return (
		<div className="contributor">
			<a
			onMouseEnter={() => setshowCard(true)}
			onMouseLeave={() => setshowCard(false)}
			className="contributor-link"
			href={props.url}
			target="_blank"
			>
				<Image className="avatar" src={"https://avatars.githubusercontent.com/" + props.ghUsername} alt={props.name} width={40} height={40} />
			</a>

			{showCard && (
				<div
				className="contributor-card"
				onMouseEnter={() => setshowCard(true)}
				onMouseLeave={() => setshowCard(false)}
				>
					<a href={props.url} target="_blank">
						<Image className="avatar" src={"https://avatars.githubusercontent.com/" + props.ghUsername} alt={props.name} width={60} height={40} />
						<span className="contributor-name">{props.name}</span>
					</a>
				</div>
			)}
		</div>
	);
}

export default ContributorCard;
