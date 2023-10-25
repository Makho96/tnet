import { ChevronLeftSVG } from "../../static"

const BreadCrumbs = () => {
  return (
    <div className="flex justify-start items-center gap-1">
      <span className="font-helvetica text-12 text-black-600">მთავარი</span>
      <div>
        <ChevronLeftSVG />
      </div>
      <span className="font-helvetica text-12 text-black-600 rounded-">ძიება</span>
      <ChevronLeftSVG />
      <span  className="font-helvetica text-12 text-primary-orange-800">იყიდება</span>
    </div>
  )
}

export default BreadCrumbs