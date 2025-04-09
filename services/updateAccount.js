const { Client } = require('../models');
const auth = require('../middlewares/generateToken');

const validateData = (accountId, currentPassword, newPassword) => {
  if (accountId === undefined || !currentPassword || !newPassword) {
    return {
      error: {
        code: 400,
        message: 'O código da conta e as senhas são obrigatórios.',
      },
    };
  }

  return {};
};

const updateAccount = async (accountId, currentPassword, newPassword) => {
  const dataValidation = validateData(accountId, currentPassword, newPassword);

  if (dataValidation.error) return dataValidation;

  const client = await Client.findOne({ where: { accountId, password: currentPassword } });

  if (!client) {
    return {
      error: {
        code: 404,
        message: 'A conta informada não foi encontrada.',
      },
    };
  }

  await Client.update({ password: newPassword }, { where: { accountId } });

  const token = auth.generateToken(accountId, newPassword);

  return { code: 200, content: { token } };
};

module.exports = {
  updateAccount,
};
