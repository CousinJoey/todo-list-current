/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/modules/DOM.js":
/*!****************************!*\
  !*** ./src/modules/DOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");




function listeners() {

    let selectedTitle, selectedArray;

    document.addEventListener("click", (e) => {
    
        if (e.target.matches(".add-project")) {
            projectPopUp();
        }
    
        if (e.target.matches("#cancel")) {
            const projectToggle = document.querySelector("#create-project-container");
            projectToggle.style.display = "none";
        }
    
        if (e.target.matches("#add")) {
            appendProjects();
            (0,_project__WEBPACK_IMPORTED_MODULE_0__.createProject)();

            document.getElementById("project-form").reset();

            const projectToggle = document.querySelector("#create-project-container");
            projectToggle.style.display = "none";
        }

        if (e.target.matches(".project-item")) {
            const currentProject = ((_project__WEBPACK_IMPORTED_MODULE_0__.projectStorage.projectArray.find(item => item.title === e.target.id)));
            renderProjectScreen(currentProject.title, currentProject.array);
            selectedTitle = currentProject.title;
            selectedArray = sortArray(currentProject.array);
        }

        if (e.target.matches(".todo-button") || e.target.matches(".fa-plus")) {
            const todoToggle = document.querySelector("#create-todo-item");
            todoToggle.style.display = "block";
        }

        if (e.target.matches("#create")) {

            if (!document.getElementById("priority-select").value 
                || !document.getElementById("date").value 
                || !document.getElementById("title").value) {
                alert("Please fillout all form prompts")
            } else {

                selectedArray.push((0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(selectedTitle));
                sortArray(selectedArray);
                renderProjectTask(selectedArray);

                const todoToggle = document.querySelector("#create-todo-item");
                todoToggle.style.display = "none";
                document.getElementById("create-form").reset();

            }
        }

        if (e.target.matches("#cancel-task")) {
            const todoToggle = document.querySelector("#create-todo-item");
            todoToggle.style.display = "none";
        }

        if (e.target.matches("#today-container")) {
            const title = "Today";
            renderByDateScreen(title, sortArray(_task__WEBPACK_IMPORTED_MODULE_1__.taskStorage.todayArray));
        }

        if (e.target.matches("#home-container")) {
            const title = "Home";
            renderByDateScreen(title, sortArray(_task__WEBPACK_IMPORTED_MODULE_1__.taskStorage.taskArray));
        }

        if (e.target.matches("#week-container")) {
            const title = "This Week";
            renderByDateScreen(title, sortArray(_task__WEBPACK_IMPORTED_MODULE_1__.taskStorage.weekArray));
        }

        if (e.target.matches(".fa-trash-can")) {
            deleteTask(e);
        }

        if (e.target.matches(".fa-xmark")) {
            if (confirm("Press OK to continue")) {
                deleteProject(e);
              } else {
                return;
              }
        }

        if (e.target.matches(".fa-square-check")) {
            e.target.classList.add("rotate");
            e.target.style.color = "green";
            setTimeout( function() { deleteTask(e); }, 600);
        }

    })

}

function projectPopUp() {
    const createProjectBtn = document.getElementById("create-project-container");
    createProjectBtn.style.display = "block";
};


function appendProjects() {

    const projectTitle = document.getElementById("project-input").value;

    if (projectTitle === "") {
        alert("Project titles can not be blank")
        return
    } else {

        const projectLists = document.querySelector("#list");

        const projectItemContainer = document.createElement("div");
        projectItemContainer.classList.add("project-item-container");

        const projectItem = document.createElement("h1");
        projectItem.textContent = `${projectTitle}`;
        projectItem.classList.add("project-item");
        projectItem.id = `${document.getElementById("project-input").value}`;

        const deleteProjectBtn = document.createElement("i");
        deleteProjectBtn.classList.add("fa-solid");
        deleteProjectBtn.classList.add("fa-xmark");
        deleteProjectBtn.id = `${projectTitle}`;

        projectItemContainer.appendChild(projectItem);
        projectItemContainer.appendChild(deleteProjectBtn);

        projectLists.appendChild(projectItemContainer);
        
    }

}

function renderProjectScreen(title, array) {

    const mainProjectContainer = document.querySelector("#manage-projects-container");
    mainProjectContainer.textContent = "";

    const mainTaskContainer = document.querySelector("#main-task-container");
    mainTaskContainer.textContent = "";
    renderProjectTask(array, title);

    const projectHeaderContainer = document.createElement("div");
    projectHeaderContainer.classList.add("task-title");

    const projectHeader = document.createElement("h1");
    projectHeader.textContent = `${title}`;
    projectHeader.classList.add("task-title-txt");


    const addTodo = document.createElement("div");
    addTodo.classList.add("add-todo");

    const plusIconContainer = document.createElement("div");

    const plusIcon = document.createElement("i");
    plusIcon.classList.add("fa-solid");
    plusIcon.classList.add("fa-plus");

    const todoTextContainer = document.createElement("div");

    const todoText = document.createElement("h3");
    todoText.classList.add("todo-button");
    todoText.id = `${title}`;
    todoText.textContent = "add task";


    projectHeaderContainer.appendChild(projectHeader);
    mainProjectContainer.appendChild(projectHeaderContainer);

    plusIconContainer.appendChild(plusIcon);
    todoTextContainer.appendChild(todoText);

    addTodo.appendChild(plusIconContainer);
    addTodo.appendChild(todoTextContainer);

    mainProjectContainer.appendChild(addTodo);

}

function renderProjectTask(array, title) {

    for (let i = 0; i < array.length; i++) {

        const mainTaskContainer = document.querySelector("#main-task-container");

        let arrayData = array[`${i}`]

        if (i === 0) {
            mainTaskContainer.textContent = "";
        }

        const todoContainer = document.createElement("div");
        todoContainer.classList.add("todo-container");
        todoContainer.classList.add(`${arrayData.priority}`);
    
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
    
        const todoTitle = document.createElement("p");
        todoTitle.textContent = `${arrayData.title}`
    
        const todoDate = document.createElement("p");
        todoDate.textContent = `${arrayData.date}`

        const deleteBtn = document.createElement("i");
        deleteBtn.classList.add("fa-solid");
        deleteBtn.classList.add("fa-trash-can");
        deleteBtn.dataset.screenTitle = (`${title}`)
        deleteBtn.id = (`${arrayData.title}`);
        deleteBtn.dataset.project = (`${arrayData.projectTitle}`);

        const checkBtn = document.createElement("i");
        checkBtn.classList.add("fa-solid");
        checkBtn.classList.add("fa-square-check");
        checkBtn.dataset.screenTitle = (`${title}`);
        checkBtn.id = (`${arrayData.title}`);
        checkBtn.dataset.project = (`${arrayData.projectTitle}`);

        const leftMostSide = document.createElement("div");
    
        const leftSide = document.createElement("div");

        const rightSide = document.createElement("div");
    
        rightSide.appendChild(deleteBtn);

        leftMostSide.appendChild(checkBtn);

        leftSide.appendChild(todoTitle);
        leftSide.appendChild(todoDate);

        todoItem.appendChild(leftMostSide);
        todoItem.appendChild(leftSide);
        todoItem.appendChild(rightSide);
    
        todoContainer.appendChild(todoItem);
    
        mainTaskContainer.appendChild(todoContainer);

    }

}

function renderByDateScreen(title, array) {

    const mainProjectContainer = document.querySelector("#manage-projects-container");
    mainProjectContainer.textContent = "";

    const mainTaskContainer = document.querySelector("#main-task-container");
    mainTaskContainer.textContent = "";
    renderTaskByDate(array, title);

    const projectHeaderContainer = document.createElement("div");
    projectHeaderContainer.classList.add("task-title");

    const projectHeader = document.createElement("h1");
    projectHeader.textContent = `${title}`;
    projectHeader.classList.add("task-title-txt");

    projectHeaderContainer.appendChild(projectHeader);
    mainProjectContainer.appendChild(projectHeaderContainer);

}

function renderTaskByDate(array, title) {

    for (let i = 0; i < array.length; i++) {
        const mainTaskContainer = document.querySelector("#main-task-container");

        let arrayData = array[`${i}`]

        if (i === 0) {
            mainTaskContainer.textContent = "";
        }

        const todoContainer = document.createElement("div");
        todoContainer.classList.add("todo-container");
        todoContainer.classList.add(`${arrayData.priority}`);
    
        const todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
    
        const todoTitle = document.createElement("p");
        todoTitle.textContent = `${arrayData.title + " " + `(${arrayData.projectTitle})`}`
    
        const todoDate = document.createElement("p");
        todoDate.textContent = `${arrayData.date}`

        const deleteBtn = document.createElement("i");
        deleteBtn.classList.add("fa-solid");
        deleteBtn.classList.add("fa-trash-can");
        deleteBtn.dataset.screenTitle = (`${title}`)
        deleteBtn.id = (`${arrayData.title}`);
        deleteBtn.dataset.project = (`${arrayData.projectTitle}`);

        const checkBtn = document.createElement("i");
        checkBtn.classList.add("fa-solid");
        checkBtn.classList.add("fa-square-check");
        checkBtn.dataset.screenTitle = (`${title}`);
        checkBtn.id = (`${arrayData.title}`);
        checkBtn.dataset.project = (`${arrayData.projectTitle}`);

        const leftMostSide = document.createElement("div");
    
        const leftSide = document.createElement("div");

        const rightSide = document.createElement("div");
    
        rightSide.appendChild(deleteBtn);

        leftMostSide.appendChild(checkBtn);

        leftSide.appendChild(todoTitle);
        leftSide.appendChild(todoDate);

        todoItem.appendChild(leftMostSide);
        todoItem.appendChild(leftSide);
        todoItem.appendChild(rightSide);
    
        todoContainer.appendChild(todoItem);
    
        mainTaskContainer.appendChild(todoContainer);
    }



}

function deleteTask(e) {

    // NOR gate //

    _task__WEBPACK_IMPORTED_MODULE_1__.taskStorage.taskArray = _task__WEBPACK_IMPORTED_MODULE_1__.taskStorage.taskArray.filter(item => (item.title !== e.target.id) || (item.projectTitle !== e.target.dataset.project));
    _task__WEBPACK_IMPORTED_MODULE_1__.taskStorage.todayArray = _task__WEBPACK_IMPORTED_MODULE_1__.taskStorage.todayArray.filter(item => (item.title !== e.target.id) || (item.projectTitle !== e.target.dataset.project));
    _task__WEBPACK_IMPORTED_MODULE_1__.taskStorage.weekArray = _task__WEBPACK_IMPORTED_MODULE_1__.taskStorage.weekArray.filter(item => (item.title !== e.target.id) || (item.projectTitle !== e.target.dataset.project));


    let project = _project__WEBPACK_IMPORTED_MODULE_0__.projectStorage.projectArray.find(item => item.title === e.target.dataset.project);
    let taskIndex = project.array.findIndex(item => item.title === e.target.id);
    project.array.splice(taskIndex, 1);

    if (e.target.dataset.screenTitle === "Home") {
        renderByDateScreen("Home", _task__WEBPACK_IMPORTED_MODULE_1__.taskStorage.taskArray);
    } else if (e.target.dataset.screenTitle === "Today") {
        renderByDateScreen("Today", _task__WEBPACK_IMPORTED_MODULE_1__.taskStorage.todayArray) 
    } else if (e.target.dataset.screenTitle === "This Week") {
        renderByDateScreen("This Week", _task__WEBPACK_IMPORTED_MODULE_1__.taskStorage.weekArray)
    } else {
        renderProjectScreen(project.title, project.array);
    }

}

function deleteProject(e) {

    const projectTitle = e.target.id;
    let todayArray = _task__WEBPACK_IMPORTED_MODULE_1__.taskStorage.todayArray;
    let weekArray = _task__WEBPACK_IMPORTED_MODULE_1__.taskStorage.weekArray;
    let taskArray = _task__WEBPACK_IMPORTED_MODULE_1__.taskStorage.taskArray;

    _project__WEBPACK_IMPORTED_MODULE_0__.projectStorage.projectArray = _project__WEBPACK_IMPORTED_MODULE_0__.projectStorage.projectArray.filter(project => project.title !== projectTitle);

    todayArray = todayArray.filter(task => task.projectTitle !== projectTitle);
    weekArray = weekArray.filter(task => task.projectTitle !== projectTitle);
    taskArray = taskArray.filter(task => task.projectTitle !== projectTitle);

    _task__WEBPACK_IMPORTED_MODULE_1__.taskStorage.todayArray = todayArray;
    _task__WEBPACK_IMPORTED_MODULE_1__.taskStorage.weekArray = weekArray;
    _task__WEBPACK_IMPORTED_MODULE_1__.taskStorage.taskArray = taskArray;

    const projectElement = e.target.parentElement;
    projectElement.parentElement.removeChild(projectElement);

    console.log(_task__WEBPACK_IMPORTED_MODULE_1__.taskStorage.taskArray);
    
    renderByDateScreen("Home", sortArray(_task__WEBPACK_IMPORTED_MODULE_1__.taskStorage.taskArray));
}

function sortArray(array) {
    let sortedArray = array.sort(function(a,b){
        var c = new Date(a.date);
        var d = new Date(b.date);
        return c-d;
        });

    return sortedArray;
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listeners);

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "projectStorage": () => (/* binding */ projectStorage)
/* harmony export */ });

