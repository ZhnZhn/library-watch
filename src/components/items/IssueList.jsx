import { safeMap } from '../uiApi';
import { memoItems } from '../hoc/memoFn';

import { crDateAgo } from '../../utils/dateFn';
import IssueItem from './IssueItem';

const IssueList = memoItems(({
  items
}) => safeMap(items, (item, index) => {
    const {
      state,
      number,
      created_at,
      updated_at,
      title,
      body,
      comments,
      html_url
    } = item
    , _creadedAt = crDateAgo(created_at)
    , _updated = created_at === updated_at
        ? ''
        : crDateAgo(updated_at)
    , _updatedAt = _creadedAt === _updated
        ? ''
        : _updated;

   return (
      <IssueItem
        key={index}
        url={html_url}
        state={state}
        number={number}
        createdAt={_creadedAt}
        updatedAt={_updatedAt}
        title={title}
        comments={comments}
        body={body}
      />
   );
}))

export default IssueList
