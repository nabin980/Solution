import { Feature } from "@/types/feature";

const CapabilitiesData: Feature[] = [
  {
    id: 1,
    icon: (
      <img src="https://www.digosolution.com/wp-content/uploads/2024/07/Consultative-sales.gif" className="rounded-md" width="180" height="180"  alt="AWS"/>
  //     <svg width="40" height="45" viewBox="0 0 40 45" className="fill-current">
  // <path d="M10 30H30C31.1046 30 32 30.8954 32 32C32 33.1046 31.1046 34 30 34H10C8.89543 34 8 33.1046 8 32C8 30.8954 8.89543 30 10 30Z" fill="#FF9900"/>
  // <path d="M20 5C15.5817 5 12.065 8.24579 11.5828 12.6362C11.2226 12.6604 10.8714 12.7138 10.5484 12.7797C8.29061 13.2979 6.58898 15.1744 6.19529 17.6239C5.82584 19.024 6.06526 20.4414 6.75088 21.7483C7.27398 22.5257 8.09951 23.1859 9.17135 23.6468C9.96466 23.9788 10.8212 24.102 11.6834 24.0478C12.4691 23.8887 13.199 23.4136 13.6944 22.7613C14.0613 22.244 14.5265 21.8156 15.0628 21.5119C15.5976 21.2074 16.1836 21.0541 16.7715 21.0847C17.9362 21.0824 19.0894 21.4254 20.1714 22.0598C20.6297 22.3142 21.0699 22.5802 21.4575 22.8615C22.0715 23.4367 22.6978 24.0699 23.3202 24.7102C23.9386 25.3439 24.5582 25.9794 25.1746 26.6153C26.0296 27.5876 27.0148 28.4647 28.1817 29.1978C29.0634 29.753 30.1127 29.8421 30.8639 29.3233C31.6905 28.8112 32.2533 27.9499 32.4301 27.0615C32.6066 26.1734 32.3555 25.3656 31.8582 24.6928C30.8479 23.0987 29.4725 21.7322 27.7789 20.6766C27.3168 20.2738 26.7888 19.866 26.2926 19.4854C25.3277 18.2837 24.4924 16.9577 24.3304 15.5725C24.1555 14.284 24.6171 13.0272 25.7435 12.2189C26.6446 11.6055 27.5501 11.1552 28.4667 10.7431C28.7831 10.6471 29.0737 10.3793 29.1102 10.0695C29.1515 9.69739 28.9324 9.33974 28.6077 9.16188C27.9088 8.72335 27.1558 8.35174 26.3954 8.06442C25.7846 7.8259 25.191 7.60803 24.6279 7.28426C24.3776 7.09507 24.0138 7.07273 23.7128 7.25161C22.5565 7.86132 21.4051 8.50343 20.2596 9.16223C19.3803 9.69628 18.4979 10.2477 17.6136 10.8491C16.8091 11.427 16.185 12.0872 15.6977 12.8127C14.5577 14.0698 13.6241 15.4537 13.2336 16.9631C13.1307 17.2675 13.2515 17.5832 13.4665 17.8178C13.7181 18.0808 14.1603 18.1756 14.6451 18.0928C15.0555 18.0151 15.4419 17.7881 15.7389 17.4385C15.866 17.2634 16.1777 17.0834 16.2977 17.1088C17.1671 17.3657 17.8233 17.7297 18.3319 18.2515C19.0921 19.0616 19.7878 19.883 20.6797 20.6411C21.4982 21.3329 22.3746 22.1261 23.2787 22.9265C23.3565 22.9865 23.4455 22.9575 23.4747 22.8214C23.5046 22.677 23.4641 22.5262 23.3552 22.4098C22.9315 21.899 22.6718 21.2836 22.6774 20.6465C22.7466 19.4089 23.4102 18.2358 24.4978 17.1546C25.0753 16.4207 25.8235 15.8688 26.6096 15.4963C27.4305 15.0973 28.1931 14.6352 28.8843 14.0805C29.1172 13.9307 29.3025 13.6761 29.3737 13.3838C29.446 13.0978 29.3552 12.8221 29.1826 12.5864C29.0441 12.4152 28.8099 12.3177 28.6281 12.4256C27.2858 13.1757 25.9762 14.1524 24.7803 15.3388C23.5526 16.5967 22.5349 17.9836 22.0637 19.5532C22.0276 19.684 22.0366 19.8061 22.0845 19.9203C22.1364 20.0386 22.1603 20.167 22.1848 20.2917C22.242 21.4861 22.6764 22.6261 23.4396 23.6855C24.0318 24.4475 24.7236 25.1442 25.4761 25.7438C26.0316 26.1385 26.6318 26.4877 27.2659 26.7851C27.8359 27.0363 28.4271 27.2134 29.0204 27.2933C29.0947 27.2986 29.1715 27.305 29.2477 27.3082C29.4911 27.3154 29.7341 27.2787 29.9635 27.2104C30.2335 27.1334 30.4979 27.0147 30.7486 26.8655C31.1461 26.6692 31.5224 26.4372 31.8747 26.2073C32.7212 25.7355 33.6243 25.2628 34.5812 24.8215C34.7604 24.7422 34.9654 24.634 35.1686 24.5128C35.3986 24.3885 35.6179 24.2369 35.8111 24.0592C36.0342 23.8392 36.2344 23.5857 36.3943 23.3077C36.5618 23.0354 36.6842 22.7404 36." />
  //     </svg>
    ),
    title: "Cloud Consulting",
    paragraph:
      "Digo Solution’s Cloud Consulting offers expert guidance for efficient cloud migration, optimization, and management.",
  },
  {
    id: 1,
    icon: (
      <img src="https://www.digosolution.com/wp-content/uploads/2024/07/Business-Plan.gif" className="rounded-md" width="180" height="180"  alt="Google"/>

      // <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
      //   <path
      //     opacity="0.5"
      //     d="M20.5914 34.2584C20.2394 34.5172 19.7603 34.5175 19.408 34.2593L4.19163 23.1079C3.8395 22.8498 3.36065 22.85 3.00873 23.1084L1.09802 24.5111C0.553731 24.9107 0.553731 25.7237 1.09802 26.1233L19.4082 39.5655C19.7604 39.824 20.2396 39.824 20.5918 39.5655L38.9029 26.1226C39.4469 25.7232 39.4473 24.9107 38.9036 24.5109L36.9701 23.0889C36.6177 22.8298 36.1378 22.8297 35.7854 23.0888L20.5914 34.2584Z"
      //   />
      //   <path d="M19.408 28.931C19.7603 29.1896 20.2396 29.1894 20.5918 28.9306L36.3556 17.3466L38.8979 15.4883C39.4437 15.0894 39.4446 14.275 38.8996 13.8749L20.5918 0.43445C20.2396 0.175911 19.7604 0.175913 19.4082 0.434452L1.09706 13.8774C0.553051 14.2767 0.552712 15.0892 1.09638 15.4891L3.62222 17.3466L19.408 28.931Z" />
      // </svg>
    ),
    title: "Cloud Adoption Strategy",
    paragraph:
      "Digo Solution’s Cloud Adoption Strategy ensures a smooth cloud transition with tailored migration, integration, and optimization plans.",
  },
  {
    id: 1,
    icon: (
      <img src="https://www.digosolution.com/wp-content/uploads/2024/07/Server.gif" className="rounded-md" width="180" height="180"  alt="IT"/>
      // <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
      //   <path 
      //     opacity="0.5"
      //     d="M20 30C22.75 30 25 32.25 25 35C25 37.75 22.75 40 20 40C17.25 40 15 37.75 15 35C15 32.25 17.25 30 20 30ZM35 30C37.75 30 40 32.25 40 35C40 37.75 37.75 40 35 40C32.25 40 30 37.75 30 35C30 32.25 32.25 30 35 30ZM35 15C37.75 15 40 17.25 40 20C40 22.75 37.75 25 35 25C32.25 25 30 22.75 30 20C30 17.25 32.25 15 35 15Z"
      //   />
      //   <path d="M20 15C22.75 15 25 17.25 25 20C25 22.75 22.75 25 20 25C17.25 25 15 22.75 15 20C15 17.25 17.25 15 20 15ZM20 0C22.75 0 25 2.25 25 5C25 7.75 22.75 10 20 10C17.25 10 15 7.75 15 5C15 2.25 17.25 0 20 0ZM5 30C7.75 30 10 32.25 10 35C10 37.75 7.75 40 5 40C2.25 40 0 37.75 0 35C0 32.25 2.25 30 5 30ZM5 15C7.75 15 10 17.25 10 20C10 22.75 7.75 25 5 25C2.25 25 0 22.75 0 20C0 17.25 2.25 15 5 15ZM5 0C7.75 0 10 2.25 10 5C10 7.75 7.75 10 5 10C2.25 10 0 7.75 0 5C0 2.25 2.25 0 5 0ZM35 0C37.75 0 40 2.25 40 5C40 7.75 37.75 10 35 10C32.25 10 30 7.75 30 5C30 2.25 32.25 0 35 0Z" />
      // </svg>
    ),
    title: "Cloud Migration Assessment",
    paragraph:
      "Digo Solution’s Cloud Migration Assessment evaluates your infrastructure to ensure a seamless transition to the cloud.",
  },
  {
    id: 1,
    icon: (
      <img src="https://www.digosolution.com/wp-content/uploads/2024/07/agile-method.gif" className="rounded-md" width="180" height="180"  alt="Azure"/>
      // <svg width="40" height="42" viewBox="0 0 40 42" className="fill-current">
      //   <path
      //     opacity="0.5"
      //     d="M31.8943 25.3303C34.1233 25.3303 36.1497 26.1409 37.5682 27.762L39.1464 26.1839C39.4614 25.8689 39.9999 26.092 39.9999 26.5374V32.936C39.9999 33.2121 39.7761 33.436 39.4999 33.436H33.1014C32.6559 33.436 32.4328 32.8974 32.7478 32.5825L35.5418 29.7885C34.5286 28.9779 33.3128 28.37 31.8943 28.37C29.0573 28.37 26.8282 30.599 26.8282 33.436C26.8282 36.273 29.0573 38.5021 31.8943 38.5021C33.3549 38.5021 34.6511 37.844 35.6345 36.8244C35.8406 36.6107 36.1187 36.4756 36.4155 36.4756H38.6535C39.0072 36.4756 39.2477 36.833 39.0881 37.1487C37.7427 39.8107 35.0781 41.5417 31.8943 41.5417C27.4361 41.5417 23.7886 37.8941 23.7886 33.436C23.7886 28.9779 27.4361 25.3303 31.8943 25.3303Z"
      //   />
      //   <path d="M18.7226 33.436C18.7226 31.3572 19.2513 29.4548 19.9799 27.7285C20.0541 27.5529 19.9264 27.3567 19.7358 27.3567C15.8856 27.3567 12.6433 24.1144 12.6433 20.2642C12.6433 16.414 15.8856 13.1717 19.7358 13.1717C23.586 13.1717 26.8283 16.414 26.8283 20.2642C26.8283 20.5105 27.3897 21.0054 27.6246 20.9313C28.9274 20.5206 30.2827 20.2642 31.8943 20.2642C32.775 20.2642 33.6557 20.4173 34.5364 20.5905C34.7422 20.6309 34.9339 20.4739 34.9339 20.2642C34.9339 19.8699 34.9339 19.3904 34.8787 18.9362C34.827 18.5117 34.9599 18.0636 35.3001 17.8045L38.9868 14.9955C39.3921 14.5902 39.3921 14.1849 39.1894 13.7797L35.1857 6.77316C35.153 6.71599 35.1272 6.65499 35.1021 6.59411C34.9143 6.13895 34.5848 6.08618 34.1135 6.08007C33.9863 6.07841 33.86 6.10354 33.7419 6.15079L29.3957 7.88927C29.0613 8.02302 28.6829 7.96367 28.3887 7.75599C27.6155 7.21023 26.7521 6.75466 25.8752 6.31262C25.5838 6.16573 25.3813 5.88702 25.3335 5.56423L24.6729 1.10574C24.6265 0.792572 24.6613 0.389935 24.3993 0.212245C24.2235 0.0930361 23.9828 0 23.7886 0H15.6829C15.3021 0 14.7424 0.35783 14.6762 0.73726C14.6678 0.785579 14.6661 0.834927 14.6589 0.883445L13.9492 5.67408C13.894 6.04692 13.6313 6.35205 13.2873 6.50604C12.4439 6.88359 11.673 7.42345 10.8193 7.89265C10.5647 8.03264 10.26 8.04143 9.99178 7.92966L5.73545 6.15619C5.61358 6.10541 5.48273 6.07832 5.35072 6.08016C4.8506 6.08715 4.49147 6.1485 4.13234 6.68719L0.0794975 13.7797C-0.123145 14.1849 0.0794976 14.5902 0.484782 14.9955L4.34631 17.9376C4.59456 18.1268 4.74261 18.4216 4.7079 18.7317C4.65068 19.243 4.53762 19.8101 4.53762 20.2642C4.53762 20.6648 4.53762 21.1534 4.59561 21.614C4.64767 22.0276 4.52563 22.4644 4.20164 22.7267L0.484782 25.7355C0.0794976 26.1408 0.0794978 26.5461 0.28214 26.9514L4.33498 34.0439C4.5154 34.4047 4.85644 34.4443 5.35811 34.4486C5.48532 34.4497 5.61152 34.4249 5.72964 34.3776L10.0758 32.6392C10.4102 32.5054 10.7887 32.5648 11.0829 32.7724C11.8561 33.3182 12.7195 33.7738 13.5964 34.2158C13.8878 34.3627 14.0903 34.6414 14.1381 34.9642L14.8616 39.8476C14.8688 39.8961 14.871 39.9453 14.8768 39.994C14.9222 40.3734 15.3145 40.7311 15.8856 40.7311H19.13C19.9191 40.7311 20.4065 39.8523 20.0627 39.1421C19.1998 37.3593 18.7226 35.4573 18.7226 33.436Z" />
      // </svg>
    ),
    title: "Managed AWS Cloud Services",
    paragraph:
      "Digo Solution’s Managed AWS Cloud Services offer comprehensive support, including monitoring, optimization, and security.",
  },
  {
    id: 1,
    icon: (
      <img src="https://www.digosolution.com/wp-content/uploads/2024/07/Secure-data.gif" className="rounded-md" width="180" height="180"  alt="DevOps"/>
      // <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
      //   <path
      //     opacity="0.5"
      //     d="M39 12C39.5523 12 40 12.4477 40 13V39C40 39.5523 39.5523 40 39 40H13C12.4477 40 12 39.5523 12 39V33C12 32.4477 12.4477 32 13 32H31C31.5523 32 32 31.5523 32 31V13C32 12.4477 32.4477 12 33 12H39Z"
      //   />
      //   <rect width="28" height="28" rx="1" />
      // </svg>
    ),
    title: "Cloud - Native App Development",
    paragraph:
      "Digo Solution’s Cloud-Native App Development builds scalable, resilient applications optimized for cloud environments.",
  },
  {
    id: 1,
    icon: ( 
      <img src="https://www.digosolution.com/wp-content/uploads/2024/07/Tax.gif" className="rounded-md" width="180" height="180"  alt="DB"/>
      // <svg width="40" height="45" viewBox="0 0 40 45" className="fill-current">
      //   <path
      //     opacity="0.5"
      //     d="M31.579 37.8948C28.6737 37.8948 26.3158 35.5369 26.3158 32.6317C26.3158 31.9159 26.4527 31.2306 26.7135 30.6015C26.7959 30.4027 26.7605 30.1711 26.6083 30.019L24.9997 28.4103C24.7766 28.1872 24.4043 28.2238 24.2487 28.4983C23.5588 29.7145 23.1579 31.125 23.1579 32.6317C23.1579 37.2843 26.9263 41.0527 31.579 41.0527V43.0035C31.579 43.449 32.1175 43.6721 32.4325 43.3571L35.9622 39.8273C36.1575 39.6321 36.1575 39.3155 35.9622 39.1202L32.4325 35.5905C32.1175 35.2755 31.579 35.4986 31.579 35.9441V37.8948ZM31.579 24.2106V22.2598C31.579 21.8144 31.0404 21.5913 30.7254 21.9063L27.1957 25.436C27.0004 25.6313 27.0004 25.9479 27.1957 26.1431L30.7254 29.6729C31.0404 29.9879 31.579 29.7648 31.579 29.3193V27.3685C34.4842 27.3685 36.8421 29.7264 36.8421 32.6317C36.8421 33.3474 36.7052 34.0328 36.4444 34.6618C36.362 34.8606 36.3974 35.0922 36.5496 35.2444L38.1582 36.853C38.3813 37.0762 38.7536 37.0396 38.9092 36.7651C39.5991 35.5488 40 34.1384 40 32.6317C40 27.9791 36.2316 24.2106 31.579 24.2106Z"
      //   />
      //   <path d="M18.9474 32.6316C18.9474 35.4705 19.8099 38.0969 21.2941 40.2796C21.7904 41.0094 21.3054 42.1053 20.4229 42.1053H4.21053C1.87368 42.1053 0 40.2316 0 37.8947V4.21053C0 1.89474 1.87368 0 4.21053 0H6.31579H16.8421H29.4737C31.7895 0 33.6842 1.87368 33.6842 4.21053V17.9544C33.6842 18.5032 33.1804 18.9474 32.6316 18.9474C25.0737 18.9474 18.9474 25.0737 18.9474 32.6316Z" />
      // </svg>
    ),
    title: "Cost Optimization",
    paragraph:
      "Digo Solution’s Cost Optimization service helps businesses reduce cloud expenses while maximizing efficiency and performance.",
  },
];
export default CapabilitiesData;
