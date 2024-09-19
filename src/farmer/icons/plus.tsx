export default function IconPlus({
  size = '100%',
  fill = '#0f172a',
}: {
  size?: number | string
  fill?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      // fill="none"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="style=stroke">
        <g id="add">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9988 5.09338C12.413 5.09338 12.7488 5.42916 12.7488 5.84338L12.7487 18.1595C12.7487 18.5737 12.4129 18.9095 11.9987 18.9095C11.5845 18.9095 11.2487 18.5737 11.2487 18.1595L11.2488 5.84337C11.2488 5.42916 11.5846 5.09337 11.9988 5.09338Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.9069 12.0015C18.9069 12.4157 18.5711 12.7515 18.1569 12.7515L5.84071 12.7514C5.4265 12.7514 5.09072 12.4156 5.09072 12.0014C5.09072 11.5872 5.42651 11.2514 5.84072 11.2514L18.1569 11.2515C18.5711 11.2515 18.9069 11.5873 18.9069 12.0015Z"
          />
        </g>
      </g>
    </svg>
  )
}
