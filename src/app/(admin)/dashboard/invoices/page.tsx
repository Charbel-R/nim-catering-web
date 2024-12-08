import { InvoicesTable } from "@/components/admin/invoices/invoices-table";

export default function InvoicesPage() {
  return (
    <section className="container px-4 py-6">
      <div>
        <h1 className="text-3xl font-bold">Invoices page</h1>
        <InvoicesTable />
      </div>
    </section>
  );
}
