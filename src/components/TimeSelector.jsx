const TimeSelector = ({ selectedTime, setSelectedTime }) => {
  const times = ["1Day", "1Week", "1Month"];

  return (
    <div className="flex space-x-4 p-4">
      {times.map((time) => (
        <button
          key={time}
          className={`px-4 py-2 rounded ${
            selectedTime === time ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSelectedTime(time)} // This will trigger handleTimeChange in the parent component
        >
          {time}
        </button>
      ))}
    </div>
  );
};

export default TimeSelector;
