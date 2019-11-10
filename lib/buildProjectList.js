export default function buildProjectList(data) {
  const years = [];
  data.forEach(x => {
    const [year] = x.year.split('-');
    if (years.indexOf(parseInt(year, 10)) === -1) {
      years.push(parseInt(year, 10));
    }
  });
  return years
    .sort((a, b) => b - a)
    .map(x => ({
      year: x.toString(),
      projects: data
        .filter(y => {
          const [year] = y.year.split('-');
          return x === parseInt(year, 10);
        })
        .sort((a, b) => b.year.split('-')[1] - a.year.split('-')[1])
        .map(z => ({ title: z.title, slug: z.slug })),
    }));
}
