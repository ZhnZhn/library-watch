const S_SPAN_TAG = {
  display: 'inline-block',
  color: 'black',
  padding: '4 8',
  margin: '6 8 2 8',
  borderRadius: 16,
  backgroundColor: 'gray'
};

const TagList = ({
  tags
}) => (
  <div>
    {(tags || []).map((tag, index) => (
        <span key={index} style={S_SPAN_TAG}>
          {tag}
        </span>
    ))}
  </div>
);

export default TagList
