import A from '../zhn-atoms/A';

import formatStrDate from '../../utils/formatStrDate';

const CL = {
  LIB_VT: "library__value-title",
  LIB_V: "library__value",
  ROW_ITEM: "row__item"
};

const Token = ({ caption, value }) => (
  <>
    <span className={CL.LIB_VT}>
      {caption+':'}
    </span>
    <span className={CL.LIB_V}>
      {value}
    </span>
  </>
);

const CellValue = props => (
  <div>
    <Token {...props} />
  </div>
);

const CellValueDate = ({ caption, value, date }) => (
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


const FileList = ({ files }) => (files || [])
 .map((file, index) => {
   const { filename } = file;
   return (
     <div key={index} className={CL.ROW_ITEM}>
       {filename}
     </div>
   );
 });

const TagDetail = ({ json }) => {
  if (!json) { return null; }
  const { commit, files, stats, html_url } = json
  , { author, message, committer } = commit || {}
  , { date:authorDate, name:authorName } = author || {}
  , { date:committerDate, name:committerName } = committer || {}
  , { total, additions, deletions } = stats || {};

  return (
    <div className="library">
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
      <A.OpenClose2 caption={`Files (${files.length})`} isClose={true}>
        <FileList files={files} />
      </A.OpenClose2>
      <a
         href={html_url}
         className="github-link"
      >
         Link to description of commit
      </a>
    </div>
  );
};

export default TagDetail
