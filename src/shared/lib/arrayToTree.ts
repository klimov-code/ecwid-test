type Item = { id: number; parentId: number | undefined };
type TreeItem<T> = T & Item & { children: TreeItem<T>[] };
type Map<T> = Record<number, TreeItem<T>>;

function arrayToTree<T extends Item>(array: T[]): TreeItem<T>[] {
  const map: Map<T> = {};
  const tree: TreeItem<T>[] = [];

  array.forEach((node) => {
    map[node.id] = { ...node, children: [] };
  });

  array.forEach((node) => {
    if (node.parentId) {
      map[node.parentId].children.push(map[node.id]);
    } else {
      tree.push(map[node.id]);
    }
  });

  return tree;
}

export { arrayToTree };
export type { TreeItem };
