const CartIcon = ({ numberOfItems }: { numberOfItems: number }) => {
  return (
    <div>
      <svg
        width="26"
        height="31"
        viewBox="0 0 26 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_4_2207)">
          <circle cx="20.2896" cy="5.28955" r="5.28955" fill="#141718" />
          <text
            x="20.2896" // Adjust x position as needed
            y="6.58955" // Adjust y position as needed
            fontSize="6" // Adjust font size as needed
            fontWeight="bold"
            textAnchor="middle"
            fill="white"
          >
            {numberOfItems}
          </text>
        </g>
        <path
          d="M10 11L10 12C10 13.6569 11.3431 15 13 15C14.6569 15 16 13.6569 16 12V11"
          stroke="#141718"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.6113 8H9.38836C7.433 8 5.76424 9.41365 5.44278 11.3424L3.77612 21.3424C3.36976 23.7805 5.24994 26 7.72169 26H18.278C20.7498 26 22.6299 23.7805 22.2236 21.3424L20.5569 11.3424C20.2355 9.41365 18.5667 8 16.6113 8Z"
          stroke="#141718"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <defs></defs>
      </svg>
    </div>
  );
};

export default CartIcon;
