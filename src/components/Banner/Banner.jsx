import bannerImg from "../../assets/books.jpg"
const Banner = () => {
    
  return (
    <div className="hero bg-base-200 rounded-3xl mb-6 py-[28px]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
        />
        <div className="text-center md:text-start">
          <h1 className="text-[56px] font-bold">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn text-white bg-[rgba(35,190,10,1)] p-7 text-xl font-bold mt-5">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