class Project {
    constructor(title) {
        this.title = title;
        this.array = [];
    };
}

const projectStorage = (() => {

    let projectArray = [];

    return {
        projectArray
    };

})();

function createProject() {

    const project = new Project(document.getElementById("project-input").value);

    projectStorage.projectArray.push(project);

}










/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "taskStorage": () => (/* binding */ taskStorage)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");


class Task {
    constructor(title, date, priority, projectTitle, sortDate) {
        this.title = title,
        this.date = date,
        this.priority = priority
        this.projectTitle = projectTitle;
        this.sortDate = sortDate;
    }
}

const taskStorage = (() => {

    let taskArray = [];
    let todayArray = [];
    let weekArray = [];

    return {
        taskArray,
        todayArray,
        weekArray,
    };

})();

function createTask(projectTitle) {

    let date = document.getElementById("date").value

    const year = date.slice(0,4);
    const month = date.slice(5,7);
    const day = date.slice(8,10);

    let newMonth = month - 1

    let dateFormatted = `${month}/${day}/${year}`

    const sortDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(year, newMonth, day));

    const isDateToday = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(year, newMonth, day));

    const isDateThisWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(year, newMonth, day));

    const task = new Task(
        document.getElementById("title").value,
        dateFormatted,
        document.getElementById("priority-select").value,
        projectTitle,
        sortDate,
    );

    taskStorage.taskArray.push(task)
    
    if (isDateToday === true && isDateThisWeek === true) {
        taskStorage.todayArray.push(task);
        taskStorage.weekArray.push(task);
    } else if (isDateThisWeek === true) {
        taskStorage.weekArray.push(task);
    }
    
    return task

}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/DOM */ "./src/modules/DOM.js");



