import { AboutItemType } from "@/data/about";

type ItemProps = {
	item: AboutItemType;
};
const Item = ({ item }: ItemProps) => {
	return (
		<>
			<h2>{item.title}</h2>
			<div>{item.content}</div>
		</>
	);
};
export default Item;
