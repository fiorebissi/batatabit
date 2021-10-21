import { IoArrowForward } from 'react-icons/io5'

interface Props {
	children?: React.ReactNode
	title: string
	information: string
	cost: number
}
const PlansCards = ({ children, title, information, cost }: Props) => {
	const SIZE = `20px`

	return (
		<article className='plans-container--card'>
			{children}
			<div className='plan-info-container'>
				<h3 className='plan-card--title font-dmsans-bold'>{title}</h3>
				<p className='plan-card--price font-inter-medium'><span>$</span>{cost}</p>
				<p className='plan-card--saving font-inter-light'>{information}</p>
				<button className='plan-card--ca font-dmsans-regular'>
					Escoger este
					<span><IoArrowForward size={SIZE} className='ml-2 fill-current text-orange' /></span>
				</button>
			</div>
		</article>
	)
}

export default PlansCards
