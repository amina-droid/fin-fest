import React from "react";

export const Badge: React.FC = () => (
  <svg x="637" y="377">
    <g className="badge">
      <path
        d="M31 10C31 4.47715 35.4772 0 41 0H99C104.523 0 109 4.47715 109 10V13C109 18.5228 104.523 23 99 23H41C35.4772 23 31 18.5228 31 13V10Z"
        fill="#31BCC5"
      />
      <path d="M69.5 32L63.8708 22.25L75.1292 22.25L69.5 32Z" fill="#31BCC5" />
      <path
        d="M50.2549 14H49.3125V7.66211H45.8066V14H44.8691V6.89062H50.2549V14ZM54.0146 14.0977C53.2985 14.0977 52.7158 13.8633 52.2666 13.3945C51.8174 12.9225 51.5928 12.2926 51.5928 11.5049V11.3389C51.5928 10.8148 51.6921 10.3477 51.8906 9.9375C52.0924 9.52409 52.3724 9.20182 52.7305 8.9707C53.0918 8.73633 53.4824 8.61914 53.9023 8.61914C54.5892 8.61914 55.123 8.84538 55.5039 9.29785C55.8848 9.75033 56.0752 10.3981 56.0752 11.2412V11.6172H52.4961C52.5091 12.138 52.6605 12.5596 52.9502 12.8818C53.2432 13.2008 53.6143 13.3604 54.0635 13.3604C54.3825 13.3604 54.6527 13.2952 54.874 13.165C55.0954 13.0348 55.2891 12.8623 55.4551 12.6475L56.0068 13.0771C55.5641 13.7575 54.9001 14.0977 54.0146 14.0977ZM53.9023 9.36133C53.5378 9.36133 53.2318 9.49479 52.9844 9.76172C52.737 10.0254 52.584 10.3965 52.5254 10.875H55.1719V10.8066C55.1458 10.3477 55.0221 9.99284 54.8008 9.74219C54.5794 9.48828 54.2799 9.36133 53.9023 9.36133ZM59.2441 13.3604C59.5664 13.3604 59.848 13.2627 60.0889 13.0674C60.3298 12.8721 60.4632 12.6279 60.4893 12.335H61.3438C61.3275 12.6377 61.2233 12.9258 61.0312 13.1992C60.8392 13.4727 60.582 13.6908 60.2598 13.8535C59.9408 14.0163 59.6022 14.0977 59.2441 14.0977C58.5247 14.0977 57.9518 13.8584 57.5254 13.3799C57.1022 12.8981 56.8906 12.2406 56.8906 11.4072V11.2559C56.8906 10.7415 56.985 10.2842 57.1738 9.88379C57.3626 9.4834 57.6328 9.17253 57.9844 8.95117C58.3392 8.72982 58.7575 8.61914 59.2393 8.61914C59.8317 8.61914 60.3232 8.79655 60.7139 9.15137C61.1077 9.50618 61.3177 9.9668 61.3438 10.5332H60.4893C60.4632 10.1914 60.333 9.91146 60.0986 9.69336C59.8675 9.47201 59.5811 9.36133 59.2393 9.36133C58.7803 9.36133 58.4238 9.52734 58.1699 9.85938C57.9193 10.1882 57.7939 10.665 57.7939 11.29V11.4609C57.7939 12.0697 57.9193 12.5384 58.1699 12.8672C58.4206 13.196 58.7786 13.3604 59.2441 13.3604ZM62.1201 11.3096C62.1201 10.792 62.221 10.3265 62.4229 9.91309C62.6279 9.49967 62.9111 9.18066 63.2725 8.95605C63.637 8.73145 64.0521 8.61914 64.5176 8.61914C65.237 8.61914 65.818 8.86816 66.2607 9.36621C66.7067 9.86426 66.9297 10.5267 66.9297 11.3535V11.417C66.9297 11.9313 66.8304 12.3936 66.6318 12.8037C66.4365 13.2106 66.1549 13.528 65.7871 13.7559C65.4225 13.9837 65.0026 14.0977 64.5273 14.0977C63.8112 14.0977 63.2301 13.8486 62.7842 13.3506C62.3415 12.8525 62.1201 12.1934 62.1201 11.373V11.3096ZM63.0283 11.417C63.0283 12.0029 63.1634 12.4733 63.4336 12.8281C63.707 13.1829 64.0716 13.3604 64.5273 13.3604C64.9863 13.3604 65.3509 13.1813 65.6211 12.8232C65.8913 12.4619 66.0264 11.9574 66.0264 11.3096C66.0264 10.7301 65.888 10.2614 65.6113 9.90332C65.3379 9.54199 64.9733 9.36133 64.5176 9.36133C64.0716 9.36133 63.7119 9.53874 63.4385 9.89355C63.165 10.2484 63.0283 10.7562 63.0283 11.417ZM72.0518 14H71.1436V12.0859C70.7464 12.1901 70.3395 12.2422 69.9229 12.2422C69.262 12.2422 68.7575 12.0729 68.4092 11.7344C68.0641 11.3958 67.8883 10.9141 67.8818 10.2891V8.71191H68.7852V10.3184C68.8014 11.1061 69.1807 11.5 69.9229 11.5C70.3395 11.5 70.7464 11.4479 71.1436 11.3438V8.7168H72.0518V14ZM77.8184 14H76.915V11.7441H74.4883V14H73.5801V8.7168H74.4883V11.0068H76.915V8.7168H77.8184V14ZM82.6914 8.7168H83.5947V14H82.6914V10.1475L80.2549 14H79.3516V8.7168H80.2549V12.5742L82.6914 8.7168ZM85.123 8.7168H86.0312V13.2627H88.4629V8.7168H89.3662V13.2627H89.9961L89.9082 15.5674H89.0977V14H85.123V8.7168ZM94.2344 14C94.1823 13.8958 94.14 13.7103 94.1074 13.4434C93.6875 13.8796 93.1862 14.0977 92.6035 14.0977C92.0827 14.0977 91.6546 13.9512 91.3193 13.6582C90.9873 13.362 90.8213 12.9876 90.8213 12.5352C90.8213 11.985 91.0296 11.5586 91.4463 11.2559C91.8662 10.9499 92.4554 10.7969 93.2139 10.7969H94.0928V10.3818C94.0928 10.0661 93.9984 9.81543 93.8096 9.62988C93.6208 9.44108 93.3424 9.34668 92.9746 9.34668C92.6523 9.34668 92.3822 9.42806 92.1641 9.59082C91.946 9.75358 91.8369 9.95052 91.8369 10.1816H90.9287C90.9287 9.91797 91.0215 9.66406 91.207 9.41992C91.3958 9.17253 91.6497 8.97721 91.9688 8.83398C92.291 8.69076 92.6442 8.61914 93.0283 8.61914C93.637 8.61914 94.1139 8.77214 94.459 9.07812C94.804 9.38086 94.9831 9.79915 94.9961 10.333V12.7646C94.9961 13.2497 95.0579 13.6354 95.1816 13.9219V14H94.2344ZM92.7354 13.3115C93.0186 13.3115 93.2871 13.2383 93.541 13.0918C93.7949 12.9453 93.9788 12.7549 94.0928 12.5205V11.4365H93.3848C92.278 11.4365 91.7246 11.7604 91.7246 12.4082C91.7246 12.6914 91.819 12.9128 92.0078 13.0723C92.1966 13.2318 92.4391 13.3115 92.7354 13.3115Z"
        fill="white"
      />
    </g>
  </svg>
);
