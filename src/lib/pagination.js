export default function getNextPrevItems(current, array) {
  let paginationItems;
  array.forEach((item, index) => {
    if (item.slug === current && index) {
      paginationItems = [array[index - 1], array[index + 1]];
    }
    if (item.slug === current && index === 0) {
      paginationItems = [array[array.length - 1], array[index + 1]];
    }
    if (item.slug === current && index === array.length - 1) {
      paginationItems = [array[index - 1], array[0]];
    }
  });

  // return the last item and the first item if nothing is there
  if (!paginationItems) {
    paginationItems = [array[array.length - 1], array[0]];
  }

  return paginationItems;
}