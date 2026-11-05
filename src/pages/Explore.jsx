import { Guitar, Bass, Keyboard, Drums } from "../data/categoryItems";
import { Link } from "react-router";

function Explore() {

  const buttonStyle = "mt-auto inline-block w-fit bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 hover:shadow-lg transition";
  const imageStyle = "w-full h-130 object-cover hover:scale-110 transition duration-500";
  const cardStyle = "flex h-full flex-col overflow-hidden bg-white shadow-md border border-gray-300 transition duration-300 hover:shadow-lg hover:scale-101 transition duration-300";

  return (
    <div>

      <div className="w-full h-90 object-cover flex-col p-10 items-center bg-[url('https://images.unsplash.com/photo-1681855018254-a54babc49ea3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')] bg-cover bg-center">
          <h1 className="mb-5 text-4xl font-extrabold text-white md:text-6xl">
            Explore Our Products
            <br />
            and Start you Music Now
          </h1>

          <p className="mb-8 max-w-xl text-base text-gray-200 md:text-lg">
            From beginners to professional musicians, explore our 
            extensive collection of quality instruments designed to 
            match your passion and elevate your musical journey.
          </p>
      </div>
      
      {/* Guitar Section */}
      <section className="px-8 py-16 md:px-16">

        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <h2 className="mb-8 text-3xl font-bold text-gray-800 md:text-4xl">
            Explore Our Guitars
          </h2>
          <Link to="/category/guitar" className="mb-8 inline-block border border-gray-400 p-2 rounded-md text-gray-700 hover:shadow-md transition">
            View All Guitars →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Guitar.slice(0, 3).map((guitar) => (
            <div key={guitar.id} className={cardStyle}>
              <img src={guitar.image} alt={guitar.name} className={imageStyle} />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-gray-800">{guitar.name}</h3>

                <Link to={`/category/guitar/${guitar.id}`} className={buttonStyle}>
                  {guitar.price}
                </Link>
                
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bass Section */}
      <section className="px-8 py-16 md:px-16">
        
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <h2 className="mb-8 text-3xl font-bold text-gray-800 md:text-4xl">
            Explore Our Bases
          </h2>
          <Link to="/category/bass" className="mb-8 inline-block border border-gray-400 p-2 rounded-md text-gray-700 hover:shadow-md transition">
            View All Bases →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Bass.slice(0, 3).map((bass) => (
            <div key={bass.id} className={cardStyle}>
              <img src={bass.image} alt={bass.name} className={imageStyle} />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-gray-800">{bass.name}</h3>

                <Link to={`/category/bass/${bass.id}`} className={buttonStyle}>
                  {bass.price}
                </Link>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Keyboard Section */}
      <section className="px-8 py-16 md:px-16">
        
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <h2 className="mb-8 text-3xl font-bold text-gray-800 md:text-4xl">
            Explore Our Keyboards
          </h2>
          <Link to="/category/keyboard" className="mb-8 inline-block border border-gray-400 p-2 rounded-md text-gray-700 hover:shadow-md transition">
            View All Keyboards →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Keyboard.slice(0, 3).map((keyboard) => (
            <div key={keyboard.id} className={cardStyle}>
              <img src={keyboard.image} alt={keyboard.name} className={imageStyle} />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-gray-800">{keyboard.name}</h3>

                <Link to={`/category/keyboard/${keyboard.id}`} className={buttonStyle}>
                  {keyboard.price}
                </Link>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Drums Section */}
      <section className="px-8 py-16 md:px-16">
        
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <h2 className="mb-8 text-3xl font-bold text-gray-800 md:text-4xl">
            Explore Our Drums
          </h2>
          <Link to="/category/drums" className="mb-8 inline-block border border-gray-400 p-2 rounded-md text-gray-700 hover:shadow-md transition">
            View All Drums →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Drums.slice(0, 3).map((drum) => (
            <div key={drum.id} className={cardStyle}>
              <img src={drum.image} alt={drum.name} className={imageStyle} />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-gray-800">{drum.name}</h3>

                <Link to={`/category/drums/${drum.id}`} className={buttonStyle}>
                  {drum.price}
                </Link>

              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Explore