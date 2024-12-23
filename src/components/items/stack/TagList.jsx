import { safeMap } from "../../uiApi";
const S_SPAN_TAG = {
  display: "inline-block",
  color: "black",
  padding: "4px 8px",
  margin: "6px 8px 2px 8px",
  borderRadius: 16,
  backgroundColor: "gray"
};

const TagList = ({
  tags
}) => (
  <div>
    {safeMap(tags, (tag, index) => (
       <span key={index} style={S_SPAN_TAG}>
         {tag}
       </span>
    ))}
  </div>
);

export default TagList
