const getBookmarks = (node, bookmarks = [], depth = 0) => {
  if (node.children) {
    return bookmarks
      .concat({
        id: node.id,
        title: node.title,
        depth
      })
      .concat(
        node.children.reduce((prev, node) => {
          const nodes = getBookmarks(node, bookmarks, depth + 1);
          return nodes ? prev.concat(nodes) : prev;
        }, [])
      );
  }
  return null;
};

export default getBookmarks;
