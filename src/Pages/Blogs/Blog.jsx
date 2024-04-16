
const Blog = ({blog}) => {
    const {image, writer, date, title, description} = blog;
    return (
        <div className="space-y-3 ">
            <div className=" ">
            <img className="md:h-[500px] w-full rounded-2xl" src={image} alt="" />
            </div>
            <div className=" flex gap-10">
                <p className=" text-lg"><span className=" font-semibold">Date:</span> {date}</p>
                <p className=" text-lg"><span className=" font-semibold">Writer:</span> {writer}</p>
            </div>
            <h1 className="text-3xl font-semibold">{title}</h1>
            <p>{description}</p>
            <h3 className=" text-xl font-semibold text-rose-400 underline cursor-pointer">Read More</h3>
        </div>
    );
};

export default Blog;