export default function HeartBeatLoader(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) {
  return (
    <div className="heartbeat-container" {...props}>
      <svg
        className="heartbeat"
        xmlns="http://www.w3.org/2000/svg"
        width="400"
        height="400"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M200.493 66.2946C200.928 66.0491 200.928 66.048 200.928 66.048L200.921 66.035L200.898 65.9954C200.878 65.9607 200.849 65.9093 200.81 65.8418C200.731 65.7067 200.615 65.5072 200.46 65.2476C200.151 64.7285 199.689 63.9693 199.08 63.0057C197.86 61.0786 196.046 58.3335 193.666 55.0561C188.907 48.5024 181.881 39.8151 172.81 31.283C154.676 14.2258 128.316 -2.26252 95.5443 0.255911C62.8324 2.76971 34.7325 18.3509 17.7439 44.5101C0.75584 70.6684 -5.08248 107.342 6.59585 151.974C12.4446 174.326 27.4883 201.058 46.7212 228.555C65.9614 256.063 89.4238 284.378 112.151 309.901C134.879 335.426 156.878 358.165 173.195 374.524C181.353 382.703 188.092 389.287 192.791 393.827C195.14 396.097 196.98 397.856 198.232 399.047C198.858 399.643 199.338 400.097 199.661 400.402C199.822 400.555 199.945 400.67 200.027 400.747L200.143 400.856L200.149 400.862C200.149 400.862 200.151 400.864 200.493 400.499L200.151 400.864L200.993 401.654V66.1634L200.928 66.0491L200.493 66.2946ZM201.495 66.2946C201.06 66.0491 201.06 66.048 201.06 66.048L201.068 66.035L201.09 65.9954C201.11 65.9607 201.14 65.9093 201.179 65.8418C201.257 65.7067 201.374 65.5072 201.528 65.2476C201.838 64.7285 202.299 63.9693 202.909 63.0057C204.128 61.0786 205.942 58.3335 208.322 55.0561C213.081 48.5024 220.108 39.8151 229.178 31.283C247.312 14.2258 273.672 -2.26252 306.444 0.255911C339.156 2.76971 367.256 18.3509 384.244 44.5101C401.232 70.6684 407.071 107.342 395.392 151.974C389.544 174.326 374.5 201.058 355.267 228.555C336.027 256.063 312.564 284.378 289.837 309.901C267.109 335.426 245.11 358.165 228.793 374.524C220.635 382.703 213.897 389.287 209.198 393.827C206.848 396.097 205.009 397.856 203.756 399.047C203.13 399.643 202.65 400.097 202.327 400.402C202.166 400.555 202.044 400.67 201.961 400.747L201.845 400.856L201.839 400.862C201.839 400.862 201.837 400.864 201.495 400.499L201.837 400.864L200.995 401.654V66.1634L201.06 66.0491L201.495 66.2946Z"
          fill="#B43CF5"
        />
      </svg>
    </div>
  );
}
