import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import stringTable, { useLanguage } from '../../Lang';

const Navi = () => {
  const { lang } = useLanguage();

	const [isLocationOpen, setIsLocationOpen] = useState(false);
  const locationList = ['Location 01', 'Location 02', 'Location 03'];
	const [selectedLocation, setSelectedLocation] = useState(locationList[0]);
  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    setIsLocationOpen(false);
  };

	return (
		<nav>
			<h1 className="logo">
				<a href="/">
					<img src="https://ssl.pstatic.net/melona/libs/1459/1459681/0042abd453cf84496688_20230725085326472.jpg" alt="이미지 크기 확인을 위한 예시 이미지" />
					</a>
			</h1>
			<div className={`location ${isLocationOpen ? 'active' : ''}`} onClick={() => setIsLocationOpen(!isLocationOpen)}>
				<span>{selectedLocation}</span>
				{isLocationOpen && (
					<ul>
						{locationList.map((location) => (
							<li key={location} onClick={() => handleLocationClick(location)}>
								{location}
							</li>
						))}
					</ul>
				)}
			</div>
			<div className="menu">
				<ul>
					<li className="monitoring">
						<NavLink to="/"><span>{stringTable[lang].monitoring}</span></NavLink>
					</li>
					<li className="alarm">
						<NavLink to="/alarm"><span>{stringTable[lang].alarm}</span></NavLink>
					</li>
				</ul>
			</div>
			<div className="etc">
				<NavLink to="/setting" className="link-setting">{stringTable[lang].setting}</NavLink>
				<a href="" className="link-logout">{stringTable[lang].logout}</a>
			</div>
		</nav>
  );
};

export default Navi;