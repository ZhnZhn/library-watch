const crModelMore = ({
  chartType,
  onMinWidth,
  onInitialWidth,
  onPlusWidth,
  onMinusWidth,
  onRemoveAll
}) => ({
  // cn property name for item
  pageWidth: 180,
  maxPages: 2,
  p0: [
    {
      id: 'p1',
      type: 'sub',
      name: 'Resize'
    },{
      name: 'Remove All Items',
      onClick: onRemoveAll,
      isClose: true
    }
  ],
  p1: [
    {
      name: 'to MinWidth',
      onClick: onMinWidth
    },{
      name: 'to InitialWidth',
      onClick: onInitialWidth
    },{
      name: '+10px to Width',
      onClick: onPlusWidth
    },{
      name: '-10px to Width',
      onClick: onMinusWidth
    }
  ]
});

export default crModelMore
