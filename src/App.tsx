// import './App.css';
import { useAppDispatch } from './store/hooks';
import { getCategories, getManufacturers } from './store/Static/static.asyncActions';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchParamKeys, SearchParams } from './types';

import Layout from './layout';

function App() {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const mans: string[] = [];
    const cats: number[] = [];
    const params = Object.fromEntries(searchParams.entries())  as unknown as SearchParams
    if (params[SearchParamKeys.Mans]) {
      const res = params[SearchParamKeys.Mans].split('-');
      for (let i = 0; i < res.length; i++) {
        let details = res[i].split('.')
        mans.push(details[0])
      }
    }
    if (params[SearchParamKeys.Cats]) {
      const res = params[SearchParamKeys.Cats].split('.');
      for (let i = 0; i < res.length; i++) {
        cats.push(+res[i])
      }
    }
    dispatch(getManufacturers(mans))
    dispatch(getCategories(cats))
  }, [dispatch, searchParams])


  return (
    <Layout />
  );
}

export default App;
