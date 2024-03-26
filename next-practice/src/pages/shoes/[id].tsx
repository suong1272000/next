import { useRouter } from "next/router";

const Shoes = () => {
	const router = useRouter();
	const { id } = router.query;
	return <div>선택한 신발 : {id}</div>;
};
export default Shoes;
