import React from 'react';

const Logo: React.FC<{ color: string }> = ({ color }) => (
  <svg width="88px" viewBox="0 0 142 32">
    <defs>
      <linearGradient x1="100%" y1="16.272%" x2="-3.583%" y2="74.067%" id="a">
        <stop stopColor="#FF006B" offset="0%"></stop>
        <stop stopColor="#FF0039" offset="100%"></stop>
      </linearGradient>
      <linearGradient x1="35.986%" y1="0%" x2="64.014%" y2="100%" id="b">
        <stop stopColor="#FF006B" offset="0%"></stop>
        <stop stopColor="#FF0039" offset="100%"></stop>
      </linearGradient>
    </defs>
    <g fillRule="nonzero" fill="none">
      <path
        d="M14.242 31.963H3.693a2.862 2.862 0 01-2.054-.844 2.846 2.846 0 01-.853-2.055c0-.613.17-1.183.531-1.655l8.26-11.706-7.147-5.537-.14-.209a2.835 2.835 0 01-.489-1.594c0-.786.296-1.5.854-2.055a2.862 2.862 0 012.054-.844h10.323c.808 0 1.516.194 2.084.638.407.318.754.705 1.02 1.13l1.973 3.008 1.957-2.984c.283-.45.629-.836 1.036-1.154.569-.444 1.276-.638 2.084-.638h9.872c.785 0 1.5.292 2.054.844.55.546.854 1.237.854 2 0 .598-.162 1.162-.49 1.65l-.146.218-7.29 5.482 8.406 11.746c.364.473.535 1.044.535 1.66 0 .787-.296 1.502-.853 2.055a2.862 2.862 0 01-2.054.844H25.243c-.757 0-1.41-.162-1.944-.56a4.897 4.897 0 01-.928-.93l-2.568-2.661-2.67 2.645c-.694.972-1.702 1.506-2.89 1.506zm0-3.106c.18 0 .259-.045.39-.248l.091-.139 5.129-5.08 4.881 5.056.057.075c.108.143.205.251.29.328.04.004.094.008.163.008h10.422l-9.917-13.858 8.547-6.428h-9.109c-.097 0-.17.007-.218.017-.1.087-.193.196-.288.347l-4.57 6.97-1.3-1.98-3.288-5.015a1.405 1.405 0 00-.272-.322 1.12 1.12 0 00-.218-.017H5.444l8.385 6.495-9.73 13.79h10.143z"
        fill="url(#a)"
      ></path>
      <path
        d="M30.41 19.254c0 6.161-5.428 11.156-12.125 11.156h-6.012a2.916 2.916 0 01-2.916-2.916V-6.44a2.916 2.916 0 012.916-2.917h6.012c6.697 0 12.125 4.995 12.125 11.156 0 3.534-1.786 6.684-4.572 8.728 2.786 2.044 4.572 5.194 4.572 8.727z"
        fill="url(#b)"
        transform="rotate(90 19.883 10.527)"
      ></path>
      <path
        d="M64.787 24c3.997 0 5.957-2.037 5.957-4.756 0-2.642-1.875-4.193-3.733-4.287v-.17c1.705-.4 3.051-1.594 3.051-3.716 0-2.6-1.875-4.526-5.659-4.526h-6.681V24h7.065zm-.776-10.031h-3.127V9.153h3.196c1.857 0 2.82.98 2.82 2.327 0 1.534-1.244 2.489-2.889 2.489zm.273 7.389h-3.4v-5.114h3.485c1.952 0 3.162 1.194 3.162 2.753 0 1.39-.954 2.361-3.247 2.361zM76.146 24V6.545h-3.085V24h3.085zm8.606.256c3.835 0 6.273-2.702 6.273-6.75 0-4.057-2.438-6.767-6.273-6.767-3.826 0-6.272 2.71-6.272 6.767 0 4.048 2.446 6.75 6.272 6.75zm.017-2.472c-2.122 0-3.162-1.892-3.162-4.287s1.04-4.312 3.162-4.312c2.088 0 3.128 1.917 3.128 4.312 0 2.395-1.04 4.287-3.128 4.287zm14.325 2.472c3.29 0 5.387-1.952 5.617-4.73h-2.958c-.264 1.406-1.278 2.215-2.633 2.215-1.926 0-3.17-1.61-3.17-4.286 0-2.642 1.27-4.228 3.17-4.228 1.483 0 2.403.955 2.633 2.216h2.958c-.222-2.838-2.438-4.704-5.634-4.704-3.835 0-6.255 2.77-6.255 6.767 0 3.963 2.36 6.75 6.272 6.75zM110.036 24v-4.398l1.125-1.201L115.166 24h3.69l-5.369-7.44 5.072-5.65h-3.606l-4.704 5.258h-.213V6.545h-3.085V24h3.085zm15.552.256c3.043 0 5.148-1.492 5.693-3.767l-2.889-.324c-.418 1.108-1.432 1.687-2.77 1.687-1.994 0-3.315-1.312-3.34-3.554h9.119v-.946c0-4.593-2.762-6.613-5.983-6.613-3.75 0-6.196 2.752-6.196 6.792 0 4.108 2.412 6.725 6.366 6.725zm2.855-8.037h-6.153c.102-1.67 1.33-3.077 3.17-3.077 1.781 0 2.975 1.296 2.983 3.077zM136.82 24v-7.696c0-1.653 1.245-2.821 2.855-2.821a2.8 2.8 0 011.22.273l.954-2.557c-.46-.29-1.049-.477-1.756-.477-1.508 0-2.753.852-3.23 2.369h-.136v-2.182h-2.992V24h3.085z"
        fill={color} style={{ transition: 'fill 0.3s ease' }}
      ></path>
    </g>
  </svg>
);

export default Logo;