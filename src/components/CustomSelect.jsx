import React from 'react';
import Select from 'react-select';
import Highlighter from 'react-highlight-words';

function CustomSelect({ defaultValue, placeholder, options, value, onChange }) {
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
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: '#E0F0FF'
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            fontSize: '16px',
            color: '#1a1a1a',
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            color: '#0066CC',
            ':hover': {
                backgroundColor: '#E0F0FF',
                color: '0066CC',
                cursor: 'pointer'
            }
        }),
        indicatorSeparator: () => ({
            color: 'FFFFFF',

        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: '#1A1A1A',
        }),
        menu: (provided) => ({
            ...provided,
            zIndex: '999999999999999999 !important'
        })
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
            placeholder={placeholder}
            options={options}
            isMulti
            value={value}
            className="basic-single ontario-input--20-char-width ontario-margin-bottom-24-!"
            classNamePrefix="select"
            onChange={onChange}
            styles={customStyles}
            isClearable={false}
            formatOptionLabel={formatOptionLabel}
        />
    );
}

export default CustomSelect;