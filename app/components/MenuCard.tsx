'use client'

import Image from 'next/image'
import { Button } from 'antd'
import { useState } from 'react'
import { Meal } from '@/lib/interface'

export default function MenuCard({
  menuData,
  mealSelected,
  updateMealSelected
}: {
  menuData: Meal;
  mealSelected: Meal[];
  updateMealSelected: any;
}) {
  const [selected, setSelected] = useState(false);

  const toggleSelected = (click: boolean) => {
    setSelected(click);
    updateMealSelected(mealSelected, menuData);
  };

  return (
    <div className='rounded border border-grey-300 border-solid m-2 p-2'>
      <div className="justify-center flex">
        <Image src={menuData.strMealThumb} width={200} height={200} alt="menu" />
      </div>
      <li className='justify-center flex'>{menuData.strMeal}</li>
      <li className="justify-center flex">{menuData.price}</li>
      <div className='button justify-evenly flex'>
        {
          selected ?
          <Button onClick={() => toggleSelected(false)}>Unselect</Button> :
          <Button type="primary" onClick={() => toggleSelected(true)}>Select</Button>
        }
      </div>
    </div>
  );
}
