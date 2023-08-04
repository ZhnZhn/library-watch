import { useMsEdit } from '../../flux/watch-list/watchListStore';

const useWatchListMsEdit = (
  forActionType,
  setValidationMessages,
  hClear
) => {
  useMsEdit(msEdit => {
    if (msEdit && msEdit.forActionType === forActionType) {
      if (msEdit.messages) {
        setValidationMessages(msEdit.messages)
      } else {
        hClear()
      }
    }
  })
}

export default useWatchListMsEdit
