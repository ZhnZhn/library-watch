"use strict";

exports.__esModule = true;
exports.getRowSelectProps = void 0;
const _crRowSelectProps = (caption, placeholder, options) => ({
  caption,
  placeholder,
  options
});
const SE_QUESTIONS_SORT_OPTIONS = [{
    caption: "Activity, Recent Day",
    value: "activity"
  }, {
    caption: "Creation Date",
    value: "creation"
  }, {
    caption: "Score",
    value: "votes"
  }, {
    caption: "Hot Tab",
    value: "hot"
  }, {
    caption: "Hot Week Tab",
    value: "week"
  }, {
    caption: "Hot Month Tab",
    value: "month"
  }],
  NPM_TOP_VERSIONS_OPTIONS = [{
    caption: "Only releases",
    value: "R"
  }, {
    caption: "All versions",
    value: "A"
  }];
const getRowSelectProps = requestType => requestType === "SE_QUESTIONS" ? _crRowSelectProps("Sort By", "Default: Hot Week Tab", SE_QUESTIONS_SORT_OPTIONS) : requestType === "NPM_TOP_VERSIONS" ? _crRowSelectProps("Versions", "Default: Only releases", NPM_TOP_VERSIONS_OPTIONS) : {};
exports.getRowSelectProps = getRowSelectProps;
//# sourceMappingURL=getRowSelectProps.js.map