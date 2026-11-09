
import { Guitar, Bass, Keyboard, Drums } from "../data/categoryItems";
import { Link } from "react-router";

function Explore() {

  const categories = [
    {
      name: "Guitars",
      path: "guitar",
      items: Guitar,
    },
    {
      name: "Basses",
      path: "bass",
      items: Bass,
    },
    {
      name: "Keyboards",
      path: "keyboard",
      items: Keyboard,
    },
    {
      name: "Drums",
      path: "drums",
      items: Drums,
    },
  ];

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
      {categories.map((category) => (
        <section key={category.path} className="px-8 py-16 md:px-16">

          <div className="mb-12 flex flex-col border-t border-gray-300 pt-10 items-center justify-between gap-4 md:flex-row">

            <div>
              <p className="mb-3 mx-0.5 font-semibold uppercase tracking-[0.3em] text-gray-500">
                Masterwork Music
              </p>
              <h2 className="mb-8 -mt-5 text-3xl font-bold text-gray-800 md:text-4xl">
                {category.name} Collection
              </h2>
            </div>

            <Link to={`/category/${category.path}`} className="mb-8 inline-block rounded border border-gray-400 p-2 text-gray-700 transition hover:translate-x-1 hover:shadow-md">
              View All {category.name} →
            </Link>

          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {category.items.slice(0, 3).map((item) => (

              <Link key={item.id}to={`/category/${category.path}/${item.id}`}className="group rounded-sm flex h-full flex-col overflow-hidden bg-white shadow-md border border-gray-300 transition duration-300 hover:shadow-2xl hover:scale-101">
                
                <div className="relative overflow-hidden">

                  <h1 className="absolute top-5 left-5 z-100 text-xs font-bold tracking-widest uppercase bg-gray-700 text-white px-4 py-2 rounded">
                    Get Now
                  </h1>
                  <img src={item.image}alt={item.name}className="w-full h-130 object-cover group-hover:scale-110 transition duration-500 group-hover:shadow-[inset_0_-20px_30px_rgba(0,0,0,0.4)]"/>
                </div>
                
                <div className="flex flex-1 flex-col p-6">

                  <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>

                  <div className="mt-auto flex justify-between items-center">
                    <h3 className="text-gray-900 py-2 font-semibold">{item.price}</h3>

                    <span className="inline-block border border-gray-900 text-gray-900 p-2 rounded hover:shadow-2xl group-hover:translate-x-2 transition">
                      View ⟶
                    </span>

                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Explore;
