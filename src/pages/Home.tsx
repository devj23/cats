const Home = () => {
  return (
    <>
      <section>
        <div className="container gap-4 flex flex-col items-center py-20">
          <h1 className="text-5xl font-bold leading-snug">Nothing But Cats</h1>
          <p>All the kitties you could ever want to see, and more!</p>
          <button className="duration-200 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
            Show Me A Kitty
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
