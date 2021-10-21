interface Props {
	children: React.ReactNode
	text: string
	title:string
}
const ProductDetailCards = ({ children, text, title }: Props) => {
	return (
		<article className='product-detail--card'>
			{children}
			<p className='product--card-title font-dmsans-regular'>{title}</p>
			<p className='product--card-body font-dmsans-regular'>{text}</p>
		</article>
	)
}

export default ProductDetailCards
