import React, {
	useState
} from 'react';

const SimpleController = ({ children, getData, setData }) => {

	const up = () => {
		const data = getData()
		setData({...data, value: data.value + 1})
	}

	const down = () => {
		const data = getData()
		setData({...data, value: data.value - 1})
	}

	const value = getData().value
	return children({ up, down, value })
}



const AwesomeController = ({ children, getData, setData }) => {
	const up = () => {
		const data = getData()
		setData({...data, value: data.value * 2})
	}

	const down = () => {
		const data = getData()
		setData({...data, value: data.value / 2})
	}
	const value = getData().value
	return children({ up, down, value })
}




const useAwesomeController = (getData, setData) => {
	const up = () => {
		const data = getData()
		setData({...data, value: data.value * 2})
	}

	const down = () => {
		const data = getData()
		setData({...data, value: data.value / 2})
	}
	const value = getData().value
	return { up, down, value }
}


export const MVC = () => {
	const [_data, _setData] = useState({value: 1})

	const getData = () => _data
	const setData = (data) => _setData(data)

	return (
		<AwesomeController getData={getData} setData={setData}>
			{({ up, down, value }) => {
				return (
					<div>
						<div>{value}</div>
						<div>
							<button onClick={up}>up</button>
							<button onClick={down}>down</button>
						</div>
					</div>
				)
			}}
		</AwesomeController>
	)
}
