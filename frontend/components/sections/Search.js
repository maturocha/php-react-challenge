import {useState} from "react";
import Results from './Results'

import { getActivities } from '../../lib/activities/getActivities';

const Search = () => {

  const [date, setdate] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [list, setList] = useState([]);

  const onSearch = async (date) => {

    const activities = await getActivities({
      search: date
    });
    setList(activities)

  }
  
  return <>
      <h1 className="text-6xl font-bold text-center">
        Buscador de actividades
      </h1>
      <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <div class="text-gray-700">
            <label class="block mb-1" for="forms-labelOverInputCode">Fecha</label>
            <input 
              class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
              type="date"
              value={date}
              onChange={(event) => setdate(event.target.value)}
            />
          </div>

          <div class="text-gray-700">
            <label class="block mb-1" for="forms-labelOverInputCode">Cantidad</label>
            <input 
              class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" 
              type="number"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
            />
          </div>

          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => onSearch(date)}>
              Buscar actividades
            </button>

      </div>


      {list && list.length > 0 &&
        <Results data={list} />
    }

  </>;

  
}

export default Search;
