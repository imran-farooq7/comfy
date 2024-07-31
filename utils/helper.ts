export const formatPrice = (price: number) => {
	const dollarsAmount = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	});
	const formatPrice = dollarsAmount.format(price / 100);
	return formatPrice;
};
