import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { getProducts } from "../../store/Products/products.asyncActions";
import { useSearchParams } from "react-router-dom";
import { productsData, totalCount } from "../../store/Products/products.selectors";
import { Dropdown } from "../dropdown";
import ProductItem from "../productItem";
import { PeriodValues, SearchParamKeys, SearchParams, SortValues } from "../../types";
import { periods, sorts } from "../../static";


const Products = () => {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams();
  const products = useAppSelector(productsData);
  const total = useAppSelector(totalCount);
  const [sortDefaultValue, setSortDefaultValue] = useState<SortValues | undefined>()
  const [periodDefaultValue, setPeriodDefaultValue] = useState<PeriodValues | undefined>()

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries())  as unknown as SearchParams
    dispatch(getProducts(params))
  }, [dispatch, searchParams])

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries())  as unknown as SearchParams
    if (params[SearchParamKeys.SortOrder]) {
      setSortDefaultValue(params[SearchParamKeys.SortOrder])
    }
    if (params[SearchParamKeys.Period]) {
      setPeriodDefaultValue(params[SearchParamKeys.Period])
    }
  }, [searchParams])

  const handleSetSearchParams = (id: SearchParamKeys, value: string) => {
    setSearchParams((odlvalue) => {
      odlvalue.set(id, value)
      return odlvalue
    })
  }

  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center">
        <span>{total} განცხადება</span>
        <div className="flex justify-end items-center gap-2">
          <div className="w-[140px]">
            <Dropdown 
              defaultSelected={periodDefaultValue}
              data={periods} 
              onItemClick={(id) => handleSetSearchParams(SearchParamKeys.Period, id.toString())}
            />
          </div>
          <div className="w-[140px]">
            <Dropdown
              defaultSelected={sortDefaultValue}
              data={sorts}  
              onItemClick={(id) => handleSetSearchParams(SearchParamKeys.SortOrder, id.toString())}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <ul className="w-full">
          {products.map(product => {
            return (
              <li key={product.car_id} className="w-full">
                <ProductItem data = {product} />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Products;