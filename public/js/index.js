"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var app = document.querySelector('#app');
var consultar = document.querySelector('#consultar');
var message = document.querySelector('#message');
consultar.addEventListener('click', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
    var city, _yield$axios$get, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            _context.prev = 1;
            city = document.querySelector('#city').value;

            if (!(city.length > 0)) {
              _context.next = 12;
              break;
            }

            message.style.display = "none";
            _context.next = 7;
            return axios.get("http://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&units=metric&lang=es&appid=eb9882a6b6478ffbeaec0ef16fa0d5e1"));

          case 7:
            _yield$axios$get = _context.sent;
            data = _yield$axios$get.data;
            ReactDOM.render( /*#__PURE__*/React.createElement("div", {
              "class": "container"
            }, /*#__PURE__*/React.createElement("img", {
              src: "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
            }), /*#__PURE__*/React.createElement("h1", null, city), /*#__PURE__*/React.createElement("p", {
              id: "tiempo"
            }, data.weather[0].description), /*#__PURE__*/React.createElement("p", {
              id: "temp"
            }, "Ahora", /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("span", {
              id: "temp"
            }, data.main.temp, "\xBA"), /*#__PURE__*/React.createElement("span", {
              id: "celsiusTemp"
            }, "C")), /*#__PURE__*/React.createElement("p", {
              id: "max"
            }, "Max ", /*#__PURE__*/React.createElement("span", {
              id: "max"
            }, data.main.temp_min, "\xBA"), /*#__PURE__*/React.createElement("span", {
              "class": "celsius"
            }, "C")), /*#__PURE__*/React.createElement("p", {
              id: "min"
            }, "Min ", /*#__PURE__*/React.createElement("span", {
              id: "min"
            }, data.main.temp_max, "\xBA"), /*#__PURE__*/React.createElement("span", {
              "class": "celsius"
            }, "C"))), app);
            _context.next = 14;
            break;

          case 12:
            message.style.display = "block";
            ReactDOM.render( /*#__PURE__*/React.createElement("p", null, "Intenta escribir algo"), message);

          case 14:
            _context.next = 21;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            message.style.display = "block";
            ReactDOM.render( /*#__PURE__*/React.createElement("p", null, "Ciudad no encontrada"), message);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 16]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
