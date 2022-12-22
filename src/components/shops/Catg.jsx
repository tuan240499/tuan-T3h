
import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Apple",
      cateLink: "https://www.apple.com/vn/"
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Samasung",
      cateLink: "https://www.apple.com/vn/"
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Oppo",
      cateLink: "https://www.apple.com/vn/"
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Vivo",
      cateLink: "https://www.apple.com/vn/"
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Redimi",
      cateLink: "https://www.apple.com/vn/"
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Sony",
      cateLink: "https://www.apple.com/vn/"
    },
  ]
  const onClick = (value) => {
    return <a href="https://www.apple.com/vn/"></a>
  }
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index} onClick={onClick}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>

            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg
