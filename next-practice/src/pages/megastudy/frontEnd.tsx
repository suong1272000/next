import Link from "next/link";

const FrontEnd = () => {
	return (
		<>
			<div>프론트앤드 페이지입니다.</div>
			<Link href="/">
				<div style={{ border: "1px solid black" }}>홈으로 가기</div>
			</Link>
		</>
	);
};
export default FrontEnd;
