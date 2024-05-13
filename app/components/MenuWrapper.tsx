'use client'

import React, { useState } from 'react'
import MenuCard from '@/app/components/MenuCard';
import Cart from '@/app/components/Cart';
import { Suspense } from 'react';
import { MenuCardsSkeleton } from '../ui/skeletons';
import { Meal } from '@/lib/interface';

export default function MenuWrapper({ meals }: { meals: Meal[]}) {
  const [mealSelected, setMealSelected] = useState<Meal[]>([]);

  const updateMealSelected = (mealSelected: Meal, mealUpdated: any) => {
    const mealSelectedIds = mealSelected.map((item: Meal) => {
      return item.idMeal;
    });

    const isDuplicate = mealSelectedIds.some((mealId: number) => {
      if (mealId == mealUpdated.idMeal) {
        return true;
      }

      return false;
    });

    if (isDuplicate) {
      setMealSelected(mealSelected.filter(meal => meal.idMeal != mealUpdated.idMeal));
    } else {
      setMealSelected([...mealSelected, mealUpdated]);
    }
  }

  return (
    <>
      <div className='menu-container flex mx-40'>
        <div className='category m-10 min-w-36'>
          <h2 className='text-xl font-bold'>Menu</h2>
          <ul>
            <li className='mb-2'>1</li>
            <li className='mb-2'>2</li>
          </ul>
        </div>

        <div className='flex-auto m-10'>
          <div>
            <div className='w-full'>
              <h1 className='text-lg fond-bold'>1</h1>
            </div>
            
            <div className="flex flex-wrap">
              <Suspense fallback={<MenuCardsSkeleton />}>
                {meals?.meals?.map((meal, key) => (
                  <MenuCard menuData={meal} mealSelected={mealSelected} updateMealSelected={updateMealSelected} key={key}/>
                ))}
              </Suspense>
            </div>
          </div>
        </div>

        <Cart mealOrders={mealSelected} />
      </div>
    </>
  )
}