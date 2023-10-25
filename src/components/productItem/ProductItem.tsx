import { Product } from "../../store/Products/products.types";
import { MotorSVG } from "../../static";
import { NoteSVG } from "../../static";

const ProductItem = ({data}: {data: Product}) => {
  return (
    <div className="w-full flex justify-between items-start p-4 rounded-14 bg-white mt-2.5 gap-4">
      <div className="w-[180px] h-[140px] rounded-lg overflow-hidden shrink-0">
        <img 
          src= {`https://static.my.ge/myauto/photos/${data.photo}/thumbs/${data.car_id}_1.jpg?v=${data.photo_ver}`} 
          alt="product"
        />
      </div>
      <div className="w-full">
        <div className="w-full flex justify-between items-center lg:flex-wrap">
          <h4 className="flex justify-start items-center gap-2 text-14 font-helvetica font-medium lg:w-full">
            <span className="text-primary-black-800">LAND ROVER Range Rover Evoque</span>
            <span className="text-primary-black-500">2013</span>
          </h4>
          <h5 className="flex justify-end items-center gap-2 lg:w-full lg:justify-start lg:mt-4">
           <span className="text-11 font-sailec text-error-red-800 font-medium">განბაჟება {data.price} ₾</span>
           <span className="inline-block w-4 h-4 bg-black"></span> 
           <span className="text-12 font-helvetica text-secondary-black-600 ">გზაშია</span>
          </h5>
        </div>
        <div className="flex justify-between items-start mt-6 lg:mt-2">
          <div className="flex justify-start items-start flex-wrap w-full lg:hidden">
            <div className="w-1/2 flex justify-start items-center gap-3">
              <MotorSVG />
              <span className="font-sailec text-primary-black-800 text-12 font-medium">1,8 დატ ჰიბრიდი</span>
            </div>
            <div className="w-1/2 flex justify-start items-center gap-3">
              <MotorSVG />
              <span className="font-sailec text-primary-black-800 text-12 font-medium">1,8 დატ ჰიბრიდი</span>
            </div>
            <div className="w-1/2 flex justify-start items-center gap-3 mt-4">
              <MotorSVG />
              <span className="font-sailec text-primary-black-800 text-12 font-medium">1,8 დატ ჰიბრიდი</span>
            </div>
            <div className="w-1/2 flex justify-start items-center gap-3 mt-4">
              <MotorSVG />
              <span className="font-sailec text-primary-black-800 text-12 font-medium">1,8 დატ ჰიბრიდი</span>
            </div>
          </div>
          <h2 className="font-sailec text-[20px] font-medium text-primary-black-800 max-w-[150px] shrink-0">{data.price} ₾</h2>
        </div>
        <div className="flex w-full justify-between items-center mt-8 lg:mt-4">
          <div className="flex justify-start items-center gap-1 font-sailec text-primary-black-600 font-medium text-12">
            <div className="flex justify-center items-center bg-secondary-yellow-500 text-white font-helvetica uppercase text-10 px-2 py-1 rounded-[100px] mr-4">
              Vip +
            </div>
            <span>{data.views} ნახვა</span>
            <div className="inline-block w-[3px] h-[3px] rounded-full bg-secondary-black-500 "></div>
            <span>2 დღის წინ</span>
          </div>
          <div className="flex justify-end items-center gap-4 lg:hidden">
            <div>
              <NoteSVG />
            </div>
            <div>
              <NoteSVG />
            </div>
            <div>
              <NoteSVG />
            </div>
          </div>
        </div>
        <div>
           
        </div>
      </div>
    </div>
  )
}

export default ProductItem;