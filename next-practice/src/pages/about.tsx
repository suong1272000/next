import Cultures from "@/components/Cultures";
import Item from "@/components/Item";
import {
	AboutCultureType,
	AboutItemType,
	aboutCulture,
	aboutItem,
} from "@/data/about";

// SSG 페이지 만드는 방법
type AboutPropsType = { item: AboutItemType[]; cultures: AboutCultureType[] };

export const getStaticProps = async (): Promise<{ props: AboutPropsType }> => {
	const item = aboutItem;
	const cultures = aboutCulture;
	console.log(item, cultures);
	return {
		props: {
			item,
			cultures,
		},
	};
};

const About: React.FC<AboutPropsType> = ({ item, cultures }) => {
	return (
		<div>
			<div>About 페이지 입니다.</div>
			{cultures.map((v, i) => (
				<Cultures key={i} cultures={v} />
			))}
			{item.map((v, i) => (
				<Item key={i} item={v}></Item>
			))}
		</div>
	);
};

export default About;
