interface Props {
  params: { slug: string[]; },
  searchParams: { sortOrder: string }
}
const ProductPage = ({ params: { slug }, searchParams: { sortOrder } }: Props) => {
  return <div>ProductPage {slug} by {sortOrder}</div>
}

export default ProductPage