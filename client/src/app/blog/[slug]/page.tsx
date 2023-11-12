export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      The Blog - {slug}
    </div>
  )
}