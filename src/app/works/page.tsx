import { Suspense } from 'react'
import WorksPage from '@/components/WorksPage'
import getCloudImages from '@/utils/getCloudImages'

function SearchBarFallback() {
  return <>Jibaro Works</>
}
 
export default async function Page() {
  const cloudImages = await getCloudImages('Jibaro-works')
  return (
    <Suspense fallback={<SearchBarFallback/>}>
      <WorksPage images={ cloudImages.reducedResults }/>
    </Suspense>
  )
}