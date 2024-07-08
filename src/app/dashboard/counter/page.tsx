import CartCounter from '@/app/shopping-cart/components/CartCounter';

export const metadata = {
    title: 'Counter page',
    description: 'Contador',
};

const page = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <span>Productos en el carrito</span>
            <CartCounter value={10} />
        </div>
    );
};

export default page;
