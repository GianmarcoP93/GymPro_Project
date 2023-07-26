import React from "react";
import Button from "../Component/Button";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center pt-48">
      <div className="flex flex-row gap-40">
        <div className="flex flex-col gap-8">
          <div className="border border-solid border-white-100 rounded-xl w-96">
            <div className="pt-8 pb-6">
              <p className="flex justify-center text-yellow-100 font-bold font-roboto">
                Sign-In
              </p>
            </div>
            <div className="flex flex-col px-10 pb-5">
              <p className="flex justify-items-start text-yellow-100 pb-3 font-montserrat font-extralight">
                Email*
              </p>
              <input type="text" className="rounded-lg w h-8 pl-2" required/>
            </div>
            <div className="flex flex-col px-10 pb-2">
              <p className="flex justify-items-start text-yellow-100 pb-3 font-montserrat font-extralight">
                Password*
              </p>
              <input type="password" className="rounded-lg w h-8 pl-2" required/>
            </div>
            <a
              href="#"
              className="flex text-white-100 pl-10 underline font-montserrat font-extralight">
              Password dimenticata?
            </a>
            <div className="flex justify-center pt-8 pb-14">
              <Button />
            </div>
          </div>
          <div className="flex flex-row justify-center py-6 border border-solid border-white-100 rounded-xl w-96 gap-2">
            <p className="flex justify-center text-white-100 font-montserrat font-extralight">
              Non hai un account?
            </p>
            <a href="#" className="underline font-bold font-montserrat text-white-100">
              Registrati
            </a>
          </div>
        </div>
        <div className="pt-10 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="435"
            height="418"
            viewBox="0 0 435 418"
            fill="none">
            <mask
              id="mask0_194_52"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="435"
              height="418">
              <path d="M0 0H435V417.843H0V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_194_52)">
              <mask
                id="mask1_194_52"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="435"
                height="418">
                <path
                  d="M217.5 0C97.3687 0 0 93.5284 0 208.921C0 324.297 97.3687 417.843 217.5 417.843C337.613 417.843 435 324.297 435 208.921C435 93.5284 337.613 0 217.5 0Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask1_194_52)">
                <path
                  d="M217.5 0C97.3687 0 0 93.5283 0 208.921C0 324.297 97.3687 417.843 217.5 417.843C337.613 417.843 435 324.297 435 208.921C435 93.5283 337.613 0 217.5 0Z"
                  stroke="#FF914D"
                  strokeWidth="3.99413"
                />
              </g>
            </g>
            <mask
              id="mask2_194_52"
              maskUnits="userSpaceOnUse"
              x="15"
              y="14"
              width="405"
              height="390">
              <path
                d="M15.2378 14.6387H419.652V403.102H15.2378V14.6387Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask2_194_52)">
              <mask
                id="mask3_194_52"
                maskUnits="userSpaceOnUse"
                x="15"
                y="14"
                width="405"
                height="390">
                <path
                  d="M217.445 14.6387C105.757 14.6387 15.2378 101.587 15.2378 208.87C15.2378 316.136 105.757 403.102 217.445 403.102C329.115 403.102 419.652 316.136 419.652 208.87C419.652 101.587 329.115 14.6387 217.445 14.6387Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask3_194_52)">
                <path
                  d="M217.445 14.6387C105.757 14.6387 15.2378 101.587 15.2378 208.87C15.2378 316.136 105.757 403.102 217.445 403.102C329.115 403.102 419.652 316.136 419.652 208.87C419.652 101.587 329.115 14.6387 217.445 14.6387Z"
                  stroke="#FF914D"
                  strokeWidth="7.98528"
                />
              </g>
            </g>
            <mask
              id="mask4_194_52"
              maskUnits="userSpaceOnUse"
              x="38"
              y="193"
              width="19"
              height="33">
              <path
                d="M38.5669 193.042H56.8689V225.413H38.5669V193.042Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask4_194_52)">
              <path
                d="M38.5669 193.042H57.1521V226.196H38.5669V193.042Z"
                fill="white"
              />
            </g>
            <mask
              id="mask5_194_52"
              maskUnits="userSpaceOnUse"
              x="63"
              y="149"
              width="30"
              height="121">
              <path
                d="M63.1006 149.533H92.1112V269.364H63.1006V149.533Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask5_194_52)">
              <mask
                id="mask6_194_52"
                maskUnits="userSpaceOnUse"
                x="63"
                y="149"
                width="27"
                height="120">
                <path
                  d="M76.4288 149.533C83.7921 149.533 89.7571 155.263 89.7571 162.336V256.119C89.7571 263.192 83.7921 268.922 76.4288 268.922C69.0655 268.922 63.1006 263.192 63.1006 256.119V162.336C63.1006 155.263 69.0655 149.533 76.4288 149.533Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask6_194_52)">
                <path
                  d="M63.1006 149.533H89.2084V269.364H63.1006V149.533Z"
                  fill="white"
                />
              </g>
            </g>
            <mask
              id="mask7_194_52"
              maskUnits="userSpaceOnUse"
              x="342"
              y="149"
              width="28"
              height="121">
              <path
                d="M342.712 149.533H369.616V269.364H342.712V149.533Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask7_194_52)">
              <mask
                id="mask8_194_52"
                maskUnits="userSpaceOnUse"
                x="342"
                y="149"
                width="28"
                height="120">
                <path
                  d="M356.04 149.533C363.386 149.533 369.351 155.263 369.351 162.336V256.119C369.351 263.192 363.386 268.922 356.04 268.922C348.677 268.922 342.712 263.192 342.712 256.119V162.336C342.712 155.263 348.677 149.533 356.04 149.533Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask8_194_52)">
                <path
                  d="M342.712 149.533H368.82V269.364H342.712V149.533Z"
                  fill="white"
                />
              </g>
            </g>
            <mask
              id="mask9_194_52"
              maskUnits="userSpaceOnUse"
              x="95"
              y="133"
              width="44"
              height="153">
              <path
                d="M95.9875 133.007H138.521V285.396H95.9875V133.007Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask9_194_52)">
              <mask
                id="mask10_194_52"
                maskUnits="userSpaceOnUse"
                x="95"
                y="133"
                width="44"
                height="153">
                <path
                  d="M117.228 133.007C128.945 133.007 138.45 142.137 138.45 153.409V265.045C138.45 276.317 128.945 285.447 117.228 285.447C105.493 285.447 95.9875 276.317 95.9875 265.045V153.409C95.9875 142.137 105.493 133.007 117.228 133.007Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask10_194_52)">
                <path
                  d="M95.9875 133.007H137.972V284.818H95.9875V133.007Z"
                  fill="white"
                />
              </g>
            </g>
            <mask
              id="mask11_194_52"
              maskUnits="userSpaceOnUse"
              x="296"
              y="133"
              width="46"
              height="153">
              <path
                d="M296.992 133.007H341.437V285.396H296.992V133.007Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask11_194_52)">
              <mask
                id="mask12_194_52"
                maskUnits="userSpaceOnUse"
                x="296"
                y="133"
                width="44"
                height="153">
                <path
                  d="M318.215 133.007C329.932 133.007 339.437 142.137 339.437 153.409V265.045C339.437 276.317 329.932 285.447 318.215 285.447C306.497 285.447 296.992 276.317 296.992 265.045V153.409C296.992 142.137 306.497 133.007 318.215 133.007Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask12_194_52)">
                <path
                  d="M296.992 133.007H338.959V284.818H296.992V133.007Z"
                  fill="white"
                />
              </g>
            </g>
            <mask
              id="mask13_194_52"
              maskUnits="userSpaceOnUse"
              x="373"
              y="209"
              width="20"
              height="33">
              <path
                d="M373.767 209.042H392.069V241.413H373.767V209.042Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask13_194_52)">
              <path
                d="M373.767 209.042H392.352V242.196H373.767V209.042Z"
                fill="white"
              />
            </g>
            <mask
              id="mask14_194_52"
              maskUnits="userSpaceOnUse"
              x="145"
              y="193"
              width="145"
              height="33">
              <path
                d="M145.902 193.042H289.734V225.413H145.902V193.042Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask14_194_52)">
              <path
                d="M145.902 193.042H289.274V226.196H145.902V193.042Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
