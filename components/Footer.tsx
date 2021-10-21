import LogoFooter from '@public/logo-footer.svg'
import Image from 'next/image'

const Footer = () => {
	return (
		<footer>
			<section className='left font-dmsans-regular'>
				<ul>
					<li>
						<a href='#'>
						Linkedin
						</a>
					</li>
					<li>
						<a href='#'>
						Crunchbase
						</a>
					</li>
					<li>
						<a href='#'>
						Hackernews
						</a>
					</li>
				</ul>
			</section>
			<section className='right'>
				<Image src={LogoFooter} blurDataURL={``} alt='Logo Batatabit 2020' />
			</section>
		</footer>
	)
}

export default Footer
