import { FC, useEffect, useState } from "react";
import { ChevronLeftSVG } from "../../static";
import { useOutsideClick } from "../../hooks";

type DropdownItem = {id: string | number, value: string}

interface Props {
  title?: string,
  onItemClick?: (id: string | number) => void
  data: Array<DropdownItem>,
  defaultSelected?: string,
  closeOnChange?: boolean
}

const MultipleChoise:FC<Props> = (props) => {
  const {
    title, 
    onItemClick, 
    data, 
    defaultSelected,
    closeOnChange = true
  } = props;
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<DropdownItem>(data.find(item => item.id === defaultSelected) || data[0])
  
  useEffect(() => {
    setSelected(data.find(item => item.id === defaultSelected) || data[0])
  }, [defaultSelected, data])

  const handleItemClick = (item: DropdownItem) => {
    setSelected(item)
    closeOnChange && setOpen(false);
    onItemClick && onItemClick(item.id)
  }

  return (
    <div className="w-full">
      {title && 
        <h3 className="w-full text-left text-12 text-black-800 font-sailec pb-2">{title}</h3>
      }
      <div className="w-full relative">
        <div className="w-full flex justify-between items-center p-3 pr-2 border border-secondary-gray-100 rounded-xl cursor-pointer" onClick={() => setOpen(prevstate => !prevstate)}>
          <span className="text-13 font-sailec text-black-900 inline-block max-w-[80%] overflow-hidden whitespace-nowrap text-ellipsis">{selected.value}</span>
          <div className="rotate-90">
            <ChevronLeftSVG />
          </div>
        </div>
        {open && (
          <div className="w-full bg-white border border-gray-200 rounded-lg bottom-0 absolute translate-y-[calc(100%+4px)] shadow-main max-h-[230px] overflow-auto">
            <ul className="w-full">
              {data.map(item => {
                return <li key={item.id} className="w-full">
                  <div 
                    className={`w-full py-2 px-4 flex justify-start items-start text-14 cursor-pointer ${item.id === selected.id ? 'text-black-800 bg-primary-gray-50' : 'text-black-600'} hover:text-black-800 hover:bg-primary-gray-50`}
                    onClick={() => handleItemClick(item)}
                    >
                      {item.value}
                    </div>
                </li>
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default MultipleChoise;