const Hamburger = ({ size = 30, color = "#21243D" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 1H30" stroke={color} stroke-width="1.6" />
      <path d="M0 10H30" stroke={color} stroke-width="1.6" />
      <path d="M0 19H30" stroke={color} stroke-width="1.6" />
    </svg>
  );
};

export default Hamburger;
