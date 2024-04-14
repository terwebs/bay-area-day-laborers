import "animate.css";

const ServiceCard = ({ img, text }) => {
  return (
    <article className="animate__animated animate__backInUp">
      <img
        src={img}
        alt={text}
        className="w-64 object-cover rounded-full h-64"
      />
      <div className="capitalize p-8 flex justify-center">
        <h2 className="mt-2 text-2xl text-slate-700 leading-loose">{text}</h2>
      </div>
    </article>
  );
};
export default ServiceCard;
