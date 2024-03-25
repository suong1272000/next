import { useRouter } from "next/router";

const Goods = () => {
	const router = useRouter();
	const { id } = router.query;
	return <div>주문한 옷: {id}</div>;
};
export default Goods;
