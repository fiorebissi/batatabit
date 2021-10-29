import { useState, useEffect } from 'react'

const useValues = () => {
	const [bitValue, setBitValue] = useState(0)
	const [ethValue, setEthValue] = useState(0)
	const [daiValue, setDaiValue] = useState(0)
	const [usdtValue, setUsdtValue] = useState(0)
	const [bitCom, setBitCom] = useState(0)
	const [ethCom, setEthCom] = useState(0)
	const [daiCom, setDaiCom] = useState(0)
	const [usdtCom, setUsdtCom] = useState(0)

	const getCriptoValues = async () => {
		// Bitcoin
		const res = await fetch(`https://criptoya.com/api/sesocio/btc/usd`, {
			method: `GET`,
			headers: {
				'Content-Type': `application/json`
			}
		})
		const data = await res.json()

		const valueBit = data.ask
		const valueBitCom = data.totalAsk

		setBitValue(valueBit)
		setBitCom(valueBitCom - valueBit)

		// Ethereum

		const resEth = await fetch(`https://criptoya.com/api/sesocio/eth/usd`, {
			method: `GET`,
			headers: {
				'Content-Type': `application/json`
			}
		})
		const dataEth = await resEth.json()

		const valueEth = dataEth.ask
		const valueEthCom = dataEth.totalAsk

		setEthValue(valueEth)
		setEthCom(valueEthCom - valueEth)

		// Dai

		const resDai = await fetch(`https://criptoya.com/api/sesocio/dai/usd`, {
			method: `GET`,
			headers: {
				'Content-Type': `application/json`
			}
		})
		const dataDai = await resDai.json()

		const valueDai = dataDai.ask
		const valueDaiCom = dataDai.totalAsk

		setDaiValue(valueDai)
		setDaiCom(valueDaiCom - valueDai)

		// USDT

		const resUsdt = await fetch(`https://criptoya.com/api/sesocio/usdt/usd`, {
			method: `GET`,
			headers: {
				'Content-Type': `application/json`
			}
		})
		const dataUsdt = await resUsdt.json()

		const valueUsdt = dataUsdt.ask
		const valueUsdtCom = dataUsdt.totalAsk

		setUsdtValue(valueUsdt)
		setUsdtCom(valueUsdtCom - valueUsdt)
	}

	useEffect(() => {
		getCriptoValues()
	}, [])

	return { bitValue, ethValue, daiValue, usdtValue, bitCom, ethCom, daiCom, usdtCom }
}

export default useValues
