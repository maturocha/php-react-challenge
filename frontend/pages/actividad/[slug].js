import { createRef, useState, useEffect } from 'react';
import { getBySlug } from '../../lib/activities/getBySlug';
import { getRelated } from '../../lib/activities/getRelated';
import { addBooking } from '../../lib/booking/add';

import Link from 'next/link'

export default function Actividad({id, title, description, date_start, date_end, price, popularity}) {

  const [message, setMessage] = useState(false)
  const inputName = createRef();
  const inputEmail = createRef();
  const inputQuantity = createRef();

  const [relatedList, setRelatedList] = useState([]);

  const fetchRelated = async () => {

      try {
          //GET customers
          const related = await getRelated(id)
          setRelatedList(related);
        
      } catch (error) {
          
      }
  };

  useEffect(() => {
      
      fetchRelated()

  }, []);

  const onSubmit = async (event) => {

    setMessage(false)

    event.preventDefault()

    const data = {
      fullname: inputName.current.value,
      email: inputEmail.current.value,
      quantity: inputQuantity.current.value,
      activity_id: id,
      price_booking: price,

    }

    const response = await addBooking(data)

    if (response.status == 'success') {
      inputName.current.value = ' '
      inputEmail.current.value = ' '
      inputQuantity.current.value = 0

    }

    setMessage({
      type: response.status,
      text: response.message
    })

  }


  return (
    <section className="md:pt-2 pb-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-4 xl:px-0 max-w-screen-lg relative">
        <div className="sm:grid sm:grid-cols-2 sm:gap-4">

        <div className="flex flex-col md:w-full">
          <h1 className="mb-4 font-bold md:text-3xl text-heading">
            {title}
          </h1>
          <p className="my-4">
                {description}
          </p>
          <p className="font-bold">Fecha de inicio: {date_start}</p>
          <p className="font-bold">Fecha de finalización: {date_end}</p>
          <p className="font-bold">Popularidad: {popularity}</p>
          <p className="font-bold">Precio: EUR {price}</p>
        </div>

        <div className="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
          <div className="pt-12 md:pt-0 2xl:ps-4">
              <h2 className="text-xl font-bold">Reservá tu actividad!
              </h2>
              <form onSubmit={(event) => onSubmit(event)}>
                <div className="">
                  <label className="block text-sm text-gray-00" htmlFor="cus_name">Name</label>
                  <input 
                    className="w-full px-4 py-1 rounded border" 
                    name="name" 
                    type="text"
                    required
                    placeholder="Tu nombre"
                    aria-label="Name"
                    ref={inputName} />
                </div>
                <div className="mt-2">
                  <label className="block text-sm text-gray-600" htmlFor="cus_email">Email</label>
                  <input 
                    className="w-full px-4 py-1 border rounded"
                    name="email"
                    type="email"
                    required
                    placeholder="Tu Email"
                    aria-label="Email"
                    ref={inputEmail} />
                </div>

                <div className="mt-2">
                  <label className="block text-sm text-gray-600" htmlFor="cus_email">Cantidad de personas</label>
                  <input 
                    className="w-full px-4 py-1 border rounded"
                    name="quantity"
                    type="number"
                    min={0}
                    step={1}
                    required
                    ref={inputQuantity} />
                </div>

                <button 
                className="px-4 py-1 mt-2 w-full text-white bg-pink rounded"
              
                >
                Reservar
              </button>
              </form>

              {message &&
                <div className={`flex items-center bg-green text-sm font-bold px-4 py-3 mt-2 ${(message.type === 'error') ? 'bg-red' : 'bg-green'}`} role="alert">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
                <p> {message.text} </p>
                </div>

              }
            
          </div>
        </div>



        </div>

        {relatedList.length > 0 &&
        <>
              <h2 className="text-xl font-bold">Actividades Relacionadas
               </h2>
               <div className="sm:grid sm:grid-cols-3 sm:gap-4 md:w-full">
               {relatedList.map(({title, description, price, slug}, key) => (

                <Link
                key={key}
                href={`/actividad/${slug}`}
                >
                  <div className="p-6 mt-2 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600 cursor-pointer">
                  <h3 className="text-2xl font-bold">{title} &rarr;</h3>
                  <p className="my-4 line-clamp-1">
                    {description}
                  </p>
                  <p className="text-xl font-bold">EUR {price}</p>
                  </div>
                </Link>
               
              ))}
              </div>

        </>

        }
      
      </div>
    </section>
  )
}

export async function getStaticPaths() {

  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
}
}

export async function getStaticProps({params}) {

  const { slug } = params
  const activity = await getBySlug(slug)

  return {
    props: activity, // will be passed to the page component as props
  }
}
