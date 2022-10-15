const layout = require('../layout');
const { getError } = require('../../utils')

module.exports = ({ errors }) => {
    return layout({
      content: `
      <div>
          <form method="POST">
            <input name="email" placeholder="email" />
            ${getError(errors, 'email')}
            <input name="password" placeholder="password" />
            ${getError(errors, 'password')}
            <input name="passwordConfirmation" placeholder="confirm password" />
            ${getError(errors, 'passwordConfirmation')}
            <button>Sign Up</button>
          </form>
      </div>
    `
  });
};