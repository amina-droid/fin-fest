import React from 'react';

export const Badge: React.FC = () => (
  <svg x="444" y="237">
    <g className="badge">
      <path
        d="M22 10C22 4.47715 26.4772 0 32 0H109C114.523 0 119 4.47715 119 10V13C119 18.5228 114.523 23 109 23H32C26.4772 23 22 18.5228 22 13V10Z"
        fill="#31BCC5"
      />
      <path d="M70.5 32L64.8708 22.25L76.1292 22.25L70.5 32Z" fill="#31BCC5" />
      <path
        d="M39.6709 10.8066H38.8066V14H37.8691V6.89062H38.8066V10.0254H39.5391L42.0244 6.89062H43.1914L40.4766 10.3379L43.3916 14H42.2441L39.6709 10.8066ZM43.7334 11.3096C43.7334 10.792 43.8343 10.3265 44.0361 9.91309C44.2412 9.49967 44.5244 9.18066 44.8857 8.95605C45.2503 8.73145 45.6654 8.61914 46.1309 8.61914C46.8503 8.61914 47.4313 8.86816 47.874 9.36621C48.32 9.86426 48.543 10.5267 48.543 11.3535V11.417C48.543 11.9313 48.4437 12.3936 48.2451 12.8037C48.0498 13.2106 47.7682 13.528 47.4004 13.7559C47.0358 13.9837 46.6159 14.0977 46.1406 14.0977C45.4245 14.0977 44.8434 13.8486 44.3975 13.3506C43.9548 12.8525 43.7334 12.1934 43.7334 11.373V11.3096ZM44.6416 11.417C44.6416 12.0029 44.7767 12.4733 45.0469 12.8281C45.3203 13.1829 45.6849 13.3604 46.1406 13.3604C46.5996 13.3604 46.9642 13.1813 47.2344 12.8232C47.5046 12.4619 47.6396 11.9574 47.6396 11.3096C47.6396 10.7301 47.5013 10.2614 47.2246 9.90332C46.9512 9.54199 46.5866 9.36133 46.1309 9.36133C45.6849 9.36133 45.3252 9.53874 45.0518 9.89355C44.7783 10.2484 44.6416 10.7562 44.6416 11.417ZM53.9922 14H53.0889V11.7441H50.6621V14H49.7539V8.7168H50.6621V11.0068H53.0889V8.7168H53.9922V14ZM57.5664 13.3604C57.8887 13.3604 58.1702 13.2627 58.4111 13.0674C58.652 12.8721 58.7855 12.6279 58.8115 12.335H59.666C59.6497 12.6377 59.5456 12.9258 59.3535 13.1992C59.1615 13.4727 58.9043 13.6908 58.582 13.8535C58.263 14.0163 57.9245 14.0977 57.5664 14.0977C56.847 14.0977 56.2741 13.8584 55.8477 13.3799C55.4245 12.8981 55.2129 12.2406 55.2129 11.4072V11.2559C55.2129 10.7415 55.3073 10.2842 55.4961 9.88379C55.6849 9.4834 55.9551 9.17253 56.3066 8.95117C56.6615 8.72982 57.0798 8.61914 57.5615 8.61914C58.154 8.61914 58.6455 8.79655 59.0361 9.15137C59.43 9.50618 59.64 9.9668 59.666 10.5332H58.8115C58.7855 10.1914 58.6553 9.91146 58.4209 9.69336C58.1898 9.47201 57.9033 9.36133 57.5615 9.36133C57.1025 9.36133 56.7461 9.52734 56.4922 9.85938C56.2415 10.1882 56.1162 10.665 56.1162 11.29V11.4609C56.1162 12.0697 56.2415 12.5384 56.4922 12.8672C56.7428 13.196 57.1009 13.3604 57.5664 13.3604ZM62.4102 12.6768L63.6406 8.7168H64.6074L62.4834 14.8154C62.1546 15.6943 61.6322 16.1338 60.916 16.1338L60.7451 16.1191L60.4082 16.0557V15.3232L60.6523 15.3428C60.9583 15.3428 61.196 15.2809 61.3652 15.1572C61.5378 15.0335 61.6794 14.8073 61.79 14.4785L61.9902 13.9414L60.1055 8.7168H61.0918L62.4102 12.6768ZM69.5439 8.7168V14H68.6357V9.46387H66.8389L66.7314 11.4414C66.6729 12.3496 66.5199 12.999 66.2725 13.3896C66.0283 13.7803 65.6393 13.9837 65.1055 14H64.7441V13.2041L65.0029 13.1846C65.2959 13.152 65.5059 12.9827 65.6328 12.6768C65.7598 12.3708 65.8411 11.8044 65.877 10.9775L65.9746 8.7168H69.5439ZM71.9805 10.5381H73.3525C73.9515 10.5446 74.4251 10.7008 74.7734 11.0068C75.1217 11.3128 75.2959 11.7279 75.2959 12.252C75.2959 12.7793 75.1169 13.2025 74.7588 13.5215C74.4007 13.8405 73.9189 14 73.3135 14H71.0771V8.7168H71.9805V10.5381ZM71.9805 11.2754V13.2627H73.3232C73.6618 13.2627 73.9238 13.1764 74.1094 13.0039C74.2949 12.8281 74.3877 12.5889 74.3877 12.2861C74.3877 11.9932 74.2965 11.7539 74.1143 11.5684C73.9352 11.3796 73.6829 11.2819 73.3574 11.2754H71.9805ZM80.0078 9.44922H78.2354V14H77.332V9.44922H75.5938V8.7168H80.0078V9.44922ZM84.0703 14C84.0182 13.8958 83.9759 13.7103 83.9434 13.4434C83.5234 13.8796 83.0221 14.0977 82.4395 14.0977C81.9186 14.0977 81.4906 13.9512 81.1553 13.6582C80.8232 13.362 80.6572 12.9876 80.6572 12.5352C80.6572 11.985 80.8656 11.5586 81.2822 11.2559C81.7021 10.9499 82.2913 10.7969 83.0498 10.7969H83.9287V10.3818C83.9287 10.0661 83.8343 9.81543 83.6455 9.62988C83.4567 9.44108 83.1784 9.34668 82.8105 9.34668C82.4883 9.34668 82.2181 9.42806 82 9.59082C81.7819 9.75358 81.6729 9.95052 81.6729 10.1816H80.7646C80.7646 9.91797 80.8574 9.66406 81.043 9.41992C81.2318 9.17253 81.4857 8.97721 81.8047 8.83398C82.127 8.69076 82.4801 8.61914 82.8643 8.61914C83.473 8.61914 83.9499 8.77214 84.2949 9.07812C84.64 9.38086 84.819 9.79915 84.832 10.333V12.7646C84.832 13.2497 84.8939 13.6354 85.0176 13.9219V14H84.0703ZM82.5713 13.3115C82.8545 13.3115 83.123 13.2383 83.377 13.0918C83.6309 12.9453 83.8148 12.7549 83.9287 12.5205V11.4365H83.2207C82.1139 11.4365 81.5605 11.7604 81.5605 12.4082C81.5605 12.6914 81.6549 12.9128 81.8438 13.0723C82.0326 13.2318 82.2751 13.3115 82.5713 13.3115ZM86.3262 8.7168H87.2344V13.2627H89.666V8.7168H90.5693V13.2627H91.1992L91.1113 15.5674H90.3008V14H86.3262V8.7168ZM95.5938 8.7168H96.4971V14H95.5938V10.1475L93.1572 14H92.2539V8.7168H93.1572V12.5742L95.5938 8.7168ZM101.365 8.7168H102.269V14H101.365V10.1475L98.9287 14H98.0254V8.7168H98.9287V12.5742L101.365 8.7168Z"
        fill="white"
      />
    </g>
  </svg>
);
