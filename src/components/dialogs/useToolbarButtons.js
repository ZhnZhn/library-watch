import useRefInit from '../hooks/useRefInit';

const _crToolbarBt = (
  caption,
  title,
  onClick
) => onClick ? ({
  caption,
  title,
  onClick
}) : null;

const useToolbarButtons = (
  toggleIsLabels,
  toggleIsDates
) => useRefInit(() => [
    _crToolbarBt('L', "Click to toggle row's labels", toggleIsLabels),
    _crToolbarBt('D', 'Click to toggle date input', toggleIsDates)
  ].filter(Boolean)
)[0]

export default useToolbarButtons
