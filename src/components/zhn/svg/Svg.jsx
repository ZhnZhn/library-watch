import { crTransformRotateStyle } from '../../styleFn';

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

export const SvgArrowDown = (props) => (
  <Svg
    w="20"
    focusable="false"
    style={props.style}
  >
    <path d="M 3,6 L 10,12.5 M 10,12.5 L 17,6" />
  </Svg>
)

const S_ARROW = {
  stroke: 'currentColor',
  strokeWidth: 2.5
}
, S_ARROW_RIGHT = crTransformRotateStyle(270)
, S_ARROW_LEFT = crTransformRotateStyle(90);

const _fSvgArrow = (arrowStyle) => ({
  style
}) => (
  <SvgArrowDown
    style={{
      ...S_ARROW,
      ...arrowStyle,
      ...style
    }}
  />
);

export const SvgArrowRight = _fSvgArrow(S_ARROW_RIGHT)
export const SvgArrowLeft = _fSvgArrow(S_ARROW_LEFT)
