import Header from "./component/Header";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard Page",
};

export default function DashboardLayout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}
