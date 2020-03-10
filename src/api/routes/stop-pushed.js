const Router = require('hermesjs/lib/router');
const router = new Router();
const stopPushedHandler = require('../handlers/stop-pushed');
module.exports = router;

/**
 * Inform when the stop button was pushed
 */
router.use('stop/pushed', async (message, next) => {
  try {
    await stopPushedHandler.onStopPushed({message});
    next();
  } catch (e) {
    next(e);
  }
});
