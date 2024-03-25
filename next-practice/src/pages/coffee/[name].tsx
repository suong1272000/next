import { useRouter } from "next/router";

const Coffee = () => {
	const router = useRouter();
	const { name } = router.query;
	return <div>주문한 커피: {name}</div>;
};
export default Coffee;
