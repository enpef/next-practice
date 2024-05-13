import { Suspense } from 'react'
import { MenuCardsSkeleton } from '../ui/skeletons'
import MenuWrapper from '../components/MenuWrapper'
import { getMeals } from '@/actions/getMeals'

export default async function Menu() {
  const meals = await getMeals();
  
  return (
    <div>
      <Suspense fallback={<MenuCardsSkeleton />}>
        <MenuWrapper meals={meals}/>
      </Suspense>
    </div>
  )
}