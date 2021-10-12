export default function RatioImage(props: any) {
  return <div
    className={`ratio-image fixed-aspect-image ${props.className || ""}`}
    style={{
      backgroundSize: `cover`,
      backgroundPosition: `center`,
      display: `flex`,
      maxWidth: `100%`,
      height: 0,
      backgroundImage: `url(${props.src})`,
      padding: `0 0 ${props.ratio || 100}%`
    }}
  />
}