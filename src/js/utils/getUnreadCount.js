export const getUnreadCount = subscription =>
  subscription.items.filter(
    item => !subscription.markedAsRead.includes(item.id),
  ).length;
