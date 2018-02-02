'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\comun\\Desktop\\nextjs\\components\\Prices.js';


var Prices = function (_React$Component) {
  (0, _inherits3.default)(Prices, _React$Component);

  function Prices() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Prices);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Prices.__proto__ || (0, _getPrototypeOf2.default)(Prices)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currency: 'USD'
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Prices, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var list = '';
      if (this.state.currency === 'USD') {
        list = _react2.default.createElement('li', { className: 'list-group-item', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        }, 'Bitcoin rate for ', this.props.bpi.USD.description, ': ', _react2.default.createElement('span', { className: 'badge badge-primary', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        }, this.props.bpi.USD.code), _react2.default.createElement('strong', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        }, ' ', this.props.bpi.USD.rate, ' '));
      } else if (this.state.currency === 'GBP') {
        list = _react2.default.createElement('li', { className: 'list-group-item', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }, 'Bitcoin rate for ', this.props.bpi.GBP.description, ': ', _react2.default.createElement('span', { className: 'badge badge-primary', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }, this.props.bpi.GBP.code), _react2.default.createElement('strong', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        }, ' ', this.props.bpi.GBP.rate, ' '));
      } else if (this.state.currency === 'EUR') {
        list = _react2.default.createElement('li', { className: 'list-group-item', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        }, 'Bitcoin rate for ', this.props.bpi.EUR.description, ': ', _react2.default.createElement('span', { className: 'badge badge-primary', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }, this.props.bpi.EUR.code), _react2.default.createElement('strong', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        }, ' ', this.props.bpi.EUR.rate, ' '));
      }
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement('ul', { className: 'list-group', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, list), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement('select', { onChange: function onChange(e) {
          return _this2.setState({ currency: e.target.value });
        }, className: 'form-control', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react2.default.createElement('option', { value: 'USD', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, 'USD'), _react2.default.createElement('option', { value: 'GBP', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, 'GBP'), _react2.default.createElement('option', { value: 'EUR', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, 'EUR')));
    }
  }]);

  return Prices;
}(_react2.default.Component);

exports.default = Prices;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFByaWNlcy5qcyJdLCJuYW1lcyI6WyJQcmljZXMiLCJzdGF0ZSIsImN1cnJlbmN5IiwibGlzdCIsInByb3BzIiwiYnBpIiwiVVNEIiwiZGVzY3JpcHRpb24iLCJjb2RlIiwicmF0ZSIsIkdCUCIsIkVVUiIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU0sQTs7Ozs7Ozs7Ozs7Ozs7NE0sQUFDSjtnQkFBUSxBLEFBQ0k7QUFESixBQUNOOzs7Ozs2QkFHTzttQkFDUDs7VUFBSSxPQUFKLEFBQVcsQUFDWDtVQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsYUFBZCxBQUEyQixPQUFPLEFBQ2hDOytCQUFPLGNBQUEsUUFBSSxXQUFKLEFBQWM7c0JBQWQ7d0JBQUE7QUFBQTtTQUFBLEVBQ1csMEJBQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLElBRDFCLEFBQzhCLGFBQ25DLHNCQUFBLGNBQUEsVUFBTSxXQUFOLEFBQWdCO3NCQUFoQjt3QkFBQSxBQUF1QztBQUF2QztnQkFBdUMsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLElBRmpELEFBRUwsQUFBMEQsQUFDM0QsdUJBQUEsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLFdBQVUsVUFBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFBekIsQUFBNkIsTUFIOUIsQUFBTyxBQUdOLEFBQ0Y7QUFMRCxpQkFLVSxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQWQsQUFBMkIsT0FBTyxBQUN2QzsrQkFBTyxjQUFBLFFBQUksV0FBSixBQUFjO3NCQUFkO3dCQUFBO0FBQUE7U0FBQSxFQUNXLDBCQUFBLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxJQUQxQixBQUM4QixhQUNuQyxzQkFBQSxjQUFBLFVBQU0sV0FBTixBQUFnQjtzQkFBaEI7d0JBQUEsQUFBdUM7QUFBdkM7Z0JBQXVDLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxJQUZqRCxBQUVMLEFBQTBELEFBQzNELHVCQUFBLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxXQUFVLFVBQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLElBQXpCLEFBQTZCLE1BSDlCLEFBQU8sQUFHTixBQUNGO0FBTE0sT0FBQSxNQUtBLElBQUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxhQUFkLEFBQTJCLE9BQU8sQUFDdkM7K0JBQU8sY0FBQSxRQUFJLFdBQUosQUFBYztzQkFBZDt3QkFBQTtBQUFBO1NBQUEsRUFDVywwQkFBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFEMUIsQUFDOEIsYUFDbkMsc0JBQUEsY0FBQSxVQUFNLFdBQU4sQUFBZ0I7c0JBQWhCO3dCQUFBLEFBQXVDO0FBQXZDO2dCQUF1QyxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsSUFGakQsQUFFTCxBQUEwRCxBQUMzRCx1QkFBQSxjQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsV0FBVSxVQUFBLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxJQUF6QixBQUE2QixNQUg5QixBQUFPLEFBR04sQUFDRjtBQUNEOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQSxRQUFJLFdBQUosQUFBYztvQkFBZDtzQkFBQSxBQUNHO0FBREg7U0FERixBQUNFLEFBR0E7O29CQUFBO3NCQUpGLEFBSUUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsY0FBQSxZQUFRLFVBQVUscUJBQUE7aUJBQUssT0FBQSxBQUFLLFNBQVMsRUFBQyxVQUFVLEVBQUEsQUFBRSxPQUFoQyxBQUFLLEFBQWMsQUFBb0I7QUFBekQsV0FBa0UsV0FBbEUsQUFBNEU7b0JBQTVFO3NCQUFBLEFBQ0E7QUFEQTt5QkFDQSxjQUFBLFlBQVEsT0FBUixBQUFjO29CQUFkO3NCQUFBO0FBQUE7U0FEQSxBQUNBLEFBQ0Esd0JBQUEsY0FBQSxZQUFRLE9BQVIsQUFBYztvQkFBZDtzQkFBQTtBQUFBO1NBRkEsQUFFQSxBQUNBLHdCQUFBLGNBQUEsWUFBUSxPQUFSLEFBQWM7b0JBQWQ7c0JBQUE7QUFBQTtTQVRKLEFBQ0UsQUFLRSxBQUdBLEFBSUw7Ozs7O0VBcENrQixnQkFBTSxBLEFBdUMzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJQcmljZXMuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvY29tdW4vRGVza3RvcC9uZXh0anMifQ==