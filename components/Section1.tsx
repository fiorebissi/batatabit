import Image from 'next/image'
import Bitcoin from '@public/bitcoin.svg'
import { IoTrendingDownOutline, IoTrendingUp } from 'react-icons/io5'

const Section1 = () => {
	const fecha = new Date().toLocaleString()

	return (
		<main className='w-full h-auto bg-off-white'>
			<section className='main-exchange-container'>
				<div className='backgroundImg'>
					<Image src={Bitcoin} alt='Bitcoin' blurDataURL={``} />
				</div>
				<div className='main-exchange-container--title'>
					<h2 className='mt-6 mb-4 text-4xl leading-10 font-dmsans-bold text-warm-black'>Visibilizamos todas las tasas de cambio.</h2>
					<p className='my-10 mb-4 text-xl font-bold leading-7 text-center text-batata-gray2 font-dmsans-regular'>Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.</p>
				</div>
				<section className='main-tables-container'>
					<div className='main-currency-table'>
						<p className='mb-6 text-3xl text-orange font-dmsans-bold'>Monedas</p>
						<div className='shadow-xl currency-table-container'>
							<table>
								<tr>
									<td className='table__top-left'>Bitcoin</td>
									<td className='table__top-right table__right'>$1.96 <IoTrendingDownOutline className='ml-4 text-red-500 fill-current down' /></td>
								</tr>
								<tr>
									<td>Ethereum</td>
									<td className='table__right'>$0.07 <IoTrendingUp className='ml-4 text-green-500 fill-current' /></td>
								</tr>
								<tr>
									<td>Ripple</td>
									<td className='table__right'>$2.17 <IoTrendingDownOutline className='ml-4 text-red-500 fill-current down' /></td>
								</tr>
								<tr>
									<td className='table__bottom-left'>Stellar</td>
									<td className='table__bottom-right table__right'>$4.96 <IoTrendingDownOutline className='ml-4 text-red-500 fill-current down' /></td>
								</tr>
							</table>
						</div>
						<div className='currency-table--date bg-soft-orange'>
							<p className='font-inter-regular text-warm-black'><b>Actualizado:</b> {fecha} </p>
						</div>
					</div>
					<div className='main-currency-table'>
						<p className='mb-6 text-3xl text-secondary-blue font-dmsans-bold'>Comisiones</p>
						<div className='shadow-xl currency-table-container'>
							<table>
								<tr>
									<td className='table__top-left'>Bitrade</td>
									<td className='table__top-right table__right'>$21.96</td>
								</tr>
								<tr>
									<td>Bitpreco</td>
									<td className='table__right'>$13.07</td>
								</tr>
								<tr>
									<td>Novadax</td>
									<td className='table__right'>$13.15</td>
								</tr>
								<tr>
									<td className='table__bottom-left'>Coinext</td>
									<td className='table__bottom-right table__right'>$14.96 </td>
								</tr>
							</table>
						</div>
						<div className='bg-soft-blue currency-table--date'>
							<p className='font-inter-regular text-warm-black'><b>Actualizado:</b> {fecha} </p>
						</div>
					</div>
				</section>
			</section>
		</main>
	)
}

export default Section1
