import {useState} from "react";
import BookingResults from './BookingResults'

import { getBookings } from '../../lib/booking/getBookings';

const BookingSearch = () => {

  const [email, setEmail] = useState('');
  const [list, setList] = useState([]);
  const [message, setMessage] = useState('');

  const onSearch = async (email) => {

    setMessage('')

    const bookings = await getBookings({
      search: email
    });

    if (bookings.length == 0) {
      setMessage('No hay resultados')
    }

    setList(bookings)

    return true

  }
  
  return <>
      <h1 className="text-4xl font-bold text-center">
        Mis reservas
      </h1>
      <div className="flex items-center justify-center max-w-4xl mt-6 sm:w-full">
          <div className="flex border-2 border-gray-200 rounded">
              <input 
                 type="email"
                 placeholder='Tu email'
                 value={email}
                 onChange={(event) => setEmail(event.target.value)}
                  className="px-4 py-2 w-80"
                 />
              <button 
                className="px-4 text-white bg-pink border-l"
                onClick={() => onSearch(email)}
                >
                Buscar
              </button>
          </div>
      </div>

      {message &&
        <smal>{message}</smal>
      }
      
      {list && list.length > 0 &&
        <BookingResults data={list} />
    }

  </>;

  
}

export default BookingSearch;
