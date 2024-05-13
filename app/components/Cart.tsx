import { useState } from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { FloatButton, Modal } from 'antd'
import { Meal } from '@/lib/interface'


function Cart({mealOrders}: {mealOrders: Meal[]}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <FloatButton onClick={showModal} badge={{ count: mealOrders.length }} icon={<ShoppingCartIcon />} />

      <Modal title="My Cart" open={isModalOpen} onOk={handleOk} okText="Confirm" centered={true} onCancel={handleCancel}>
        {
          mealOrders.length > 0 ?
          mealOrders?.map((meal, key) => (
            <p key={key}>{meal.strMeal}</p>
          )) :
          <p>Empty cart...</p>
        }
      </Modal>
    </>
  )
}

export default Cart