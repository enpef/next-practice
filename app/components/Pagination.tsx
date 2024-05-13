import React from 'react'
import { Pagination as Pagi } from 'antd';

type Props = {
  items: number;
  pageSize: number;
  currentPage: number;
  onPageChange?: any;
};

function Pagination({ items, pageSize, currentPage, onPageChange }: Props) {
  const pagesCount = Math.ceil(items / pageSize); // 100/10

  if (pagesCount === 1) return null;

  return (
    <div className="flex justify-center">
      <Pagi pageSize={pageSize} total={items} current={currentPage} onChange={onPageChange} />
    </div>
  )
}

export default Pagination