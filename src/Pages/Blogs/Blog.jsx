const Blog = ({blog}) => {
    const {image, writer, date, title, description} = blog;
    return (
        <div>
            <img src={image} alt="" />
        </div>
    );
};

export default Blog;