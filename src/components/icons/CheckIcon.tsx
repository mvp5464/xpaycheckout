export default function CheckIcon({
  className = "w-6 h-6",
}: {
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      focusable="false"
      color='var(--token-dea7b056-bc6d-4fe0-8882-9fcc1d0b94de, rgb(20, 20, 20)) /* {"name":"Main color"} */'
      className={className}
    >
      <g
        color='var(--token-dea7b056-bc6d-4fe0-8882-9fcc1d0b94de, rgb(20, 20, 20)) /* {"name":"Main color"} */'
        fontWeight={"regular"}
      >
        <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
      </g>
    </svg>
  );
}
