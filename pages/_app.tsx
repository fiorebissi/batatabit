import type { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo-config'
import '../styles/global.css'
import '../styles/tablet.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
				/>
				<meta name="description" content="Description" />
				<meta name="keywords" content="Keywords" />
				<title>Batatabit</title>

				<link rel="manifest" href="/manifest.json" />
				<link
					href="/logo.svg"
					rel="icon"
					type="image/svg"
					sizes="16x16"
				/>
				<link
					href="/logo.svg"
					rel="icon"
					type="image/svg"
					sizes="32x32"
				/>
				<link rel="apple-touch-icon" href="/apple-icon.png"></link>
				<meta name="theme-color" content="#F7931A" />
			</Head>
			<DefaultSeo {...SEO} />
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
