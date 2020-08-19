import React from 'react';
import SearchInput from './SearchBarComponent/SearchInput'
import CustomTextInput from './SearchBarComponent/CustomTextInput';
import ResizeButton from './SearchBarComponent/ResizeButton';
import ThemeToggle from './SearchBarComponent/ThemeToggle';
import ResetButton from './SearchBarComponent/ResetButton'

function SearchBar(props) {

    return (
        <div className="container search-ctn">
            <SearchInput />
            <CustomTextInput
                onChangeText={props.onChangeCustomText}
                value={props.customText}
            />
            <ResizeButton 
                onChangeSize={props.onChangeFontSize}
                fontSize={props.fontSize}
            />
            <ThemeToggle />
            <ResetButton 
                onReset={props.onReset}
            />
        </div>
    );
}
export default SearchBar;