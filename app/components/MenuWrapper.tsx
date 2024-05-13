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
      <div className='menu-container grid grid-cols-6 gap-4'>
        <div className='category col-span-1 m-10'>
          <h2 className='text-xl font-bold'>Menu</h2>
          <ul>
            <li>1</li>
            <li>2</li>
          </ul>
        </div>

        <div className='grid grid-cols-2 col-span-5 grid-cols-2 md:grid md:col-span-5 md:grid-cols-3 m-10'>
          <Suspense fallback={<MenuCardsSkeleton />}>
            {meals?.meals?.map((meal, key) => (
              <MenuCard menuData={meal} mealSelected={mealSelected} updateMealSelected={updateMealSelected} key={key}/>
            ))}
          </Suspense>
        </div>

        <Cart mealOrders={mealSelected} />
      </div>
    </>
  )
}