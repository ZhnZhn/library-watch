import { safeMap } from "../uiApi";
import {
  CL_LIB,
  CL_LIB_VALUE,
  CL_LIB_VALUE_TITLE,
  CL_FILE_ITEM,
  CL_SOURCE_LINK
} from "../styleFn";

import formatStrDate from "../../utils/formatStrDate";

import OpenClose2 from "../zhn/OpenClose2";
import Link from "../zhn/Link";

const _isArr = Array.isArray;

const Token = ({
  caption,
  value
}) => (
  <>
    <span className={CL_LIB_VALUE_TITLE}>
      {`${caption}:`}
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
}) => safeMap(files, (file, index) => (
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
      <OpenClose2
        caption={`Files (${_isArr(files) ? files.length : ""})`}
        isClose={true}
      >
        <FileList files={files} />
      </OpenClose2>
      <Link
         className={CL_SOURCE_LINK}
         href={html_url}
      >
         Link to description of commit
      </Link>
    </div>
  );
};

export default TagDetail
