import Filters from "../../components/filter";
import Products from "../../components/products";
import { useAppSelector } from "../../store/hooks";
import { isSidebarOpen } from "../../store/Static/static.selectors";

const Home = () => {
  const open = useAppSelector(isSidebarOpen)
  return <div className="min-h-screen">
    <div className="flex justify-start items-start gap-5 max-w-container-width m-auto w-11/12 pt-5">
      <div className={`sm:z-10 sm:fixed sm:top-0 shadow-main sm:h-full ${open ? 'sm:left-0' : 'sm:-left-full'}`}>
        <Filters />
      </div>
      <Products />
    </div>
  </div>
}

export default Home;