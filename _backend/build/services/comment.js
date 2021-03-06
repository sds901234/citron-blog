"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteComment = exports.updateComment = exports.createComment = exports.getCommentByPostId = exports.getAllComments = void 0;

var _comment = require("../models/comment");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getAllComments =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _comment.Comment.find({
              isDeleted: false
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getAllComments() {
    return _ref.apply(this, arguments);
  };
}();

exports.getAllComments = getAllComments;

var getCommentByPostId =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(postId) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", _comment.Comment.find({
              postId: postId,
              isDeleted: false
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getCommentByPostId(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getCommentByPostId = getCommentByPostId;

var createComment =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(_ref4) {
    var postId, content, createdBy, isChild, parent;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            postId = _ref4.postId, content = _ref4.content, createdBy = _ref4.createdBy, isChild = _ref4.isChild, parent = _ref4.parent;
            return _context3.abrupt("return", _comment.Comment.create({
              postId: postId,
              content: content,
              createdBy: createdBy,
              isChild: isChild,
              parent: parent
            }));

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function createComment(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createComment = createComment;

var updateComment =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(_id, _ref6) {
    var content;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            content = _ref6.content;
            return _context4.abrupt("return", _comment.Comment.update({
              _id: _id
            }, {
              $set: {
                content: content,
                updatedAt: Date()
              }
            }));

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function updateComment(_x3, _x4) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateComment = updateComment;

var deleteComment =
/*#__PURE__*/
function () {
  var _ref7 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(_id) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", _comment.Comment.update({
              _id: _id
            }, {
              $set: {
                isDeleted: true
              }
            }));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function deleteComment(_x5) {
    return _ref7.apply(this, arguments);
  };
}();

exports.deleteComment = deleteComment;