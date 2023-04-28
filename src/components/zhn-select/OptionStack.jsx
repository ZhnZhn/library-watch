import { CL_OPTIONS_ROW } from './CL';

/*eslint-disable jsx-a11y/click-events-have-key-events*/
const OptionStack = ({
  options,
  indexActiveOption,
  propCaption,
  ItemOptionComp,
  onClick
}) => options
  .map((item, index)=>(<div
      key={index}
      role="option"
      aria-selected={indexActiveOption === index}
      tabIndex="-1"
      className={CL_OPTIONS_ROW}
      data-index={index}
      onClick={evt => onClick(item, evt)}
    >
      <ItemOptionComp
         item={item}
         propCaption={propCaption}
      />
    </div>
  ));
/*eslint-enable jsx-a11y/click-events-have-key-events*/

export default OptionStack
