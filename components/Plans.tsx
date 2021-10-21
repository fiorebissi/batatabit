import { IoChevronForwardOutline, IoChevronBackOutline } from 'react-icons/io5'
import PlansCards from "./PlansCards"

const Plans = () => {
	const SIZE = `20px`

	return (
		<section id='plans' className='main-plans-container'>
			<div className='plans--title'>
				<h2 className='font-dmsans-regular'>Escoge el plan que mejor se ajuste a ti.</h2>
				<p className='font-dmsans-regular'>Cualquier plan te da acceso completo a nuestra plataforma.</p>
			</div>
			<section className='plans-container--slider'>
				<PlansCards title='Pago Anual' cost={5} information='*Plan básico para mantenerte informado' />
				<span className='iconLeft'><IoChevronBackOutline size={SIZE} /></span>
				<PlansCards title='Pago Anual' cost={49} information='*Ahorras $129 comparado al plan mensual.'>
					<p className='recommended font-inter-medium'>Recomendado</p>
				</PlansCards>
				<span className='iconRight'>
					<IoChevronForwardOutline size={SIZE} />
				</span>
				<PlansCards title='Acceso de por vida' cost={99} information='*Ahorras $999+ comparado al plan anual.' />
			</section>
		</section>
	)
}

export default Plans
