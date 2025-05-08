const { Asset } = require('../models');

const getAllAssets = async () => {
  const assets = await Asset.findAll();

  if (!assets) {
    return {
      error: { 
        code: 404,
        message: 'Nenhum ativo foi encontrado na corretora.',
      },
    };
  }

  const formattedAssets = assets.map(({ id, ticker, price, quantity }) => ({
    assetId: id,
    ticker,
    price: Number(price),
    quantity,
  }));

  return { code: 200, content: { assets: formattedAssets } };
};

module.exports = {
  getAllAssets,
};
