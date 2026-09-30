"use strict";

exports.__esModule = true;
exports.default = void 0;
const _isFn = fn => typeof fn === "function",
  _isStr = str => typeof str === "string",
  _isObj = obj => typeof obj === "object" && obj !== null,
  _isUndef = value => typeof value === "undefined",
  BYTE_ORDER_MARK = '\ufeff',
  BAD_DELIMITERS = ['\r', '\n', '"', BYTE_ORDER_MARK],
  DEFAULT_DELIMITER = ',',
  _isBadDelimiter = delimiter => !_isStr(delimiter) || BAD_DELIMITERS.indexOf(delimiter) > -1

  // $& means the whole matched string
  ,
  _escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
  _copy = obj => {
    if (!_isObj(obj)) return obj;
    const cpy = Array.isArray(obj) ? [] : {};
    for (const key in obj) cpy[key] = _copy(obj[key]);
    return cpy;
  },
  _stripBom = str => str.charCodeAt(0) === 0xfeff ? str.slice(1) : str;
const _getLength = strOrArr => strOrArr.length,
  _getCommentsToken = (configComments, delimiter) => {
    const comments = configComments === true ? '#' : _isBadDelimiter(configComments) ? false : configComments;
    if (comments === delimiter) {
      throw new Error('Comment character same as delimiter');
    }
    return comments;
  },
  _getNewlineToken = configNewline => configNewline !== '\n' && configNewline !== '\r' && configNewline !== '\r\n' ? '\n' : configNewline;
