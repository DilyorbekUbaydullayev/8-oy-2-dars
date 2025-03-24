// pages/cart.js
import { HeroImage, PaymentImage } from '@/assets';
import Navbar from '@/components/Navbar';
import { Trash, Trash2 } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Cart() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Корзина | NORNLIGHT</title>
      </Head>

      {/* Верхняя навигация */}
      <Navbar/>

      {/* Хлебные крошки */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-800">Главная</Link>
          <span className="mx-2">&gt;</span>
          <Link href="/catalog" className="hover:text-gray-800">Каталог</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-800">Корзина</span>
        </div>
      </div>

      {/* Содержимое корзины */}
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Корзина
          <sup className="ml-1 text-sm bg-red-500 text-white rounded-full px-2">2</sup>
        </h1>

        {/* Заголовки для товаров на grid */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-12 bg-gray-100 text-gray-600 text-sm">
            <div className="col-span-1 py-4 px-4">Фото</div>
            <div className="col-span-2 py-4 px-2">Товары</div>
            <div className="col-span-5 py-4 px-2">Описание</div>
            <div className="col-span-2 py-4 px-2">Артикул</div>
            <div className="col-span-1 py-4 px-2">Количество</div>
            <div className="col-span-1 py-4 px-2"></div>
          </div>

          {/* Первый товар */}
          <div className="grid grid-cols-12 border-t bg-gray-100 border-gray-200 items-center">
            <div className="col-span-1 py-4 px-4">
              <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                <Image src={HeroImage} alt="Светильник" className="max-w-full max-h-full" />
              </div>
            </div>
            <div className="col-span-2 py-4 px-2 font-medium text-gray-800">
              Встраиваемый Светильник Novotech
              <div className="font-bold mt-1">6 399₽</div>
            </div>
            <div className="col-span-5 py-4 px-2 text-sm text-gray-600">
              Светильник RADUGA COMBO XS Промышленное Освещение. 50Вт, 2508, 3к, XS.
            </div>
            <div className="col-span-2 py-4 px-2 text-xs text-gray-500">
              RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS
            </div>
            <div className="col-span-1 py-4 px-2">
              <div className="flex items-center">
                <button className="text-gray-500 hover:text-gray-700 font-medium text-lg px-2">
                  -
                </button>
                <span className="w-12 text-center  border border-gray-300 px-4 py-1 rounded">1</span>
                <button className="text-gray-500 hover:text-gray-700 font-medium text-lg px-2">
                  +
                </button>
              </div>
            </div>
            <div className="col-span-1 py-4 px-2 ps-8 mt-1">
              <button className="text-gray-400 hover:text-red-500">
                <Trash2/>
              </button>
            </div>
          </div>

          {/* Второй товар */}
          <div className="grid grid-cols-12 border-t bg-gray-100 border-gray-200 items-center">
            <div className="col-span-1 py-4 px-4">
              <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                <Image src={HeroImage} alt="Светильник" className="max-w-full max-h-full" />
              </div>
            </div>
            <div className="col-span-2 py-4 px-2 font-medium text-gray-800">
              Встраиваемый Светильник Novotech
              <div className="font-bold mt-1">6 399₽</div>
            </div>
            <div className="col-span-5 py-4 px-2 text-sm text-gray-600">
              Светильник RADUGA COMBO XS  Промышленное Освещение. 50Вт, 2508, 3к, XS.
            </div>
            <div className="col-span-2 py-4 px-2 text-xs text-gray-500">
              RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS
            </div>
            <div className="col-span-1 py-4 px-2">
              <div className="flex items-center">
                <button className="text-gray-500 hover:text-gray-700 font-medium text-lg px-2">
                  -
                </button>
                <span className="w-12 text-center border border-gray-300 px-4 py-1 rounded">1</span>
                <button className="text-gray-500 hover:text-gray-700 font-medium text-lg px-2">
                  +
                </button>
              </div>
            </div>
            <div className="col-span-1 py-4 px-2 ps-8 mt-1">
              <button className="text-gray-400 hover:text-red-500">
                <Trash2/>
              </button>
            </div>
          </div>
        </div>

        {/* Форма оформления заказа */}
        <div className="rounded-lg bg-gray-100 shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold mb-6 text-gray-800">Оформление</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <input 
                type="text" 
                placeholder="ФИО" 
                className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-300" 
              />
            </div>
            <div>
              <input 
                type="tel" 
                placeholder="Телефон" 
                className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-300" 
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Электронная Почта" 
                className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-300" 
              />
            </div>
          </div>
        </div>

        {/* Доставка */}
        <div className="bg-gray-100 rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold mb-6 text-gray-800">Доставка</h2>
          
          <div className="mb-6">
            <input 
              type="text" 
              placeholder="Адрес доставки" 
              className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-300" 
            />
          </div>
          
          <div>
            <textarea 
              placeholder="Комментарий" 
              rows="4"
              className="w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-300" 
            ></textarea>
          </div>
        </div>
      
      {/* Оплата */}
     <div className="bg-gray-100 container mx-auto rounded-lg shadow-sm py-6 mb-12 mt-8">
     <h2 className="text-xl font-bold mb-4 text-gray-800">Оплата</h2>
     
    <div className="flex justify-start gap-6 mb-1">
    <div className="flex justify-center items-center mb-1">
       <div className="text-gray-600">Товары .................................</div>
       <div className="text-gray-600 flex items-center">
         <span className="border-b border-dotted border-gray-400 flex-grow"></span>
         12 300₽
       </div>
     </div>
     
     <div className="flex justify-center items-center mb-1">
       <div className="text-gray-600">Доставка .................................</div>
       <div className="text-gray-600 flex items-center">
         <span className="border-b border-dotted border-gray-400 flex-grow "></span>
         500₽
       </div>
     </div>
    </div>
     
     <div className="text-2xl font-bold mb-4">
       12 800₽
     </div>
     
     <div className="mb-4">
       <button className="bg-gray-700 text-white w-full md:w-80 py-3 rounded hover:bg-gray-800 transition">
         Купить
       </button>
     </div>
     
     <div className="flex items-center text-sm text-gray-500">
       Я согласен(на) на обработку моих персональных данных
     </div>
   </div>
   </div>
   {/* Футер */}
 <footer className="bg-gray-100 py-12 border-t border-gray-200">
   <div className="container mx-auto px-4">
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
       <div>
         <div className="flex items-center mb-4">
           <div className="bg-gray-800 text-white p-2 rounded">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
               <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
             </svg>
           </div>
           <span className="ml-2 font-bold text-lg">NORNLIGHT</span>
         </div>
         
         <div className="text-lg font-bold mb-4">
           8 (800) 890-46-56
         </div>
         
         <div className="flex space-x-2 mb-6">
           <Image src={PaymentImage} alt="VISA" className="h-[25px] w-[150px]" />
          
         </div>
         
         <div className="text-sm text-gray-500 mb-2">
           <Link href="/privacy" className="hover:text-gray-700">Политика конфиденциальности</Link>
         </div>
         
         <div className="text-sm text-gray-500 mb-6">
           <Link href="/terms" className="hover:text-gray-700">Пользовательское соглашение</Link>
         </div>
         
         <div className="flex space-x-2">
           <Link href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
             VK
           </Link>
           <Link href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
             VB
           </Link>
           <Link href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
             YT
           </Link>
         </div>
       </div>
       
       <div>
         <h3 className="font-bold mb-4">Покупателям</h3>
         <ul className="space-y-2">
           <li><Link href="/about" className="text-gray-600 hover:text-gray-800">О компании</Link></li>
           <li><Link href="/delivery" className="text-gray-600 hover:text-gray-800">Доставка и оплата</Link></li>
           <li><Link href="/return" className="text-gray-600 hover:text-gray-800">Возврат</Link></li>
           <li><Link href="/warranty" className="text-gray-600 hover:text-gray-800">Гарантии</Link></li>
           <li><Link href="/contacts" className="text-gray-600 hover:text-gray-800">Контакты</Link></li>
           <li><Link href="/blog" className="text-gray-600 hover:text-gray-800">Блог</Link></li>
         </ul>
       </div>
       
       <div>
         <h3 className="font-bold mb-4">Товары</h3>
         <div className="grid grid-cols-2 gap-2">
           <ul className="space-y-2">
             <li><Link href="/catalog/lusters" className="text-gray-600 hover:text-gray-800">Люстры</Link></li>
             <li><Link href="/catalog/spots" className="text-gray-600 hover:text-gray-800">Споты</Link></li>
             <li><Link href="/catalog/lights" className="text-gray-600 hover:text-gray-800">Светильники</Link></li>
             <li><Link href="/catalog/bra" className="text-gray-600 hover:text-gray-800">Бра</Link></li>
             <li><Link href="/catalog/torsher" className="text-gray-600 hover:text-gray-800">Торшеры</Link></li>
             <li><Link href="/catalog/accessories" className="text-gray-600 hover:text-gray-800">Комплектующие</Link></li>
             <li><Link href="/catalog/table-lamps" className="text-gray-600 hover:text-gray-800">Настольные лампы</Link></li>
           </ul>
           <ul className="space-y-2">
             <li><Link href="/catalog/track-lights" className="text-gray-600 hover:text-gray-800">Трековые светильники</Link></li>
             <li><Link href="/catalog/street-lights" className="text-gray-600 hover:text-gray-800">Уличные светильники</Link></li>
             <li><Link href="/catalog/tech-lights" className="text-gray-600 hover:text-gray-800">Технические светильники</Link></li>
             <li><Link href="/catalog/led-strips" className="text-gray-600 hover:text-gray-800">Светодиодные ленты</Link></li>
           </ul>
         </div>
       </div>
     </div>
   </div>
 </footer>
 </div>

 
   
    
     
  );
}