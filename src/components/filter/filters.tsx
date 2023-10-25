import { useMemo, useState, useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getModels } from '../../store/Static/static.asyncActions';
import { categoriesData, manufacturersChosen, manufacturersData, modelsData, categoriesChosen } from '../../store/Static/static.selectors';
import { toggleManufacturer, toggleModel, toggleCategories, clearChosenModels, clearchosenManufacturers, clearCategotires } from '../../store/Static/static.slice';
import { useSearchParams } from 'react-router-dom';
import { ForRentValues, SearchParamKeys, SearchParams } from '../../types';
import { CarSVG, MotoSVG, SpecSVG } from '../../static';
import {Dropdown, MultipleChoise} from '../dropdown';
import { negotiations } from '../../static';

const Filters = () => {
  const dispatch = useAppDispatch();
  
  const [negotiationTypes, setNegotiationType] = useState<ForRentValues>('-1');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [activeTab, setActiveTab] = useState<'car' | 'spec'| 'moto'>('car');
  const [negotiationDefaultValue, setNegotiationDefaultValue] = useState<ForRentValues | undefined>()
  
  const categories = useAppSelector(categoriesData)
  const chosenCategories = useAppSelector(categoriesChosen);
  const [searchParams, setSearchParams] = useSearchParams();
  const manData = useAppSelector(manufacturersData);
  const chosenManData = useAppSelector(manufacturersChosen);
  const models = useAppSelector(modelsData)

  const handleManufacturerToggle = useCallback((id: string) => {
    dispatch(getModels({id}))
    dispatch(toggleManufacturer([id]))
  }, [dispatch])

  const chosenModels = useMemo(() => {
    const arr = [];
    for (let i = 0; i < chosenManData.length; i++) {
      if (models[chosenManData[i].man_id]) {
        arr.push(...models[chosenManData[i].man_id])
      }
    }
    return arr
  }, [chosenManData, models])


  const handleSearch = useCallback(() => {
    const mansAndModels: string[] = []
    
    for (let i = 0; i < chosenManData.length; i++) {
      const chosenModels: (number | string)[] = [chosenManData[i].man_id];
      for (let j = 0; j < models[chosenManData[i].man_id]?.length; j++) {
        if (models[chosenManData[i].man_id][j].chosen) {
          chosenModels.push(models[chosenManData[i].man_id][j].model_id)
        }
      }
      mansAndModels.push(chosenModels.join('.'));
    }

    setSearchParams((odlvalue) => {
      if (mansAndModels.length > 0) {
        odlvalue.set('Mans', mansAndModels.join('-'))
      } else {
        odlvalue.delete('Mans')
      }
      if (chosenCategories.length > 0) {
        odlvalue.set('Cats', chosenCategories.map(item => item.category_id).join('.'))
      } else {
        odlvalue.delete('Cats')
      }

      if (priceFrom.length > 0 && !isNaN(+priceFrom)) {
        odlvalue.set('PriceFrom', priceFrom)
      } else {
        odlvalue.delete('PriceFrom')
      }

      if (priceTo.length > 0 && !isNaN(+priceTo)) {
        odlvalue.set('PriceTo', priceTo)
      } else {
        odlvalue.delete('PriceTo')
      }

      if (negotiationTypes === '-1') {
        odlvalue.delete('ForRent')
      } else {
        odlvalue.set('ForRent', negotiationTypes)
      }

      return odlvalue
    })
  }, [chosenCategories, chosenManData, models, negotiationTypes, priceFrom, priceTo, setSearchParams])

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries())  as unknown as SearchParams
    if (params[SearchParamKeys.ForRent]) {
      setNegotiationDefaultValue(params[SearchParamKeys.ForRent])
    }
    if (params[SearchParamKeys.PriceFrom]) {
      setPriceFrom(params[SearchParamKeys.PriceFrom])
    }
    if (params[SearchParamKeys.PriceTo]) {
      setPriceTo(params[SearchParamKeys.PriceTo])
    }
  }, [searchParams, dispatch])
  
  
  return (
    <div className="w-[250px] flex flex-col flex-wrap bg-white rounded-t-12 shrink-0 sticky top-4 sm:h-full sm:rounded">
      <div className="w-full flex justify-start items-center">
        <div
          onClick={() => setActiveTab('car')}
          className={`w-1/3 h-12 flex justify-center items-center border-b cursor-pointer ${activeTab === 'car' ? "border-primary-orange-800" : "border-transparent"}`}>
          <CarSVG color={activeTab === 'car' ? 'var(--primary-orange-800)' : 'var(--text-black-500)'} 
          />
        </div>
        <div
          onClick={() => setActiveTab('spec')}
          className={`w-1/3 h-12 flex justify-center items-center border-b cursor-pointer ${activeTab === 'spec' ? "border-primary-orange-800" : "border-transparent"}`}>
          <SpecSVG color={activeTab === 'spec' ? 'var(--primary-orange-800)' : 'var(--text-black-500)'} 
          />
        </div>
        <div
          onClick={() => setActiveTab('moto')}
          className={`w-1/3 h-12 flex justify-center items-center border-b cursor-pointer ${activeTab === 'moto' ? "border-primary-orange-800" : "border-transparent"}`}>
          <MotoSVG color={activeTab === 'moto' ? 'var(--primary-orange-800)' : 'var(--text-black-500)'} 
          />
        </div>
      </div>
      <div className='w-full sm:h-[calc(100%-48px)] sm:overflow-y-auto'>
        <div className="w-4/5 m-auto pt-5 relative z-[5]">
          <Dropdown 
            defaultSelected={negotiationDefaultValue}
            title='გარიგების ტიპი' 
            data={negotiations} 
            onItemClick={(id: any) => {setNegotiationType(id as ForRentValues)}}
          />
        </div>
        <div className="w-4/5 m-auto pt-5 relative z-[4]">
          <MultipleChoise
            onClear={() => dispatch(clearchosenManufacturers())}
            onItemClick={(item) => handleManufacturerToggle(item.id.toString())}
            title='მწარმოებელი' 
            data={manData.map((item) => ({id: item.man_id, value: item.man_name, selected: item.chosen}))}
            />
        </div>
        <div className="w-4/5 m-auto pt-5 relative z-[3]">
          <MultipleChoise 
            title='მოდელი'
            onItemClick={(item) => dispatch(toggleModel({man_id: item.man_id, model_id: item.model_id}))}
            disabled={chosenModels.length === 0} 
            data={chosenModels.map((item) => ({id: item.model_id, value: item.model_name, selected: item.chosen, ...item}))}
          />
        </div>
        <div className="w-4/5 m-auto pt-5 relative z-[2]">
          <MultipleChoise 
            onClear={() => dispatch(clearCategotires())}
            title='კატეგორიები'
            onItemClick={(item) => dispatch(toggleCategories(+item.id))}
            data={categories.map((item) => ({id: item.category_id, value: item.title, selected: item.chosen, ...item}))}
          />
        </div>
        <div className="w-4/5 m-auto pt-5 relative z-[1]">
          <h3 className="w-full text-left text-12 text-black-800 font-sailec pb-2">ფასი</h3>
          <div className='w-full flex justify-between items-center'>
            <input 
              className="w-[94px] h-10 rounded-lg border border-color-2 pl-2.5 pt-2 pr-2 pb-1.5 placeholder:text-13 placeholder:text-primary-black-500 text-13 text-primary-black-900 font-helvetica"
              placeholder='დან'
              value={priceFrom}
              type='text' 
              onChange={(e) => setPriceFrom(e.target.value)} 
            />
            <div className='w-[6px] h-[2px] bg-secondary-black-500'></div>
            <input
              className="w-[94px] h-10 rounded-lg border border-color-2 pl-2.5 pt-2 pr-2 pb-1.5 placeholder:text-13 placeholder:text-primary-black-500 text-13 text-primary-black-900 font-helvetica"
              placeholder='მდე'
              value={priceTo}
              type='text' 
              onChange={(e) => setPriceTo(e.target.value)} 
            />
          </div>
        </div>
        <div className="w-full pt-4 pb-5 bg-white shadow-main mt-11 sm:sticky sm:bottom-0 sm:z-10">
          <div className="w-4/5 m-auto">
            <button onClick={handleSearch} className="w-full text-center py-2 bg-primary-orange-800 rounded-[6px] text-white text-14 font-sailec">ძებნა</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filters;