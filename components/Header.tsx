import Logo from '@public/logo.svg'
import Image from 'next/image'
import { IoChevronDownOutline } from 'react-icons/io5'
import { scroller } from 'react-scroll'

const Header = () => {
	const SIZE = `20px`

	const handleClick = () => {
		scroller.scrollTo(`plans`, {
			duration: 2000,
			delay: 0,
			smooth: `easeInOutQuart`
		})
	}

	return (
		<header className='text-white bg-gradient-to-bl from-warm-black to-bitcoin-orange'>
			<Image className='logo-img' src={Logo} blurDataURL={``} alt='Logo' />
			<div className='header--title-container'>
				<h1 className='text-4xl leading-10 font-dmsans-bold'>La próxima revolución en el intercambio de criptomonedas.</h1>
				<p className='mt-20 text-xl leading-7 text-soft-orange font-dmsans-bold'>
					Batatabit te ayuda a navegar entre los diferentes precios y tendencias.
				</p>
				<button type='button' onClick={handleClick}>
					<a className='flex flex-row items-center text-xl font-bold rounded shadow-xl header--button bg-off-white text-warm-black font-dmsans-regular' href='#plans'>
					Conoce Nuestros Planes
						<IoChevronDownOutline className='inline-block ml-2' size={SIZE} />
					</a>
				</button>

			</div>
		</header>
	)
}

export default Header
