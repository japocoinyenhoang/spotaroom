import React, { Component } from 'react';
import { getRooms } from './services/RoomApiService';
import MenuLink from './components/MenuLink';
import RoomList from './components/RoomList';
import './App.scss';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rooms: []
		};

		this.getRoomResult();
	}

	getRoomResult() {
		getRooms().then((data) => {
			const newData = data.homecards.map((item, index) => {
				return { ...item, id: index };
			});
			this.setState({
				rooms: newData,
				orderByPrice: ''
			});
		});
	}

	orderByMinimunPrice = () => {
		const shortedRooms = this.state.rooms.sort(this.shortedPrice);
		this.setState({
			rooms: shortedRooms
		});
	};

	shortedPrice = (prev, next) => {
		if (this.state.orderByPrice === 'ascendente') {
			return prev.pricePerMonth < next.pricePerMonth ? -1 : 1;
		} else {
			return prev.pricePerMonth > next.pricePerMonth ? -1 : 1;
		}
	};

	handleOrderByPrice = (event) => {
		this.setState(
			{
				orderByPrice: event.target.value
			},
			this.orderByMinimunPrice
		);
	};

	render() {
		return (
			<div className="Wrap App">
				<header className="Header__container">
					<h1 className="Header__title">spotaroom</h1>
					<MenuLink />
				</header>
				<main className="Main__container">
					<div>
						<form>
							<select htmlFor="" onChange={this.handleOrderByPrice}>
								<option value="ascendente">Ascendente</option>
								<option value="descendente">Descendente</option>
							</select>
						</form>
					</div>
					<RoomList rooms={this.state.rooms} />
				</main>
			</div>
		);
	}
}

export default App;
