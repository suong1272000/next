import { AboutCultureType } from "@/data/about";

type CulturesProps = {
	cultures: AboutCultureType;
};

const Cultures = ({ cultures }: CulturesProps) => {
	return <button>{cultures.meta}</button>;
};
export default Cultures;
