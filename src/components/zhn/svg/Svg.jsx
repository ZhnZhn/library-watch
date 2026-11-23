
const SVG_LINECAP_PROPS = {
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

const _crWidthHeightViewBoxProps = (
  width,
  height,
  viewBox
) => ({
  "aria-hidden": "true",
  xlmns: "http://www.w3.org/2000/svg",
  width,
  height,
  viewBox,
  ...SVG_LINECAP_PROPS
});

export const Svg = ({
  w,
  h=w,
  children,
  ...restProps
}) => (
  <svg
    {..._crWidthHeightViewBoxProps(
      `${w}px`,
      `${h}px`,
      `0 0 ${w} ${h}`
    )}
    {...restProps}
  >
    {children}
  </svg>
)

export const Svg100 = ({
  w=12,
  h=w,
  children,
  ...restProps
}) => (
  <svg
    {..._crWidthHeightViewBoxProps(
      "100%",
      "100%",
      `0 0 ${w} ${h}`
    )}
    {...restProps}
    preserveAspectRatio="none"
  >
   {children}
  </svg>
)
