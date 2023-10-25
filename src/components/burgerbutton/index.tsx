import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { isSidebarOpen } from "../../store/Static/static.selectors";
import { toggleSidebar } from "../../store/Static/static.slice";

const BurgerButton = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector(isSidebarOpen);
  return (
    <div className="w-10 z-10 hidden sm:block" onClick={() => dispatch(toggleSidebar())}>
      <div className={`w-full h-1 bg-black mt-1 origin-top ${open ? 'rotate-45 translate-y-[4px]' : ''}`}></div>
      <div className={`w-full h-1 bg-black mt-1 ${open? 'hidden': 'block'}`}></div>
      <div className={`w-full h-1 bg-black mt-1 origin-bottom ${open ? '-rotate-45 -translate-y-[5px]' : ''}`}></div>
    </div>
  )
}

export default BurgerButton;