import React from 'react'
import { RoutesPath } from '../../../4RoutesPath/RoutesPath';
import { ProductItems } from '../../3ProductItems/ProductItems';
import style from './Woman.module.scss';
// import img1 from '../../../IMG/imgElements/img1.png';
// import img2 from '../../../IMG/imgElements/img2.png';
// import img3 from '../../../IMG/imgElements/img3.png';
// import img4 from '../../../IMG/imgElements/img4.png';


export const PRODUCT = [
  {
    image: '/imgElements/img1.png',
    title: "Apollo Runnung Short",
    price: 60.00,
    path: `${RoutesPath.product}`,
    id:1
  },
  {
    image: '/imgElements/img4.png',
    title: "Apollo Runnung Short",
    price: 50.00,
    path:'',
    id: 2
  },
  {
    image: '/imgElements/img2.png',
    title: "Apollo Runnung Short",
    price: 50.00,
    path:'',
    id: 3
  },
  {
    image: '/imgElements/img1.png',
    title: "Apollo Runnung Short",
    price: 50.00,
    path: `${RoutesPath.product}`,
    id:4,
  },
  {
    image: '/imgElements/img3.png',
    title: "Apollo Runnung Short",
    price: 50.00,
    // path:'',
    id: 5
  },
  {
    image: '/imgElements/img3.png',
    title: "Apollo Runnung Short",
    price: 50.00,
    // path:'',
    id: 6
  },
];

export const Woman = () => {
  return (
    <div id={"woman"} className={style.womContainer}>
      <h1 className={style.title}> Category name</h1>
    <div className={style.products}>
      {PRODUCT.map(product => <ProductItems product={product} key={product.id} />)}
    </div>
    </div>
  )
}
