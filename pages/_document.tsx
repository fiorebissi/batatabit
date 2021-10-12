// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps (ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)

		return initialProps
	}

	render (): JSX.Element {
		return (
			<Html>
				<Head lang="es" />
				<body>
					<Main />
					<div id='modal' />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
