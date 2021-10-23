import BookingSearch from '../components/sections/BookingSearch'


export default function Home() {

  return (
    <section className="md:pt-2 pb-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-4 xl:px-0 max-w-screen-lg relative">
        <BookingSearch /> 
      </div>
    </section>
  )
}
