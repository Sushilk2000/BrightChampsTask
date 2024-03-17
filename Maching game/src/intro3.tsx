import { useNavigate } from "react-router-dom";

function Intro3() {
  const nav = useNavigate();
  return (
    <>
      <button
        className="w-28 absolute top-4 left-4 hover:w-32 hover:left-2 hover:top-2 ease-in-out duration-300"
        onClick={() => {
          nav("/nextpage");
        }}
      >
        <img src="/prevButton.png" alt="" />
      </button>
      <svg
        width="576"
        height="279"
        viewBox="0 0 576 279"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[15%] right-[9%]"
      >
        <g filter="url(#filter0_d_0_80)">
          <path
            d="M38.2784 45.4375L39.2715 44.0146C39.8182 43.2313 40.4312 42.4914 41.0986 41.808C44.1388 38.6955 47.691 36.0995 51.5825 34.1537L52.1772 33.9204C56.2868 32.3089 60.662 31.4816 65.0762 31.4816H85.7844H107.294H135.484L224.729 28.2752L254.255 26.1376L277.368 24H302.618H327.869H346.44H357.128H369.152H382.913H412.438H430.341H447.442H468.818C477.844 24 486.81 25.4551 495.373 28.3093L496.874 28.8096L512.105 34.2873L523.06 39.0969L523.429 39.2626C530.663 42.5051 536.401 48.3643 539.493 55.6634C541.785 61.041 542.966 66.8264 542.966 72.6721V76.9059V88.6628V107.1V108.351C542.966 115.784 542.279 123.201 540.912 130.508L539.493 138.095L539.019 139.648C536.143 149.074 531.939 158.044 526.533 166.285L522.726 172.43L519.051 178.362C518.963 178.504 518.859 178.637 518.741 178.756C514.496 183.085 508.689 185.523 502.626 185.523H496.874H476.299H456.393H448.873C443.863 185.523 438.895 186.431 434.209 188.203C431.638 189.175 429.184 190.43 426.892 191.946L422.88 194.599C422.333 194.961 421.816 195.367 421.336 195.815L412.438 204.094L402.819 211.576L394.536 219.859L388.724 224.668L382.913 229.478L373.758 238.008C372.034 239.615 370.067 240.939 367.93 241.931C365.211 243.194 362.095 243.294 359.3 242.21L358.367 241.847C356.518 241.13 355.84 238.864 356.99 237.25L359.029 234.387C360.779 231.931 362.139 229.219 363.061 226.347L364.568 221.652C364.949 220.464 365.144 219.223 365.144 217.976V211.576L363.859 201.414C363.736 200.442 363.516 199.485 363.203 198.556L362.221 195.649C360.931 191.829 358.128 188.706 354.468 187.013L354.185 186.882C352.251 185.987 350.145 185.523 348.014 185.523H343.229C338.525 185.523 333.833 186.023 329.234 187.013C321.043 188.776 312.689 189.665 304.312 189.665H290.862H263.34H241.964H215.912H189.859L159.131 188.997L139.091 188.195L106.492 186.726L84.3254 185.858C78.6904 185.638 73.1775 184.151 68.1961 181.508C64.5334 179.564 61.1809 177.086 58.249 174.154L55.438 171.343C52.0778 167.983 49.1255 164.238 46.6423 160.186L42.7649 153.86L35.5505 138.897L31.1416 125.67L31.0132 125.095C28.3458 113.134 27 100.917 27 88.6628V77.8895C27 74.4848 27.405 71.0922 28.2064 67.7831C30.1462 59.7735 33.5619 52.1955 38.2784 45.4375Z"
            fill="white"
          />
          <path
            d="M48.3015 144.242L31.6758 120.059C31.6758 126.408 32.9449 132.692 35.4086 138.544L35.951 139.832L40.2262 147.848L45.3031 158.269L46.2037 159.689C50.2035 165.996 55.2831 171.55 61.2095 176.095C66.9969 180.533 73.771 183.508 80.9552 184.765L86.0513 185.657L101.683 187.127H118.383H136.419L155.657 188.73H179.705L204.154 190.333H229.539H251.984H282.044H307.974C308.233 190.333 308.491 190.312 308.747 190.27L331.342 186.592L354.322 182.851H329.873H300.881H265.21H237.02L210.701 180.046L186.386 178.175H148.844H138.949C129.984 178.175 121.045 177.224 112.281 175.336L97.7864 172.214C93.0893 171.202 88.489 169.784 84.0378 167.975L76.6352 164.966C72.2378 163.179 68.0497 160.914 64.1459 158.214L57.9827 153.951C54.1928 151.329 50.9122 148.039 48.3015 144.242Z"
            fill="#E2F2F5"
            stroke="#EFF8FA"
            stroke-width="0.267202"
          />
          <path
            d="M449.875 181.199L440.762 186.592H450.114H455.458H462.405H470.02H478.704H486.186H494.068H501.044C501.38 186.592 501.716 186.557 502.045 186.487L507.829 185.256L512.626 183.817C512.99 183.708 513.339 183.556 513.667 183.365L516.38 181.783L518.796 179.97C519.318 179.579 519.754 179.087 520.079 178.522L522.125 174.969L522.272 174.681C524.302 170.704 526.846 167.011 529.838 163.696C530.127 163.375 530.364 163.012 530.541 162.618L533.213 156.666L536.821 146.111L539.359 138.362L542.622 127.694C542.762 127.238 542.833 126.764 542.833 126.287V115.784V91.6021L535.752 115.784L530.381 136.09C530.31 136.358 530.216 136.618 530.101 136.869L527.003 143.606C522.249 153.948 513.634 162.017 503.004 166.087L496.639 168.524C496.351 168.634 496.053 168.717 495.75 168.77L472.449 172.856C464.483 174.253 456.835 177.08 449.875 181.199Z"
            fill="#E2F2F5"
            stroke="#EFF8FA"
            stroke-width="0.267202"
          />
          <foreignObject x="10%" y="10%" width="80%" height="80%">
            <div className="w-[full] font-semibold text-[44px] text-[#11AEC6] mt-2 ml-2 flex">
              <p className="flex">Can you help me get some? &#129300; </p>
            </div>
          </foreignObject>
        </g>
        <defs>
          <filter
            id="filter0_d_0_80"
            x="0.299999"
            y="0.299999"
            width="575.367"
            height="278.356"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="3" dy="6" />
            <feGaussianBlur stdDeviation="14.85" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.40901 0 0 0 0 0.878348 0 0 0 0 0.950984 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_80"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_80"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <div className="h-[70%] absolute bottom-0 w-full flex justify-center">
        <img src="Monkey.png" alt="" className="h-full" />
        <button
          className="absolute bottom-[5%] right-[5%] w-[18%] hover:w-[20%] ease-in-out duration-500"
          onClick={() => {
            nav("/instructions");
          }}
        >
          <img src="/confirmation.png" alt="" />
        </button>
      </div>
    </>
  );
}

export default Intro3;
