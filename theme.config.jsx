export default {
    logo: <strong style={{ color: '#06aa06', fontSize: '30px' }}>Kathamo</strong>,
	useNextSeoProps() {
		return {
		  titleTemplate: '%s | Kathamo',
		}
	},
	editLink: {
		text: '',
		// component:  ['Edit', '', 'https://github.com/CodesVault/kathamo-doc']
	},
	feedback: {
		content: 'Feedback',
		useLink: () => 'https://github.com/CodesVault/kathamo-doc/issues'
	},
	footer: {
		text: <span>Copyright © 2023 <a href="https://github.com/CodesVault" target="_blank">CodesVault</a></span>,
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
    }
}
