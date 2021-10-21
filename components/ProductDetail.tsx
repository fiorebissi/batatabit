import Batata from '@public/batata.svg'
import Image from 'next/image'
import { IoTimeOutline, IoEyeOutline, IoCheckmarkCircleOutline } from 'react-icons/io5'
import { MdAttachMoney } from 'react-icons/md'
import ProductDetailCards from './ProductDetailCards'

const ProductDetail = () => {
	const SIZE = `30px`

	return (
		<section className='main-product-detail bg-warm-black'>
			<div className='product-detail--batata-logo'>
				<Image src={Batata} alt='Batatabit' blurDataURL={``} />
			</div>
			<div className='product-detail--title'>
				<h2 className='font-dmsans-regular'>Creamos un producto sin comparación.</h2>
				<p className='font-dmsans-regular'>Confiable y diseñado para su uso diario.</p>
			</div>
			<section className='product-cards--container'>
				<ProductDetailCards text='Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.' title='Tiempo real'>
					<IoTimeOutline size={SIZE} className='mb-2 fill-current text-orange' />
				</ProductDetailCards>
				<ProductDetailCards title='No hay tasas escondidas' text='Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.'>
					<IoEyeOutline size={SIZE} className='mb-2 fill-current text-orange' />
				</ProductDetailCards>
				<ProductDetailCards title='Compara monedas' text='Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.'>
					<MdAttachMoney size={SIZE} className='mb-2 fill-current text-orange' />
				</ProductDetailCards>
				<ProductDetailCards title='Información confiable' text='Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.'>
					<IoCheckmarkCircleOutline size={SIZE} className='mb-2 fill-current text-orange' />
				</ProductDetailCards>
			</section>
		</section>
	)
}

export default ProductDetail
