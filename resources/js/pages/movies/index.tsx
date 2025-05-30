import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Movies',
        href: '/movies',
    },
];

export default function Movies() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Movies" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">Index Posts Page</div>
            </div>
        </AppLayout>
    );
}
