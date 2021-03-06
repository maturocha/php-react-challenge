import {useState} from "react";
import Results from './Results'

import { getActivities } from '../../lib/activities/getActivities';
import { isDateBeforeToday } from '../../helpers/dates';

const Search = () => {

  const [date, setdate] = useState(0);
  const [list, setList] = useState([]);
  const [message, setMessage] = useState('');

  const onSearch = async (date) => {

    setMessage('')

    if (isDateBeforeToday(new Date(date))) {
      setMessage('Fecha anterior a hoy')
      return null
    }

    const activities = await getActivities({
      search: date
    });

    if (activities.length == 0) {
      setMessage('No hay resultados')
    }

    setList(activities)

    return true

  }
  
  return <>
      <h1 className="text-4xl font-bold text-center">
        Buscador de actividades
      </h1>
      <div className="flex items-center justify-center max-w-4xl mt-6 sm:w-full">
          <div className="flex border-2 border-gray-200 rounded">
              <input 
                 type="date"
                 value={date}
                 onChange={(event) => setdate(event.target.value)}
                  className="px-4 py-2 w-80"
                 />
              <button 
                className="px-4 text-white bg-pink border-l"
                onClick={() => onSearch(date)}
                >
                Buscar Actividades
              </button>
          </div>
      </div>

      {message &&
        <smal>{message}</smal>
      }
      
      {list && list.length > 0 &&
        <Results data={list} />
    }

  </>;

  
}

export default Search;
