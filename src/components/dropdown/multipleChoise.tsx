import { FC, useEffect, useState } from "react";
import { ChevronLeftSVG, CrossSVG } from "../../static";

type DropdownItem = {id: string | number, value: string, selected: boolean, [key: string]: any}

interface Props {
  disabled?: boolean,
  title?: string,
  onItemClick?: (item: DropdownItem) => void
  data: Array<DropdownItem>,
  defaultSelected?: string,
  onClear?: () => void;
}

const Dropdown:FC<Props> = (props) => {
  const {
    title, 
    onItemClick, 
    data, 
    defaultSelected,
    disabled = false,
    onClear
  } = props;
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([])
  const [localData, setLocalData] = useState(data)

  useEffect(() => {
    setLocalData(data);
  }, [data])

  const handleItemClick = (item: DropdownItem) => {
    setLocalData(prevState => ([
      ...prevState.map(data => ({
        ...data,
        selected: data.id === item.id ? !data.selected : data.selected
      }))
    ]))
    onItemClick && onItemClick(item)
  }

  const clearData = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    setLocalData(prevState => ([
      ...prevState.map(data => ({
        ...data,
        selected: false
      }))
    ]))
    onClear && onClear()
  }

  useEffect(() => {
    setSelected(localData.filter(item => item.selected).map(item => item.value))
    if (localData.length === 0) setOpen(false);
  }, [localData])

  return (
    <div className="w-full">
      {title && 
        <h3 className="w-full text-left text-12 text-black-800 font-sailec pb-2">{title}</h3>
      }
      <div className="w-full relative">
        <div 
          className={`${disabled ? 'bg-gray-200 cursor-not-allowed' : ''} w-full flex justify-between items-center p-3 pr-2 border border-secondary-gray-100 rounded-xl cursor-pointer`} 
          onClick={() => !disabled && setOpen(prevstate => !prevstate)}
          >
          <span className="text-13 font-sailec text-black-900 inline-block max-w-[80%] overflow-hidden whitespace-nowrap text-ellipsis">{selected.length> 0 ? selected.join(',') : "ყველა"}</span>
          <div className="w-5 h-5 flex justify-center items-center">
            {selected.length > 0 ? (
              <div onClick={clearData}>
                <CrossSVG />
              </div>
              ) : (
              <div className="rotate-90">
                <ChevronLeftSVG />
              </div>
            )}
          </div>
        </div>
        {open && (
          <div className="w-[300px] px-4 bg-white border border-gray-200 rounded-lg bottom-0 absolute translate-y-[calc(100%+4px)] shadow-main max-h-[300px] overflow-auto">
            <ul className="w-full">
              {localData.map(item => {
                return <li key={item.id} className="w-full">
                  <label 
                    htmlFor={item.id.toString()}
                    className={`w-full py-2 flex justify-start items-center gap-2 text-14 cursor-pointer `}
                    >
                      <input type="checkbox" id={item.id.toString()} checked={item.selected} onChange={() => handleItemClick(item)}/> <span>{item.value}</span>
                    </label>
                </li>
              })}
            </ul>
            <div className="w-full bg-white sticky bottom-0 pb-4">
              <button className="w-full text-center text-white bg-primary-black-900 py-2 rounded-lg" onClick={() => setOpen(false)}>არჩევა</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dropdown;