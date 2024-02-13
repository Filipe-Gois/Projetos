import { IconBox, IconStyle } from "./style";

const Icon = ({ src = "", alt = "" }) => {
  return (
    <IconBox>
      <IconStyle src={src} alt={alt} />
    </IconBox>
  );
};

export default Icon;
