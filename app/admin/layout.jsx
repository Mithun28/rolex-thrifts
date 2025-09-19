import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "Rolex Thrifts. - Admin",
    description: "Rolex Thrifts. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
