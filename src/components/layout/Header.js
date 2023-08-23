import stringTable, { useLanguage } from '../../Lang';

const Header = ({ popupProgress }) => {
  const { lang } = useLanguage();

	return (
		<header>
			<div className="lately">
				{stringTable[lang].lately} : Thu, July 6, 2023, 8:36 AM
				{/* FIXME: 한국어일때 표기법 변경 :  2023.8.8(화) 8:36 AM*/}
			</div>
			<div className="profile">
				Hong gil dong
			</div>
			<div className="work">
				<a href="" className="active">{stringTable[lang].goWork}</a>
				<a href="#" className="" onClick={popupProgress}>{stringTable[lang].outWork}</a>
			</div>
		</header>
  );
};

export default Header;