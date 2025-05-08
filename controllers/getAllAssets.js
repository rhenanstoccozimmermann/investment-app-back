const getAllAssetsService = require('../services/getAllAssets');

const getAllAssets = async (_req, res) => {
  try {
    const result = await getAllAssetsService.getAllAssets();

    if (result.error) {
      const { code, message } = result.error;

      const error = new Error(message);

      error.code = code;
      
      throw error;
    }

    if (!result) throw Error;

    return res.status(result.code).json(result.content);
  } catch (error) {
    console.log(error);
    return res.status(error.code || 500).json({ message: error.message });
  }
};

module.exports = {
  getAllAssets,
};
