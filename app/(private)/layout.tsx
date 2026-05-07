import Header  from "@/components/Header";
export default function PrivatePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header></Header>
        <main className="pt-16 max-w-7xl  mx-auto px-10">{children}</main>
    </>
    
  );
}
