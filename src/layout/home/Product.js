import react, { useState } from 'react';
import Card from '../../component/Card';

function Product () {
      const [product , setProduct] = useState([
            {
                  imgsrc : "https://z.nooncdn.com/products/tr:n-t_240/v1563786689/N22732308A_1.jpg",
                  title : "Headphones",
                  detail : "Apple Headphone with Charger",
                  price : "Rs 1200/=",
            },{
                  imgsrc : "https://z.nooncdn.com/products/tr:n-t_240/v1610784898/N43748990A_1.jpg",
                  title : "Toy",
                  detail : "kids toys",
                  price : "Rs 120/=",
            },{
                  imgsrc : "https://z.nooncdn.com/products/tr:n-t_240/v1612332491/N31748281A_1.jpg",
                  title : "TWT Headphones",
                  detail : "TWT Headphone with Charger and Box",
                  price : "Rs 1000/=",
            },{
                  imgsrc : "https://z.nooncdn.com/products/tr:n-t_240/v1605814220/N41044065A_1.jpg",
                  title : "Iphone",
                  detail : "11Pro Max",
                  price : "Rs 240000/=",
            },{
                  imgsrc : "https://z.nooncdn.com/products/tr:n-t_240/v1606407160/N39843845A_1.jpg",
                  title : "Smart Watch",
                  detail : "Apple Smart Watch with Charger",
                  price : "Rs 1800/=",
            },{
                  imgsrc : "https://z.nooncdn.com/products/tr:n-t_240/v1610036835/N40633047A_1.jpg",
                  title : "PlayStation",
                  detail : "Model 5",
                  price : "Rs 15000/=",
            },{
                  imgsrc : "https://z.nooncdn.com/products/tr:n-t_240/v1592221002/N38650144A_1.jpg",
                  title : "Mask",
                  detail : "KN95",
                  price : "Rs 120/=",
            },{
                  imgsrc : "https://z.nooncdn.com/products/tr:n-t_240/v1614956257/N44978414A_1.jpg",
                  title : "Toys",
                  detail : "Toys set",
                  price : "Rs 1200/=",
            },{
                  imgsrc : "https://z.nooncdn.com/products/tr:n-t_240/v1605813520/N19518803A_1.jpg",
                  title : "Pen",
                  detail : "Important Pen",
                  price : "Rs 150/=",
            },{
                  imgsrc : "https://z.nooncdn.com/products/tr:n-t_240/v1593429869/N32502747A_1.jpg",
                  title : "Cycle",
                  detail : "Advance Cycle",
                  price : "Rs 17000/=",
            },{
                  imgsrc : "https://z.nooncdn.com/products/tr:n-t_240/v1614414008/N44772219A_1.jpg",
                  title : "Games",
                  detail : "Two color",
                  price : "Rs 100/=",
            },{
                  imgsrc : "https://z.nooncdn.com/products/tr:n-t_240/v1502812089/N11015043A_1.jpg",
                  title : "Tanki",
                  detail : "PVC Tanki",
                  price : "Rs 5000/=",
            }
      ])

      return(
            <div>
                  <div className="row my-3 p-1">
                        {product.map( (e , i) => {
                              return(

                                    <div key={i} className="col-md-3 my-3">
                                    <Card imgsrc={e.imgsrc} title ={e.title} detail = {e.detail} price={e.price}/>
                                    </div>
                              )
                        })}
                  </div>
            </div>
      )
}


export default Product