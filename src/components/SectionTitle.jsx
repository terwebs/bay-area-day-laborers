const SectionTitle = ({ text, textColor }) => {
  return (
    <div className="border-b border-gray-200 pb-5 w-24 flex justify-center">
      <h2
        className={`text-3xl font-medium tracking-wider capitalize  text-${textColor}`}
      >
        {text}
      </h2>
    </div>
  );
};
export default SectionTitle;
