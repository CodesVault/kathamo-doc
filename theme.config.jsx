import Footer from "./Components/Footer"
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

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
	head: () => {
		const { asPath } = useRouter()
		const { title } = useConfig()
		return <>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta property="og:url" content={`https://kathamo.dev${asPath}`} />
			<meta property="og:title" content={`${title} | Kathamo` || 'Kathamo'} />
			<meta property="twitter:title" content={`${title} | Kathamo` || 'Kathamo'} />
			<meta property="og:description" content="Framework for WordPress plugin development. It helps you to develop maintainable and scalable plugin." />
			<meta property="twitter:description" content="Framework for WordPress plugin development. It helps you to develop maintainable and scalable plugin." />
			<meta property="og:type" content="documentation" />
			<meta property="twitter:card" content="documentation" />
			<meta property='og:image' content='//abmsourav.com/welcome/wp-content/uploads/2023/06/Kathamo-framework.png' />
			<meta property='twitter:image' content='//abmsourav.com/welcome/wp-content/uploads/2023/06/Kathamo-framework.png' />
	  </>
	},
	footer: {
		text: <Footer />,
	},
	// banner: {
	// 	key: '1.0.0-release',
	// 	text: 'Kathamo 1.0.0 is released.',
	// },
	sidebar: {
		defaultMenuCollapseLevel: 1
	  },
    project: {
      link: 'https://github.com/CodesVault'
    },
	gitTimestamp: null,
	primaryHue: 106
}
