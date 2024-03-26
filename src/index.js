import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Header() {
	return (
		<header className="header">
			<h1>Fast React Pizza Co.</h1>
		</header>
	);
}

function Menu() {
	let pizzas = pizzaData;
	const numPizzas = pizzas.length;

	return (
		<main className="menu">
			<h2>Our menu</h2>
			{numPizzas > 0 ? (
				<>
					<p>
						Authentic Italian cuisine. 6 creative dishes to choose from. All
						from our stove oven, all organic, all delicious.
					</p>
					<ul className="pizzas">
						{pizzaData.map((pizza) => {
							return <Pizza pizzaObj={pizza} key={pizza.name} />;
						})}
					</ul>
				</>
			) : (
				<p>We're still working on our menu. Please come back later</p>
			)}{" "}
			:
		</main>
	);
}

function Pizza(props) {
	const { ingredients, photoName, price, name, soldOut } = props.pizzaObj;

	return (
		<li className={`pizza ${soldOut ? "sold-out" : ""}`}>
			<img src={photoName} alt={name} />
			<div>
				<h3>{name}</h3>
				<p>{ingredients}</p>
				{soldOut ? <span>SOLD OUT</span> : <span>{parseInt(price) + 3}</span>}
			</div>
		</li>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openHour = 12;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour < closeHour;

	return (
		<footer className="footer">
			{isOpen ? (
				<Order closeHour={closeHour} />
			) : (
				<p>
					We're happy to welcome you between {openHour}:00 and {closeHour}:00{" "}
				</p>
			)}
		</footer>
	);
}

function Order({ closeHour }) {
	return (
		<div className="order">
			<p>We're open until {closeHour}:00. Come visit us or order online.</p>
			<button className="btn">Order</button>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{" "}
		<App />{" "}
	</React.StrictMode>
);

const pizzaData = [
	{
		name: "Focaccia",
		ingredients: "Bread with italian olive oil and rosemary",
		price: 6,
		photoName: "pizzas/focaccia.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Margherita",
		ingredients: "Tomato and mozarella",
		price: 10,
		photoName: "pizzas/margherita.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Spinaci",
		ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
		price: 12,
		photoName: "pizzas/spinaci.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Funghi",
		ingredients: "Tomato, mozarella, mushrooms, and onion",
		price: 12,
		photoName: "pizzas/funghi.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Salamino",
		ingredients: "Tomato, mozarella, and pepperoni",
		price: 15,
		photoName: "pizzas/salamino.jpg",
		soldOut: true,
	},
	{
		name: "Pizza Prosciutto",
		ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
		price: 18,
		photoName: "pizzas/prosciutto.jpg",
		soldOut: false,
	},
];
