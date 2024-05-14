import { Svg } from "./Svg";

/*

To use this component you need to pass the following optional props:
- name
- className
- size

Example:
<Icon name="arrow-up" className={s.icon} size="20" />

------------------------------------------------------------------------------------------
List of icons names ("name" - description (css styles) ):
------------------------------------------------------------------------------------------
0) Logo is the default value (if you do not pass props "name")!
1) 'arrow-up' - Total income icon (add style: fill="color")
2) 'arrow-down' - Total expense icon (add style: fill="color")
3) 'chevron-up' - Arrow-up in header UserBarBtn (add styles: stroke="color", fill="none")
4) 'chevron-down' - Arrow-down in header UserBarBtn (add styles: stroke="color", fill="none")
5) 'burger-menu' - Burger-menu (add style in css: stroke="color")
6) 'user-logo' - Icon instead user avatar, default user-logo (add style: fill="color")
7) 'user' - Icon user for header profile settings (add styles: stroke="color", fill="none")
8) 'log-out' - Icon for button log-out (add styles: stroke="color", fill="none")
9) 'calendar' - Date input icon (add styles: stroke="color", fill="none")
10) 'clock' - Time input icon (add style in css: stroke="color", fill="none")
11) 'search' - Search input icon (add styles: stroke="color", fill="none")
12) 'check' - Selected category icon (add styles: stroke="color", fill="none")
13) 'edit' -Edit button icon (add styles: stroke="color", fill="none")
14) 'x-mark' - Close modal button icon (add style: stroke="color")
15) 'trash-bin' - Icon for delete transaction (add styles: stroke="color", fill="none")
16) 'eye' - Visible password icon (add styles: stroke="color", fill="none")
17) 'eye-off' - Hidden password icon (add styles: stroke="color", fill="none")
18) 'error' - Icon for unvalid form field (add style: fill="color")
19) 'success' - Icon for valid form field (add style in css: fill="color")
20) 'close-btn' - Icon for close burger-menu (add style: fill="color")

*/

