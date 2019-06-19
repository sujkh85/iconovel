import React from "react";

export default class SVG {
  static getIcon = (iconName, size, color) => {
    return this[iconName](size, color);
  };
  static book = (size, color) => {
    return (
      <span style={{ fontSize: size }}>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="book"
          class="svg-inline--fa fa-book fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width={size + "px"}
          height={size + "px"}
        >
          <path
            fill={color ? color : "currentColor"}
            d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"
          />
        </svg>
      </span>
    );
  };
  static pen = (size, color) => {
    return (
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="pen"
        class="svg-inline--fa fa-pen fa-w-16"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width={size + "px"}
        height={size + "px"}
      >
        <path
          fill={color ? color : "currentColor"}
          d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"
        />
      </svg>
    );
  };
  static read = (size, color) => {
    return (
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="book-reader"
        class="svg-inline--fa fa-book-reader fa-w-16"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width={size + "px"}
        height={size + "px"}
      >
        <path
          fill={color ? color : "currentColor"}
          d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z"
        />
      </svg>
    );
  };
}
