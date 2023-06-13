import Footer from "./Components/Footer"

export default {
    logo: <strong style={{ color: '#06aa06', fontSize: '30px' }}>Kathamo</strong>,
	useNextSeoProps() {
		return {
		  titleTemplate: '%s | Kathamo',
		}
	},
	editLink: {
		text: '',
	},
	feedback: {
		content: 'Feedback',
		useLink: () => 'https://github.com/CodesVault/kathamo-doc/issues'
	},
	footer: {
		// text: <span>Copyright © 2023 <a href="https://github.com/CodesVault" target="_blank">CodesVault</a></span>,
		text: <Footer />,
	},
	banner: {
		key: '1.0.0-release',
		text: 'Kathamo 1.0.0 is released.',
	},
	sidebar: {
		defaultMenuCollapseLevel: 1
	  },
    project: {
      link: 'https://github.com/CodesVault'
    },
	gitTimestamp: null,
	primaryHue: 106
}
