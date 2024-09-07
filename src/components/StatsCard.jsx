const StatsCard = ({ title, value }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg w-full">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="mt-2 text-2xl font-bold">{value}</p>
    </div>
  );
};

export default StatsCard;
