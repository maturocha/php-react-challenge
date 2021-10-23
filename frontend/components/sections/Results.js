import Link from 'next/link'

const Results = ({data}) => {

  return <>
      {data && data.length > 0 &&
      <>
        <h3 className="text-xl font-bold mt-6">Resulado de su búsqueda</h3>
        <div className="flex flex-wrap items-center mt-6 sm:w-full">
        {data.map(({title, description, price, slug}, key) => (

          <Link
          key={key}
          href={`/actividad/${slug}`}
          >
            <div className="p-6 mt-2 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600 cursor-pointer w-full">
            <h3 className="text-2xl font-bold">{title} &rarr;</h3>
            <p className="my-4 line-clamp-3">
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
