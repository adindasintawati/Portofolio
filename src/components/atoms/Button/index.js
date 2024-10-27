const Button = ({ children, className, onClick = () => {} }) => {
  return (
    <div
      className={`h-[47px] px-5 py-[10px] bg-blue-500 rounded-[2px] cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
