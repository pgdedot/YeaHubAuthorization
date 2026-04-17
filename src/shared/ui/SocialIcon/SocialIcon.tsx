interface Props {
	src: string;
	srcTo: string;
	alt: string;
	id?: string;
}

const SocialIcon = ({ src, alt, srcTo, ...otherProps }: Props) => {
	return (
		<article>
      <a href={srcTo}>
        <img src={src} alt={alt} {...otherProps}/>
      </a>
		</article>
	);
};

export default SocialIcon;
