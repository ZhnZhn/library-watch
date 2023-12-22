const S_COMP = {
  backgroundColor: '#4d4d4d',
  height: 'calc(100vh - 71px)',
  minHeight: 500,
  marginLeft: 10,
  borderRadius: 4,
  boxShadow: '1px 4px 6px 1px rgba(0, 0, 0, 0.6)'
}

export const S_BROWSER = {
  ...S_COMP,
  minWidth: 270,
  maxWidth: 400,
  paddingBottom: 16
};
export const S_ABOUT = {
  ...S_COMP,
  position: 'relative',
  minWidth: 300,
  maxWidth: 700,
  padding: '0px 0px 16px'
};

export const S_COMP_ITEM_LIST = {
  ...S_COMP,
  position: 'relative',
  width: 635,
  padding: '0px 0px 16px',
  overflowY: 'hidden',
  overflowX: 'hidden'
}
