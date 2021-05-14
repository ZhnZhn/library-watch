const STYLE = {
  ROOT : {
    position: 'relative',
    display: 'inline-block',
    height: 36,
    border: '1px solid',
    borderRadius: 10,
    cursor: 'pointer'
  },
  ROOT_UP : {
    color: '#a487d4',
    borderColor: '#a487d4',
    borderWidth: 2,
    fontWeight: 'bold'
  },
  ROOT_DOWN : {
    color: 'gray',
    borderColor: 'gray',
    borderWidth: 1,
    fontWeight: 'normal'
  },

  ITEM: {
    display: 'inline-block',
    paddingLeft: 5,
    paddingRight: 8
  },
  CIRCLE: {
    display: 'inline-block',
    marginLeft: 8,
    backgroundColor: 'gray',
    width: 12,
    height: 12,
    border: '1px solid gray',
    borderRadius: '50%'
  },
  CIRCLE_LOADING: {
    backgroundColor: 'transparent',
    border: 'none'
  },
  CIRCLE_UP: {
    backgroundColor: '#a487d4',
    borderColor: '#a487d4'
  },
  CIRCLE_DOWN: {
    backgroundColor: 'gray',
    borderColor: 'gray'
  },
  SPINNER: {
    top: 5,
    left: 2
  }
}

export default STYLE
