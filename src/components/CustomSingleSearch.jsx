import React from 'react';
import Highlighter from 'react-highlight-words';
import Select from 'react-select';

function CustomSingleSearch({ defaultValue, value, placeholder, options, onChange }) {

    const customStyles = {
        control: (provided) => ({
            ...provided,
            border: '2px solid #1a1a1a',
            borderRadius: '4px',
            boxSizing: 'border-box',
            color: '#1a1a1a',
            fontSize: '1rem',
            lineHeight: '1.5',
            margin: '0 0 2.5rem',
            padding: '0.625rem 1rem',
            ':hover': {
                cursor: 'pointer',
                color: '#1a1a1a',
                borderColor: "#1a1a1a"
            }
        }),
        indicatorSeparator: () => ({
            color: 'FFFFFF',

        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: '#1A1A1A',
        }),
    }

    function formatOptionLabel({ label }, { inputValue }) {
        return (
            <Highlighter
                searchWords={[inputValue]}
                textToHighlight={label}
                highlightStyle={{ fontWeight: "bold", backgroundColor: 'transparent', padding: "0" }}
            />
        );
    }

    return (
        <Select
            defaultValue={defaultValue}
            value={value}
            placeholder={placeholder}
            isSearchable
            options={options}
            className="basic-single ontario-input--20-char-width ontario-margin-bottom-0-!"
            classNamePrefix="select"
            onChange={onChange}
            styles={customStyles}
            formatOptionLabel={formatOptionLabel}
        />
    );
}

export default CustomSingleSearch;