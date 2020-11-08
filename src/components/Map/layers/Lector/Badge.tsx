import React from "react";

export const Badge = () => {
  return (
    <svg x="266" y="85">
      <g className="badge">
        <path
          d="M0 10C0 4.47715 4.47715 0 10 0H130C135.523 0 140 4.47715 140 10V13C140 18.5228 135.523 23 130 23H10C4.47716 23 0 18.5228 0 13V10Z"
          fill="#31BCC5"
        />
        <path
          d="M69.5 32L63.8708 22.25L75.1292 22.25L69.5 32Z"
          fill="#31BCC5"
        />
        <path
          d="M20.3359 7.60352H20.4873C21.0244 7.60677 21.5143 7.7321 21.957 7.97949C22.3997 8.22689 22.7432 8.56868 22.9873 9.00488C23.2347 9.43783 23.3584 9.92285 23.3584 10.46C23.3584 11.0003 23.2347 11.4902 22.9873 11.9297C22.7399 12.3691 22.3981 12.7126 21.9619 12.96C21.5257 13.2041 21.0407 13.3294 20.5068 13.3359H20.3359V14.293H19.4277V13.3359H19.291C18.7474 13.3359 18.2526 13.2122 17.8066 12.9648C17.3639 12.7174 17.0189 12.3757 16.7715 11.9395C16.5273 11.5033 16.4053 11.0133 16.4053 10.4697C16.4053 9.92611 16.5273 9.4362 16.7715 9C17.0189 8.5638 17.3639 8.22201 17.8066 7.97461C18.2526 7.72721 18.7474 7.60352 19.291 7.60352H19.4277V6.59766H20.3359V7.60352ZM19.291 8.34082C18.679 8.34082 18.194 8.52962 17.8359 8.90723C17.4811 9.28158 17.3037 9.80241 17.3037 10.4697C17.3037 11.1403 17.4811 11.6628 17.8359 12.0371C18.1908 12.4082 18.679 12.5938 19.3008 12.5938H19.4277V8.34082H19.291ZM20.3359 8.34082V12.5938H20.4727C21.0944 12.5938 21.5794 12.4033 21.9277 12.0225C22.2793 11.6383 22.4551 11.1175 22.4551 10.46C22.4551 9.80892 22.2793 9.29297 21.9277 8.91211C21.5794 8.53125 21.0879 8.34082 20.4531 8.34082H20.3359ZM27.8164 8.7168H28.7197V14H27.8164V10.1475L25.3799 14H24.4766V8.7168H25.3799V12.5742L27.8164 8.7168ZM34.4863 14H33.583V11.7441H31.1562V14H30.248V8.7168H31.1562V11.0068H33.583V8.7168H34.4863V14ZM39.2031 14C39.151 13.8958 39.1087 13.7103 39.0762 13.4434C38.6562 13.8796 38.1549 14.0977 37.5723 14.0977C37.0514 14.0977 36.6234 13.9512 36.2881 13.6582C35.9561 13.362 35.79 12.9876 35.79 12.5352C35.79 11.985 35.9984 11.5586 36.415 11.2559C36.835 10.9499 37.4242 10.7969 38.1826 10.7969H39.0615V10.3818C39.0615 10.0661 38.9671 9.81543 38.7783 9.62988C38.5895 9.44108 38.3112 9.34668 37.9434 9.34668C37.6211 9.34668 37.3509 9.42806 37.1328 9.59082C36.9147 9.75358 36.8057 9.95052 36.8057 10.1816H35.8975C35.8975 9.91797 35.9902 9.66406 36.1758 9.41992C36.3646 9.17253 36.6185 8.97721 36.9375 8.83398C37.2598 8.69076 37.613 8.61914 37.9971 8.61914C38.6058 8.61914 39.0827 8.77214 39.4277 9.07812C39.7728 9.38086 39.9518 9.79915 39.9648 10.333V12.7646C39.9648 13.2497 40.0267 13.6354 40.1504 13.9219V14H39.2031ZM37.7041 13.3115C37.9873 13.3115 38.2559 13.2383 38.5098 13.0918C38.7637 12.9453 38.9476 12.7549 39.0615 12.5205V11.4365H38.3535C37.2467 11.4365 36.6934 11.7604 36.6934 12.4082C36.6934 12.6914 36.7878 12.9128 36.9766 13.0723C37.1654 13.2318 37.4079 13.3115 37.7041 13.3115ZM45.6973 14H44.7939V11.7441H42.3672V14H41.459V8.7168H42.3672V11.0068H44.7939V8.7168H45.6973V14ZM49.2715 13.3604C49.5938 13.3604 49.8753 13.2627 50.1162 13.0674C50.3571 12.8721 50.4906 12.6279 50.5166 12.335H51.3711C51.3548 12.6377 51.2507 12.9258 51.0586 13.1992C50.8665 13.4727 50.6094 13.6908 50.2871 13.8535C49.9681 14.0163 49.6296 14.0977 49.2715 14.0977C48.5521 14.0977 47.9792 13.8584 47.5527 13.3799C47.1296 12.8981 46.918 12.2406 46.918 11.4072V11.2559C46.918 10.7415 47.0124 10.2842 47.2012 9.88379C47.39 9.4834 47.6602 9.17253 48.0117 8.95117C48.3665 8.72982 48.7848 8.61914 49.2666 8.61914C49.859 8.61914 50.3506 8.79655 50.7412 9.15137C51.1351 9.50618 51.3451 9.9668 51.3711 10.5332H50.5166C50.4906 10.1914 50.3604 9.91146 50.126 9.69336C49.8949 9.47201 49.6084 9.36133 49.2666 9.36133C48.8076 9.36133 48.4512 9.52734 48.1973 9.85938C47.9466 10.1882 47.8213 10.665 47.8213 11.29V11.4609C47.8213 12.0697 47.9466 12.5384 48.1973 12.8672C48.4479 13.196 48.806 13.3604 49.2715 13.3604ZM52.1475 11.3096C52.1475 10.792 52.2484 10.3265 52.4502 9.91309C52.6553 9.49967 52.9385 9.18066 53.2998 8.95605C53.6644 8.73145 54.0794 8.61914 54.5449 8.61914C55.2643 8.61914 55.8454 8.86816 56.2881 9.36621C56.734 9.86426 56.957 10.5267 56.957 11.3535V11.417C56.957 11.9313 56.8577 12.3936 56.6592 12.8037C56.4639 13.2106 56.1823 13.528 55.8145 13.7559C55.4499 13.9837 55.0299 14.0977 54.5547 14.0977C53.8385 14.0977 53.2575 13.8486 52.8115 13.3506C52.3688 12.8525 52.1475 12.1934 52.1475 11.373V11.3096ZM53.0557 11.417C53.0557 12.0029 53.1908 12.4733 53.4609 12.8281C53.7344 13.1829 54.099 13.3604 54.5547 13.3604C55.0137 13.3604 55.3783 13.1813 55.6484 12.8232C55.9186 12.4619 56.0537 11.9574 56.0537 11.3096C56.0537 10.7301 55.9154 10.2614 55.6387 9.90332C55.3652 9.54199 55.0007 9.36133 54.5449 9.36133C54.099 9.36133 53.7393 9.53874 53.4658 9.89355C53.1924 10.2484 53.0557 10.7562 53.0557 11.417ZM58.1729 14V8.7168H60.2334C60.9365 8.7168 61.4753 8.84049 61.8496 9.08789C62.2272 9.33203 62.416 9.69173 62.416 10.167C62.416 10.4111 62.3428 10.6325 62.1963 10.8311C62.0498 11.0264 61.8333 11.1761 61.5469 11.2803C61.8659 11.3551 62.1214 11.5016 62.3135 11.7197C62.5088 11.9378 62.6064 12.1982 62.6064 12.501C62.6064 12.986 62.4274 13.3571 62.0693 13.6143C61.7145 13.8714 61.2116 14 60.5605 14H58.1729ZM59.0762 11.6807V13.2725H60.5703C60.9479 13.2725 61.2295 13.2025 61.415 13.0625C61.6038 12.9225 61.6982 12.7256 61.6982 12.4717C61.6982 11.9443 61.3109 11.6807 60.5361 11.6807H59.0762ZM59.0762 10.958H60.2432C61.0895 10.958 61.5127 10.7106 61.5127 10.2158C61.5127 9.72103 61.1123 9.46549 60.3115 9.44922H59.0762V10.958ZM64.7891 10.5381H66.1611C66.7601 10.5446 67.2337 10.7008 67.582 11.0068C67.9303 11.3128 68.1045 11.7279 68.1045 12.252C68.1045 12.7793 67.9255 13.2025 67.5674 13.5215C67.2093 13.8405 66.7275 14 66.1221 14H63.8857V8.7168H64.7891V10.5381ZM69.9893 14H69.0811V8.7168H69.9893V14ZM64.7891 11.2754V13.2627H66.1318C66.4704 13.2627 66.7324 13.1764 66.918 13.0039C67.1035 12.8281 67.1963 12.5889 67.1963 12.2861C67.1963 11.9932 67.1051 11.7539 66.9229 11.5684C66.7438 11.3796 66.4915 11.2819 66.166 11.2754H64.7891ZM74.9844 8.7168H75.8877V14H74.9844V10.1475L72.5479 14H71.6445V8.7168H72.5479V12.5742L74.9844 8.7168ZM75.2285 6.79297C75.2285 7.18685 75.0934 7.50423 74.8232 7.74512C74.5563 7.98275 74.2048 8.10156 73.7686 8.10156C73.3324 8.10156 72.9792 7.98112 72.709 7.74023C72.4388 7.49935 72.3037 7.18359 72.3037 6.79297H73.041C73.041 7.02083 73.1029 7.19987 73.2266 7.33008C73.3503 7.45703 73.5309 7.52051 73.7686 7.52051C73.9964 7.52051 74.1738 7.45703 74.3008 7.33008C74.431 7.20312 74.4961 7.02409 74.4961 6.79297H75.2285ZM84.1494 8.7168V14H83.2412V9.46387H81.4443L81.3369 11.4414C81.2783 12.3496 81.1253 12.999 80.8779 13.3896C80.6338 13.7803 80.2448 13.9837 79.7109 14H79.3496V13.2041L79.6084 13.1846C79.9014 13.152 80.1113 12.9827 80.2383 12.6768C80.3652 12.3708 80.4466 11.8044 80.4824 10.9775L80.5801 8.7168H84.1494ZM87.792 14.0977C87.0758 14.0977 86.4932 13.8633 86.0439 13.3945C85.5947 12.9225 85.3701 12.2926 85.3701 11.5049V11.3389C85.3701 10.8148 85.4694 10.3477 85.668 9.9375C85.8698 9.52409 86.1497 9.20182 86.5078 8.9707C86.8691 8.73633 87.2598 8.61914 87.6797 8.61914C88.3665 8.61914 88.9004 8.84538 89.2812 9.29785C89.6621 9.75033 89.8525 10.3981 89.8525 11.2412V11.6172H86.2734C86.2865 12.138 86.4378 12.5596 86.7275 12.8818C87.0205 13.2008 87.3916 13.3604 87.8408 13.3604C88.1598 13.3604 88.43 13.2952 88.6514 13.165C88.8727 13.0348 89.0664 12.8623 89.2324 12.6475L89.7842 13.0771C89.3415 13.7575 88.6774 14.0977 87.792 14.0977ZM87.6797 9.36133C87.3151 9.36133 87.0091 9.49479 86.7617 9.76172C86.5143 10.0254 86.3613 10.3965 86.3027 10.875H88.9492V10.8066C88.9232 10.3477 88.7995 9.99284 88.5781 9.74219C88.3568 9.48828 88.0573 9.36133 87.6797 9.36133ZM92.5479 11.749H91.8887V14H90.9805V8.7168H91.8887V10.9531H92.4795L94.2568 8.7168H95.3506L93.2607 11.2559L95.5264 14H94.3789L92.5479 11.749ZM100.229 9.44922H98.4561V14H97.5527V9.44922H95.8145V8.7168H100.229V9.44922ZM100.663 11.3096C100.663 10.792 100.764 10.3265 100.966 9.91309C101.171 9.49967 101.454 9.18066 101.815 8.95605C102.18 8.73145 102.595 8.61914 103.061 8.61914C103.78 8.61914 104.361 8.86816 104.804 9.36621C105.25 9.86426 105.473 10.5267 105.473 11.3535V11.417C105.473 11.9313 105.373 12.3936 105.175 12.8037C104.979 13.2106 104.698 13.528 104.33 13.7559C103.965 13.9837 103.546 14.0977 103.07 14.0977C102.354 14.0977 101.773 13.8486 101.327 13.3506C100.884 12.8525 100.663 12.1934 100.663 11.373V11.3096ZM101.571 11.417C101.571 12.0029 101.706 12.4733 101.977 12.8281C102.25 13.1829 102.615 13.3604 103.07 13.3604C103.529 13.3604 103.894 13.1813 104.164 12.8232C104.434 12.4619 104.569 11.9574 104.569 11.3096C104.569 10.7301 104.431 10.2614 104.154 9.90332C103.881 9.54199 103.516 9.36133 103.061 9.36133C102.615 9.36133 102.255 9.53874 101.981 9.89355C101.708 10.2484 101.571 10.7562 101.571 11.417ZM111.068 11.417C111.068 12.221 110.884 12.8688 110.517 13.3604C110.149 13.8519 109.651 14.0977 109.022 14.0977C108.381 14.0977 107.877 13.8942 107.509 13.4873V16.0312H106.605V8.7168H107.431L107.475 9.30273C107.842 8.84701 108.354 8.61914 109.008 8.61914C109.643 8.61914 110.144 8.8584 110.512 9.33691C110.883 9.81543 111.068 10.4811 111.068 11.334V11.417ZM110.165 11.3145C110.165 10.7188 110.038 10.2484 109.784 9.90332C109.53 9.55827 109.182 9.38574 108.739 9.38574C108.192 9.38574 107.782 9.62826 107.509 10.1133V12.6377C107.779 13.1195 108.192 13.3604 108.749 13.3604C109.182 13.3604 109.525 13.1895 109.779 12.8477C110.036 12.5026 110.165 11.9915 110.165 11.3145ZM115.639 8.7168H116.542V14H115.639V10.1475L113.202 14H112.299V8.7168H113.202V12.5742L115.639 8.7168ZM121.41 8.7168H122.313V14H121.41V10.1475L118.974 14H118.07V8.7168H118.974V12.5742L121.41 8.7168ZM121.654 6.79297C121.654 7.18685 121.519 7.50423 121.249 7.74512C120.982 7.98275 120.631 8.10156 120.194 8.10156C119.758 8.10156 119.405 7.98112 119.135 7.74023C118.865 7.49935 118.729 7.18359 118.729 6.79297H119.467C119.467 7.02083 119.529 7.19987 119.652 7.33008C119.776 7.45703 119.957 7.52051 120.194 7.52051C120.422 7.52051 120.6 7.45703 120.727 7.33008C120.857 7.20312 120.922 7.02409 120.922 6.79297H121.654Z"
          fill="white"
        />
      </g>
    </svg>
  );
};
