import { GetServerSideProps } from "next";
import { parse } from "cookie";

export const getServerSideProps: GetServerSideProps = async (
	context
): Promise<any> => {
	const { req } = context;
	const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
	console.log(cookies.success);
	const userAuth = cookies.success == "true";
	if (!userAuth) {
		return {
			redirect: {
				destination: "/login",
			},
		};
	}
	return {
		props: {},
	};
};
const MemberList = () => {
	return <div>멤버 리스트 페이지입니다.</div>;
};
export default MemberList;
