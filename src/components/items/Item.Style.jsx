import ButtonCircle from '../zhn/ButtonCircle';
import { SourceLink } from '../zhn/Link';

const S_ROOT = {
  position: 'relative',
  lineHeight: 1.5,
  marginBottom: 10
}

export const Item = (props) => (
  <div style={S_ROOT}>
    {props.children}
  </div>
)

export const S_BT_MORE = {
  position: 'relative',
  top: 3,
  marginRight: 4
}
export const S_CAPTION_OPEN = {
  display: 'inline-block',
  color: '#a487d4',
  paddingLeft: 8,
  maxWidth: 500,
  textAlign: 'left',
  fontWeight: 'bold',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  cursor: 'pointer'
}
export const S_SPAN_VERSION = {
  color: '#80c040',
  paddingLeft: 10,
  paddingRight: 10
}

const S_BTN_CIRCLE = {
  marginTop: -8,
  marginLeft: 10
}

export const ItemButtonCircle = (props) => (
  <ButtonCircle 
     style={S_BTN_CIRCLE}
     {...props}
  />
)

export const ButtonAddToWatch = (props) => (
  <ItemButtonCircle     
     caption="W"
     title="Add to Watch"     
     style={props.style}
     onClick={props.onClick}      
  />
)

export const S_PT_8 = {
  paddingTop: 8
}
export const S_PB_8 = {
  paddingBottom: 8
}
export const S_PR_8 = {
  paddingRight: 8
}
export const S_ML_8 = {
  marginLeft: 8
}

export const CHART_OPTIONS_LEGEND_TOP = {
  legend: {
    position: "top"
  }
}

const S_SOURCE_LINK = {
  margin: "4px 0 0 16px"
};

export const ItemSourceLink = (props) => (
   <SourceLink
     style={S_SOURCE_LINK}
     href={props.href}
   >
     {props.children}
   </SourceLink>
)