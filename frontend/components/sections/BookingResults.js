import Link from 'next/link'

const Results = ({data}) => {

  return <>
      {data && data.length > 0 &&
      <>
        <div className="flex flex-wrap items-center mt-6 sm:w-full">
        {data.map(({date_booking, price_booking, quantity}, key) => (

            <div className="p-6 mt-2 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600 w-full" key={key}>
            <h3 className="text-2xl font-bold">Reserva #{key} &rarr;</h3>
            <p className="my-4">
              Fecha de la reserva: {date_booking}
            </p>
            <p className="my-4">
              Cantidad: {quantity}
            </p>
            <p className="text-xl font-bold">EUR {price_booking}</p>
            </div>
         
        ))}

        </div>
      </>
    }

  </>;

  
}

export default Results;
