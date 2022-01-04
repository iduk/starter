let navlist = [
  {
    pathname: '/',
    title: 'Index',
  },
  {
    pathname: 'sub',
    title: 'Sub',
  },
  {
    pathname: 'sub/content1',
    title: 'c1',
  },
  {
    pathname: 'sub/content2',
    title: 'c2',
  },
  {
    pathname: 'example',
    title: 'Example',
  },
  {
    pathname: 'error',
    title: 'Error',
  },
]

export function getNavList() {
  return navlist
}
