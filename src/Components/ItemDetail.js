import React, { useEffect, useState } from "react";

function ItemDetail(match) {
	useEffect(() => {
    fetchItem();
    console.log(match);
	}, []);

	const [item, setItem] = useState({});

	const fetchItem = async () => {
		const fetchItem = await fetch(
			`https://fortnite-api.theapinetwork.com/item/get?id=${match.match.params.id}`
		);
    const itemData = await fetchItem.json();
    setItem(itemData)
    console.log(item);
    console.log(itemData.data.item.name);
	};

	return (
		<div>

		</div>
	);
}

export default ItemDetail;