(0,_modules_DOM__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTHNDOztBQUV0Qyx3REFBUyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LWN1cnJlbnQvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWN1cnJlbnQvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1jdXJyZW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtY3VycmVudC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1jdXJyZW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1jdXJyZW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RoaXNXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1jdXJyZW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1jdXJyZW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1jdXJyZW50Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtY3VycmVudC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1jdXJyZW50Ly4vc3JjL21vZHVsZXMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1jdXJyZW50Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtY3VycmVudC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWN1cnJlbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWN1cnJlbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC1jdXJyZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWN1cnJlbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtY3VycmVudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgc3RhcnRPZldlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlTGVmdCwgb3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSBcIi4uL2lzU2FtZVdlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIHdlZWtcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCB7IGNyZWF0ZVByb2plY3QsIHByb2plY3RTdG9yYWdlIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuaW1wb3J0IHsgY3JlYXRlVGFzaywgdGFza1N0b3JhZ2UgfSBmcm9tIFwiLi90YXNrXCI7XG5cblxuZnVuY3Rpb24gbGlzdGVuZXJzKCkge1xuXG4gICAgbGV0IHNlbGVjdGVkVGl0bGUsIHNlbGVjdGVkQXJyYXk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIuYWRkLXByb2plY3RcIikpIHtcbiAgICAgICAgICAgIHByb2plY3RQb3BVcCgpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiI2NhbmNlbFwiKSkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlLXByb2plY3QtY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgcHJvamVjdFRvZ2dsZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIjYWRkXCIpKSB7XG4gICAgICAgICAgICBhcHBlbmRQcm9qZWN0cygpO1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdCgpO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtZm9ybVwiKS5yZXNldCgpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGUtcHJvamVjdC1jb250YWluZXJcIik7XG4gICAgICAgICAgICBwcm9qZWN0VG9nZ2xlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLnByb2plY3QtaXRlbVwiKSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSAoKHByb2plY3RTdG9yYWdlLnByb2plY3RBcnJheS5maW5kKGl0ZW0gPT4gaXRlbS50aXRsZSA9PT0gZS50YXJnZXQuaWQpKSk7XG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0U2NyZWVuKGN1cnJlbnRQcm9qZWN0LnRpdGxlLCBjdXJyZW50UHJvamVjdC5hcnJheSk7XG4gICAgICAgICAgICBzZWxlY3RlZFRpdGxlID0gY3VycmVudFByb2plY3QudGl0bGU7XG4gICAgICAgICAgICBzZWxlY3RlZEFycmF5ID0gc29ydEFycmF5KGN1cnJlbnRQcm9qZWN0LmFycmF5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLnRvZG8tYnV0dG9uXCIpIHx8IGUudGFyZ2V0Lm1hdGNoZXMoXCIuZmEtcGx1c1wiKSkge1xuICAgICAgICAgICAgY29uc3QgdG9kb1RvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlLXRvZG8taXRlbVwiKTtcbiAgICAgICAgICAgIHRvZG9Ub2dnbGUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiI2NyZWF0ZVwiKSkge1xuXG4gICAgICAgICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHktc2VsZWN0XCIpLnZhbHVlIFxuICAgICAgICAgICAgICAgIHx8ICFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWUgXG4gICAgICAgICAgICAgICAgfHwgIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIlBsZWFzZSBmaWxsb3V0IGFsbCBmb3JtIHByb21wdHNcIilcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBzZWxlY3RlZEFycmF5LnB1c2goY3JlYXRlVGFzayhzZWxlY3RlZFRpdGxlKSk7XG4gICAgICAgICAgICAgICAgc29ydEFycmF5KHNlbGVjdGVkQXJyYXkpO1xuICAgICAgICAgICAgICAgIHJlbmRlclByb2plY3RUYXNrKHNlbGVjdGVkQXJyYXkpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdG9kb1RvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlLXRvZG8taXRlbVwiKTtcbiAgICAgICAgICAgICAgICB0b2RvVG9nZ2xlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZS1mb3JtXCIpLnJlc2V0KCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiI2NhbmNlbC10YXNrXCIpKSB7XG4gICAgICAgICAgICBjb25zdCB0b2RvVG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGUtdG9kby1pdGVtXCIpO1xuICAgICAgICAgICAgdG9kb1RvZ2dsZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIiN0b2RheS1jb250YWluZXJcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gXCJUb2RheVwiO1xuICAgICAgICAgICAgcmVuZGVyQnlEYXRlU2NyZWVuKHRpdGxlLCBzb3J0QXJyYXkodGFza1N0b3JhZ2UudG9kYXlBcnJheSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIjaG9tZS1jb250YWluZXJcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gXCJIb21lXCI7XG4gICAgICAgICAgICByZW5kZXJCeURhdGVTY3JlZW4odGl0bGUsIHNvcnRBcnJheSh0YXNrU3RvcmFnZS50YXNrQXJyYXkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiI3dlZWstY29udGFpbmVyXCIpKSB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IFwiVGhpcyBXZWVrXCI7XG4gICAgICAgICAgICByZW5kZXJCeURhdGVTY3JlZW4odGl0bGUsIHNvcnRBcnJheSh0YXNrU3RvcmFnZS53ZWVrQXJyYXkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLmZhLXRyYXNoLWNhblwiKSkge1xuICAgICAgICAgICAgZGVsZXRlVGFzayhlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLmZhLXhtYXJrXCIpKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlybShcIlByZXNzIE9LIHRvIGNvbnRpbnVlXCIpKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlUHJvamVjdChlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLmZhLXNxdWFyZS1jaGVja1wiKSkge1xuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcInJvdGF0ZVwiKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xuICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7IGRlbGV0ZVRhc2soZSk7IH0sIDYwMCk7XG4gICAgICAgIH1cblxuICAgIH0pXG5cbn1cblxuZnVuY3Rpb24gcHJvamVjdFBvcFVwKCkge1xuICAgIGNvbnN0IGNyZWF0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZS1wcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgICBjcmVhdGVQcm9qZWN0QnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59O1xuXG5cbmZ1bmN0aW9uIGFwcGVuZFByb2plY3RzKCkge1xuXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWlucHV0XCIpLnZhbHVlO1xuXG4gICAgaWYgKHByb2plY3RUaXRsZSA9PT0gXCJcIikge1xuICAgICAgICBhbGVydChcIlByb2plY3QgdGl0bGVzIGNhbiBub3QgYmUgYmxhbmtcIilcbiAgICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpc3RcIik7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdEl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0SXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pdGVtLWNvbnRhaW5lclwiKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgcHJvamVjdEl0ZW0udGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0VGl0bGV9YDtcbiAgICAgICAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbVwiKTtcbiAgICAgICAgcHJvamVjdEl0ZW0uaWQgPSBgJHtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtaW5wdXRcIikudmFsdWV9YDtcblxuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIpO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJmYS14bWFya1wiKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ0bi5pZCA9IGAke3Byb2plY3RUaXRsZX1gO1xuXG4gICAgICAgIHByb2plY3RJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RJdGVtKTtcbiAgICAgICAgcHJvamVjdEl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ0bik7XG5cbiAgICAgICAgcHJvamVjdExpc3RzLmFwcGVuZENoaWxkKHByb2plY3RJdGVtQ29udGFpbmVyKTtcbiAgICAgICAgXG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RTY3JlZW4odGl0bGUsIGFycmF5KSB7XG5cbiAgICBjb25zdCBtYWluUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFuYWdlLXByb2plY3RzLWNvbnRhaW5lclwiKTtcbiAgICBtYWluUHJvamVjdENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBjb25zdCBtYWluVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi10YXNrLWNvbnRhaW5lclwiKTtcbiAgICBtYWluVGFza0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgcmVuZGVyUHJvamVjdFRhc2soYXJyYXksIHRpdGxlKTtcblxuICAgIGNvbnN0IHByb2plY3RIZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RIZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stdGl0bGVcIik7XG5cbiAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBgJHt0aXRsZX1gO1xuICAgIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZChcInRhc2stdGl0bGUtdHh0XCIpO1xuXG5cbiAgICBjb25zdCBhZGRUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRUb2RvLmNsYXNzTGlzdC5hZGQoXCJhZGQtdG9kb1wiKTtcblxuICAgIGNvbnN0IHBsdXNJY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IHBsdXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgcGx1c0ljb24uY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIpO1xuICAgIHBsdXNJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1wbHVzXCIpO1xuXG4gICAgY29uc3QgdG9kb1RleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgdG9kb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgdG9kb1RleHQuY2xhc3NMaXN0LmFkZChcInRvZG8tYnV0dG9uXCIpO1xuICAgIHRvZG9UZXh0LmlkID0gYCR7dGl0bGV9YDtcbiAgICB0b2RvVGV4dC50ZXh0Q29udGVudCA9IFwiYWRkIHRhc2tcIjtcblxuXG4gICAgcHJvamVjdEhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcbiAgICBtYWluUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyQ29udGFpbmVyKTtcblxuICAgIHBsdXNJY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsdXNJY29uKTtcbiAgICB0b2RvVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvVGV4dCk7XG5cbiAgICBhZGRUb2RvLmFwcGVuZENoaWxkKHBsdXNJY29uQ29udGFpbmVyKTtcbiAgICBhZGRUb2RvLmFwcGVuZENoaWxkKHRvZG9UZXh0Q29udGFpbmVyKTtcblxuICAgIG1haW5Qcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRvZG8pO1xuXG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RUYXNrKGFycmF5LCB0aXRsZSkge1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIGNvbnN0IG1haW5UYXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLXRhc2stY29udGFpbmVyXCIpO1xuXG4gICAgICAgIGxldCBhcnJheURhdGEgPSBhcnJheVtgJHtpfWBdXG5cbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgIG1haW5UYXNrQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNvbnRhaW5lclwiKTtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGAke2FycmF5RGF0YS5wcmlvcml0eX1gKTtcbiAgICBcbiAgICAgICAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKFwidG9kby1pdGVtXCIpO1xuICAgIFxuICAgICAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gYCR7YXJyYXlEYXRhLnRpdGxlfWBcbiAgICBcbiAgICAgICAgY29uc3QgdG9kb0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdG9kb0RhdGUudGV4dENvbnRlbnQgPSBgJHthcnJheURhdGEuZGF0ZX1gXG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIik7XG4gICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZmEtdHJhc2gtY2FuXCIpO1xuICAgICAgICBkZWxldGVCdG4uZGF0YXNldC5zY3JlZW5UaXRsZSA9IChgJHt0aXRsZX1gKVxuICAgICAgICBkZWxldGVCdG4uaWQgPSAoYCR7YXJyYXlEYXRhLnRpdGxlfWApO1xuICAgICAgICBkZWxldGVCdG4uZGF0YXNldC5wcm9qZWN0ID0gKGAke2FycmF5RGF0YS5wcm9qZWN0VGl0bGV9YCk7XG5cbiAgICAgICAgY29uc3QgY2hlY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgICAgY2hlY2tCdG4uY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIpO1xuICAgICAgICBjaGVja0J0bi5jbGFzc0xpc3QuYWRkKFwiZmEtc3F1YXJlLWNoZWNrXCIpO1xuICAgICAgICBjaGVja0J0bi5kYXRhc2V0LnNjcmVlblRpdGxlID0gKGAke3RpdGxlfWApO1xuICAgICAgICBjaGVja0J0bi5pZCA9IChgJHthcnJheURhdGEudGl0bGV9YCk7XG4gICAgICAgIGNoZWNrQnRuLmRhdGFzZXQucHJvamVjdCA9IChgJHthcnJheURhdGEucHJvamVjdFRpdGxlfWApO1xuXG4gICAgICAgIGNvbnN0IGxlZnRNb3N0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgXG4gICAgICAgIGNvbnN0IGxlZnRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBjb25zdCByaWdodFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIFxuICAgICAgICByaWdodFNpZGUuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcblxuICAgICAgICBsZWZ0TW9zdFNpZGUuYXBwZW5kQ2hpbGQoY2hlY2tCdG4pO1xuXG4gICAgICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG4gICAgICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKHRvZG9EYXRlKTtcblxuICAgICAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZChsZWZ0TW9zdFNpZGUpO1xuICAgICAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZChsZWZ0U2lkZSk7XG4gICAgICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHJpZ2h0U2lkZSk7XG4gICAgXG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0l0ZW0pO1xuICAgIFxuICAgICAgICBtYWluVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTtcblxuICAgIH1cblxufVxuXG5mdW5jdGlvbiByZW5kZXJCeURhdGVTY3JlZW4odGl0bGUsIGFycmF5KSB7XG5cbiAgICBjb25zdCBtYWluUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFuYWdlLXByb2plY3RzLWNvbnRhaW5lclwiKTtcbiAgICBtYWluUHJvamVjdENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBjb25zdCBtYWluVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi10YXNrLWNvbnRhaW5lclwiKTtcbiAgICBtYWluVGFza0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgcmVuZGVyVGFza0J5RGF0ZShhcnJheSwgdGl0bGUpO1xuXG4gICAgY29uc3QgcHJvamVjdEhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay10aXRsZVwiKTtcblxuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IGAke3RpdGxlfWA7XG4gICAgcHJvamVjdEhlYWRlci5jbGFzc0xpc3QuYWRkKFwidGFzay10aXRsZS10eHRcIik7XG5cbiAgICBwcm9qZWN0SGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuICAgIG1haW5Qcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXJDb250YWluZXIpO1xuXG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2tCeURhdGUoYXJyYXksIHRpdGxlKSB7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG1haW5UYXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLXRhc2stY29udGFpbmVyXCIpO1xuXG4gICAgICAgIGxldCBhcnJheURhdGEgPSBhcnJheVtgJHtpfWBdXG5cbiAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgIG1haW5UYXNrQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNvbnRhaW5lclwiKTtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGAke2FycmF5RGF0YS5wcmlvcml0eX1gKTtcbiAgICBcbiAgICAgICAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvSXRlbS5jbGFzc0xpc3QuYWRkKFwidG9kby1pdGVtXCIpO1xuICAgIFxuICAgICAgICBjb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gYCR7YXJyYXlEYXRhLnRpdGxlICsgXCIgXCIgKyBgKCR7YXJyYXlEYXRhLnByb2plY3RUaXRsZX0pYH1gXG4gICAgXG4gICAgICAgIGNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHRvZG9EYXRlLnRleHRDb250ZW50ID0gYCR7YXJyYXlEYXRhLmRhdGV9YFxuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIpO1xuICAgICAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImZhLXRyYXNoLWNhblwiKTtcbiAgICAgICAgZGVsZXRlQnRuLmRhdGFzZXQuc2NyZWVuVGl0bGUgPSAoYCR7dGl0bGV9YClcbiAgICAgICAgZGVsZXRlQnRuLmlkID0gKGAke2FycmF5RGF0YS50aXRsZX1gKTtcbiAgICAgICAgZGVsZXRlQnRuLmRhdGFzZXQucHJvamVjdCA9IChgJHthcnJheURhdGEucHJvamVjdFRpdGxlfWApO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICAgIGNoZWNrQnRuLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiKTtcbiAgICAgICAgY2hlY2tCdG4uY2xhc3NMaXN0LmFkZChcImZhLXNxdWFyZS1jaGVja1wiKTtcbiAgICAgICAgY2hlY2tCdG4uZGF0YXNldC5zY3JlZW5UaXRsZSA9IChgJHt0aXRsZX1gKTtcbiAgICAgICAgY2hlY2tCdG4uaWQgPSAoYCR7YXJyYXlEYXRhLnRpdGxlfWApO1xuICAgICAgICBjaGVja0J0bi5kYXRhc2V0LnByb2plY3QgPSAoYCR7YXJyYXlEYXRhLnByb2plY3RUaXRsZX1gKTtcblxuICAgICAgICBjb25zdCBsZWZ0TW9zdFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIFxuICAgICAgICBjb25zdCBsZWZ0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgY29uc3QgcmlnaHRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBcbiAgICAgICAgcmlnaHRTaWRlLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgICAgICAgbGVmdE1vc3RTaWRlLmFwcGVuZENoaWxkKGNoZWNrQnRuKTtcblxuICAgICAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgICAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZCh0b2RvRGF0ZSk7XG5cbiAgICAgICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQobGVmdE1vc3RTaWRlKTtcbiAgICAgICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQobGVmdFNpZGUpO1xuICAgICAgICB0b2RvSXRlbS5hcHBlbmRDaGlsZChyaWdodFNpZGUpO1xuICAgIFxuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9JdGVtKTtcbiAgICBcbiAgICAgICAgbWFpblRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcik7XG4gICAgfVxuXG5cblxufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKGUpIHtcblxuICAgIC8vIE5PUiBnYXRlIC8vXG5cbiAgICB0YXNrU3RvcmFnZS50YXNrQXJyYXkgPSB0YXNrU3RvcmFnZS50YXNrQXJyYXkuZmlsdGVyKGl0ZW0gPT4gKGl0ZW0udGl0bGUgIT09IGUudGFyZ2V0LmlkKSB8fCAoaXRlbS5wcm9qZWN0VGl0bGUgIT09IGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdCkpO1xuICAgIHRhc2tTdG9yYWdlLnRvZGF5QXJyYXkgPSB0YXNrU3RvcmFnZS50b2RheUFycmF5LmZpbHRlcihpdGVtID0+IChpdGVtLnRpdGxlICE9PSBlLnRhcmdldC5pZCkgfHwgKGl0ZW0ucHJvamVjdFRpdGxlICE9PSBlLnRhcmdldC5kYXRhc2V0LnByb2plY3QpKTtcbiAgICB0YXNrU3RvcmFnZS53ZWVrQXJyYXkgPSB0YXNrU3RvcmFnZS53ZWVrQXJyYXkuZmlsdGVyKGl0ZW0gPT4gKGl0ZW0udGl0bGUgIT09IGUudGFyZ2V0LmlkKSB8fCAoaXRlbS5wcm9qZWN0VGl0bGUgIT09IGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdCkpO1xuXG5cbiAgICBsZXQgcHJvamVjdCA9IHByb2plY3RTdG9yYWdlLnByb2plY3RBcnJheS5maW5kKGl0ZW0gPT4gaXRlbS50aXRsZSA9PT0gZS50YXJnZXQuZGF0YXNldC5wcm9qZWN0KTtcbiAgICBsZXQgdGFza0luZGV4ID0gcHJvamVjdC5hcnJheS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnRpdGxlID09PSBlLnRhcmdldC5pZCk7XG4gICAgcHJvamVjdC5hcnJheS5zcGxpY2UodGFza0luZGV4LCAxKTtcblxuICAgIGlmIChlLnRhcmdldC5kYXRhc2V0LnNjcmVlblRpdGxlID09PSBcIkhvbWVcIikge1xuICAgICAgICByZW5kZXJCeURhdGVTY3JlZW4oXCJIb21lXCIsIHRhc2tTdG9yYWdlLnRhc2tBcnJheSk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5kYXRhc2V0LnNjcmVlblRpdGxlID09PSBcIlRvZGF5XCIpIHtcbiAgICAgICAgcmVuZGVyQnlEYXRlU2NyZWVuKFwiVG9kYXlcIiwgdGFza1N0b3JhZ2UudG9kYXlBcnJheSkgXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5kYXRhc2V0LnNjcmVlblRpdGxlID09PSBcIlRoaXMgV2Vla1wiKSB7XG4gICAgICAgIHJlbmRlckJ5RGF0ZVNjcmVlbihcIlRoaXMgV2Vla1wiLCB0YXNrU3RvcmFnZS53ZWVrQXJyYXkpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVuZGVyUHJvamVjdFNjcmVlbihwcm9qZWN0LnRpdGxlLCBwcm9qZWN0LmFycmF5KTtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChlKSB7XG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBlLnRhcmdldC5pZDtcbiAgICBsZXQgdG9kYXlBcnJheSA9IHRhc2tTdG9yYWdlLnRvZGF5QXJyYXk7XG4gICAgbGV0IHdlZWtBcnJheSA9IHRhc2tTdG9yYWdlLndlZWtBcnJheTtcbiAgICBsZXQgdGFza0FycmF5ID0gdGFza1N0b3JhZ2UudGFza0FycmF5O1xuXG4gICAgcHJvamVjdFN0b3JhZ2UucHJvamVjdEFycmF5ID0gcHJvamVjdFN0b3JhZ2UucHJvamVjdEFycmF5LmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QudGl0bGUgIT09IHByb2plY3RUaXRsZSk7XG5cbiAgICB0b2RheUFycmF5ID0gdG9kYXlBcnJheS5maWx0ZXIodGFzayA9PiB0YXNrLnByb2plY3RUaXRsZSAhPT0gcHJvamVjdFRpdGxlKTtcbiAgICB3ZWVrQXJyYXkgPSB3ZWVrQXJyYXkuZmlsdGVyKHRhc2sgPT4gdGFzay5wcm9qZWN0VGl0bGUgIT09IHByb2plY3RUaXRsZSk7XG4gICAgdGFza0FycmF5ID0gdGFza0FycmF5LmZpbHRlcih0YXNrID0+IHRhc2sucHJvamVjdFRpdGxlICE9PSBwcm9qZWN0VGl0bGUpO1xuXG4gICAgdGFza1N0b3JhZ2UudG9kYXlBcnJheSA9IHRvZGF5QXJyYXk7XG4gICAgdGFza1N0b3JhZ2Uud2Vla0FycmF5ID0gd2Vla0FycmF5O1xuICAgIHRhc2tTdG9yYWdlLnRhc2tBcnJheSA9IHRhc2tBcnJheTtcblxuICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICBwcm9qZWN0RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHByb2plY3RFbGVtZW50KTtcblxuICAgIGNvbnNvbGUubG9nKHRhc2tTdG9yYWdlLnRhc2tBcnJheSk7XG4gICAgXG4gICAgcmVuZGVyQnlEYXRlU2NyZWVuKFwiSG9tZVwiLCBzb3J0QXJyYXkodGFza1N0b3JhZ2UudGFza0FycmF5KSk7XG59XG5cbmZ1bmN0aW9uIHNvcnRBcnJheShhcnJheSkge1xuICAgIGxldCBzb3J0ZWRBcnJheSA9IGFycmF5LnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgICAgdmFyIGMgPSBuZXcgRGF0ZShhLmRhdGUpO1xuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKGIuZGF0ZSk7XG4gICAgICAgIHJldHVybiBjLWQ7XG4gICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHNvcnRlZEFycmF5O1xufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgbGlzdGVuZXJzIiwiXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuYXJyYXkgPSBbXTtcbiAgICB9O1xufVxuXG5leHBvcnQgY29uc3QgcHJvamVjdFN0b3JhZ2UgPSAoKCkgPT4ge1xuXG4gICAgbGV0IHByb2plY3RBcnJheSA9IFtdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvamVjdEFycmF5XG4gICAgfTtcblxufSkoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWlucHV0XCIpLnZhbHVlKTtcblxuICAgIHByb2plY3RTdG9yYWdlLnByb2plY3RBcnJheS5wdXNoKHByb2plY3QpO1xuXG59XG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IHsgaXNUb2RheSwgaXNUaGlzV2VlaywgdG9EYXRlLCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5jbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGF0ZSwgcHJpb3JpdHksIHByb2plY3RUaXRsZSwgc29ydERhdGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlLFxuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlLFxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICAgICAgdGhpcy5wcm9qZWN0VGl0bGUgPSBwcm9qZWN0VGl0bGU7XG4gICAgICAgIHRoaXMuc29ydERhdGUgPSBzb3J0RGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCB0YXNrU3RvcmFnZSA9ICgoKSA9PiB7XG5cbiAgICBsZXQgdGFza0FycmF5ID0gW107XG4gICAgbGV0IHRvZGF5QXJyYXkgPSBbXTtcbiAgICBsZXQgd2Vla0FycmF5ID0gW107XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0YXNrQXJyYXksXG4gICAgICAgIHRvZGF5QXJyYXksXG4gICAgICAgIHdlZWtBcnJheSxcbiAgICB9O1xuXG59KSgpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayhwcm9qZWN0VGl0bGUpIHtcblxuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlXG5cbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5zbGljZSgwLDQpO1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5zbGljZSg1LDcpO1xuICAgIGNvbnN0IGRheSA9IGRhdGUuc2xpY2UoOCwxMCk7XG5cbiAgICBsZXQgbmV3TW9udGggPSBtb250aCAtIDFcblxuICAgIGxldCBkYXRlRm9ybWF0dGVkID0gYCR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9YFxuXG4gICAgY29uc3Qgc29ydERhdGUgPSB0b0RhdGUobmV3IERhdGUoeWVhciwgbmV3TW9udGgsIGRheSkpO1xuXG4gICAgY29uc3QgaXNEYXRlVG9kYXkgPSBpc1RvZGF5KG5ldyBEYXRlKHllYXIsIG5ld01vbnRoLCBkYXkpKTtcblxuICAgIGNvbnN0IGlzRGF0ZVRoaXNXZWVrID0gaXNUaGlzV2VlayhuZXcgRGF0ZSh5ZWFyLCBuZXdNb250aCwgZGF5KSk7XG5cbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWUsXG4gICAgICAgIGRhdGVGb3JtYXR0ZWQsXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHktc2VsZWN0XCIpLnZhbHVlLFxuICAgICAgICBwcm9qZWN0VGl0bGUsXG4gICAgICAgIHNvcnREYXRlLFxuICAgICk7XG5cbiAgICB0YXNrU3RvcmFnZS50YXNrQXJyYXkucHVzaCh0YXNrKVxuICAgIFxuICAgIGlmIChpc0RhdGVUb2RheSA9PT0gdHJ1ZSAmJiBpc0RhdGVUaGlzV2VlayA9PT0gdHJ1ZSkge1xuICAgICAgICB0YXNrU3RvcmFnZS50b2RheUFycmF5LnB1c2godGFzayk7XG4gICAgICAgIHRhc2tTdG9yYWdlLndlZWtBcnJheS5wdXNoKHRhc2spO1xuICAgIH0gZWxzZSBpZiAoaXNEYXRlVGhpc1dlZWsgPT09IHRydWUpIHtcbiAgICAgICAgdGFza1N0b3JhZ2Uud2Vla0FycmF5LnB1c2godGFzayk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB0YXNrXG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuaW1wb3J0IGxpc3RlbmVycyBmcm9tIFwiLi9tb2R1bGVzL0RPTVwiO1xuXG5saXN0ZW5lcnMoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=