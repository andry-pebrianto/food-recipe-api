const commentModel = require('../models/comment.model');
const commentValidation = require('../validations/comment.validation');
const { success, failed } = require('../utils/createResponse');
const createPagination = require('../utils/createPagination');

module.exports = {
  list: async (req, res) => {
    try {
      const { page, limit } = req.query;
      const count = await commentModel.countAll();
      const paging = createPagination(count.rows[0].count, page, limit);
      const comments = await commentModel.selectAll(paging);

      success(res, {
        code: 200,
        payload: comments.rows,
        message: 'Select list comment success',
        pagination: paging.response,
      });
    } catch (error) {
      failed(res, {
        code: 500,
        payload: error.message,
        message: 'Something wrong on server',
      });
    }
  },
  detail: async (req, res) => {
    try {
      const { id } = req.params;
      const comment = await commentModel.selectById(id);

      // jika comment tidak ditemukan
      if (!comment.rowCount) {
        failed(res, {
          code: 404,
          payload: 'Comment with that id not found',
          message: 'Select detail comment failed',
        });
        return;
      }

      success(res, {
        code: 200,
        payload: comment.rows[0],
        message: 'Select detail comment success',
      });
    } catch (error) {
      failed(res, {
        code: 500,
        payload: error.message,
        message: 'Something wrong on server',
      });
    }
  },
  insert: async (req, res) => {
    try {
      const { bad, message, body } = commentValidation.insertValidation(
        req.body,
      );

      // jika ada error saat validasi
      if (bad) {
        res.status(400).json({
          status: 400,
          message,
        });
        return;
      }
      await commentModel.store(body);

      success(res, {
        code: 201,
        payload: null,
        message: 'Insert comment data success',
      });
    } catch (error) {
      failed(res, {
        code: 500,
        payload: error.message,
        message: 'Something wrong on server',
      });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { bad, message, body } = commentValidation.insertValidation(
        req.body,
      );

      // jika ada error saat validasi
      if (bad) {
        res.status(400).json({
          status: 400,
          message,
        });
        return;
      }

      const comment = await commentModel.selectById(id);
      // jika comment tidak ditemukan
      if (!comment.rowCount) {
        failed(res, {
          code: 404,
          payload: 'Comment with that id not found',
          message: 'Update comment data failed',
        });
        return;
      }
      await commentModel.updateById(id, body);

      success(res, {
        code: 200,
        payload: null,
        message: 'Update comment data success',
      });
    } catch (error) {
      failed(res, {
        code: 500,
        payload: error.message,
        message: 'Something wrong on server',
      });
    }
  },
  remove: async (req, res) => {
    try {
      const { id } = req.params;
      const comment = await commentModel.selectById(id);

      // jika comment tidak ditemukan
      if (!comment.rowCount) {
        failed(res, {
          code: 404,
          payload: 'Comment with that id not found',
          message: 'Delete comment data failed',
        });
        return;
      }
      await commentModel.removeById(id);

      success(res, {
        code: 200,
        payload: null,
        message: 'Delete comment data success',
      });
    } catch (error) {
      failed(res, {
        code: 500,
        payload: error.message,
        message: 'Something wrong on server',
      });
    }
  },
};
