import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../App.css';
library.add(faTimes);


const MultiSelect = ({data, placeholder}) => {
    const [open, setOpen] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const [listSelected, setListSelected] = useState([]);

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleSelect = (sportType, title) => {
        if (!open) {
            document.addEventListener('click', handleOutsideClick, false);
        } else {
            document.removeEventListener('click', handleOutsideClick, false);
        }
        setIsSelected(true)
        setListSelected(listSelected.concat(title))
        setOpen(!open)
    }

    const handleOutsideClick = () => {
        handleSelect();
    };

    
    const filterData = () => {
        return data.filter(item => !listSelected.find(title => item.sportTitle === title))
    }


    const handleDelete = (id) => {
        // const newListSelected = listSelected.filter((item) => item.sportTitle === id);
        listSelected.splice(id, 1)

        // console.log(listSelected, newListSelected)
        setListSelected([...listSelected])
    }
    return (
        <div className="option-custom">
            <div className='select-input select-input--multiple' >
                <div className='selected-list'>
                    {listSelected.map((item, index) => (
                        <div key={index} className='selected-item'>
                            <span key={index}>
                                {item === null ? placeholder : item}
                            </span>
                            <span onClick={() => handleDelete(index)}>
                                <FontAwesomeIcon className='remove-icon' icon={faTimes} />
                            </span>
                        </div>
                    ))}
                    <div className="select-click" onClick={handleOpen} />
                </div>
            </div>

            {open ?
                <div className='select-list'>
                    {
                        filterData().length > 0 ? (
                            filterData().map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleSelect(filterData()[index].sportType, filterData()[index].sportTitle)}
                                    className='select-item'
                                >
                                    <FontAwesomeIcon className='select-icon' icon={item.sportType} />
                                    <span className='select-title'>{item.sportTitle}</span>
                                </div>
                            ))
                        ) : (
                            <>
                                <div className="no-data"> <FontAwesomeIcon className='nodata-icon' icon={faCalendar} />No data</div>
                            </>
                        )
                    }
                </div>
                : ''
            }
        </div>
    )
}

export default MultiSelect;
