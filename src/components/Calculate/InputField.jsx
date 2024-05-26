const InputField = ({ label }) => {
  return (
    <div className="w-24 h-8 pt-1.5 pb-1 bg-gray-100 rounded shadow justify-center items-center inline-flex">
      <div className="text-zinc-900 text-sm font-normal font-['Inter'] leading-snug">
        {label}
      </div>
    </div>
  );
};

export default InputField;
