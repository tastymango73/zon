import { ProductCard } from '../products/product-card'

export function BestProductsSection() {
  return (
    <>
      <div className='mb-4 text-3xl font-medium'>Бестселлеры</div>

      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <ProductCard title='Саган-дайля' price={890} imageUrl='/product.png' rating={4.7} />
        <ProductCard
          title='Ежовик гребенчатый'
          price={1363}
          imageUrl='/product.png'
          rating={4.9}
        />
        <ProductCard
          title='Рейши лакированный'
          price={1580}
          imageUrl='/product.png'
          rating={4.8}
        />
        <ProductCard
          title='Чага берёзовая'
          price={740}
          imageUrl='/product.png'
          rating={4.6}
        />
      </div>
    </>
  )
}
