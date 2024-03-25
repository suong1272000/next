import Link from "next/link";

const NotFound = () => {
	return (
		<div>
			<h2>404 Not Found</h2>
			<p>소스를 찾을 수 없습니다.</p>
			<Link href="/">홈으로 가기</Link>
		</div>
	);
};
export default NotFound;
