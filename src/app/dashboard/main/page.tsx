import { WidgetsGrid } from '@/components';

export const metadata = {
    title: 'Admin Dashboard',
    description: 'Admin Dashboard',
};

const MainPage = () => {
    return (
        <div className="text-black">
            <h1 className="mt-2 text-3xl">Dashboard</h1>
            <span className="text-xl">Información general</span>

            <WidgetsGrid />
        </div>
    );
};

export default MainPage;