export const Icon = ({ name, className, size }) => {
  switch (name) {
    // 1) Total income icon (add style: fill="color")
    case "check":
      return (
        <Svg className={className} size={size}>
          <path d="M4 12l-4 4 12 12 20-20-4-4-16 16-8-8z"></path>
        </Svg>
      );

    // 2) Total expense icon (add style: fill="color")
    case "eye":
      return (
        <Svg className={className} size={size}>
          <path
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-miterlimit="4"
            stroke-width="3.2"
            d="M1.333 16c0 0 5.333-10.667 14.667-10.667s14.667 10.667 14.667 10.667-5.333 10.667-14.667 10.667c-9.333 0-14.667-10.667-14.667-10.667z"
          ></path>
          <path
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-miterlimit="4"
            stroke-width="3.2"
            d="M16 20c2.209 0 4-1.791 4-4s-1.791-4-4-4c-2.209 0-4 1.791-4 4s1.791 4 4 4z"
          ></path>
        </Svg>
      );

    // 3) Arrow-up in header UserBarBtn (add styles: stroke="color", fill="none")
    case "eye-off":
      return (
        <Svg className={className} size={size}>
          <path
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-miterlimit="4"
            stroke-width="3.2"
            d="M23.92 23.92c-2.279 1.737-5.055 2.7-7.92 2.747-9.333 0-14.667-10.667-14.667-10.667 1.659-3.091 3.959-5.791 6.747-7.92M13.2 5.653c0.918-0.215 1.857-0.322 2.8-0.32 9.333 0 14.667 10.667 14.667 10.667-0.809 1.514-1.775 2.94-2.88 4.253M18.827 18.827c-0.366 0.393-0.808 0.708-1.299 0.927s-1.020 0.336-1.557 0.346c-0.537 0.009-1.071-0.089-1.569-0.291s-0.951-0.5-1.33-0.88-0.679-0.832-0.88-1.33c-0.201-0.498-0.3-1.032-0.29-1.569s0.127-1.067 0.346-1.557 0.534-0.932 0.927-1.298"
          ></path>
          <path
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-miterlimit="4"
            stroke-width="3.2"
            d="M1.333 1.333l29.333 29.333"
          ></path>
        </Svg>
      );

    // 4) Arrow-down in header UserBarBtn(add styles: stroke="color", fill="none")
    case "heart":
      return (
        <Svg className={className} size={size}>
          <path
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-miterlimit="4"
            stroke-width="2.4615"
            d="M27.787 6.147c-0.681-0.681-1.49-1.222-2.379-1.591s-1.844-0.559-2.807-0.559-1.917 0.19-2.807 0.559c-0.89 0.369-1.699 0.909-2.38 1.591l-1.413 1.413-1.413-1.413c-1.376-1.376-3.241-2.148-5.187-2.148s-3.811 0.773-5.187 2.148c-1.376 1.376-2.148 3.241-2.148 5.187s0.773 3.811 2.148 5.187l11.787 11.787 11.787-11.787c0.681-0.681 1.222-1.49 1.591-2.38s0.559-1.844 0.559-2.807-0.19-1.917-0.559-2.807c-0.369-0.89-0.909-1.699-1.591-2.38z"
          ></path>
        </Svg>
      );

    // 5) Burger-menu (add style: stroke="color")
    case "people-icon":
      return (
        <Svg className={className} size={size}>
          <path d="M19.043 22.529l-0.548 2.044-14.306-3.833 0.548-2.044c0 0 1.095-4.087 8.248-2.171s6.058 6.004 6.058 6.004zM18.067 11.863c0.19-0.707 0.165-1.455-0.070-2.149s-0.671-1.302-1.252-1.747c-0.581-0.446-1.281-0.709-2.012-0.757s-1.459 0.122-2.094 0.488c-0.634 0.366-1.146 0.912-1.469 1.569s-0.446 1.395-0.35 2.121c0.096 0.726 0.404 1.407 0.887 1.958s1.118 0.946 1.825 1.135c0.949 0.254 1.959 0.121 2.81-0.37s1.471-1.3 1.725-2.248zM20.077 18.425c0.498 0.654 0.846 1.41 1.021 2.214s0.171 1.636-0.011 2.438l-0.548 2.044 4.087 1.095 0.548-2.044c0 0 0.994-3.709-5.097-5.747zM21.58 8.971c-0.702-0.192-1.447-0.166-2.134 0.074 0.388 1.034 0.443 2.163 0.158 3.229s-0.898 2.017-1.751 2.718c0.475 0.552 1.106 0.947 1.811 1.131 0.948 0.254 1.959 0.121 2.81-0.37s1.471-1.3 1.725-2.248c0.254-0.949 0.121-1.959-0.37-2.81s-1.3-1.471-2.248-1.725z"></path>
        </Svg>
      );

    // 6) Icon instead user avatar, default user-logo (add style: fill="color")
    case "question-mark":
      return (
        <Svg className={className} size={size}>
          <path d="M11.294 10c0-2.206 1.688-4 3.765-4h1.882c2.076 0 3.765 1.794 3.765 4v0.225c0 1.363-0.653 2.631-1.729 3.362l-2.482 1.694c-0.729 0.498-1.328 1.182-1.744 1.99s-0.633 1.714-0.633 2.635v0.094c0 1.106 0.841 2 1.882 2s1.882-0.894 1.882-2v-0.088c0-0.512 0.247-0.987 0.647-1.262l2.482-1.694c2.153-1.475 3.459-4.006 3.459-6.731v-0.225c0-4.419-3.371-8-7.529-8h-1.882c-4.159 0-7.529 3.581-7.529 8 0 1.106 0.841 2 1.882 2s1.882-0.894 1.882-2zM16 30c0.624 0 1.223-0.263 1.664-0.732s0.689-1.105 0.689-1.768c0-0.663-0.248-1.299-0.689-1.768s-1.040-0.732-1.664-0.732-1.223 0.263-1.664 0.732c-0.441 0.469-0.689 1.105-0.689 1.768s0.248 1.299 0.689 1.768 1.040 0.732 1.664 0.732z"></path>
        </Svg>
      );

    // 7) Icon user for header profile settings (add styles: stroke="color", fill="none")
    case "letter-r":
      return (
        <Svg className={className} size={size}>
          <path d="M4.476 32v-31.030h11.061c2.404 0 4.399 0.414 5.985 1.242 1.596 0.828 2.788 1.975 3.576 3.439 0.788 1.455 1.182 3.136 1.182 5.045 0 1.899-0.399 3.571-1.197 5.015-0.788 1.434-1.98 2.55-3.576 3.348-1.586 0.798-3.581 1.197-5.985 1.197h-8.379v-4.030h7.955c1.515 0 2.747-0.217 3.697-0.652 0.96-0.434 1.662-1.066 2.106-1.894s0.667-1.823 0.667-2.985c0-1.172-0.227-2.187-0.682-3.045-0.444-0.859-1.146-1.515-2.106-1.97-0.95-0.465-2.197-0.697-3.742-0.697h-5.879v27.015h-4.682zM19.794 18l7.667 14h-5.333l-7.515-14h5.182z"></path>
        </Svg>
      );

    // 8) Icon for button log-out (add styles: stroke="color", fill="none")
    case "star":
      return (
        <Svg className={className} size={size}>
          <path
            stroke-linejoin="miter"
            stroke-linecap="butt"
            stroke-miterlimit="4"
            stroke-width="2.4"
            d="M12.4 9.394l3.6-6.822 3.6 6.822c0.318 0.603 0.899 1.025 1.571 1.141l7.601 1.315-5.376 5.532c-0.475 0.489-0.697 1.171-0.6 1.846l1.098 7.635-6.922-3.404c-0.612-0.301-1.329-0.301-1.941 0l-6.922 3.404 1.098-7.635c0.097-0.675-0.125-1.357-0.6-1.846l-5.376-5.532 7.601-1.315c0.672-0.116 1.252-0.538 1.571-1.141zM29.035 11.579v0zM7.767 27.031c0 0 0 0 0 0h-0z"
          ></path>

          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeMiterlimit="4"
            strokeWidth="2.4471"
            d="M27.294 16h-15.059"
          ></path>
        </Svg>
      );

    // 9) Date input icon (add styles: stroke="color", fill="none")
    case "user-icon":
      return (
        <Svg className={className} size={size}>
          <path d="M16 5.333c1.415 0 2.771 0.562 3.771 1.562s1.562 2.357 1.562 3.771-0.562 2.771-1.562 3.771c-1 1-2.357 1.562-3.771 1.562s-2.771-0.562-3.771-1.562c-1-1-1.562-2.357-1.562-3.771s0.562-2.771 1.562-3.771c1-1 2.357-1.562 3.771-1.562zM16 18.667c5.893 0 10.667 2.387 10.667 5.333v2.667h-21.333v-2.667c0-2.947 4.773-5.333 10.667-5.333z"></path>
        </Svg>
      );

    // 10) Time input icon (add styles: stroke="color", fill="none")
    case "arrow-up-right":
      return (
        <Svg className={className} size={size}>
          <path d="M7.414 27.414l16.586-16.586v7.172c0 1.105 0.895 2 2 2s2-0.895 2-2v-12c0-0.809-0.487-1.538-1.235-1.848-0.248-0.103-0.508-0.151-0.765-0.151v-0.001h-12c-1.105 0-2 0.895-2 2s0.895 2 2 2h7.172l-16.586 16.586c-0.391 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
        </Svg>
      );

    // 0) Site logo as default value (without props "name")
    default:
      return (
        <svg
          className={className}
          width="27"
          height="16"
          viewBox="0 0 27 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.57 11.3809C18.5176 11.2404 13.8751 2.00221 13.8053 1.86171C13.561 1.26456 13.1246 0.755229 12.5487 0.403966C11.1001 -0.439063 9.25003 0.0527039 8.41228 1.51044C7.83633 2.51154 7.87123 3.68827 8.42973 4.61911C8.48209 4.74206 12.9152 13.5939 13.0025 13.7344C13.0548 13.8749 13.1246 13.9978 13.1944 14.1383C13.4388 14.7355 13.8751 15.2448 14.4511 15.5961C15.8997 16.4391 17.7497 15.9649 18.5875 14.5071C19.1809 13.5061 19.1285 12.3118 18.57 11.3809Z"
            fill="#0EF387"
          />
          <path
            d="M13.212 5.12843C13.7182 4.58397 14.0323 3.84632 14.0323 3.03842C14.0323 1.36992 12.6884 0 11.0129 0C9.98319 0 9.07563 0.50933 8.53458 1.29967C8.42986 1.40505 0.907563 10.7486 0.820297 10.8716C0.314156 11.416 0 12.1537 0 12.9616C0 14.6476 1.36134 16 3.01939 16C4.04913 16 4.95669 15.4907 5.49774 14.7003C5.60246 14.5774 13.1422 5.25137 13.212 5.12843Z"
            fill="#FAFAFA"
          />
          <path
            d="M26.1794 5.12843C26.6856 4.58397 26.9997 3.84632 26.9997 3.03842C26.9997 1.35236 25.6384 0 23.9803 0C22.9506 0 22.043 0.50933 21.502 1.29967C21.3973 1.40505 13.8575 10.7486 13.7702 10.8716C13.2641 11.416 12.95 12.1537 12.95 12.9616C12.95 14.6476 14.3113 16 15.9693 16C16.9991 16 17.9066 15.4907 18.4477 14.7003C18.5699 14.5774 26.0922 5.25137 26.1794 5.12843Z"
            fill="#FAFAFA"
          />
        </svg>
      );
  }
};
