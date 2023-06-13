import React from 'react';

function Footer(props) {
	return (
		<div className="footer-wrap">
			<div className="footer-top">
				<h1 className="brand">Kathamo</h1>
				<ul>
					<li>
						<a href="https://github.com/CodesVault" target='_blank'>CodesVault</a>
					</li>
					<li>
						<a href="https://abmsourav.com">Keramot UL Islam</a>
					</li>
				</ul>
			</div>
			<div className="footer-bottom">
				<span>Copyright © 2023 </span>
				<a href="https://github.com/CodesVault" target="_blank">CodesVault</a>
			</div>
		</div>
	);
}

export default Footer;
