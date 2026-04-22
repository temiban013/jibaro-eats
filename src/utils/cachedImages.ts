import cloudinary from './cloudinary'

type CloudinarySearchResult = Awaited<
  ReturnType<ReturnType<typeof cloudinary.search.expression>['execute']>
>

let cachedResults: CloudinarySearchResult | undefined

export default async function getResults(folder: string) {
  if (!cachedResults) {
    const fetchedResults = await cloudinary.search
      .expression(`folder:${folder}/*`)
      .sort_by('public_id', 'desc')
      .max_results(400)
      .execute()

    cachedResults = fetchedResults
  }

  return cachedResults
}
