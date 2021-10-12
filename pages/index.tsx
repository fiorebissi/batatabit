import Image from 'next/image'
import Logo from '@public/logo.svg'

const Index = () => {
	return (
		<div>
			<h1>Holis</h1>
			<Image src={Logo} blurDataURL={``} alt='Logo' />
		</div>
	)
}

export default Index
