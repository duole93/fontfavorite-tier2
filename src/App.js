import React, { useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar";
import ViewBar from "./components/ViewBar";
import FontContainer from "./components/FontContainer"

function App() {
	const defaultFontStyle = { fontSize: 24, customText: "" };
	const [customText, setCustomText] = useState(defaultFontStyle.customText);
	const [fontSize, setFontSize] = useState(defaultFontStyle.fontSize);
	
	function handleChangeCustomText(value) {
		setCustomText(value);
	}

	function handleChangeFontSize(value) {
		setFontSize(value);
	}

	function handleReset() {
		setCustomText(defaultFontStyle.customText);
		setFontSize(defaultFontStyle.fontSize);
	}

	return (
		<div>
			<Header />
			<div className="ctn-main">
				<SearchBar
					onChangeCustomText={handleChangeCustomText}					
					onChangeFontSize={handleChangeFontSize}
					onReset={handleReset}
					customText={customText}
					fontSize={fontSize}
				/>
				<ViewBar />
				<FontContainer
					customText={customText} 
					fontSize={fontSize}
				/>
			</div>
			<Footer />
		</div>
	);
}
export default App;
