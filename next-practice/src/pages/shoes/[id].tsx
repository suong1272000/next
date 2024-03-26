import { shoesItem, shoesItemType } from "@/data/shoes";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FC } from "react";

export const getServerSideProps: GetServerSideProps = async (
	context
): Promise<{ props: any }> => {
	const id = context.params?.id;
	const item = shoesItem.find((v) => v.id === id);
	return {
		props: { shoesItem: item },
	};
};

type ShoesProps = {
	shoesItem: shoesItemType;
};

const Shoes: FC<ShoesProps> = ({ shoesItem }) => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<div>
			선택한 신발 이름: {shoesItem.name} 가격:{shoesItem.price}
		</div>
	);
};
export default Shoes;
