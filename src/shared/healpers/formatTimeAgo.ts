export const formatTimeAgo = (dateString: string) => {
  const now = new Date();
  const date = new Date(dateString);
  const diff = (now.getTime() - date.getTime()) / 1000;

  if (diff < 60) {
    return `${Math.floor(diff)}s ago`;
  }
  if (diff < 3600) {
    return `${Math.floor(diff / 60)}m ago`;
  }
  if (diff <= 86400) {
    return `${Math.floor(diff / 3600)}h ago`;
  }
  if (diff > 86400) {
    const day = Math.floor(diff / 86400);
    return day === 1 ? `${day} day ago` : `${day} days ago`;
  }
};