function Parser(config) {
  // Unpack the config object
  const delim = _isBadDelimiter(config.delimiter) ? ',' : config.delimiter,
    quoteChar = config.quoteChar == null ? '"' : config.quoteChar,
    escapeChar = _isUndef(config.escapeChar) ? quoteChar : config.escapeChar,
    _comments = config.comments,
    comments = _getCommentsToken(config.comments, delim),
    newline = _getNewlineToken(config.newline);
  let renamedHeaders = null,
    headerParsed = false
    // We're gonna need these at the Parser scope
    ,
    cursor = 0;
  this.parse = function (input, baseIndex, ignoreLastRow) {
    // For some reason, in Chrome, this speeds things up (!?)
    if (!_isStr(input)) throw new Error('Input must be a string');

    // We don't need to compute some of these every time parse() is called,
    // but having them in a more local scope seems to perform better
    const inputLen = _getLength(input),
      delimLen = _getLength(delim),
      newlineLen = _getLength(newline),
      commentsLen = _getLength(comments);

    // Establish starting state
    cursor = 0;
    let data = [],
      errors = [],
      row = [],
      lastCursor = 0;
    if (!input) return returnable();
    const quoteCharRegex = new RegExp(_escapeRegExp(escapeChar) + _escapeRegExp(quoteChar), 'g');
    let nextDelim = input.indexOf(delim, cursor),
      nextNewline = input.indexOf(newline, cursor),
      quoteSearch = input.indexOf(quoteChar, cursor);

    // Parser loop
    for (;;) {
      // Field has opening quote
      if (input[cursor] === quoteChar) {
        // Start our search for the closing quote where the cursor is
        quoteSearch = cursor;

        // Skip the opening quote
        cursor++;
        for (;;) {
          // Find closing quote
          quoteSearch = input.indexOf(quoteChar, quoteSearch + 1);

          //No other quotes are found - no other delimiters
          if (quoteSearch === -1) {
            if (!ignoreLastRow) {
              // No closing quote... what a pity
              errors.push({
                type: 'Quotes',
                code: 'MissingQuotes',
                message: 'Quoted field unterminated',
                row: _getLength(data),
                // row has yet to be inserted
                index: cursor
              });
            }
            return finish();
          }

          // Closing quote at EOF
          if (quoteSearch === inputLen - 1) {
            //const value = input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar);
            return finish(input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar));
          }

          // If this quote is escaped, it's part of the data; skip it
          // If the quote character is the escape character, then check if the next character is the escape character
          if (quoteChar === escapeChar && input[quoteSearch + 1] === escapeChar) {
            quoteSearch++;
            continue;
          }

          // If the quote character is not the escape character, then check if the previous character was the escape character
          if (quoteChar !== escapeChar && quoteSearch !== 0 && input[quoteSearch - 1] === escapeChar) {
            continue;
          }
          if (nextDelim !== -1 && nextDelim < quoteSearch + 1) {
            nextDelim = input.indexOf(delim, quoteSearch + 1);
          }
          if (nextNewline !== -1 && nextNewline < quoteSearch + 1) {
            nextNewline = input.indexOf(newline, quoteSearch + 1);
          }
          // Check up to nextDelim or nextNewline, whichever is closest
          const checkUpTo = nextNewline === -1 ? nextDelim : Math.min(nextDelim, nextNewline),
            spacesBetweenQuoteAndDelimiter = extraSpaces(checkUpTo);

          // Closing quote followed by delimiter or 'unnecessary spaces + delimiter'
          if (input.substr(quoteSearch + 1 + spacesBetweenQuoteAndDelimiter, delimLen) === delim) {
            row.push(input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar));
            cursor = quoteSearch + 1 + spacesBetweenQuoteAndDelimiter + delimLen;

            // If char after following delimiter is not quoteChar, we find next quote char position
            if (input[quoteSearch + 1 + spacesBetweenQuoteAndDelimiter + delimLen] !== quoteChar) {
              quoteSearch = input.indexOf(quoteChar, cursor);
            }
            nextDelim = input.indexOf(delim, cursor);
            nextNewline = input.indexOf(newline, cursor);
            break;
          }
          const spacesBetweenQuoteAndNewLine = extraSpaces(nextNewline);

          // Closing quote followed by newline or 'unnecessary spaces + newLine'
          if (input.substring(quoteSearch + 1 + spacesBetweenQuoteAndNewLine, quoteSearch + 1 + spacesBetweenQuoteAndNewLine + newlineLen) === newline) {
            row.push(input.substring(cursor, quoteSearch).replace(quoteCharRegex, quoteChar));
            saveRow(quoteSearch + 1 + spacesBetweenQuoteAndNewLine + newlineLen);
            nextDelim = input.indexOf(delim, cursor); // because we may have skipped the nextDelim in the quoted field
            quoteSearch = input.indexOf(quoteChar, cursor); // we search for first quote in next line

            break;
          }

          // Checks for valid closing quotes are complete (escaped quotes or quote followed by EOF/delimiter/newline) -- assume these quotes are part of an invalid text string
          errors.push({
            type: 'Quotes',
            code: 'InvalidQuotes',
            message: 'Trailing quote on quoted field is malformed',
            row: _getLength(data),
            // row has yet to be inserted
            index: cursor
          });
          quoteSearch++;
          continue;
        }
        continue;
      }

      // Comment found at start of new line
      if (comments && row.length === 0 && input.substring(cursor, cursor + commentsLen) === comments) {
        if (nextNewline === -1)
          // Comment ends at EOF
          return returnable();
        cursor = nextNewline + newlineLen;
        nextNewline = input.indexOf(newline, cursor);
        nextDelim = input.indexOf(delim, cursor);
        continue;
      }

      // Next delimiter comes before next newline, so we've reached end of field
      if (nextDelim !== -1 && (nextDelim < nextNewline || nextNewline === -1)) {
        row.push(input.substring(cursor, nextDelim));
        cursor = nextDelim + delimLen;
        // we look for next delimiter char
        nextDelim = input.indexOf(delim, cursor);
        continue;
      }

      // End of row
      if (nextNewline !== -1) {
        row.push(input.substring(cursor, nextNewline));
        saveRow(nextNewline + newlineLen);
        continue;
      }
      break;
    }
    return finish();
    function pushRow(row) {
      data.push(row);
      lastCursor = cursor;
    }

    /**
              * checks if there are extra spaces after closing quote and given index without any text
              * if Yes, returns the number of spaces
              */
    function extraSpaces(index) {
      let spaceLength = 0;
      if (index !== -1) {
        const textBetweenClosingQuoteAndIndex = input.substring(quoteSearch + 1, index);
        if (textBetweenClosingQuoteAndIndex && textBetweenClosingQuoteAndIndex.trim() === '') {
          spaceLength = textBetweenClosingQuoteAndIndex.length;
        }
      }
      return spaceLength;
    }

    /**
     * Appends the remaining input from cursor to the end into
     * row, saves the row, calls step, and returns the results.
     */
    function finish(value) {
      if (ignoreLastRow) return returnable();
      if (_isUndef(value)) value = input.substring(cursor);
      row.push(value);
      cursor = inputLen; // important in case parsing is paused
      pushRow(row);
      return returnable();
    }

    /**
     * Appends the current row to the results. It sets the cursor
     * to newCursor and finds the nextNewline. The caller should
     * take care to execute user's step function and check for
     * preview and end parsing if necessary.
     */
    function saveRow(newCursor) {
      cursor = newCursor;
      pushRow(row);
      row = [];
      nextNewline = input.indexOf(newline, cursor);
    }

    /** Returns an object with the results, errors, and meta. */
    function returnable(stopped) {
      if (config.header && !baseIndex && data.length && !headerParsed) {
        const result = data[0];
        const headerCount = Object.create(null); // To track the count of each base header
        const usedHeaders = new Set(result); // To track used headers and avoid duplicates
        let duplicateHeaders = false;
        for (let i = 0; i < result.length; i++) {
          let header = _stripBom(result[i]);
          if (_isFn(config.transformHeader)) header = config.transformHeader(header, i);
          if (!headerCount[header]) {
            headerCount[header] = 1;
            result[i] = header;
          } else {
            let newHeader;
            let suffixCount = headerCount[header];

            // Find a unique new header
            do {
              newHeader = `${header}_${suffixCount}`;
              suffixCount++;
            } while (usedHeaders.has(newHeader));
            usedHeaders.add(newHeader); // Mark this new Header as used
            result[i] = newHeader;
            headerCount[header]++;
            duplicateHeaders = true;
            if (renamedHeaders === null) {
              renamedHeaders = {};
            }
            renamedHeaders[newHeader] = header;
          }
          usedHeaders.add(header); // Ensure the original header is marked as used
        }
        if (duplicateHeaders) {
          console.log('Duplicate headers found and renamed.');
        }
        headerParsed = true;
      }
      return {
        data: data,
        errors: errors,
        meta: {
          delimiter: delim,
          linebreak: newline,
          truncated: !!stopped,
          cursor: lastCursor + (baseIndex || 0),
          renamedHeaders: renamedHeaders
        }
      };
    }
  };
}
function ParserHandle(_config) {
  const self = this;
  let _rowCounter = 0; // Number of rows that have been parsed so far
  let _input; // The input being parsed
  let _parser; // The core parser being used
  let _delimiterError; // Temporary state between delimiter detection and processing results
  let _fields = []; // Fields are from the header row of the input, if there is one
  let _results = {
    // The last results returned from the parser
    data: [],
    errors: [],
    meta: {}
  };

  /**
   * Parses input. Most users won't need, and shouldn't mess with, the baseIndex
   * and ignoreLastRow parameters. They are used by streamers (wrapper functions)
   * when an input comes in multiple chunks, like from a file.
   */
  this.parse = function (input, baseIndex, ignoreLastRow) {
    _delimiterError = false;
    const parserConfig = _copy(_config);
    // Tell the parser the header instead of reguessing on each chunk
    parserConfig.header = needsHeaderRow();
    _input = input;
    _parser = new Parser(parserConfig);
    _results = _parser.parse(_input, baseIndex, ignoreLastRow);
    processResults();
    return _results || {
      meta: {}
    };
  };
  function processResults() {
    if (_results && _delimiterError) {
      addError('Delimiter', 'UndetectableDelimiter', 'Unable to auto-detect delimiting character; defaulted to \'' + DEFAULT_DELIMITER + '\'');
      _delimiterError = false;
    }
    if (needsHeaderRow()) fillHeaderFields();
    return applyHeaderAndDynamicTypingAndTransformation();
  }
  function needsHeaderRow() {
    return _config.header && _fields.length === 0;
  }
  function fillHeaderFields() {
    if (!_results) return;
    function addHeader(header) {
      _fields.push(header);
    }
    if (Array.isArray(_results.data[0])) {
      for (let i = 0; needsHeaderRow() && i < _results.data.length; i++) _results.data[i].forEach(addHeader);
      _results.data.splice(0, 1);
    }
    // if _results.data[0] is not an array, we are in a step where _results.data is the row.
    else _results.data.forEach(addHeader);
  }
  function applyHeaderAndDynamicTypingAndTransformation() {
    if (!_results || !_config.header && !_config.dynamicTyping && !_config.transform) return _results;
    function processRow(rowSource, i) {
      const row = _config.header ? {} : [];
      let j;
      for (j = 0; j < rowSource.length; j++) {
        let field = j;
        let value = rowSource[j];
        if (_config.header) field = j >= _fields.length ? '__parsed_extra' : _fields[j];
        if (_config.transform) value = _config.transform(value, field);
        if (field === '__parsed_extra') {
          row[field] = row[field] || [];
          row[field].push(value);
        } else row[field] = value;
      }
      if (_config.header) {
        if (j > _fields.length) addError('FieldMismatch', 'TooManyFields', 'Too many fields: expected ' + _fields.length + ' fields but parsed ' + j, _rowCounter + i);else if (j < _fields.length) addError('FieldMismatch', 'TooFewFields', 'Too few fields: expected ' + _fields.length + ' fields but parsed ' + j, _rowCounter + i);
      }
      return row;
    }
    let incrementBy = 1;
    if (!_results.data.length || Array.isArray(_results.data[0])) {
      _results.data = _results.data.map(processRow);
      incrementBy = _results.data.length;
    } else _results.data = processRow(_results.data, 0);
    if (_config.header && _results.meta) _results.meta.fields = _fields;
    _rowCounter += incrementBy;
    return _results;
  }
  function addError(type, code, msg, row) {
    _results.errors.push({
      type,
      code,
      msg,
      row
    });
  }
}
function ChunkStreamer(config = {}) {
  config.delimiter = ",";
  config.dynamicTyping = false;
  config.transform = false;
  this._finished = false;
  this._completed = false;
  this._baseIndex = 0;
  this._partialLine = '';
  this._rowCount = 0;
  this._start = 0;
  this._nextChunk = null;
  this._completeResults = {
    data: [],
    errors: [],
    meta: {}
  };

  // Deep-copy the config so we can edit it
  const configCopy = _copy(config);
  configCopy.chunkSize = null;
  this._handle = new ParserHandle(configCopy);
  this._handle.streamer = this;
  this._config = configCopy; // persist the copy to the caller

  this.parseChunk = function (chunk) {
    // Rejoin the line we likely just split in two by chunking the file
    const aggregate = this._partialLine + chunk;
    this._partialLine = '';
    const results = this._handle.parse(aggregate, this._baseIndex, !this._finished);
    const lastIndex = results.meta.cursor;
    if (!this._finished) {
      this._partialLine = aggregate.substring(lastIndex - this._baseIndex);
      this._baseIndex = lastIndex;
    }
    if (results && results.data) this._rowCount += results.data.length;
    this._completeResults.data = this._completeResults.data.concat(results.data);
    this._completeResults.errors = this._completeResults.errors.concat(results.errors);
    this._completeResults.meta = results.meta;
    if (!this._finished && !results) this._nextChunk();
    return results;
  };
  let remaining;
  this._nextChunk = function () {
    if (this._finished) return;
    const chunk = remaining;
    remaining = '';
    this._finished = !remaining;
    return this.parseChunk(chunk);
  };
  this.stream = function (s) {
    remaining = s;
    return this._nextChunk();
  };
}
const csvToJson = (input, config) => _isStr(input) ? new ChunkStreamer(config).stream(_stripBom(input)) : {};
var _default = exports.default = csvToJson;
//# sourceMappingURL=csvToJson.js.map