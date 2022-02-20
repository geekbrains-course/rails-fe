import consumer from './consumer';
import showNotification from 'src/helpers/showNotification';

consumer.subscriptions.create('NotificationsChannel', {
  connected() {},

  disconnected() {},

  received(data) {
    showNotification(data.level, data.message);
  }
});
