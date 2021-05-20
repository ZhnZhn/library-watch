import { Component } from 'react';

import has from '../../has';
import withDnDStyle from '../decorators/withDnDStyle';
import A from '../../zhn-atoms/A';

const CL = 'row-item not-selected';

const S = {
  NONE: {
    display: 'none'
  },
  ITEM_CAPTION: {
    paddingBottom: 8,
    display: 'flex',
    flexWrap: 'wrap'
  },
  FISH_BADGE: {
    display: 'inline-block',
    color: '#d7bb52',
    fontSize: 18,
    paddingRight: 8
  },
  GREEN_BADGE : {
    display: 'inline-block',
    color: '#80c040',
    fontSize: 18,
    paddingRight: 8
  },
  BLACK_BAGDE : {
    display: 'inline-block',
    color: 'black',
    fontSize: 18,
    paddingRight: 8
  },
  SPAN_TAG : {
    display: 'inline-block',
    color: 'black',
    backgroundColor: 'gray',
    paddingTop: 4,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 4,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 6,
    marginBottom: 2,
    borderRadius: 16
  },
  DATE_AGO: {
    display: 'inline-block',
    fontSize: '18px'
  },
  TITLE: {
    paddingBottom: 8,
    fontSize: '18px'
  }
};

const { HAS_TOUCH } = has;

const DELTA = HAS_TOUCH ? {
  MARK_REMOVE: 50,
  REMOVE_ITEM: 90,
  REMOVE_UNDER: 150
} : {
  MARK_REMOVE: 25,
  REMOVE_ITEM: 35,
  REMOVE_UNDER: 150
};

const TOKEN_ANSWER = HAS_TOUCH ? 'A' : (
  <span role="img" arial-label="hammer and pick">&#x2692;</span>
);
const TOKEN_SCORE = HAS_TOUCH ? 'S' : (
  <span role="img" aria-label="fish">&#x1F41F;</span>
);
const TOKEN_VIEW = HAS_TOUCH ? 'V' : (
  <span role="img" aria-label="wheel of dharma">&#x2638;</span>
);
const TOKEN_REPUTATION = HAS_TOUCH ? 'R' : (
  <span role="img" arial-label="shamrock">&#x2618;</span>
);


const _getTouchesClientX = (ev) =>
  (((ev || {}).touches || [])[0] || {}).clientX || 0;
const _getChangedTouches = (ev) =>
  (((ev || {}).changedTouches || [])[0] || {}).clientX || 0;


const TagList = ({ tags }) => (
  <div>
    {(tags || []).map((tag, index) => (
        <span key={index} style={S.SPAN_TAG}>
          {tag}
        </span>
    ))}
  </div>
);


const _noopFn = () => {};


@withDnDStyle
class TaggedItem extends Component {
  static defaultProps = {
    onRemoveUnder: _noopFn,
    onRemoveItem: _noopFn
  }

  constructor(props){
    super(props)
    this._itemHandlers = HAS_TOUCH
      ? {
          onTouchStart: this._onTouchStart.bind(this),
          onTouchMove: this._onTouchMove.bind(this),
          onTouchEnd: this._onTouchEnd.bind(this)
        }
      : {
          draggable: true,
          onDragStart: this._dragStart.bind(this),
          onDragEnd: this._dragEnd.bind(this),
          onDrop: this._preventDefault,
          onDragOver: this._preventDefault,
          onDragEnter: this._preventDefault,
          onDragLeave: this._preventDefault
        }

    this.state = {
      isClosed: false
    }
  }

  _dragStart = (ev) => {
    this._clientX = ev.clientX
    this.dragStartWithDnDStyle(ev)
    if (ev && ev.dataTransfer) {
      ev.dataTransfer.effectAllowed="move"
      ev.dataTransfer.dropEffect="move"
    }
  }
  _onTouchStart = (ev) => {
    const _clientX = _getTouchesClientX(ev);
    if (_clientX) {
      this._clientX = _clientX
    }
  }
  _onTouchMove = (ev) => {
    const _clientX = _getTouchesClientX(ev);
    if (_clientX
        && Math.abs(this._clientX -  _clientX) > DELTA.MARK_REMOVE) {
      this.dragStartWithDnDStyle(ev)
    }

  }
  _dragEnd = (ev) => {
    ev.preventDefault()
    this.dragEndWithDnDStyle()
    const _deltaX = Math.abs(this._clientX - ev.clientX)
    , { item, onRemoveUnder } = this.props;
    if (_deltaX > DELTA.REMOVE_UNDER) {
      onRemoveUnder(item)
    } else if (_deltaX > DELTA.REMOVE_ITEM){
      this._onHide()
    }
  }
  _onTouchEnd = (ev) => {
    //ev.preventDefault()
    this.dragEndWithDnDStyle()
    const _clientX = _getChangedTouches(ev);
    if (_clientX) {
      const _deltaX = Math.abs(this._clientX - _clientX)
          , { item, onRemoveUnder } = this.props;
      if (_deltaX > DELTA.REMOVE_UNDER) {
        onRemoveUnder(item)
      } else if (_deltaX > DELTA.REMOVE_ITEM){
        this._onHide()
      }
    }
  }
  _preventDefault = (ev) => {
    ev.preventDefault()
  }

  _onHide = () => {
     const { onRemoveItem, item } = this.props;
     onRemoveItem(item)
     this.setState({ isClosed: true })
   }


  render(){
    const { item } = this.props
    , {       
       is_answered,
       answer_count, score, view_count,
       title, dateAgo, link,
       owner, tags
    } = item
    , { reputation, display_name } = owner || {}
    , { isClosed } = this.state
    , _style = isClosed ? S.NONE : void 0;
    return (
      <div
        className={CL}
        style={_style}
        {...this._itemHandlers}
      >
         <a href={link}>
           <div style={S.ITEM_CAPTION}>
             <span style={is_answered ? S.GREEN_BADGE: S.FISH_BADGE}>
               {TOKEN_ANSWER}&nbsp;{answer_count}
             </span>
             <span style={S.FISH_BADGE}>
               {TOKEN_SCORE}&nbsp;{score}
             </span>
             <span style={S.BLACK_BAGDE}>
               {TOKEN_VIEW}&nbsp;{view_count}
             </span>
             <span style={S.GREEN_BADGE}>
               {TOKEN_REPUTATION}&nbsp;{reputation}
             </span>
             <span style={S.BLACK_BAGDE}>
               {display_name}
             </span>
             <A.DateAgo
                style={S.DATE_AGO}
                dateAgo={dateAgo}
             />
           </div>
           <div style={S.TITLE}>
             {title}
           </div>
           <TagList tags={tags} />
         </a>
      </div>
    );
  }
}

export default TaggedItem
