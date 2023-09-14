import React, { ChangeEvent, useState } from 'react'
import { Product } from '../../../api/interface/products'
import ProductList from './productList'
import ClearIcon from '@mui/icons-material/Clear';
interface Props{
    state:boolean
    setState:(state:boolean)=>void
}
function SearchBox2({setState,state}:Props) {
    const [query, setQuery]=useState("")
    const [products,setProducts]=useState<Product[]>([])
    const [searchResults,setSearchResults]=useState<Product[]>([])
    const productsData = [
        {
            "rating": {
                "rate": 0,
                "count": 0
            },
            "_id": "649980210d81c12153062f7f",
            "category": {
                "_id": "649978c10d81c12153062d42",
                "name": "مبلمان اداری",
                "icon": "categories-649978c10d81c12153062d42-1687779521078.png",
                "createdAt": "2023-06-26T11:38:41.077Z",
                "updatedAt": "2023-06-26T11:38:41.243Z",
                "slugname": "mblman-adary",
                "__v": 0
            },
            "subcategory": {
                "_id": "64997b300d81c12153062dc6",
                "category": "649978c10d81c12153062d42",
                "name": "صندلی مدیرتی ومعاونتی",
                "createdAt": "2023-06-26T11:49:04.974Z",
                "updatedAt": "2023-06-26T11:49:04.974Z",
                "slugname": "sndly-mdyrty-wmaawnty",
                "__v": 0
            },
            "name": "صندلی مدیریتی مدل M2018F",
            "price": 5600000,
            "quantity": 10,
            "brand": "هوم نت",
            "description": "<ul><li>دسته ثابت آلومینیوم با پد انتگرال – مکانیزم دو دسته کلاجی</li><li>رنگ کالا در مانیتورهای مختلف با اندکی تفاوت نمایش داده می شود. شما با انتخاب رنگ در واقع طیف رنگ مربوطه را انتخاب کرده اید.</li><li>24 ماه ضمانت و خدمات پس از فروش</li><li>مدت زمان تحویل: 12 روز کاری</li></ul>",
            "thumbnail": "products-649980210d81c12153062f7f-1687781409329.jpeg",
            "images": [
                "products-649980210d81c12153062f7f-1687781409337-1.jpeg"
            ],
            "createdAt": "2023-06-26T12:10:09.326Z",
            "updatedAt": "2023-06-26T12:10:09.379Z",
            "slugname": "sndly-mdyryty-mdl-m2018f"
        },
        {
            "rating": {
                "rate": 0,
                "count": 0
            },
            "_id": "649981b10d81c12153063093",
            "category": {
                "_id": "649978c10d81c12153062d42",
                "name": "مبلمان اداری",
                "icon": "categories-649978c10d81c12153062d42-1687779521078.png",
                "createdAt": "2023-06-26T11:38:41.077Z",
                "updatedAt": "2023-06-26T11:38:41.243Z",
                "slugname": "mblman-adary",
                "__v": 0
            },
            "subcategory": {
                "_id": "64997b300d81c12153062dc6",
                "category": "649978c10d81c12153062d42",
                "name": "صندلی مدیرتی ومعاونتی",
                "createdAt": "2023-06-26T11:49:04.974Z",
                "updatedAt": "2023-06-26T11:49:04.974Z",
                "slugname": "sndly-mdyrty-wmaawnty",
                "__v": 0
            },
            "name": "صندلی مدیریتی مدل M2021",
            "price": 10,
            "quantity": 10,
            "brand": "هوم نت",
            "description": "<p>رنگ کالا در مانیتورهای مختلف با اندکی تفاوت نمایش داده می شود. شما با انتخاب رنگ در واقع طیف رنگ مربوطه را انتخاب کرده اید.<br>10 سال خدمات پس از فروش<br>یک سال گارانتی<br>کد محصول: HN021502<br>ارسال : 10 روز کاری</p>",
            "thumbnail": "products-649981b10d81c12153063093-1687781809378.jpeg",
            "images": [
                "products-649981b10d81c12153063093-1687781809388-1.jpeg"
            ],
            "createdAt": "2023-06-26T12:16:49.370Z",
            "updatedAt": "2023-06-26T12:16:49.427Z",
            "slugname": "sndly-mdyryty-mdl-m2021"
        },
        {
            "rating": {
                "rate": 0,
                "count": 0
            },
            "_id": "6499834f0d81c12153063147",
            "category": {
                "_id": "649978c10d81c12153062d42",
                "name": "مبلمان اداری",
                "icon": "categories-649978c10d81c12153062d42-1687779521078.png",
                "createdAt": "2023-06-26T11:38:41.077Z",
                "updatedAt": "2023-06-26T11:38:41.243Z",
                "slugname": "mblman-adary",
                "__v": 0
            },
            "subcategory": {
                "_id": "64997b300d81c12153062dc6",
                "category": "649978c10d81c12153062d42",
                "name": "صندلی مدیرتی ومعاونتی",
                "createdAt": "2023-06-26T11:49:04.974Z",
                "updatedAt": "2023-06-26T11:49:04.974Z",
                "slugname": "sndly-mdyrty-wmaawnty",
                "__v": 0
            },
            "name": "صندلی مدیریتی مدلM2022",
            "price": 5450000,
            "quantity": 5,
            "brand": "هومنت",
            "description": "رنگ کالا در مانیتورهای مختلف با اندکی تفاوت نمایش داده می شود. شما با انتخاب رنگ در واقع طیف رنگ مربوطه را انتخاب کرده اید.\n10 سال خدمات پس از فروش\nیک سال گارانتی\nکد محصول: HN021502\nارسال : 10 روز کاری",
            "thumbnail": "products-6499834f0d81c12153063147-1687782223227.jpeg",
            "images": [
                "products-6499834f0d81c12153063147-1687782223233-1.jpeg"
            ],
            "createdAt": "2023-06-26T12:23:43.226Z",
            "updatedAt": "2023-06-26T12:23:43.266Z",
            "slugname": "sndly-mdyryty-mdlm2022"
        },
        {
            "rating": {
                "rate": 0,
                "count": 0
            },
            "_id": "649983730d81c1215306314f",
            "category": {
                "_id": "649978c10d81c12153062d42",
                "name": "مبلمان اداری",
                "icon": "categories-649978c10d81c12153062d42-1687779521078.png",
                "createdAt": "2023-06-26T11:38:41.077Z",
                "updatedAt": "2023-06-26T11:38:41.243Z",
                "slugname": "mblman-adary",
                "__v": 0
            },
            "subcategory": {
                "_id": "64997b300d81c12153062dc6",
                "category": "649978c10d81c12153062d42",
                "name": "صندلی مدیرتی ومعاونتی",
                "createdAt": "2023-06-26T11:49:04.974Z",
                "updatedAt": "2023-06-26T11:49:04.974Z",
                "slugname": "sndly-mdyrty-wmaawnty",
                "__v": 0
            },
            "name": "صندلی مدیریتی مدلF2021",
            "price": 5450000,
            "quantity": 5,
            "brand": "هومنت",
            "description": "رنگ کالا در مانیتورهای مختلف با اندکی تفاوت نمایش داده می شود. شما با انتخاب رنگ در واقع طیف رنگ مربوطه را انتخاب کرده اید.\n10 سال خدمات پس از فروش\nیک سال گارانتی\nکد محصول: HN021502\nارسال : 10 روز کاری",
            "thumbnail": "products-649983730d81c1215306314f-1687782259403.jpeg",
            "images": [
                "products-649983730d81c1215306314f-1687782259410-1.jpeg"
            ],
            "createdAt": "2023-06-26T12:24:19.402Z",
            "updatedAt": "2023-06-26T12:24:19.444Z",
            "slugname": "sndly-mdyryty-mdlf2021"
        },
        {
            "rating": {
                "rate": 0,
                "count": 0
            },
            "_id": "6499839b0d81c12153063162",
            "category": {
                "_id": "649978c10d81c12153062d42",
                "name": "مبلمان اداری",
                "icon": "categories-649978c10d81c12153062d42-1687779521078.png",
                "createdAt": "2023-06-26T11:38:41.077Z",
                "updatedAt": "2023-06-26T11:38:41.243Z",
                "slugname": "mblman-adary",
                "__v": 0
            },
            "subcategory": {
                "_id": "64997b300d81c12153062dc6",
                "category": "649978c10d81c12153062d42",
                "name": "صندلی مدیرتی ومعاونتی",
                "createdAt": "2023-06-26T11:49:04.974Z",
                "updatedAt": "2023-06-26T11:49:04.974Z",
                "slugname": "sndly-mdyrty-wmaawnty",
                "__v": 0
            },
            "name": "صندلی مدیریتی مدلF2024",
            "price": 5450000,
            "quantity": 5,
            "brand": "هومنت",
            "description": "رنگ کالا در مانیتورهای مختلف با اندکی تفاوت نمایش داده می شود. شما با انتخاب رنگ در واقع طیف رنگ مربوطه را انتخاب کرده اید.\n10 سال خدمات پس از فروش\nیک سال گارانتی\nکد محصول: HN021502\nارسال : 10 روز کاری",
            "thumbnail": "products-6499839b0d81c12153063162-1687782299458.jpeg",
            "images": [
                "products-6499839b0d81c12153063162-1687782299465-1.jpeg"
            ],
            "createdAt": "2023-06-26T12:24:59.457Z",
            "updatedAt": "2023-06-26T12:24:59.498Z",
            "slugname": "sndly-mdyryty-mdlf2024"
        },
        {
            "rating": {
                "rate": 0,
                "count": 0
            },
            "_id": "649983b00d81c1215306316a",
            "category": {
                "_id": "649978c10d81c12153062d42",
                "name": "مبلمان اداری",
                "icon": "categories-649978c10d81c12153062d42-1687779521078.png",
                "createdAt": "2023-06-26T11:38:41.077Z",
                "updatedAt": "2023-06-26T11:38:41.243Z",
                "slugname": "mblman-adary",
                "__v": 0
            },
            "subcategory": {
                "_id": "64997b300d81c12153062dc6",
                "category": "649978c10d81c12153062d42",
                "name": "صندلی مدیرتی ومعاونتی",
                "createdAt": "2023-06-26T11:49:04.974Z",
                "updatedAt": "2023-06-26T11:49:04.974Z",
                "slugname": "sndly-mdyrty-wmaawnty",
                "__v": 0
            },
            "name": "صندلی مدیریتی مدلF2010",
            "price": 5450000,
            "quantity": 5,
            "brand": "هومنت",
            "description": "رنگ کالا در مانیتورهای مختلف با اندکی تفاوت نمایش داده می شود. شما با انتخاب رنگ در واقع طیف رنگ مربوطه را انتخاب کرده اید.\n10 سال خدمات پس از فروش\nیک سال گارانتی\nکد محصول: HN021502\nارسال : 10 روز کاری",
            "thumbnail": "products-649983b00d81c1215306316a-1687782320271.jpeg",
            "images": [
                "products-649983b00d81c1215306316a-1687782320278-1.jpeg"
            ],
            "createdAt": "2023-06-26T12:25:20.270Z",
            "updatedAt": "2023-06-26T12:25:20.310Z",
            "slugname": "sndly-mdyryty-mdlf2010"
        },
        {
            "rating": {
                "rate": 0,
                "count": 0
            },
            "_id": "649983c10d81c12153063172",
            "category": {
                "_id": "649978c10d81c12153062d42",
                "name": "مبلمان اداری",
                "icon": "categories-649978c10d81c12153062d42-1687779521078.png",
                "createdAt": "2023-06-26T11:38:41.077Z",
                "updatedAt": "2023-06-26T11:38:41.243Z",
                "slugname": "mblman-adary",
                "__v": 0
            },
            "subcategory": {
                "_id": "64997b300d81c12153062dc6",
                "category": "649978c10d81c12153062d42",
                "name": "صندلی مدیرتی ومعاونتی",
                "createdAt": "2023-06-26T11:49:04.974Z",
                "updatedAt": "2023-06-26T11:49:04.974Z",
                "slugname": "sndly-mdyrty-wmaawnty",
                "__v": 0
            },
            "name": "صندلی مدیریتی مدلF2013",
            "price": 5450000,
            "quantity": 5,
            "brand": "هومنت",
            "description": "رنگ کالا در مانیتورهای مختلف با اندکی تفاوت نمایش داده می شود. شما با انتخاب رنگ در واقع طیف رنگ مربوطه را انتخاب کرده اید.\n10 سال خدمات پس از فروش\nیک سال گارانتی\nکد محصول: HN021502\nارسال : 10 روز کاری",
            "thumbnail": "products-649983c10d81c12153063172-1687782337321.jpeg",
            "images": [
                "products-649983c10d81c12153063172-1687782337326-1.jpeg"
            ],
            "createdAt": "2023-06-26T12:25:37.320Z",
            "updatedAt": "2023-06-26T12:25:37.359Z",
            "slugname": "sndly-mdyryty-mdlf2013"
        },
        {
            "rating": {
                "rate": 0,
                "count": 0
            },
            "_id": "649983de0d81c1215306317a",
            "category": {
                "_id": "649978c10d81c12153062d42",
                "name": "مبلمان اداری",
                "icon": "categories-649978c10d81c12153062d42-1687779521078.png",
                "createdAt": "2023-06-26T11:38:41.077Z",
                "updatedAt": "2023-06-26T11:38:41.243Z",
                "slugname": "mblman-adary",
                "__v": 0
            },
            "subcategory": {
                "_id": "64997b300d81c12153062dc6",
                "category": "649978c10d81c12153062d42",
                "name": "صندلی مدیرتی ومعاونتی",
                "createdAt": "2023-06-26T11:49:04.974Z",
                "updatedAt": "2023-06-26T11:49:04.974Z",
                "slugname": "sndly-mdyrty-wmaawnty",
                "__v": 0
            },
            "name": "صندلی مدیریتی مدل  M2024",
            "price": 5450000,
            "quantity": 5,
            "brand": "هومنت",
            "description": "رنگ کالا در مانیتورهای مختلف با اندکی تفاوت نمایش داده می شود. شما با انتخاب رنگ در واقع طیف رنگ مربوطه را انتخاب کرده اید.\n10 سال خدمات پس از فروش\nیک سال گارانتی\nکد محصول: HN021502\nارسال : 10 روز کاری",
            "thumbnail": "products-649983de0d81c1215306317a-1687782366708.jpeg",
            "images": [
                "products-649983de0d81c1215306317a-1687782366713-1.jpeg"
            ],
            "createdAt": "2023-06-26T12:26:06.707Z",
            "updatedAt": "2023-06-26T12:26:06.745Z",
            "slugname": "sndly-mdyryty-mdl-m2024"
        },
        {
            "rating": {
                "rate": 0,
                "count": 0
            },
            "_id": "649984250d81c12153063184",
            "category": {
                "_id": "649978c10d81c12153062d42",
                "name": "مبلمان اداری",
                "icon": "categories-649978c10d81c12153062d42-1687779521078.png",
                "createdAt": "2023-06-26T11:38:41.077Z",
                "updatedAt": "2023-06-26T11:38:41.243Z",
                "slugname": "mblman-adary",
                "__v": 0
            },
            "subcategory": {
                "_id": "64997b300d81c12153062dc6",
                "category": "649978c10d81c12153062d42",
                "name": "صندلی مدیرتی ومعاونتی",
                "createdAt": "2023-06-26T11:49:04.974Z",
                "updatedAt": "2023-06-26T11:49:04.974Z",
                "slugname": "sndly-mdyrty-wmaawnty",
                "__v": 0
            },
            "name": "صندلی مدیریتی مدل  M2018",
            "price": 8400000,
            "quantity": 10,
            "brand": "هومنت",
            "description": "رنگ کالا در مانیتورهای مختلف با اندکی تفاوت نمایش داده می شود. شما با انتخاب رنگ در واقع طیف رنگ مربوطه را انتخاب کرده اید.\n10 سال خدمات پس از فروش\nیک سال گارانتی\nکد محصول: HN021502\nارسال : 10 روز کاری",
            "thumbnail": "products-649984250d81c12153063184-1687782437363.jpeg",
            "images": [
                "products-649984250d81c12153063184-1687782437368-1.jpeg",
                "products-649984250d81c12153063184-1687782437369-2.jpeg"
            ],
            "createdAt": "2023-06-26T12:27:17.361Z",
            "updatedAt": "2023-06-26T12:27:17.420Z",
            "slugname": "sndly-mdyryty-mdl-m2018"
        },
        {
            "rating": {
                "rate": 0,
                "count": 0
            },
            "_id": "649984b10d81c121530631b8",
            "category": {
                "_id": "649978c10d81c12153062d42",
                "name": "مبلمان اداری",
                "icon": "categories-649978c10d81c12153062d42-1687779521078.png",
                "createdAt": "2023-06-26T11:38:41.077Z",
                "updatedAt": "2023-06-26T11:38:41.243Z",
                "slugname": "mblman-adary",
                "__v": 0
            },
            "subcategory": {
                "_id": "64997b490d81c12153062dca",
                "category": "649978c10d81c12153062d42",
                "name": "صندلی کارمندی و کارشناسی",
                "createdAt": "2023-06-26T11:49:29.206Z",
                "updatedAt": "2023-06-26T11:49:29.206Z",
                "slugname": "sndly-karmndy-w-karshnasy",
                "__v": 0
            },
            "name": "صندلی ویزیتوری/کانتر مدل : K2022",
            "price": 8400000,
            "quantity": 10,
            "brand": "هومنت",
            "description": "دسته یکپارچه-فریم داخلی فلزی-پایه بشقابی فلزی با آبکاری طلایی مکانیزم تک‌دسته براکت دار ثابت\nرنگ کالا در مانیتورهای مختلف با اندکی تفاوت نمایش داده می شود. شما با انتخاب رنگ در واقع طیف رنگ مربوطه را انتخاب کرده اید.\n24 ماه ضمانت و خدمات پس از فروش\nمدت زمان تحویل: 12 روز کاری",
            "thumbnail": "products-649984b10d81c121530631b8-1687782578001.jpeg",
            "images": [
                "products-649984b10d81c121530631b8-1687782578008-1.jpeg"
            ],
            "createdAt": "2023-06-26T12:29:38.000Z",
            "updatedAt": "2023-06-26T12:29:38.043Z",
            "slugname": "sndly-wyzytwrykantr-mdl-:-k2022"
        }
    ]
    const handleQueryChange =(event:ChangeEvent<HTMLInputElement>)=>{
setQuery(event.currentTarget.value)
setSearchResults(productsData.filter(product=> product.name.toLocaleLowerCase().includes(event.currentTarget.value.toLocaleLowerCase())))
    }
  return (
    <div className='z-50 flex flex-col'>
        <div   className={` transition-all duration-400 	flex ${state? "opacity-100" :"opacity-0"} `}>

  <div className='border-2 border-black rounded-full px-2 h-[30px] mt-2 w-[250px]'>
        <input type='text' onChange={handleQueryChange} className='px-2  text-sm focus:outline-0 focus:border-none focus:ring-0 ' placeholder='جستجو در هومنت'/>
        </div>
        <span onClick={()=>{setState(false),setSearchResults([])}} className="mt-2 transition duration-200">
  <ClearIcon sx={{color:"secondary.main", width:30, height:30}}/></span>
        </div>
     
{
    query !== "" && searchResults.length > 0 && ( 
        <ProductList products={searchResults}/>
    )
}

    </div>
  )
}

export default SearchBox2