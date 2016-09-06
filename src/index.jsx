import React from 'react';
import { render } from 'react-dom';

//import Highcharts from 'highcharts';
//import HighchartsMore from 'highcharts/lib/highcharts-more';
//import HighchartsTreemap from 'highcharts/lib/modules/treemap';

//import DOMPurify from 'purify';

//import TemplateCaption from './components/TemplateCaption';
import AppGitHub from './components/AppGitHub';

const _fnRemoveSpinner = function(){  
  document.body.removeChild(document.getElementById('spinner'));
}


render(<AppGitHub />, document.getElementById("app"), _fnRemoveSpinner);
