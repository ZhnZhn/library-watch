import A from '../zhn-atoms/A';
import {
  CL_LIB,
  CL_LIB_VALUE,
  CL_LIB_VALUE_TITLE,
  CL_FILE_ITEM,
  CL_SOURCE_LINK
} from '../styles/CL';

import formatStrDate from '../../utils/formatStrDate';

const _isArr = Array.isArray;

const Token = ({
  caption,
  value
}) => (
  <>
    <span className={CL_LIB_VALUE_TITLE}>
      {caption+':'}
    </span>
    <span className={CL_LIB_VALUE}>
      {value}
    </span>
  </>
);

const CellValue = props => (
  <div>
    <Token {...props} />
  </div>
);

const CellValueDate = ({
  caption,
  value,
  date
}) => (
  <div>
    <Token
      caption={caption}
      value={value}
    />
    <Token
      caption="Date"
      value={formatStrDate(date)}
    />
  </div>
);


const FileList = ({
  files
}) => (files || [])
 .map((file, index) => (
    <div key={index} className={CL_FILE_ITEM}>
      {file ? file.filename : null}
    </div>
 ));

const TagDetail = ({ json }) => {
  if (!json) { return null; }
  const {
    commit,
    files,
    stats,
    html_url
  } = json
  , {
    author,
    message,
    committer
  } = commit || {}
  , {
    date:authorDate,
    name:authorName
  } = author || {}
  , {
    date:committerDate,
    name:committerName
  } = committer || {}
  , {
    total,
    additions,
    deletions
  } = stats || {};


  return (
    <div className={CL_LIB}>
      <CellValue
        caption="Message"
        value={message}
      />
      <CellValueDate
        caption="Author"
        value={authorName}
        date={authorDate}
      />
      <CellValueDate
        caption="Committer"
        value={committerName}
        date={committerDate}
      />
      <div>
        <Token
          caption="Total"
          value={total}
        />
        <Token
          caption="Additions"
          value={additions}
        />
        <Token
          caption="Deletions"
          value={deletions}
        />
      </div>
      <A.OpenClose2
        caption={`Files (${_isArr(files) ? files.length : ''})`}
        isClose={true}
      >
        <FileList files={files} />
      </A.OpenClose2>
      <A.Link
         className={CL_SOURCE_LINK}
         href={html_url}
      >
         Link to description of commit
      </A.Link>
    </div>
  );
};

export default TagDetail
