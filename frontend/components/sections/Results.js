import Link from 'next/link'

const Results = ({data}) => {

  return <>
      {data && data.length > 0 &&
      <>
        <h3 className="text-2xl font-bold mt-6">Resulado de su búsqueda</h3>
        <div className="flex flex-wrap items-center justify-around  mt-6 sm:w-full">
        {data.map(({title, description, price}, key) => (

          <Link
          key={key}
          href={`/actividad/${key}`}
          >
            <div className="p-6 mt-6 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">{title} &rarr;</h3>
            <p className="my-4">
              {description}
            </p>
            <p className="text-xl font-bold">EUR {price}</p>
            </div>
          </Link>
         
        ))}

        </div>
      </>
    }

  </>;

  
}

export default Results;
