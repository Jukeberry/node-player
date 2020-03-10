const Router = require('hermesjs/lib/router');
const router = new Router();
const cardPresentedHandler = require('../handlers/card-presented');
module.exports = router;

/**
 * Inform when a card has been read
 */
router.use('card/presented', async (message, next) => {
  try {
    await cardPresentedHandler.onCardPresented({message});
    next();
  } catch (e) {
    next(e);
  }
});
