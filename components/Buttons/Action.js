const Action = ({ Icon, title, action }) => {
  return (
    <button
      onClick={action}
      className="p-2 px-6 mb-2 rounded-md flex justify-center items-center gap-2 hover:bg-neutral-800/25"
    >
      {Icon && <Icon size={20} />}
      {title}
    </button>
  );
};

export default Action;
