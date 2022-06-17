interface ImageProps {
  className: string,
  source: string,
  alt: string,
  height?: string,
  width?: string
}

const Image = (props: ImageProps) => {
	return (
    <img className={props.className}
      src={props.source}
      alt={props.alt}
      height={props.height}
      width={props.width} />
    )
};

export default Image;
